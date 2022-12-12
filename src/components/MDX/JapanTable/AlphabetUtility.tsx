/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import cn from 'classnames';
import setStrokeNumber from './Number';

export default function AlphabetUtility({
  children,
  open,
  onStrokeNumberingChange,
}: {
  children: React.ReactNode;
  open: boolean;
  onStrokeNumberingChange: (value: boolean) => void;
}) {
  const [showStrokeNumbering, setShowStrokeNumbering] = React.useState(false);
  const [xRays, setXRays] = React.useState(false);
  const [grid, setGrid] = React.useState(false);

  return (
    <div className="relative w-full h-full z-1 flex box-content">
      <svg
        className="opacity-[100] w-[inherit] h-[inherit]"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="500"
        height="500"
      />
      <div
        className={`absolute w-[inherit] h-[inherit] p-[32px] mb-2 lg:mb-[auto] ${
          xRays ? 'xrays' : undefined
        }`}>
        {open ? children : <></>}

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

      {/* Bottom utility */}
      <div className="absolute mb-1 bottom-0 left-0 w-full flex items-center justify-around">
        {/* Stroke */}
        <label
          className={cn(
            'flex items-center cursor-pointer select-none text-sm lg:text-base'
          )}
          htmlFor="numberr">
          <input
            className="cursor-pointer"
            id="numberr"
            type="checkbox"
            onClick={() => {
              setStrokeNumber(!showStrokeNumbering);
              onStrokeNumberingChange(!showStrokeNumbering);
              setShowStrokeNumbering(!showStrokeNumbering);
            }}
          />
          <span className="ml-2">Stroke</span>
        </label>

        {/* Grid */}
        <label
          className={cn(
            'flex items-center cursor-pointer select-none text-sm lg:text-base'
          )}
          htmlFor="gridd">
          <input
            className="cursor-pointer"
            id="gridd"
            onClick={() => {
              setGrid(!grid);
            }}
            type="checkbox"
          />
          <span className="ml-2">Grid</span>
        </label>

        {/* X-rays */}
        <label
          className={cn(
            'flex items-center cursor-pointer select-none text-sm lg:text-base'
          )}
          htmlFor="xrays">
          <input
            className="cursor-pointer"
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
  );
}
