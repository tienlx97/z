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

export const FlashCardWrapper = ({
  src2Base64,
  kanji = false,
}: {
  src2Base64: string;
  kanji?: boolean;
}) => {
  const [wordList, _] = useState<JapanWord[]>(
    JSON.parse(b64DecodeUnicode(src2Base64)).vocalbulary as JapanWord[]
  );

  const [index, setIndex] = useState(0);

  const [cards, setCards] = useState<
    {
      front: Question;
      back: Question;
      metadata: {
        promptSide: 'Definition';
        answerSide: 'Term';
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
        promptSide: 'Definition';
        answerSide: 'Term';
      };
    }[] = [];

    for (let i = 0; i < wordList.length; i++) {
      const element = wordList[i];

      iCards.push({
        front: {
          attributes: [
            {
              type: 'TextAttribute',
              plainText: kanji
                ? element.kanji ?? element.hira ?? element.kata!
                : element.hira ?? element.kata!,
              languageCode: 'ja',
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
              languageCode: 'vi',
              richText: null,
              mediaType: 1,
            },
          ],
        } as unknown as Question,
        metadata: {
          promptSide: 'Definition',
          answerSide: 'Term',
        },
      });
    }

    setCards(iCards);
  }, [wordList]);

  const elements = {
    topLeft: ({side, isShowing}: {side: string; isShowing: boolean}) => (
      <div className="font-semibold tracking-normal text-[.875rem] dark:text-[#646f90] text-[#939bb4]">
        {side}
      </div>
    ),

    topCenter: () => {
      return (
        <section
          className={
            'mb-0 justify-center h-full font-semibold flex text-[#586380] dark:text-[#d9dde8] items-center text-base'
          }>
          {index + 1} / {cards.length}
        </section>
      );
    },

    buttons: ({isShowing}: {isShowing: boolean}) => {
      return (
        <ButtonGroup
          disablePrevButton={index === 0}
          disableNextButton={index === cards.length}
          isHidden={!isShowing}
          onKnow={onKnow}
          onDontKnow={onDontKnow}
        />
      );
    },
  };

  const onClickCard = () => {
    setIsFlipped(!isFlipped);
  };

  const onKnow = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault(), e.stopPropagation();
    controller.animate('know');

    window.setTimeout(() => {
      setIndex(index + 1);
    }, 250);
  };

  const onDontKnow = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault(), e.stopPropagation();
    controller.animate('dontKnow');
    window.setTimeout(() => {
      setIndex(index - 1);
    }, 250);
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
