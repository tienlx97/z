import classNames from 'classnames';
import React from 'react';
import {QuestionElement} from '../types';
import cn from 'classnames';
import {
  QuestionElementView,
  QuestionElementViewSpace,
} from './QuestionElementView';
import {QuestionElementUtils} from '../utils/question-element-utils';
import {FlagStudiableMetadataContainer} from './FlagStudiableMetadataContainer';

type StudyCardQuestionContainerProps = {
  allowEditing?: boolean;
  hidden?: boolean;
  isStarred?: boolean;
  questionElement: QuestionElement;
  questionHint?: any;
  questionSource?: {
    studiableMetadataType: any;
  };
  questionType: 2 | 4;
  shouldPlayAudioOnCardClick?: boolean;
  shouldShowAudioIcon?: boolean;
  shouldShowPreviouslyMissedLabel?: boolean;
  shouldShowStarIcon?: boolean;
  centeredHeaderElement?: boolean;
  shouldRenderFeedbackFlag?: boolean;
  side: any;
  slots?: any;
  variant?:
    | typeof QuestionElementViewSpace.DEFAULT
    | typeof QuestionElementViewSpace.LARGE
    | typeof QuestionElementViewSpace.SMALL;
};

export const StudyCardQuestionContainer = ({
  questionElement,
  shouldPlayAudioOnCardClick = true,
  shouldShowAudioIcon = false,
  shouldShowPreviouslyMissedLabel = false,
  shouldShowStarIcon = false,
  shouldRenderFeedbackFlag = false,
  variant = 'default',
  centeredHeaderElement = undefined,
  hidden = undefined,
  questionType,
  questionSource,
  slots,
}: StudyCardQuestionContainerProps) => {
  let audioRawVal = QuestionElementUtils.elementType(questionElement).audio;
  const audioVal = audioRawVal == null ? undefined : audioRawVal.url;

  const studiableMetadataType =
    null == questionSource ? undefined : questionSource.studiableMetadataType;

  let isSlotsNull = slots == null;
  const QuestionElementViewOrNull = (subProps: {
    questionElement: any;
    onClick: any;
  }) => {
    const {onClick} = subProps;

    return (
      <QuestionElementView
        onClick={onClick}
        questionElement={questionElement}
        variant={variant}
      />
    );
  };

  return (
    // Area
    <div
      className={cn(
        'flex items-stretch flex-col justify-start mb-16 relative',
        // "md:pt-8",
        '[@media(max-width:38.75rem)]:pt-0',
        {
          'mb-6': variant === QuestionElementViewSpace.LARGE,
          'mb-0': variant === QuestionElementViewSpace.SMALL,
        }
      )}>
      {/* GenericWrapper */}
      <div
        className={cn(
          // GenericWrapper
          'g8d16b6',
          'flex items-center flex-1'
        )}>
        {/*                   ((a = !!playingAudioId && playingAudioId === audioVal),         */}
        {/* HeaderWrapper */}
        <div
          className={cn(
            // HeaderWrapper
            'w-full mb-6',
            'flex items-center flex-1'
          )}>
          {/* LeftWrapper */}
          <div
            className={cn(
              // LeftWrapper
              'justify-start min-w-fit',
              'flex items-center flex-1'
            )}>
            {/* SectionLabel */}
            {/*     color: var(--neutral-500-ink-100);             */}
            <section className="flex font-semibold text-[0.875rem] tracking-normal text-[#939bb4] dark:text-[#646f90]">
              Definition
            </section>
            {/* Enums._KG.ALTERNATIVE_QUESTION */}
            {/* shouldShowAudioIcon */}
            {shouldShowPreviouslyMissedLabel && (
              //RightIconWrapper
              <div className="flex items-center ml-5">
                {/* <AssemblyPill /> */}
              </div>
            )}
          </div>
          {/* CenterWrapper */}
          <div className={cn('justify-center', 'flex items-center flex-1')}>
            {centeredHeaderElement}
          </div>
          {/* RightWrapper */}
          <div className={cn('justify-end', 'flex items-center flex-1')}>
            {hidden ? null : (
              // DivRightIconsWrapper || shouldShowStarIcon
              <div></div>
            )}
            {shouldRenderFeedbackFlag ? (
              <div className="flex items-center ml-5">
                <FlagStudiableMetadataContainer
                  questionType={questionType}
                  studiableMetadataType={studiableMetadataType}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {(isSlotsNull ? undefined : slots.questionElement) != null
        ? isSlotsNull
        : QuestionElementViewOrNull({
            questionElement: questionElement,
            onClick: () => {},
          })}

      {/* questionHint
                ? <QuestionHintContainerLazy />
                : null */}
    </div>
  );
};
