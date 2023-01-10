import React from 'react';
import cn from 'classnames';
import {GradedAnswer, QuestionElement} from '../types';
import {MultipleChoiceUtils} from '../utils/multipleChoiceUtils';
import {QuestionElementUtils} from '../utils/question-element-utils';
import {AnswerOption, Variant} from './AnswerOption';
import {FormattedTextWithImage} from './FormattedTextWithImage';

type MultipleChoiceQuestionOptionProps = {
  index: number;
  onClick: (index: number) => void;
  hasKeybindingsEnabled: boolean;
  gradedAnswer: GradedAnswer | null;
  element: QuestionElement;
  submittedAnswer?: any;
};

export const MultipleChoiceQuestionOption = ({
  element,
  index,
  submittedAnswer,
  gradedAnswer,
  onClick,
  hasKeybindingsEnabled,
}: MultipleChoiceQuestionOptionProps) => {
  const url = QuestionElementUtils.getImageAttributeUrl(element);
  const plainText = QuestionElementUtils.getTextAttributePlainText(element);
  const languageCode =
    QuestionElementUtils.getTextAttributeLanguageCode(element);
  const urlOrPlainTextBoolean = !(!url || plainText);
  const imageShape = urlOrPlainTextBoolean ? 'height' : 'square';
  const imageSize = urlOrPlainTextBoolean ? 's' : 'xs';
  const variant = MultipleChoiceUtils.answerOptionPrase(
    index,
    gradedAnswer != null ? gradedAnswer : undefined,
    submittedAnswer
  );

  return (
    <AnswerOption
      onClick={() => onClick(index)}
      variant={variant}
      hint={hasKeybindingsEnabled ? '' + (index + 1) : null}>
      <div
        aria-selected={variant === Variant.Selected}
        className={cn(
          'w-full h-full relative flex text-[#303545] dark:text-[#edeff4] items-center',
          {
            'min-h-[7.5rem] justify-center [@media(max-width:48rem)]:w-full [@media(max-width:48rem)]:min-h-[3.75rem]':
              urlOrPlainTextBoolean,
          }
        )}>
        {urlOrPlainTextBoolean && url ? (
          // render image
          /*(0, ReactJSX.jsx)(ImageComps.default, {
            clickToZoom: false,
            height: (0, BreakpointsHelper.C1)() ? 60 : 120,
            shape: imageShape,
            size: imageSize,
            src: url,
          })*/
          <></>
        ) : (
          <FormattedTextWithImage
            clickToZoom={false}
            // imageHeight: (0, BreakpointsHelper.C1)() ? 60 : 120,
            imageShape={imageShape}
            imageSize={imageSize}
            imageUrl={url}
            lang={languageCode}
            text={plainText}
          />
        )}
      </div>
    </AnswerOption>
  );
};
