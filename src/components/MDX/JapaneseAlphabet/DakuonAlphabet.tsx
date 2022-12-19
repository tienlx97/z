import React from 'react';
import cn from 'classnames';

const dakuonList = [
  {key: 'が', value: 'ga'},
  {key: 'ぎ', value: 'gi'},
  {key: 'ぐ', value: 'gu'},
  {key: 'げ', value: 'ge'},
  {key: 'ご', value: 'go'},
  {key: 'ざ', value: 'za'},
  {key: 'じ', value: 'ji', s: 1},
  {key: 'ず', value: 'zu', s: 1},
  {key: 'ぜ', value: 'ze'},
  {key: 'ぞ', value: 'zo'},
  {key: 'だ', value: 'da'},
  {key: 'ぢ', value: 'ji', s: 1},
  {key: 'づ', value: 'zu', s: 1},
  {key: 'で', value: 'de'},
  {key: 'ど', value: 'do'},
  {key: 'ば', value: 'ba'},
  {key: 'び', value: 'bi'},
  {key: 'ぶ', value: 'bu'},
  {key: 'べ', value: 'be'},
  {key: 'ぼ', value: 'bo'},
  {key: 'ぱ', value: 'pa'},
  {key: 'ぴ', value: 'pi'},
  {key: 'ぷ', value: 'pu'},
  {key: 'ぺ', value: 'pe'},
  {key: 'ぽ', value: 'po'},
];

export default function Dakuon() {
  return (
    <div className="flex justify-center items-center">
      <div className={`w-full lg:w-[48%] block`}>
        <ul className="flex justify-between flex-wrap">
          {dakuonList.map((r, index) => (
            <React.Fragment key={index}>
              <li
                className={cn(
                  'w-[17.5%] aspect-[7/8] mb-[2.5%] select-none cursor-pointer flex flex-col justify-evenly items-center border-solid border-[2px] border-purple-50 bg-card  dark:border-purple-30 dark:bg-card-dark hover:bg-gray-10 dark:hover:bg-gray-70',
                  {
                    '!border-red-40': r.s === 1,
                  }
                )}>
                <p
                  // style={{fontSize: (width / 100) * 9}}
                  className="font-ja text-black font-medium dark:text-white kanji">
                  {r.key}
                </p>
                <p
                  // style={{fontSize: (width / 100) * 5}}
                  className="text-[#3d725d] dark:text-green-20 romaji">
                  {r.value}
                </p>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
