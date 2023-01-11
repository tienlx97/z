import React, {useState, useId} from 'react';
import {useCardAnimation} from 'feature/CardAnimation/hooks/useCardAnimation';
import {Question} from 'feature/MultipleChoiceQuestion/types';
import {CardAnimation} from 'feature/CardAnimation/components/CardAnimation';
import {FlashCard} from './FlashCard';
import {ButtonGroup} from './ButtonGroup';

export const FlashCardWrapper = () => {
  const controller = useCardAnimation();

  const [isFlipped, setIsFlipped] = useState(false);
  const [question, setQuestion] = useState({
    front: {
      attributes: [
        {
          type: 'TextAttribute',
          plainText: 'chữa trị',
          languageCode: 'vi',
          richText: null,
          mediaType: 1,
        },
      ],
    } as unknown as Question,
    back: {
      attributes: [
        {
          type: 'TextAttribute',
          plainText: 'remedial',
          languageCode: 'vi',
          richText: null,
          mediaType: 1,
        },
      ],
    } as unknown as Question,
    metadata: {
      studiableItemId: 1752323400421376,
      promptSide: 'definition',
      answerSide: 'word',
      questionSource: null,
      questionScoringInferenceMetadata: null,
      optionGenerationSource: null,
      meteringData: null,
    },
  });

  const elements = {
    topLeft: () => (
      <div className="text-[.875rem] text-[#646f90] dark:text-[#939bb4]">
        Definition
      </div>
    ),

    buttons: ({isShowing}: {isShowing: boolean}) => {
      return <ButtonGroup isHidden={!isShowing} onKnow={onKnow} />;
    },
  };

  const onClickCard = () => {
    setIsFlipped(!isFlipped);
  };

  const onKnow = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault(), e.stopPropagation();
    controller.animate('know');

    setId(Math.random() * 1000);
  };

  const [id, setId] = useState(Math.random() * 1000);

  return (
    <CardAnimation controller={controller}>
      <FlashCard
        onClickCard={onClickCard}
        isFlipped={isFlipped}
        key={id}
        question={question}
        elements={elements}
      />
    </CardAnimation>
  );
};
