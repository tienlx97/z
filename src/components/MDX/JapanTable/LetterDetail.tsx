/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import {block1, block2} from 'data/japan/letters/index';
import setStrokeNumber from './Number';
import classNames from 'classnames';
import cn from 'classnames';

const Draw = () => {
  return (
    <svg
      stroke="currentColor"
      fill="#087EA4"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="18"
      width="18"
      xmlns="http://www.w3.org/2000/svg">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M18.85 10.39l1.06-1.06c.78-.78.78-2.05 0-2.83L18.5 5.09c-.78-.78-2.05-.78-2.83 0l-1.06 1.06 4.24 4.24zm-5.66-2.83L4 16.76V21h4.24l9.19-9.19-4.24-4.25zM19 17.5c0 2.19-2.54 3.5-5 3.5-.55 0-1-.45-1-1s.45-1 1-1c1.54 0 3-.73 3-1.5 0-.47-.48-.87-1.23-1.2l1.48-1.48c1.07.63 1.75 1.47 1.75 2.68zM4.58 13.35C3.61 12.79 3 12.06 3 11c0-1.8 1.89-2.63 3.56-3.36C7.59 7.18 9 6.56 9 6c0-.41-.78-1-2-1-1.26 0-1.8.61-1.83.64-.35.41-.98.46-1.4.12a.992.992 0 01-.15-1.38C3.73 4.24 4.76 3 7 3s4 1.32 4 3c0 1.87-1.93 2.72-3.64 3.47C6.42 9.88 5 10.5 5 11c0 .31.43.6 1.07.86l-1.49 1.49z"></path>
    </svg>
  );
};

const Speaker = () => {
  return (
    <svg
      stroke="currentColor"
      fill="#fff"
      strokeWidth="0"
      viewBox="0 0 24 24"
      aria-hidden="true"
      height="18"
      width="18"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z"></path>
      <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z"></path>
    </svg>
  );
};

export function LetterDetail({
  index,
  type,
  chart,
}: {
  type: 'gojuuon' | 'dakuon' | 'handakuon' | 'sokuon' | 'youon';
  index: number;
  chart: 'hira' | 'kata';
}) {
  const [Component, setComponent] = React.useState<any>();
  const roumaji =
    type == 'gojuuon' ? block1[index].roumaji : block2[index].roumaji;

  const [showStrokeNumbering, setShowStrokeNumbering] = React.useState(false);
  const [xRays, setXRays] = React.useState(false);
  const [grid, setGrid] = React.useState(false);

  const loadComponent = async () => {
    // const roumaji =
    //   type == 'gojuuon' ? block1[index].roumaji : block2[index].roumaji;
    await import(`./${chart}/${roumaji}`).then((r) => {
      setComponent(r.default);
    });
  };

  const handlePlaysound = () => {
    var audio = new Audio(`https://mina.mazii.net/db/alphabet/${roumaji}.mp3`);
    audio.play();
  };

  React.useEffect(() => {
    loadComponent();
  }, []);

  return (
    <div className="bg-[#fff] dark:bg-[#23272f] max-w-[500px] h-auto  fixed z-[101] top-[50%] left-[50%] w-[90%] translate-x-[-50%] translate-y-[-50%] rounded-lg">
      <section>
        <div className="my-0 mx-auto relative overflow-hidden list-none p-0 z-1">
          <div className="relative w-full h-full z-1 flex p-[32px] ">
            <div className={`w-[inherit] ${xRays ? 'xrays' : undefined}`}>
              {Component ?? <></>}
              {/* <div className="grid grid0"></div> */}
              {grid && (
                <>
                  <div className="grid grid1"></div>
                  <div className="grid grid2"></div>
                  <div className="grid grid3"></div>
                  <div className="grid grid4"></div>
                  <div className="grid grid5"></div>
                </>
              )}
            </div>
            <button
              onClick={() => {
                setComponent(null);
                loadComponent().then(() =>
                  setStrokeNumber(showStrokeNumbering)
                );
              }}
              className="absolute top-[16px] left-[16px] px-2 rounded-md bg-highlight dark:bg-highlight-dark cursor-pointer flex items-center select-none text-base">
              <Draw />
              <span className="ml-2 text-link dark:text-link-dark text-sm lg:text-base">
                Again
              </span>
            </button>
            <div
              onClick={handlePlaysound}
              className="absolute right-[16px] top-[16px] cursor-pointer p-2 bg-[#ff886c] hover:bg-[#ff5f39] rounded-3xl">
              <Speaker />
            </div>
            <div className="mb-2 bottom-0 left-0 w-full absolute flex items-center justify-around">
              <label
                className="flex items-center cursor-pointer select-none text-sm lg:text-base"
                htmlFor="number">
                <input
                  id="number"
                  onClick={() => {
                    setStrokeNumber(!showStrokeNumbering);
                    setShowStrokeNumbering(!showStrokeNumbering);
                  }}
                  type="checkbox"
                />
                <span className="ml-2">Stroke</span>
              </label>

              <label
                className="flex items-center cursor-pointer select-none text-sm lg:text-base"
                htmlFor="grid">
                <input
                  id="grid"
                  onClick={() => {
                    setGrid(!grid);
                  }}
                  type="checkbox"
                />
                <span className="ml-2">Grid</span>
              </label>

              <label
                className="flex items-center cursor-pointer select-none text-sm lg:text-base"
                htmlFor="xrays">
                <input
                  id="xrays"
                  onClick={() => {
                    setXRays(!xRays);
                  }}
                  type="checkbox"
                />
                <span className="ml-2">X-rays</span>
              </label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
