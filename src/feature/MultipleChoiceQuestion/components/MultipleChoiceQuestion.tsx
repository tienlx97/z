import React, {useCallback, useEffect} from 'react';
import usePrevious from 'hooks/usePrevious';
import {once} from 'lodash';
import {nullthrows} from '../utils/nullthrows';
import {GradedAnswer, MULTIPLE_CHOICE_QUESTION, Question} from '../types';
import {MultipleChoiceQuestionPrompt} from './MultipleChoiceQuestionPrompt';
import GradedAnswerUtils from '../utils/graded-answer-utils';
import {
  MultipleChoiceQuestionKind,
  MultipleChoiceQuestionProvider,
  useMultipleChoiceQuestion,
} from '../context/MultipleChoideQuestionContext';
import {ContinueButton} from './ContinueButton';

type MultipleChoiceQuestionProps = {
  // question: Question;
  // gradedAnswer: GradedAnswer | null;
  shouldShowPreviouslyMissedLabel: boolean;
};

export const MultipleChoiceQuestion = (props: MultipleChoiceQuestionProps) => {
  // const {gradedAnswer, question, shouldShowPreviouslyMissedLabel} = props;
  const {shouldShowPreviouslyMissedLabel} = props;

  const [state, dispatch] = useMultipleChoiceQuestion();

  const {question, gradedAnswer} = state;

  // Get question, gradedAnswer from context

  if (question.type !== MULTIPLE_CHOICE_QUESTION) {
    throw Error('Trying to render the wrong question type');
  }

  const previousGradedAnswer = usePrevious(gradedAnswer);

  // auto get next question if answer is correct
  useEffect(() => {
    // auto click next question after 1s
    // if (!previousGradedAnswer && gradedAnswer?.isCorrect) {
    //   window.setTimeout(() => {
    //     dispatch({
    //       type: MultipleChoiceQuestionKind.NEXT_QUESTION,
    //       payload: null,
    //     });
    //   }, 800);
    // }

    if (!previousGradedAnswer && gradedAnswer) {
      window.setTimeout(() => {
        dispatch({
          type: MultipleChoiceQuestionKind.NEXT_QUESTION,
          payload: null,
        });
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gradedAnswer]);

  const onNextQuestion = useCallback(() => {
    // once(() => {
    //   const nullThrows = nullthrows(
    //     gradedAnswer === null
    //       ? undefined
    //       : gradedAnswer?.feedback.submittedAnswer?.value
    //   );
    //   // actions.advance(nuulThrow);
    //   //  dispatch to call next question
    //   dispatch({
    //     type: MultipleChoiceQuestionKind.NEXT_QUESTION,
    //     payload: null,
    //   });
    // });
    dispatch({
      type: MultipleChoiceQuestionKind.NEXT_QUESTION,
      payload: null,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gradedAnswer]);

  return (
    <React.Fragment>
      <MultipleChoiceQuestionPrompt
        question={question}
        isMobileCard
        gradedAnswer={gradedAnswer}
        // isBottomBarShown={GradedAnswerUtils.isNotCorrect(gradedAnswer)}
        shouldRenderFeedbackFlag={true}
        shouldShowPreviouslyMissedLabel={shouldShowPreviouslyMissedLabel}
      />
      {/* Show continue button */}
      {/* {GradedAnswerUtils.isNotCorrect(gradedAnswer) && (
        <ContinueButton onClick={onNextQuestion} />
      )} */}
    </React.Fragment>
  );
};
