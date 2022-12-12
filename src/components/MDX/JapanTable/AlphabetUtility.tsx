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
      <div
        className={`w-[inherit] h-[inherit] p-[32px] mb-2 lg:mb-[auto] ${
          xRays ? 'xrays' : undefined
        }`}>
        {/* SVG here */}
        {open ? (
          children
        ) : (
          <img
            className="block max-w-full w-full opacity-[100] m-0 p-0 border-0"
            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27500%27%20height=%27500%27/%3e"
          />
        )}

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
      <div className="mb-1 bottom-0 left-0 w-full absolute flex items-center justify-around">
        {/* Stroke */}
        <label
          className={cn(
            'flex items-center cursor-pointer select-none text-sm lg:text-base'
          )}
          htmlFor="numberr">
          <input
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
