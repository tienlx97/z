import React, {memo} from 'react';
import {GradedAnswer, Question, SubmittedAnswer} from '../types';
import cn from 'classnames';
import {StudyCardQuestionContainer} from './StudyCardQuestionContainer';
import {MultipleChoiceQuestionAnswersLabel} from './MultipleChoiceQuestionAnswersLabel';
import {MultipleChoiceUtils} from '../utils/multipleChoiceUtils';
import {Constant} from 'feature/study-engine/type';
import {QuestionElementUtils} from '../utils/question-element-utils';
import {MultipleChoiceQuestionOption} from './MultipleChoiceQuestionOption';
import {
  MultipleChoiceQuestionKind,
  useMultipleChoiceQuestion,
} from '../context/MultipleChoideQuestionContext';
import Button from 'components/Button';

// import "./MultipleChoiceQuestionPromp.css";

type MultipleChoiceQuestionPromptProps = {
  question: Question;
  gradedAnswer: GradedAnswer | null;
  questionHint?: any;
  submittedAnswer?: SubmittedAnswer;
  isBottomBarShown?: boolean;
  isMobileCard?: boolean;
  shouldRenderFeedbackFlag?: boolean;
  shouldShowPreviouslyMissedLabel: boolean;
};

export const MultipleChoiceQuestionPrompt = ({
  question,
  questionHint = undefined,
  gradedAnswer,
  submittedAnswer = undefined,
  isMobileCard = false,
  isBottomBarShown = false,
  shouldRenderFeedbackFlag = false,
  shouldShowPreviouslyMissedLabel,
}: MultipleChoiceQuestionPromptProps) => {
  const [state, dispatch] = useMultipleChoiceQuestion();

  // handle when answer: 12804
  const onAnswer = (index: number) => {
    dispatch({
      type: MultipleChoiceQuestionKind.OPTION_INDEX_ANSWER,
      payload: {
        value: index,
      },
    });
  };

  const onRestart = () => {
    dispatch({
      type: MultipleChoiceQuestionKind.NEXT_QUESTION,
      payload: null,
    });
  };

  const Memo_MultipleChoiceQuestionAnswersLabel = memo(
    MultipleChoiceQuestionAnswersLabel
  );

  const T = () => {
    let t =
      question.metadata.answerSide === Constant.DEFINITION &&
      question.options.every(
        (opt) => !QuestionElementUtils.getOptionTextAttribute(opt)
      );
    let s = question.options.some(MultipleChoiceUtils.d);

    return (
      <div
        className={cn('AnswerWrapper grid gap-6', {
          'flex-nowrap [@media(max-width:38.75rem)]:flex-wrap': t,
          '[grid-template-columns:1fr]': s,
        })}
        data-testid="MCQ Answers">
        {question.options.map((element, index) => {
          // return <div key={index}>{element.attributes[0].plainText}</div>;

          return (
            <MultipleChoiceQuestionOption
              element={element}
              gradedAnswer={gradedAnswer}
              hasKeybindingsEnabled={true}
              onClick={onAnswer}
              submittedAnswer={submittedAnswer}
              index={index}
              key={index}
            />
          );
        })}
      </div>
    );
  };

  // [transition:all_0.5s_ease] [box-shadow:0_0.25rem_1rem_0_var(--shadow-with-opacity)]
  return (
    // StudyCardLayout
    <article
      className={cn(
        // StudyCardLayout0
        '[transition:all_0.5s_ease] [box-shadow:0_0.25rem_1rem_0_var(--shadow-with-opacity)]',
        'bg-[#f6f7fb] dark:bg-[#2e3856] rounded-lg flex flex-col justify-between my-0 mx-auto max-w-[52.5rem] min-h-[29.25rem] py-5 px-6 sm:p-4 lg:py-6 lg:px-8',
        {
          'sm:rounded-lg': isMobileCard,
          'sm:rounded-[initial]': !isMobileCard,
          'mb-20': isBottomBarShown,
          'mb-0': !isBottomBarShown,
          'justify-center items-center': state.stop,
        },
        // StudyCardWrapper
        'relative'
      )}
      // StudyCardWrapper : here
    >
      {state.stop && (
        <Button onClick={onRestart} className="flex justify-center" active>
          <span>restart</span>
        </Button>
      )}
      {!state.stop && (
        <>
          <StudyCardQuestionContainer
            questionElement={question.prompt}
            questionHint={questionHint}
            questionType={question.questionType}
            shouldRenderFeedbackFlag={shouldRenderFeedbackFlag}
            shouldShowAudioIcon={true}
            shouldShowPreviouslyMissedLabel={shouldShowPreviouslyMissedLabel}
            side={question.metadata.promptSide}
          />
          {/* AnswersContainer */}
          <div className="w-full flex-grow-0">
            <Memo_MultipleChoiceQuestionAnswersLabel
              gradedAnswer={gradedAnswer}
              question={question}
              shouldShowPreviouslyMissedLabel={shouldShowPreviouslyMissedLabel}
            />
            {MultipleChoiceUtils.isLocation(question) ? (
              // MultipleChoiceQuestionDiagram
              <></>
            ) : (
              <>{T()}</>
            )}
          </div>
        </>
      )}
    </article>
  );
};
