/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import cn from 'classnames';
import {useElementSize} from 'hooks/useElementSize';
import {IconChevron} from 'components/Icon/IconChevron';
import {mono1, mono2, mono3, JapaneseLetter} from 'data/japan/letters/index';

interface JapaneseLettersProps {
  type?: 'hira' | 'kata';
}

function JapaneseLetters({type = 'hira'}: JapaneseLettersProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const {width} = useElementSize(ref);
  const [isPage1Click, setPage1Click] = React.useState(true);

  const handlePage1Click = (val: boolean) => {
    setPage1Click(val);
  };

  const letterListMapper = (table: JapaneseLetter[], youon = false) => {
    return table.map((item, number) => {
      return item.type !== '_' ? (
        <li
          className={cn(
            'w-[17.5%] aspect-[7/8] mb-[2.5%] select-none cursor-pointer flex flex-col justify-evenly items-center border-solid border-[2px] border-purple-50 bg-card  dark:border-purple-30 dark:bg-card-dark',
            {
              'w-[26%]': youon,
            }
          )}
          key={number}>
          <p
            style={{fontSize: (width / 100) * 9}}
            className="font-ja text-black font-medium dark:text-white ">
            {type === 'hira' ? item.hira : item.kata}
          </p>
          <p
            style={{fontSize: (width / 100) * 5}}
            className="text-[#3d725d] dark:text-green-20">
            {item.roumaji}
          </p>
        </li>
      ) : (
        <li key={number} className={!youon ? 'w-[17.5%] mb-[2.5%]' : ''} />
      );
    });
  };

  return (
    <>
      <ul className="flex justify-center mx-auto mt-0 mb-4 lg:hidden">
        <li
          onClick={() => handlePage1Click(true)}
          className={cn(
            'flex items-center my-0 mx-4 text-base cursor-pointer',
            {
              'text-purple-50 dark:text-purple-30': isPage1Click,
            }
          )}>
          <span>Page 1</span>
          <IconChevron displayDirection="right" />
        </li>
        <li
          onClick={() => handlePage1Click(false)}
          className={cn(
            'flex items-center my-0 mx-4 text-base cursor-pointer',
            {
              'text-purple-50 dark:text-purple-30': !isPage1Click,
            }
          )}>
          <span>Page 2</span>
          <IconChevron displayDirection="right" />
        </li>
      </ul>
      <div className="flex justify-between">
        <div
          ref={ref}
          className={cn('block w-full lg:block lg:w-[48%]', {
            hidden: !isPage1Click,
          })}>
          <ul className="flex justify-between flex-wrap">
            {letterListMapper(mono1)}
          </ul>
        </div>
        <div
          className={cn('block lg:block w-full lg:w-[48%]', {
            hidden: isPage1Click,
          })}>
          <ul className="flex justify-between flex-wrap">
            {letterListMapper(mono2)}
            {letterListMapper(mono3, true)}
          </ul>
        </div>
      </div>
    </>
  );
}

export default JapaneseLetters;
