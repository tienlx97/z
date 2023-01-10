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

const translate5 = (t: any) => {
  switch (Counter_5()) {
    case 1:
      return t('mdx.multiple_choice.label.awesome');
    case 2:
      return t('mdx.multiple_choice.label.excellent');
    case 3:
      return t('mdx.multiple_choice.label.you_got_this');
    case 4:
      return t('mdx.multiple_choice.label.you_doing_great');
    default:
      return t('mdx.multiple_choice.label.brilliant_work');
  }
};

const translate3 = (t: any) => {
  switch (Counter_3()) {
    case 1:
      return t('mdx.multiple_choice.label.not_quite');
    case 2:
      return t('mdx.multiple_choice.label.no_worries');
    default:
      return t('mdx.multiple_choice.label.no_problem');
  }
};

export const AnswerFeedback = {
  translate5,
  translate3,
};
