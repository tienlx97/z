import React from 'react';
import {
  QuestionGrid,
  QuestionGrid_Options,
  QuestionGrid_Card,
  QuestionGrid_Center,
  QuestionGrid_Elements,
  QuestionGrid_TopLeft,
  QuestionGrid_TopRight,
} from 'feature/CardAnimation/components/QuestionGrid';

type FlashcardSideProps = {
  questionElement: any;
  elements: any;
};

export const FlashcardSide = ({
  elements,
  questionElement,
}: FlashcardSideProps) => {
  return (
    <QuestionGrid_Card className="grid gap-y-4 gap-x-0 [grid-template-columns:1fr_1fr_1fr] [grid-template-rows:auto_1fr_auto]">
      {elements.topLeft ? (
        <QuestionGrid_TopLeft>{elements.topLeft}</QuestionGrid_TopLeft>
      ) : null}
      {elements.topCenter ? (
        <QuestionGrid_Center>{elements.topCenter}</QuestionGrid_Center>
      ) : null}
      {elements.topRight ? (
        <QuestionGrid_TopRight>{elements.topRight}</QuestionGrid_TopRight>
      ) : null}
      <QuestionGrid_Elements>
        {/* convert, trim, cut image/text */}
        <div className="h-full w-full flex justify-center items-center">
          <div className="text-4xl text-[#303545] dark:text-[#f6f7fb]">
            {questionElement.attributes[0].plainText}
          </div>
        </div>
      </QuestionGrid_Elements>
      {elements.buttons ? (
        <QuestionGrid_Options>{elements.buttons}</QuestionGrid_Options>
      ) : null}
    </QuestionGrid_Card>
  );
};
