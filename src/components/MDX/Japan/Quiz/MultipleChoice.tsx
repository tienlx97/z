import React, {createContext, useContext, useReducer, useState} from 'react';
import cn from 'classnames';
import useTimeout from 'hooks/useTimeout';

type AnswerProps = {
  text: string;
  index: number;
  onSelectAnswer: (currentanswerIndex: number) => void;
  currAnswerIndexChoose: number;
  isCorrect: boolean;
};

type QuestionProps = {
  question: string;
  answers: string[];
  correct: number;
};

type MultipleChoideState = {
  questions: QuestionProps[];
  correct: number;
  isResult: boolean;
  currAnswerIndexChoose: number;
  currQuestIndex: number;
  status: 'default' | 'success' | 'fail';
};

// An enum with all the types of actions to use in our reducer
enum MultipleChoiceActionKind {
  SELECT_ANSWER = 'SELECT_ANSWER',
  NEXT_QUESTION = 'NEXT_QUESTION',
  RESTART = 'RESTART',
}

// An interface for our actions
interface MultipleChoiceAction {
  type: MultipleChoiceActionKind;
  payload: number;
}

const reducer = (
  state: MultipleChoideState,
  action: MultipleChoiceAction
): MultipleChoideState => {
  const {payload, type} = action;

  switch (type) {
    case MultipleChoiceActionKind.SELECT_ANSWER: {
      const isCorrect =
        payload === state.questions[state.currQuestIndex].correct;
      return {
        ...state,
        currAnswerIndexChoose: payload,
        correct: isCorrect ? state.correct + 1 : state.correct,
        status: isCorrect ? 'success' : 'fail',
      };
    }

    case MultipleChoiceActionKind.NEXT_QUESTION: {
      const isResults = state.currQuestIndex === state.questions.length - 1;
      return {
        ...state,
        currAnswerIndexChoose: -1,
        status: 'default',
        isResult: state.currQuestIndex === state.questions.length - 1,
        currQuestIndex: isResults
          ? state.currQuestIndex
          : state.currQuestIndex + 1,
      };
    }

    default:
      return state;
  }
};

const MultipleChoiceContext = createContext<
  [MultipleChoideState, React.Dispatch<MultipleChoiceAction>] | undefined
>(undefined);

const useMultipleChoice = () => {
  const context = useContext(MultipleChoiceContext);

  if (context === undefined) {
    throw new Error('useMultipleChoice was used outside of its Provider');
  }
  return context;
};

const MultipleChoiceProvider = ({
  children,
  questions,
}: {
  children: React.ReactNode;
  questions: QuestionProps[];
}) => {
  const value = useReducer(reducer, {
    questions,
    correct: 0,
    isResult: false,
    currAnswerIndexChoose: -1,
    currQuestIndex: 0,
    status: 'default',
  });

  return (
    <MultipleChoiceContext.Provider value={value}>
      {children}
    </MultipleChoiceContext.Provider>
  );
};

function Answer({
  text,
  index,
  onSelectAnswer,
  currAnswerIndexChoose,
  isCorrect,
}: AnswerProps) {
  return (
    <section
      tabIndex={0}
      onClick={() => onSelectAnswer(index)}
      className={cn(
        'multiple-choice--answer__item border-2 border-solid border-[#646f90] rounded-lg cursor-pointer text-[#edeff4] p-4 relative w-full break-words hover:border-[#939bb4] hover:outline-none',
        {
          'bg-[#19804f] border-[#c8ecdb] hover:border-[#c8ecdb]':
            currAnswerIndexChoose != -1 && isCorrect,
          'border-[#c34632] hover:border-[#c34632]':
            currAnswerIndexChoose == index - 1 && !isCorrect,
        }
      )}>
      <div className="flex items-center justify-center">
        <div className="bg-[#303545] rounded-[50%] text-[#d9dde8] text-sm font-semibold h-6 w-6 mr-4 flex-grow-0 flex-shrink-0 tracking-normal flex justify-center items-center">
          {index}
        </div>
      </div>
      <div
        aria-selected="false"
        className="relative w-full h-full flex items-center text-[#edeff4]">
        <div>{text}</div>
      </div>
    </section>
  );
}

const quests: QuestionProps[] = [
  {
    question: 'This is question 1',
    answers: ['Answer xyx', 'Answer abc', 'Answer def', 'Answer 123'],
    correct: 0,
  },
  {
    question: 'This is question 2',
    answers: ['Answer xyx', 'Answer abc', 'Answer def', 'Answer 123'],
    correct: 1,
  },
  {
    question: 'This is question 3',
    answers: ['Answer xyx', 'Answer abc', 'Answer def', 'Answer 123'],
    correct: 2,
  },
  {
    question: 'This is question 4',
    answers: ['Answer xyx', 'Answer abc', 'Answer def', 'Answer 123'],
    correct: 3,
  },
];

function Quiz() {
  const [state, dispatch] = useMultipleChoice();

  const [disable, setDisable] = useState(false);

  const {currQuestIndex, currAnswerIndexChoose, status, questions} = state;

  const onSelectAnswer = (currentAnswerIndex: number) => {
    setDisable(true);
    dispatch({
      type: MultipleChoiceActionKind.SELECT_ANSWER,
      payload: currentAnswerIndex - 1,
    });
  };

  useTimeout(
    () => {
      dispatch({
        type: MultipleChoiceActionKind.NEXT_QUESTION,
        payload: -1,
      });
      setDisable(false);
    },
    disable ? 1500 : null
  );

  return (
    <>
      <div
        aria-label="question"
        role="listitem"
        className="relative py-6 px-8 min-h-[29.25rem] max-w-[52.5rem] my-0 mx-auto flex flex-col justify-between rounded-lg bg-[#2e3856]">
        <div className="flex relative mb-[4rem] justify-start flex-col items-stretch">
          <div className="items-center justify-between flex flex-1 mb-6 w-full sm:grid-cols-1">
            <section className="text-sm text-[#646f90] font-semibold leading-6 tracking-normal">
              Definition
            </section>
            <section className="text-sm text-[#646f90] font-semibold leading-6 tracking-normal">
              {currQuestIndex + 1} of {questions.length}
            </section>
          </div>
          <div className="flex flex-1 items-stretch cursor-auto break-words">
            <div className="relative flex item-start justify-between flex-grow-0 flex-shrink-0 basis-full text-xl">
              {quests[currQuestIndex].question}
            </div>
          </div>
        </div>
        <div className="w-full flex-grow-0 ">
          <section className="mb-6 font-semibold  text-[16px] tracking-normal leading-6">
            {status === 'default' && (
              <div className="text-[#d9dde8]">Select the correct term</div>
            )}
            {status === 'fail' && (
              <div className="text-[#ff7873]">
                No problem. You&apos;re still learning!
              </div>
            )}
            {status === 'success' && (
              <div className="text-[#4BB543]">Good job!</div>
            )}
          </section>
          <div
            className={cn('multiple-choice--answer', {
              'pointer-events-none': disable,
            })}>
            {quests[currQuestIndex].answers.map((answer, index) => (
              <Answer
                index={index + 1}
                text={answer}
                key={index}
                isCorrect={quests[currQuestIndex].correct === index}
                onSelectAnswer={onSelectAnswer}
                currAnswerIndexChoose={currAnswerIndexChoose}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export function Multiplechoice() {
  return (
    <MultipleChoiceProvider questions={quests}>
      <Quiz />
    </MultipleChoiceProvider>
  );
}
