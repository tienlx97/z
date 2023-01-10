import {useCardAnimation} from 'feature/hooks/useCardAnimation';
import {Question} from 'feature/MultipleChoiceQuestion/types';
import React, {useState} from 'react';
import {CardAnimation} from './CardAnimation';
import {FlashCard} from './FlashCard';

export const FlashCardWrapper = () => {
  const hooks = useCardAnimation();

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
      <div className="text-[.875rem] text-[#646f90]">Definition</div>
    ),

    buttons: () => (
      <div className="flex gap-4 justify-around">
        <div
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            hooks.animate('know');
          }}
          className="text-[#edeff4] border-[.125rem] border-solid border-[#346f90] rounded-lg flex items-center relative justify-center w-full mb-4 p-4 font-semibold">
          Next card
        </div>
      </div>
    ),
  };

  return (
    <CardAnimation controller={hooks}>
      <FlashCard
        key={Math.floor(Math.random() * 1000)}
        question={question}
        elements={elements}
      />
    </CardAnimation>
  );
};
