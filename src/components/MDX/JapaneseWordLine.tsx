import React from 'react';
import md5 from 'md5';
import {siteConfig} from '../../siteConfig';

interface JapaneseWordLineProps {
  kanaStr?: string;
}

function convertJptoHex(kana: string) {
  if (null == kana || '' == kana) return '';
  -1 != kana.indexOf('\u300c') &&
    (kana = (kana = kana.replace(new RegExp('\u300c', 'g'), '')).replace(
      new RegExp('\u300d', 'g'),
      ''
    )),
    (kana = kana.trim());
  let e = '';
  for (let n = 0; n < kana.length; n++)
    (e += ('0000' + kana.charCodeAt(n).toString(16)).substr(-4)),
      n != kana.length - 1 && (e += '_');
  return md5(e.toUpperCase());
}

function convertMp3(kana: string) {
  return siteConfig.baseAudioUrl + '/' + convertJptoHex(kana) + '.mp3';
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
