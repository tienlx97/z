import React from 'react';
import {convertMp3} from 'utils/convertJptoHex';

export const VocalbularyWord = ({
  meaning,
  eg,
  egMeaning,
  children,
}: {
  meaning: string;
  eg: string;
  egMeaning: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <p className="font-sans text-[18px] py-2 font-bold my-0">－ {meaning}</p>
      <div className="mb-4">
        <div className="mx-[20px]">
          <p className="font-ja text-[18px]">{eg}</p>
          <p className="font-sans text-[16px]">{egMeaning}</p>
          <div>{children}</div>
        </div>
      </div>
    </div>
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

export default function VocalbularyItem({
  kana,
  kanji,
  hantu,
  type,
  children,
}: {
  kana: string;
  meaning: string;
  kanji?: string;
  hantu?: string;
  type: string;
  children: React.ReactNode;
}) {
  const childrenArr = React.Children.toArray(children).filter(
    (c) => c !== '\n'
  );

  const handleSpeak = () => {
    let url = convertMp3(kanji!);
    const audio = new Audio(url);
    const promise = audio.play();

    if (promise !== undefined) {
      promise
        .then(function () {
          // Automatic playback started!
        })
        .catch(function () {
          // Automatic playback failed.
          // Show a UI element to let the user manually start playback.
          const audio = new Audio('/amazed-onniich.mp3');
          audio.play();
        });
    }
  };

  return (
    <>
      <div className="relative w-full p-4 border-[1px] border-solid border-lime-500 dark:border-lime-600 rounded-xl">
        {/* main word */}
        <div className="relative font-ja font-bold text-2xl min-h-[32px] mb-1 mt-0 dark:text-lime-300 text-lime-600">
          {kana}
          {kanji && (
            <div
              onClick={handleSpeak}
              className="absolute right-[16px] top-0 cursor-pointer p-2 bg-lime-700 border-lime-700 hover:bg-lime-600 focus:bg-lime-700 active:bg-lime-700 rounded-3xl">
              <Speaker />
            </div>
          )}
        </div>
        {kanji && (
          <p>
            <span className="font-ja text-[16px] font-normal h-8 leading-8">
              {kanji}
            </span>
            <span className="font-sans text-[16px] h-8 leading-8 font-normal">
              {'　·'}
              {'　'}
              {hantu}
            </span>
          </p>
        )}
        <p className="dark:text-lime-300 text-lime-600 font-sans text-base font-extralight">
          ☆ {type}
        </p>
        <div className="w-[15%] h-[1px] bg-lime-500 dark:bg-lime-600 my-1" />

        {childrenArr.map((c, index) => {
          return <React.Fragment key={index}>{c}</React.Fragment>;
        })}
      </div>
      <br />
    </>
  );
}
