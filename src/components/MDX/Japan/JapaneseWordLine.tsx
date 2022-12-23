import React from 'react';

interface JapaneseWordLineProps {
  kanaStr?: string;
  kana: string;
  m?: number;
}

export default function JapaneseWordLine({
  kanaStr = '',
  kana,
  m = 6,
}: JapaneseWordLineProps) {
  const kanaList = kanaStr.split(' ');
  const append = m - kanaList.length;

  return (
    <>
      <div className="flex mb-2 items-center gap-x-3 sm:gap-x-5 lg:gap-x-9">
        <div>
          <p className="min-w-[44px] h-auto text-center border-solid border-[1px] border-purple-50 dark:border-purple-30 py-2 text-3xl font-ja sm:text-4xl lg:py-3">
            {kana}
          </p>
        </div>
        <div className="w-full grid-line">
          {kanaList.map((item, index) => {
            return (
              <span className="font-ja lg:text-2xl" key={index}>
                {item}
              </span>
            );
          })}

          {append !== 0 &&
            Array.from(Array(append), (e, i) => {
              return <span key={i} />;
            })}
        </div>
      </div>
      <br />
    </>
  );
}
