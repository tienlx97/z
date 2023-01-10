import {Question} from 'feature/MultipleChoiceQuestion/types';
import usePrevious from 'hooks/usePrevious';
import React, {useState} from 'react';
import cn from 'classnames';
import {QuestionGrid} from '../../CardAnimation/components/QuestionGrid';
import {FlashcardSide} from './FlashcardSide';

type FlashCardProps = {
  question: {
    back: Question;
    front: Question;
    metadata: any;
  };
  elements: any;
  onClickCard: () => void;
  isFlipped: boolean;
};

const g = (element: any, promptSide: any, isShowing: boolean) => {
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

export const FlashCard = ({
  elements,
  question,
  onClickCard,
  isFlipped,
}: FlashCardProps) => {
  const previousFlipped = usePrevious(isFlipped);
  const previousFlippedDifferentCurrentFlipped =
    undefined !== previousFlipped && previousFlipped !== isFlipped;

  // const clazzFront = cn({
  //   h17h0v5c: previousFlippedDifferentCurrentFlipped && isFlipped,
  //   v862hqe: previousFlippedDifferentCurrentFlipped && !isFlipped,
  // });

  // const clazzBack = cn({
  //   h17h0v5c: previousFlippedDifferentCurrentFlipped && !isFlipped,
  //   v862hqe: previousFlippedDifferentCurrentFlipped && isFlipped,
  // });

  return (
    // Stage
    <div
      onClick={onClickCard}
      className="relative h-full [perspective:62.5rem] [-ms-perspective:62.5rem] [-moz-perspective:62.5rem] [-webkit-perspective:62.5rem]">
      {/* Flipper */}
      <QuestionGrid
        style={
          {
            '--f529fr8': !isFlipped ? 101 : 1,
          } as any
        }
        className={cn(
          '[z-index:var(--f529fr8)] top-0 right-0 absolute left-0 h-full cursor-pointer bottom-0 [backface-visibility:hidden] [-webkit-backface-visibility:hidden]',
          {
            h17h0v5c: previousFlippedDifferentCurrentFlipped && isFlipped,
            v862hqe: previousFlippedDifferentCurrentFlipped && !isFlipped,
          }
        )}>
        <FlashcardSide
          elements={g(elements, question.metadata.promptSide, !isFlipped)}
          questionElement={question.front}
        />
      </QuestionGrid>
      {/* Flipper */}
      <QuestionGrid
        style={
          {
            '--f529fr8': isFlipped ? 101 : 1,
          } as any
        }
        className={cn(
          '[z-index:var(--f529fr8)] top-0 right-0 absolute left-0 h-full cursor-pointer bottom-0 [backface-visibility:hidden] [-webkit-backface-visibility:hidden]',
          {
            h17h0v5c: previousFlippedDifferentCurrentFlipped && !isFlipped,
            v862hqe: previousFlippedDifferentCurrentFlipped && isFlipped,
          }
        )}>
        <FlashcardSide
          elements={g(elements, question.metadata.answerSide, isFlipped)}
          questionElement={question.back}
        />
      </QuestionGrid>
    </div>
  );
};
