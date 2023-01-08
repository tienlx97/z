import {createContext, useContext, useReducer} from 'react';
import {GradedAnswer, Question} from '../types';

type MultipleChoiceQuestionState = {
  // list of question
  questions: Question[];
  // expected result index of each question
  expectedResults: number[];
  // current question index
  index: number;
  question: Question;
  // at bottom question
  stop: boolean;
  //
  gradedAnswer: GradedAnswer | null;
};

export enum MultipleChoiceQuestionKind {
  OPTION_INDEX_ANSWER = 'OPTION_INDEX_ANSWER',
  NEXT_QUESTION = 'NEXT_QUESTION',
  RESTART = 'RESTART',
}

type MultipleChoiceQuestionAction = {
  type: MultipleChoiceQuestionKind;
  payload: any;
};

const reducer = (
  state: MultipleChoiceQuestionState,
  action: MultipleChoiceQuestionAction
): MultipleChoiceQuestionState => {
  const {payload, type} = action;

  switch (type) {
    case MultipleChoiceQuestionKind.OPTION_INDEX_ANSWER: {
      const {value} = payload;
      const expectedResultPosition = state.expectedResults[state.index];

      return {
        ...state,
        gradedAnswer: {
          isCorrect: expectedResultPosition === value,
          gradingSettingsSuggestion: null,
          feedback: {
            explanations: null,
            expectedAnswerDescription:
              state.questions[state.index].options[value],
            expectedAnswer: {
              type: 'OptionIndexAnswer',
              value: expectedResultPosition,
            },
            submittedAnswer: {
              type: 'OptionIndexAnswer',
              value,
            },
          },
        },
      };
    }
    case MultipleChoiceQuestionKind.NEXT_QUESTION: {
      const isResults = state.index === state.questions.length - 1;

      return {
        ...state,
        stop: isResults,
        index: isResults ? state.index : state.index + 1,
        question: state.questions[isResults ? state.index : state.index + 1],
        gradedAnswer: null,
      };
    }

    case MultipleChoiceQuestionKind.RESTART: {
    }

    default:
      return state;
  }
};

const MultipleChoiceQuestionContext = createContext<
  | [MultipleChoiceQuestionState, React.Dispatch<MultipleChoiceQuestionAction>]
  | undefined
>(undefined);

export const useMultipleChoiceQuestion = () => {
  const context = useContext(MultipleChoiceQuestionContext);

  if (context === undefined) {
    throw new Error(
      'useMultipleChoiceQuestion was used outside of its Provider'
    );
  }
  return context;
};

export const MultipleChoiceQuestionProvider = ({
  children,
  questions,
  expectedResults,
}: {
  children: React.ReactNode;
  questions: Question[];
  expectedResults: number[];
}) => {
  const value = useReducer(reducer, {
    questions: questions,
    expectedResults: expectedResults,
    index: 0,
    stop: false,
    question: questions[0],
    gradedAnswer: null,
  });

  return (
    <MultipleChoiceQuestionContext.Provider value={value}>
      {children}
    </MultipleChoiceQuestionContext.Provider>
  );
};
