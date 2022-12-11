/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import {createPortal} from 'react-dom';

import cn from 'classnames';
import {useElementSize} from 'hooks/useElementSize';
import {IconChevron} from 'components/Icon/IconChevron';
import {block1, block2, JapaneseLetterType} from 'data/japan/letters/index';
import {LetterDetail} from './LetterDetail';

const appendSpace = ['ya', 'yu', 'wa', 'wo'];

interface JapaneseLettersProps {
  type?: 'hira' | 'kata';
}

function JapaneseLetters({type = 'hira'}: JapaneseLettersProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  // scale font size of each col based parent width
  const {width} = useElementSize(ref);

  const [isPage1Click, setPage1Click] = React.useState(true);
  const [isOpen, setOpen] = React.useState(false);
  const [modalValue, setModalValue] = React.useState<{
    type: 'gojuuon' | 'dakuon' | 'handakuon' | 'sokuon' | 'youon';
    index: number;
  } | null>(null);

  const handlePage1Click = (val: boolean) => {
    setPage1Click(val);
  };

  const handleLetterClick = (
    type: 'gojuuon' | 'dakuon' | 'handakuon' | 'sokuon' | 'youon',
    index: number
  ) => {
    setOpen(true);
    setModalValue({
      index,
      type,
    });
  };

  const handleCloseModal = () => setOpen(false);

  const LetterBlock = (block: JapaneseLetterType[]) => {
    return (
      <>
        {block.map((letter, index) => {
          return (
            <React.Fragment key={index}>
              <li
                onClick={() => handleLetterClick(letter.type, index)}
                className={cn(
                  'w-[17.5%] aspect-[7/8] mb-[2.5%] select-none cursor-pointer flex flex-col justify-evenly items-center border-solid border-[2px] border-purple-50 bg-card  dark:border-purple-30 dark:bg-card-dark hover:bg-gray-10 dark:hover:bg-gray-70',
                  {
                    'w-[26%] aspect-[100/73]': letter.type === 'youon',
                  }
                )}>
                <p
                  style={{fontSize: (width / 100) * 9}}
                  className="font-ja text-black font-medium dark:text-white ">
                  {type === 'hira' ? letter.hira : letter.kata}
                </p>
                <p
                  style={{fontSize: (width / 100) * 5}}
                  className="text-[#3d725d] dark:text-green-20">
                  {letter.roumaji}
                </p>
              </li>
              {appendSpace.includes(letter.roumaji) && (
                <li className="w-[17.5%] mb-[2.5%]" />
              )}
            </React.Fragment>
          );
        })}
      </>
    );
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
            {LetterBlock(block1)}
          </ul>
        </div>
        <div
          className={cn('block lg:block w-full lg:w-[48%]', {
            hidden: isPage1Click,
          })}>
          <ul className="flex justify-between flex-wrap">
            {LetterBlock(block2)}
          </ul>
        </div>
      </div>
      {isOpen &&
        createPortal(
          <>
            <div
              onClick={handleCloseModal}
              className="fixed z-[100] top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(101,108,133,.8)] dark:bg-[rgba(52,58,70,.8)]"></div>
            <LetterDetail
              chart={type}
              index={modalValue!.index}
              type={modalValue!.type}
            />
          </>,
          document.body
        )}
    </>
  );
}

export default JapaneseLetters;
