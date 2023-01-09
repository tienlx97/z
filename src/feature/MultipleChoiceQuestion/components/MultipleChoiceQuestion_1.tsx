import React, { useState } from "react";
import { Question } from "../types";

interface DetailItem {
  meaning: string;
  eg?: string;
  egMeaning?: string;
  polite?: string;
  children?: string;
}

interface JapanWord {
  hira?: string;
  kata?: string;
  kanji?: string;
  hantu?: string;
  type: string | "sentences" | "nouns" | "verb" | "adverb";
  detail: DetailItem[];
}

export const MultipleChoiceQuestion_1 = ({
  src2Base64,
}: {
  src2Base64: string;
}) => {
  const wordList: JapanWord[] = JSON.parse(b64DecodeUnicode(src2Base64))
    .vocalbulary as JapanWord[];

  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [expectedResults, setExpectedResults] = useState<number[] | null>(null);

  const generateRandom = (min: number, max: number, arr: number[]): number => {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return arr.includes(num) ? generateRandom(min, max) : num;
  };

  const genQuestion = (index: number, maxIndex: number) => {
    const japanWord = wordList[index];

    const ja = japanWord.hira ?? japanWord.kata!;
    const vi =
      japanWord.detail[Math.floor(Math.random() * japanWord.detail.length)]
        .meaning;

    const duplicateList: number[] = [];
    duplicateList.push(index);

    const index1 = generateRandom(0, maxIndex, duplicateList);
    const answer1 =
      wordList[index1].detail[
        Math.floor(Math.random() * wordList[index1].detail.length)
      ].meaning;

    duplicateList.push(index1);
    const index2 = generateRandom(0, maxIndex, duplicateList);
    const answer2 =
      wordList[index2].detail[
        Math.floor(Math.random() * wordList[index2].detail.length)
      ].meaning;

    duplicateList.push(index2);
    const index3 = generateRandom(0, maxIndex, duplicateList);
    const answer3 =
      wordList[index3].detail[
        Math.floor(Math.random() * wordList[index3].detail.length)
      ].meaning;

    return [ja, vi, answer1, answer2, answer3];
  };

  const genQuestions = () => {
    for (let index = 0; index < wordList.length; index++) {
      const ele = array[index];
      const que = genQuestion(ele);

      const expectedResult = generateRandom(0, 4, []);

      setExpectedResults((oldArray) => [...oldArray, expectedResult]);

      const answerList: any = [];
      const duplicateList: number[] = [];
      duplicateList.push(expectedAnswer);
      duplicateList[expectedResult] = {
        attributes: [
          {
            languageCode: "vi",
            mediaType: 1,
            plainText: que[expectedResult + 2],
            richText: null,
            type: "TextAttribute",
          },
        ],
      };

      const r1 = generateRandom(0, 4, duplicateList);
      duplicateList[r1] = {
        attributes: [
          {
            languageCode: "vi",
            mediaType: 1,
            plainText: "lately",
            richText: null,
            type: "TextAttribute",
          },
        ],
      };

      setQuestions((oldArray) => [
        ...oldArray,
        {
          hasExactlyOneCorrectAnswer: true,
          hint: null,
          metadata: {
            answerSide: "word",
            promptSide: true,
          },
          prompt: {
            attributes: [
              {
                languageCode: "ja",
                mediaType: 1,
                plainText: question,
                richText: null,
                type: "TextAttribute",
              },
            ],
          },
          questionType: 4,
          type: "MultipleChoiceQuestion",
        },
      ]);
    }
  };
};
