import {Constant} from 'feature/study-engine/type';
import {Question} from '../types';
import {QuestionElementUtils} from './question-element-utils';
import GradeAnswerUtils from './graded-answer-utils';
import {Variant} from '../components/AnswerOption';

function isLocation(question: Question) {
  const {location} = QuestionElementUtils.elementType(question.options[0]);
  return location && question.metadata.answerSide === Constant.LOCATION;
}

function d(questionOption: any) {
  return QuestionElementUtils.textAttributeGreater(questionOption, 150);
}

function answerOptionPrase(
  index: number,
  gradedAnswer: any,
  submittedAnswer: any
) {
  if (GradeAnswerUtils.isNotNull(gradedAnswer)) {
    var nSubmittedAnswer = gradedAnswer.feedback.submittedAnswer;
    return nSubmittedAnswer
      ? GradeAnswerUtils.expectedAnswerEqual(index, gradedAnswer)
        ? Variant.Correct
        : GradeAnswerUtils.isCorrect(gradedAnswer) ||
          (null == nSubmittedAnswer ? undefined : nSubmittedAnswer.value) !==
            index
        ? Variant.Disabled
        : Variant.Incorrect
      : GradeAnswerUtils.expectedAnswerEqual(index, gradedAnswer)
      ? Variant.SkippedCorrect
      : Variant.Disabled;
  }
  return (null == submittedAnswer ? undefined : submittedAnswer.value) === index
    ? Variant.Selected
    : Variant.Default;
}

export const MultipleChoiceUtils = {isLocation, d, answerOptionPrase};
