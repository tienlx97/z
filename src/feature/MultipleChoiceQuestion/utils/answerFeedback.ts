const counter = (n: number) => {
  let index = -1;

  return () => (index < n - 1 ? index++ : ((index = 0), index));
};

const Counter_5 = counter(5);
const Counter_3 = counter(3);

// const translate5 = (e: any) => {
//   switch (Counter_5()) {
//     case 1:
//       return "assistant.label.answer_feedback.correct.1";
//     case 2:
//       return "assistant.label.answer_feedback.correct.2";
//     case 3:
//       return "assistant.label.answer_feedback.correct.3";
//     case 4:
//       return "assistant.label.answer_feedback.correct.4";
//     default:
//       return "assistant.label.answer_feedback.correct.0";
//   }
// };

// const translate3 = (e: any) => {
//   switch (Counter_3()) {
//     case 1:
//       return "assistant.label.answer_feedback.incorrect.1"
//     case 2:
//       return "assistant.label.answer_feedback.incorrect.2"
//     default:
//       return "assistant.label.answer_feedback.incorrect.0"
//   }
// };

const translate5 = (e: any) => {
  switch (Counter_5()) {
    case 1:
      return 'Awesome!';
    case 2:
      return 'Excellent!';
    case 3:
      return "You've got this!";
    case 4:
      return "You're doing great!";
    default:
      return 'Brilliant work!';
  }
};

const translate3 = (e: any) => {
  switch (Counter_3()) {
    case 1:
      return "Not quite. You're still learning!";
    case 2:
      return 'No worries. Learning is a process!';
    default:
      return "No problem. You're still learning!";
  }
};

export const AnswerFeedback = {
  translate5,
  translate3,
};
