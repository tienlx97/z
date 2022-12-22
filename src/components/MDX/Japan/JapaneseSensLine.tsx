import React from 'react';

interface JapaneseSensLineProps {
  children?: React.ReactNode;
}

export default function JapaneseSensLine({children}: JapaneseSensLineProps) {
  return (
    <>
      <div className="flex flex-wrap items-center w-full sm:text-xl">
        <span className="font-ja2 lg:text-xl cursor-pointer">{children}</span>
      </div>
      <br />
    </>
  );
}
