import React from 'react';

export default function JaWL({children}: {children: React.ReactNode}) {
  const arr = React.Children.toArray(children);

  return (
    <>
      <div className="flex mb-2 items-center gap-x-3 sm:gap-x-5 lg:gap-x-9">
        <div className="flex flex-wrap items-center w-full gap-x-4 sm:text-xl sm:gap-x-5 lg:gap-x-7">
          {arr.map((item, index) => {
            return (
              <span className="font-ja lg:text-2xl cursor-pointer" key={index}>
                {item}
              </span>
            );
          })}
        </div>
      </div>
      <br />
    </>
  );
}
