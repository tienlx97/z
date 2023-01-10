import {Question} from 'feature/MultipleChoiceQuestion/types';
import usePrevious from 'hooks/usePrevious';
import React, {useState} from 'react';
import cn from 'classnames';
import {QuestionGrid} from './QuestionGrid';
import {FlashcardSide} from './FlashcardSide';

type FlashCardProps = {
  question: {
    back: Question;
    front: Question;
    metadata: any;
  };
  elements: any;
};

const g = (element: any, promptSide: any, isShowing: any) => {
  var n = {
    side: promptSide,
    isShowing: isShowing,
  };
  return {
    topRight:
      null == element || null == element.topRight
        ? undefined
        : element.topRight(n),
    topCenter:
      null == element || null == element.topCenter
        ? undefined
        : element.topCenter(n),
    topLeft:
      null == element || null == element.topLeft
        ? undefined
        : element.topLeft(n),
    buttons:
      null == element || null == element.buttons
        ? undefined
        : element.buttons(n),
  };
};

export const FlashCard = ({elements, question}: FlashCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const onClickCard = () => {
    setIsFlipped(!isFlipped);
  };

  const previousFlipped = usePrevious(isFlipped);
  const previousFlippedDifferentIsFlipped =
    undefined !== previousFlipped && previousFlipped !== isFlipped;

  const clazzFront = cn({
    h17h0v5c: previousFlippedDifferentIsFlipped && isFlipped,
    v862hqe: previousFlippedDifferentIsFlipped && !isFlipped,
  });

  const clazzBack = cn({
    h17h0v5c: previousFlippedDifferentIsFlipped && !isFlipped,
    v862hqe: previousFlippedDifferentIsFlipped && isFlipped,
  });

  return (
    <div
      onClick={onClickCard}
      className="relative h-full [perspective:62.5rem] [-ms-perspective:62.5rem] [-moz-perspective:62.5rem] [-webkit-perspective:62.5rem]">
      <QuestionGrid
        className={cn(
          'top-0 right-0 absolute left-0 h-full cursor-pointer bottom-0 [backface-visibility:hidden] [-webkit-backface-visibility:hidden]',
          {
            'z-[1]': !isFlipped,
            'z-[101]': isFlipped,
            h17h0v5c: previousFlippedDifferentIsFlipped && isFlipped,
            v862hqe: previousFlippedDifferentIsFlipped && !isFlipped,
          }
        )}>
        <FlashcardSide
          elements={g(elements, question.metadata.promptSide, !isFlipped)}
          questionElement={question.front}
        />
      </QuestionGrid>
      <QuestionGrid
        className={cn(
          'top-0 right-0 absolute left-0 h-full cursor-pointer bottom-0 [backface-visibility:hidden] [-webkit-backface-visibility:hidden]',
          {
            'z-[1]': !isFlipped,
            'z-[101]': isFlipped,
            h17h0v5c: previousFlippedDifferentIsFlipped && !isFlipped,
            v862hqe: previousFlippedDifferentIsFlipped && isFlipped,
          }
        )}>
        <FlashcardSide
          elements={g(elements, question.metadata.promptSide, !isFlipped)}
          questionElement={question.back}
        />
      </QuestionGrid>
    </div>
  );
};
