import React from 'react';

interface JapaneseWordLineProps {
  kanaStr?: string;
}

export default function JapaneseWordLine({
  kanaStr = '',
}: JapaneseWordLineProps) {
  const kanaList = kanaStr.split(' ');

  return (
    <>
      <div className="flex mb-2 items-center gap-x-3 sm:gap-x-5 lg:gap-x-9">
        <div>
          <p className="min-w-[44px] h-auto text-center border-solid border-[1px] border-purple-50 dark:border-purple-30 py-2 text-3xl font-ja sm:text-4xl lg:py-3">
            {kanaList[0]}
          </p>
        </div>
        <div className="flex flex-wrap items-center w-full gap-x-4 sm:text-xl sm:gap-x-5 lg:gap-x-7">
          {kanaList.map((item, index) => {
            return (
              index !== 0 && (
                <span
                  className="font-ja lg:text-2xl cursor-pointer"
                  key={index}>
                  {item}
                </span>
              )
            );
          })}
        </div>
      </div>
      <br />
    </>
  );
}
