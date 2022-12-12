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
    <div className="relative w-full h-full z-1 flex p-[32px] ">
      <div className={`w-[inherit] h-[inherit] ${xRays ? 'xrays' : undefined}`}>
        {/* SVG here */}
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
      {/* Draw again */}

      {/* Bottom utility */}
      <div className="mb-2 bottom-0 left-0 w-full absolute flex items-center justify-around">
        {/* Stroke */}
        <label
          className={cn(
            'flex items-center cursor-pointer select-none text-sm lg:text-base',
            {
              'pointer-events-none opacity-[0.4]': children === null,
            }
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
            'flex items-center cursor-pointer select-none text-sm lg:text-base',
            {
              'pointer-events-none opacity-[0.4]': children === null,
            }
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
            'flex items-center cursor-pointer select-none text-sm lg:text-base',
            {
              'pointer-events-none opacity-[0.4]': children === null,
            }
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
