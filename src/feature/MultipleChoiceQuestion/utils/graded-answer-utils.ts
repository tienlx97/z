import {GradedAnswer} from '../types';

const isNotCorrect = (gradedAnswer: GradedAnswer | null) => {
  if (gradedAnswer == null) {
    return false;
  }

  return gradedAnswer.isCorrect === false;
};

const isNotNull = (gradedAnswer: any) => !!gradedAnswer;

const isSubmittedAnswerNotNullAndIsCorrect = (gradedAnswer: any) => {
  let submittedAnswer;

  return (
    gradedAnswer !== null &&
    ((null == (submittedAnswer = gradedAnswer.feedback.submittedAnswer)) ===
    undefined
      ? undefined
      : submittedAnswer.value) &&
    gradedAnswer.isCorrect === true
  );
};

function isCorrect(gradedAnswer: any) {
  if (gradedAnswer == null) {
    return false;
  }

  return gradedAnswer.isCorrect === true;
}

const isSubmittedAnswer = (gradedAnswer: any) => {
  return (
    (gradedAnswer === null
      ? undefined
      : gradedAnswer.feedback.submittedAnswer) === null
  );
};

function expectedAnswerEqual(index: number, gradedAnswer: any) {
  return gradedAnswer.feedback.expectedAnswer.value === index;
}

const GradedAnswerUtils = {
  isNotCorrect,
  isCorrect,
  isNotNull,
  isSubmittedAnswerNotNullAndIsCorrect,
  isSubmittedAnswer,
  expectedAnswerEqual,
};

export default GradedAnswerUtils;
