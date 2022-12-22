import React from 'react';
import cn from 'classnames';

const katakanaList = [
  {hira: 'い', roumaji: 'i', type: 1, kata: 'イ'},
  {hira: 'あ', roumaji: 'a', type: 1, kata: 'ア'},
  {hira: 'う', roumaji: 'u', type: 1, kata: 'ウ'},
  {hira: 'え', roumaji: 'e', type: 1, kata: 'エ'},
  {hira: 'お', roumaji: 'o', type: 1, kata: 'オ'},
  {hira: 'か', roumaji: 'ka', type: 1, kata: 'カ'},
  {hira: 'き', roumaji: 'ki', type: 1, kata: 'キ'},
  {hira: 'く', roumaji: 'ku', type: 1, kata: 'ク'},
  {hira: 'け', roumaji: 'ke', type: 1, kata: 'ケ'},
  {hira: 'こ', roumaji: 'ko', type: 1, kata: 'コ'},
  {hira: 'さ', roumaji: 'sa', type: 1, kata: 'サ'},
  {hira: 'し', roumaji: 'shi', type: 1, kata: 'シ'},
  {hira: 'す', roumaji: 'su', type: 1, kata: 'ス'},
  {hira: 'せ', roumaji: 'se', type: 1, kata: 'セ'},
  {hira: 'そ', roumaji: 'so', type: 1, kata: 'ソ'},
  {hira: 'た', roumaji: 'ta', type: 1, kata: 'タ'},
  {hira: 'ち', roumaji: 'chi', type: 1, kata: 'チ'},
  {hira: 'つ', roumaji: 'tsu', type: 1, kata: 'ツ'},
  {hira: 'て', roumaji: 'te', type: 1, kata: 'テ'},
  {hira: 'と', roumaji: 'to', type: 1, kata: 'ト'},
  {hira: 'な', roumaji: 'na', type: 1, kata: 'ナ'},
  {hira: 'に', roumaji: 'ni', type: 1, kata: 'ニ'},
  {hira: 'ぬ', roumaji: 'nu', type: 1, kata: 'ヌ'},
  {hira: 'ね', roumaji: 'ne', type: 1, kata: 'ネ'},
  {hira: 'の', roumaji: 'no', type: 1, kata: 'ノ'},
  {hira: 'は', roumaji: 'ha', type: 1, kata: 'ハ'},
  {hira: 'ひ', roumaji: 'hi', type: 1, kata: 'ヒ'},
  {hira: 'ふ', roumaji: 'fu', type: 1, kata: 'フ'},
  {hira: 'へ', roumaji: 'he', type: 1, kata: 'ヘ'},
  {hira: 'ほ', roumaji: 'ho', type: 1, kata: 'ホ'},
  {hira: 'ま', roumaji: 'ma', type: 1, kata: 'マ'},
  {hira: 'み', roumaji: 'mi', type: 1, kata: 'ミ'},
  {hira: 'む', roumaji: 'mu', type: 1, kata: 'ム'},
  {hira: 'め', roumaji: 'me', type: 1, kata: 'メ'},
  {hira: 'も', roumaji: 'mo', type: 1, kata: 'モ'},
  {hira: 'や', roumaji: 'ya', type: 1, kata: 'ヤ'},
  {hira: 'ゆ', roumaji: 'yu', type: 1, kata: 'ユ'},
  {hira: 'よ', roumaji: 'yo', type: 1, kata: 'ヨ'},
  {hira: 'ら', roumaji: 'ra', type: 1, kata: 'ラ'},
  {hira: 'り', roumaji: 'ri', type: 1, kata: 'リ'},
  {hira: 'る', roumaji: 'ru', type: 1, kata: 'ル'},
  {hira: 'れ', roumaji: 're', type: 1, kata: 'レ'},
  {hira: 'ろ', roumaji: 'ro', type: 1, kata: 'ロ'},
  {hira: 'わ', roumaji: 'wa', type: 1, kata: 'ワ'},
  {hira: 'を', roumaji: 'wo', type: 1, kata: 'ヲ'},
  {hira: 'ん', roumaji: 'n', type: 1, kata: 'ン'},
];
const appendSpace = ['ya', 'yu', 'wa', 'wo'];

export default function Katakana() {
  return (
    <div className="flex justify-center items-center">
      <div className={`w-full lg:w-[48%] block`}>
        <ul className="flex justify-between flex-wrap">
          {katakanaList.map((r, index) => (
            <React.Fragment key={index}>
              <li
                className={cn(
                  'w-[17.5%] aspect-[7/8] mb-[2.5%] select-none cursor-pointer flex flex-col justify-evenly items-center border-solid border-[2px] border-purple-50 bg-card  dark:border-purple-30 dark:bg-card-dark hover:bg-gray-10 dark:hover:bg-gray-70'
                )}>
                <p
                  // style={{fontSize: (width / 100) * 9}}
                  className="font-ja text-black font-medium dark:text-white kanji">
                  {r.kata}
                </p>
                <p
                  // style={{fontSize: (width / 100) * 5}}
                  className="text-[#3d725d] dark:text-green-20 romaji">
                  {r.roumaji}
                </p>
              </li>
              {appendSpace.includes(r.roumaji) && (
                <li className="w-[17.5%] mb-[2.5%]" />
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
