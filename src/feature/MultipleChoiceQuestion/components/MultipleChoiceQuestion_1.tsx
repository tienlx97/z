import React, {useState, useEffect} from 'react';
import {Question} from '../types';
import {b64DecodeUnicode} from 'feature/MultipleChoiceQuestion/utils/b64DecodeUnicode';
import {MultipleChoiceQuestionProvider} from '../context/MultipleChoideQuestionContext';
import {MultipleChoiceQuestion} from './MultipleChoiceQuestion';

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
  type: string | 'sentences' | 'nouns' | 'verb' | 'adverb';
  detail: DetailItem[];
}

const randomNumber = (
  min: number,
  max: number,
  duplicateArr: number[]
): number => {
  const num = Math.floor(Math.random() * (max - min) + min);
  return duplicateArr.includes(num)
    ? randomNumber(min, max, duplicateArr)
    : num;
};

export const MultipleChoiceQuestion_1 = ({
  src2Base64,
}: {
  src2Base64: string;
}) => {
  const [wordList, _] = useState<JapanWord[]>(
    JSON.parse(b64DecodeUnicode(src2Base64)).vocalbulary as JapanWord[]
  );

  const [questions, setQuestions] = useState<Question[]>([]);
  const [expectedQuestionsPosition, setExpectedQuestionsPosition] = useState<
    number[]
  >([]);

  const createMeaning = (maxIndex: number, duplicateList: number[]) => {
    const randomIndex = randomNumber(0, maxIndex, duplicateList);
    // const randomMeaning = randomNumber(
    //   0,
    //   wordList[randomIndex].detail.length,
    //   []
    // );
    // const specificAnswer = wordList[randomIndex].detail[randomMeaning].meaning;

    const specificAnswer = wordList[randomIndex].detail[0].meaning;
    return {specificAnswer, randomIndex};
  };

  const generateAQuestion = (index: number, maxIndex: number): string[] => {
    const japanWord = wordList[index];
    const jaQuestion = japanWord.hira ?? japanWord.kata!;
    // for now just get first meaning
    const correctMeaning = japanWord.detail[0].meaning;
    // const correctMeaning =
    //   japanWord.detail[randomNumber(0, japanWord.detail.length, [])].meaning;
    const duplicateList: number[] = [];
    duplicateList.push(index);
    const answer1 = createMeaning(maxIndex, duplicateList);
    duplicateList.push(answer1.randomIndex);
    const answer2 = createMeaning(maxIndex, duplicateList);
    duplicateList.push(answer2.randomIndex);
    const answer3 = createMeaning(maxIndex, duplicateList);

    return [
      jaQuestion,
      correctMeaning,
      answer1.specificAnswer,
      answer2.specificAnswer,
      answer3.specificAnswer,
    ];
  };

  const genQuestionList = () => {
    const questionList: Question[] = [];
    const expectedResultList: number[] = [];
    const dupicateQuestionArr: number[] = [];

    for (let index = 0; index < wordList.length; index++) {
      const aQuestion = generateAQuestion(index, wordList.length);

      // random correct answer position
      const aQuestionIndex = randomNumber(
        0,
        wordList.length,
        dupicateQuestionArr
      );
      dupicateQuestionArr.push(aQuestionIndex);
      const expectedCorrectPosition = randomNumber(0, 4, []);

      const answerList: {
        attributes: [
          {
            languageCode: string;
            mediaType: number;
            plainText: string;
            richText: any | null;
            type: string;
          }
        ];
      }[] = [];
      const duplicateList: number[] = [];
      duplicateList.push(expectedCorrectPosition);

      answerList[expectedCorrectPosition] = {
        attributes: [
          {
            languageCode: 'vi',
            mediaType: 1,
            plainText: aQuestion[1],
            richText: null,
            type: 'TextAttribute',
          },
        ],
      };

      const answerPos1 = randomNumber(0, 4, duplicateList);
      duplicateList.push(answerPos1);
      const answerPos2 = randomNumber(0, 4, duplicateList);
      duplicateList.push(answerPos2);
      const answerPos3 = randomNumber(0, 4, duplicateList);

      answerList[answerPos1] = {
        attributes: [
          {
            languageCode: 'vi',
            mediaType: 1,
            plainText: aQuestion[2],
            richText: null,
            type: 'TextAttribute',
          },
        ],
      };
      answerList[answerPos2] = {
        attributes: [
          {
            languageCode: 'vi',
            mediaType: 1,
            plainText: aQuestion[3],
            richText: null,
            type: 'TextAttribute',
          },
        ],
      };
      answerList[answerPos3] = {
        attributes: [
          {
            languageCode: 'vi',
            mediaType: 1,
            plainText: aQuestion[4],
            richText: null,
            type: 'TextAttribute',
          },
        ],
      };

      questionList[aQuestionIndex] = {
        hasExactlyOneCorrectAnswer: true,
        hint: null,
        metadata: {
          answerSide: 'word',
          promptSide: true,
        },
        options: answerList,
        prompt: {
          attributes: [
            {
              languageCode: 'ja',
              mediaType: 1,
              plainText: aQuestion[0],
              richText: null,
              type: 'TextAttribute',
            },
          ],
        },
        questionType: 4,
        type: 'MultipleChoiceQuestion',
      } as Question;

      expectedResultList[aQuestionIndex] = expectedCorrectPosition;
    }

    setQuestions(questionList);
    setExpectedQuestionsPosition(expectedResultList);
  };

  useEffect(() => {
    genQuestionList();
  }, [wordList]);

  return wordList &&
    questions.length === wordList.length &&
    expectedQuestionsPosition.length === wordList.length ? (
    <>
      <br />
      <MultipleChoiceQuestionProvider
        questions={questions}
        expectedResults={expectedQuestionsPosition}>
        <MultipleChoiceQuestion shouldShowPreviouslyMissedLabel={false} />
      </MultipleChoiceQuestionProvider>
    </>
  ) : null;
};

/**
{
          hasExactlyOneCorrectAnswer: true,
          hint: null,
          metadata: {
            answerSide: 'word',
            promptSide: true,
          },
          options: answerList,
          prompt: {
            attributes: [
              {
                languageCode: 'ja',
                mediaType: 1,
                plainText: aQuestion[0],
                richText: null,
                type: 'TextAttribute',
              },
            ],
          },
          questionType: 4,
          type: 'MultipleChoiceQuestion',
        },
 */
