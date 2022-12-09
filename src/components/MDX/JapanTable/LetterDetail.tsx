/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import {block1, block2} from 'data/japan/letters/index';

export function LetterDetail({
  index,
  type,
  chart,
}: {
  type: 'gojuuon' | 'dakuon' | 'handakuon' | 'sokuon' | 'youon';
  index: number;
  chart: 'hira' | 'kata';
}) {
  return (
    <div className="max-w-[500px] h-auto border-2 border-solid border-[#67caa4] fixed z-[101] top-[50%] left-[50%] w-[90%] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white">
      <section>
        <div className="my-0 mx-auto relative overflow-hidden list-none p-0 z-1">
          <div className="w-full h-full z-1 flex p-[32px] ">
            <figure>
              <img
                className="aspect-[880/739] w-full"
                src={`https://www.nhk.or.jp/lesson/assets/images/letters/detail/${chart}/${
                  type === 'gojuuon'
                    ? block1[index].roumaji
                    : block2[index].roumaji
                }.png`}
                alt=""
              />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}
