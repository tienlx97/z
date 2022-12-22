import React from 'react';
import cn from 'classnames';

const youonList = [
  {hira: 'きゃ', roumaji: 'kya', kata: 'キャ'},

  {hira: 'きゅ', roumaji: 'kyu', kata: 'キュ'},

  {hira: 'きょ', roumaji: 'kyo', kata: 'キョ'},
  {hira: 'しゃ', roumaji: 'sha', kata: 'シャ'},

  {hira: 'しゅ', roumaji: 'shu', kata: 'シュ'},

  {hira: 'しょ', roumaji: 'sho', kata: 'ショ'},
  {hira: 'ちゃ', roumaji: 'cha', kata: 'チャ'},

  {hira: 'ちゅ', roumaji: 'chu', kata: 'チュ'},

  {hira: 'ちょ', roumaji: 'cho', kata: 'チョ'},
  {hira: 'にゃ', roumaji: 'nya', kata: 'ニャ'},

  {hira: 'にゅ', roumaji: 'nyu', kata: 'ニュ'},

  {hira: 'にょ', roumaji: 'nyo', kata: 'ニョ'},
  {hira: 'ひゃ', roumaji: 'hya', kata: 'ヒャ'},

  {hira: 'ひゅ', roumaji: 'hyu', kata: 'ヒュ'},

  {hira: 'ひょ', roumaji: 'hyo', kata: 'ヒョ'},
  {hira: 'みゃ', roumaji: 'mya', kata: 'ミャ'},

  {hira: 'みゅ', roumaji: 'myu', kata: 'ミュ'},

  {hira: 'みょ', roumaji: 'myo', kata: 'ミョ'},
  {hira: 'りゃ', roumaji: 'rya', kata: 'リャ'},

  {hira: 'りゅ', roumaji: 'ryu', kata: 'リュ'},

  {hira: 'りょ', roumaji: 'ryo', kata: 'リョ'},
  {hira: 'ぎゃ', roumaji: 'gya', kata: 'ギャ'},

  {hira: 'ぎゅ', roumaji: 'gyu', kata: 'ギュ'},

  {hira: 'ぎょ', roumaji: 'gyo', kata: 'ギョ'},
  {hira: 'じゃ', roumaji: 'ja', kata: 'ジャ'},

  {hira: 'じゅ', roumaji: 'ju', kata: 'ジュ'},

  {hira: 'じょ', roumaji: 'jo', kata: 'ジョ'},
  {hira: 'びゃ', roumaji: 'bya', kata: 'ビャ'},

  {hira: 'びゅ', roumaji: 'byu', kata: 'ビュ'},

  {hira: 'びょ', roumaji: 'byo', kata: 'ビョ'},
  {hira: 'ぴゃ', roumaji: 'pya', kata: 'ピャ'},

  {hira: 'ぴゅ', roumaji: 'pyu', kata: 'ピュ'},

  {hira: 'ぴょ', roumaji: 'pyo', kata: 'ピョ'},
];

export default function Youon() {
  return (
    <div className="flex justify-center items-center">
      <div className={`w-full lg:w-[48%] block`}>
        <ul className="flex justify-between flex-wrap">
          {youonList.map((r, index) => (
            <React.Fragment key={index}>
              <li
                className={cn(
                  'w-[26%] aspect-[100/73] mb-[2.5%] select-none cursor-pointer flex flex-col justify-evenly items-center border-solid border-[2px] border-purple-50 bg-card  dark:border-purple-30 dark:bg-card-dark hover:bg-gray-10 dark:hover:bg-gray-70'
                )}>
                <p
                  // style={{fontSize: (width / 100) * 9}}
                  className="font-ja text-black font-medium dark:text-white kanji">
                  {r.hira}
                </p>
                <p
                  // style={{fontSize: (width / 100) * 5}}
                  className="text-[#3d725d] dark:text-green-20 romaji">
                  {r.roumaji}
                </p>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
