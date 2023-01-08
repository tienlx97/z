import {MetaDataType} from 'feature/study-engine/type';

export const MULTIPLE_CHOICE_QUESTION = 'MultipleChoiceQuestion';

export type Question = {
  hasExactlyOneCorrectAnswer: boolean;
  hint: null;
  metadata: {
    promptSide: boolean;
    answerSide?: string;
  };
  options: QuestionElement[];
  prompt: QuestionElement;
  questionType: 4 | 2;
  type: 'MultipleChoiceQuestion';
};

export type QuestionElement = {
  attributes: {
    languageCode: 'vi' | 'en' | 'ja';
    mediaType: 1;
    plainText: string;
    richText: null;
    type:
      | typeof MetaDataType.AUDIO_ATTRIBUTE
      | typeof MetaDataType.IMAGE_ATTRIBUTE
      | typeof MetaDataType.LOCATION_ATTRIBUTE
      | typeof MetaDataType.TEXT_ATTRIBUTE;
  }[];
};

export type GradedAnswer = {
  isCorrect: boolean;
  gradingSettingsSuggestion: any;
  feedback: {
    expectedAnswer: ExpectedAnswer | null;
    expectedAnswerDescription: QuestionElement;
    explanations: any;
    submittedAnswer: SubmittedAnswer | null;
  };
};

export type SubmittedAnswer = {
  type: string;
  value: number;
};

export type ExpectedAnswer = {
  type: string;
  value: number;
};
