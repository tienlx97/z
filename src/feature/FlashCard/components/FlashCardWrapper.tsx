import React, {useState, useId, useEffect} from 'react';
import {useCardAnimation} from 'feature/CardAnimation/hooks/useCardAnimation';
import {Question} from 'feature/MultipleChoiceQuestion/types';
import {CardAnimation} from 'feature/CardAnimation/components/CardAnimation';
import {FlashCard} from './FlashCard';
import {ButtonGroup} from './ButtonGroup';
import {b64DecodeUnicode} from 'feature/MultipleChoiceQuestion/utils/b64DecodeUnicode';

interface DetailItem {
  meaning: string;
  eg?: string;
  egMeaning?: string;
  polite?: string;
  children?: string;
}

interface JapanWord {
  hira?: string;
  kata?: string;
  kanji?: string;
  hantu?: string;
  type: string | 'sentences' | 'nouns' | 'verb' | 'adverb';
  detail: DetailItem[];
}

export const FlashCardWrapper = ({src2Base64}: {src2Base64: string}) => {
  const [wordList, _] = useState<JapanWord[]>(
    JSON.parse(b64DecodeUnicode(src2Base64)).vocalbulary as JapanWord[]
  );

  const [index, setIndex] = useState(0);

  const [cards, setCards] = useState<
    {
      front: Question;
      back: Question;
      metadata: {
        promptSide: 'definition';
      };
    }[]
  >([]);

  const controller = useCardAnimation();

  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const iCards: {
      front: Question;
      back: Question;
      metadata: {
        promptSide: 'definition';
      };
    }[] = [];

    for (let i = 0; i < wordList.length; i++) {
      const element = wordList[i];

      iCards.push({
        front: {
          attributes: [
            {
              type: 'TextAttribute',
              plainText: element.hira ?? element.kata!,
              languageCode: 'lang-ja',
              richText: null,
              mediaType: 1,
            },
          ],
        } as unknown as Question,
        back: {
          attributes: [
            {
              type: 'TextAttribute',
              plainText: element.detail[0].meaning,
              languageCode: 'lang-vi',
              richText: null,
              mediaType: 1,
            },
          ],
        } as unknown as Question,
        metadata: {
          promptSide: 'definition',
        },
      });
    }

    setCards(iCards);
  }, [wordList]);

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
    setIndex(index + 1);
  };

  if (index === cards.length) {
    return <div>Done</div>;
  }

  return wordList.length === cards.length ? (
    <CardAnimation controller={controller}>
      <FlashCard
        onClickCard={onClickCard}
        isFlipped={isFlipped}
        key={index}
        question={cards[index]}
        elements={elements}
      />
    </CardAnimation>
  ) : null;
};
