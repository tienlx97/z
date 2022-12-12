/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import cn from 'classnames';
import {useElementSize} from 'hooks/useElementSize';
import {IconChevron} from 'components/Icon/IconChevron';
import {
  block1,
  block2,
  combine,
  JapaneseLetterType,
} from 'data/japan/letters/index';
import 'swiper/css';
import 'swiper/css/navigation';
import AlphabetUtility from './AlphabetUtility';
import Alphabet from './Alphabet';

const appendSpace = ['ya', 'yu', 'wa', 'wo'];

interface JapaneseLettersProps {
  type?: 'hira' | 'kata';
}

function JapaneseLetters({type = 'hira'}: JapaneseLettersProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  // scale font size of each col based parent width
  const {width} = useElementSize(ref);

  const [currentSelectIndex, setCurrentSelectIndex] = React.useState<number>(0);
  const [isPage1Click, setPage1Click] = React.useState(true);
  const [isOpenModal, setOpenModal] = React.useState(false);
  const [showStrokeNumbering, setShowStrokeNumbering] = React.useState(false);

  const handlePage1Click = (val: boolean) => setPage1Click(val);

  const onStrokeNumberingChange = (value: boolean) =>
    setShowStrokeNumbering(value);

  const handleLetterClick = (type: 1 | 2 | 'youon', index: number) => {
    const currentIndex = type !== 1 ? block1.length + index : index;
    setCurrentSelectIndex(currentIndex);
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

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
                  // style={{fontSize: (width / 100) * 9}}
                  className="font-ja text-black font-medium dark:text-white kanji">
                  {type === 'hira' ? letter.hira : letter.kata}
                </p>
                <p
                  // style={{fontSize: (width / 100) * 5}}
                  className="text-[#3d725d] dark:text-green-20 romaji">
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
          className={`w-full lg:block lg:w-[48%] ${
            !isPage1Click ? 'hidden' : 'block'
          }`}>
          <ul className="flex justify-between flex-wrap">
            {LetterBlock(block1)}
          </ul>
        </div>
        <div
          className={`lg:block w-full lg:w-[48%] ${
            isPage1Click ? 'hidden' : 'block'
          }`}>
          <ul className="flex justify-between flex-wrap">
            {LetterBlock(block2)}
          </ul>
        </div>
      </div>

      <div
        onClick={handleCloseModal}
        className={cn(
          'blur-transition w-full h-full fixed cursor-pointer opacity-0 top-0 left-0 pointer-events-none bg-[rgba(101,108,133,.8)] dark:bg-[rgba(52,58,70,.8) z-[100] ',
          {
            'pointer-events-auto opacity-100': isOpenModal,
          }
        )}
      />
      <div
        style={{
          zIndex: isOpenModal ? 101 : -1,
        }}
        className={cn(
          ' opacity-0 visible modal-transition fixed top-[50%] left-[50%] w-[90%] translate-x-[-50%] translate-y-[-50%] max-w-[500px] h-auto bg-[#fff] dark:bg-[#23272f] rounded-lg ',
          {
            'opacity-[100]': isOpenModal,
          }
        )}>
        <div className="my-0 mx-auto relative overflow-hidden list-none p-0 z-1">
          <AlphabetUtility
            onStrokeNumberingChange={onStrokeNumberingChange}
            open={isOpenModal}>
            <Alphabet
              showStrokeNumbering={showStrokeNumbering}
              isDuplicate={combine[currentSelectIndex].note}
              romaji={combine[currentSelectIndex].roumaji}
              type={type}
            />
          </AlphabetUtility>
        </div>
      </div>

      {/* <div
        style={{
          display: isOpenModal ? 'block' : 'none',
        }}
        className="bg-[#fff] dark:bg-[#23272f] max-w-[500px] h-auto fixed z-[101] top-[50%] left-[50%] w-[90%] translate-x-[-50%] translate-y-[-50%] rounded-lg">
        <div className="my-0 mx-auto relative overflow-hidden list-none p-0 z-1">
          <AlphabetUtility
            onStrokeNumberingChange={onStrokeNumberingChange}
            open={isOpenModal}>
            <Alphabet
              showStrokeNumbering={showStrokeNumbering}
              isDuplicate={combine[currentSelectIndex].note}
              romaji={combine[currentSelectIndex].roumaji}
              type={type}
            />
          </AlphabetUtility>
        </div>
      </div> */}
    </>
  );
}

export default JapaneseLetters;
