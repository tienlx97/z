import React from 'react';
import cn from 'classnames';
import GradedAnswerUtils from '../utils/graded-answer-utils';
import {AnswerFeedback} from '../utils/answerFeedback';
import {QuestionElementUtils} from '../utils/question-element-utils';

type MultipleChoiceQuestionAnswersLabelProps = {
  currentValue?: any;
  gradedAnswer?: any;
  question?: any;
  answerLabel?: any;
  shouldShowPreviouslyMissedLabel?: any;
};

export const MultipleChoiceQuestionAnswersLabel = ({
  answerLabel,
  currentValue,
  gradedAnswer,
  question,
  shouldShowPreviouslyMissedLabel,
}: MultipleChoiceQuestionAnswersLabelProps) => {
  const questionFeedBackStr = (function () {
    if (currentValue !== undefined && gradedAnswer === null) {
      return 'You selected';
    }

    if (GradedAnswerUtils.isNotNull(gradedAnswer)) {
      if (!gradedAnswer.feedback.submittedAnswer) {
        return 'Give this one a go later!';
      }
      if (
        currentValue === undefined &&
        GradedAnswerUtils.isSubmittedAnswerNotNullAndIsCorrect(gradedAnswer)
      ) {
        return 'Here is the correct answer';
      }

      if (GradedAnswerUtils.isCorrect(gradedAnswer)) {
        return shouldShowPreviouslyMissedLabel
          ? 'Nicely done! You got it this time.'
          : AnswerFeedback.translate5('traslate hook');
      }

      if (GradedAnswerUtils.isNotCorrect(gradedAnswer)) {
        return AnswerFeedback.translate3('translate hook');
      }
    }

    return answerLabel !== undefined
      ? answerLabel
      : question.metadata.answerSide === 'DEFINITION'.toLowerCase()
      ? 'Select the correct definition'
      : 'Select the correct term';
  })();

  return (
    // Label
    // color: var(--neutral-500-ink-100);
    // color: var(--gray-600-gray-400);
    <section
      className={cn(
        'mb-6 leading-6 tracking-normal font-semibold text-base [@media(max-width:48px)]:pb-4 [@media(max-width:38.75rem)]:pb-4',
        // 'text-[#586380] dark:text-[#d9dde8]',
        {
          // color: var(--mint-500-mint-400);
          'text-[#18ae79] dark:text-[#59e8b5] mb-6 leading-6 tracking-normal font-semibold text-base':
            // !GradedAnswerUtils.isSubmittedAnswerNotNullAndIsCorrect(
            //   gradedAnswer
            // ) &&
            GradedAnswerUtils.isCorrect(gradedAnswer),
          //     color: var(--error-red);
          'text-[#b00020] dark:text-[#ff7873] mb-6 leading-6 tracking-normal font-semibold text-base':
            // GradedAnswerUtils.isSubmittedAnswer(gradedAnswer) === true &&
            GradedAnswerUtils.isNotCorrect(gradedAnswer) === true,
          'mb-6 leading-6 tracking-normal font-semibold text-base':
            GradedAnswerUtils.isSubmittedAnswer(gradedAnswer) ||
            GradedAnswerUtils.isSubmittedAnswerNotNullAndIsCorrect(
              gradedAnswer
            ),
        }
      )}
      aria-label={(function () {
        if (
          !gradedAnswer ||
          gradedAnswer.isCorrect ||
          !question.hasExactlyOneCorrectAnswer
        ) {
          return questionFeedBackStr;
        }

        let e = gradedAnswer.feedback.expectedAnswer.value;
        let t = question.options[e];
        let n = QuestionElementUtils.getTextValue(t);

        if (!n) {
          return questionFeedBackStr;
        }

        //  var r = g("assistant.label.answer_feedback.aria_correction", {
        // correctAnswer: n,
        // });
        return questionFeedBackStr + ' ' + 'r';
      })()}
      aria-live={gradedAnswer ? 'assertive' : undefined}>
      <div aria-hidden="true">{questionFeedBackStr}</div>
    </section>
  );
};
