import React from 'react';
import {
  QuestionGrid,
  QuestionGrid_Button,
  QuestionGrid_Card,
  QuestionGrid_Center,
  QuestionGrid_Element,
  QuestionGrid_TopLeft,
  QuestionGrid_TopRight,
} from './QuestionGrid';

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
      <QuestionGrid_Element>
        <div className="h-full w-full flex justify-center items-center">
          <div className="text-4xl">
            {questionElement.attributes[0].plainText}
          </div>
        </div>
      </QuestionGrid_Element>
      {elements.buttons ? (
        <QuestionGrid_Button>{elements.buttons}</QuestionGrid_Button>
      ) : null}
    </QuestionGrid_Card>
  );
};
