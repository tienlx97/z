import React from 'react';

interface JapaneseSensLineProps {
  children?: React.ReactNode;
}

export default function JapaneseSensLine({children}: JapaneseSensLineProps) {
  return (
    <>
      <div className="flex flex-wrap items-center w-full sm:text-xl">
        <span className="font-ja lg:text-2xl cursor-pointer">{children}</span>
      </div>
      <br />
    </>
  );
}
