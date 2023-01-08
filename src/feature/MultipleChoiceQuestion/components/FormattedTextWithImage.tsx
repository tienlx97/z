import React from 'react';
import cn from 'classnames';
import {FormattedText} from './FormattedText';

export const Position = {
  Center: 'center',
  Top: 'top',
};

type FormattedTextWithImageProps = {
  alignment?: typeof Position.Center | typeof Position.Top;
  lang?: string;
  text: string;
  maxLength?: number;
  richText?: any;
  clickToZoom: boolean;
  textfit?: {min: number; max: number; mode: string};
  imageHeight?: number;
  imageUrl?: string;
  imageShape?: any;
  imageSize?: any;
};

export const FormattedTextWithImage = ({
  alignment,
  imageUrl,
  lang,
  text,
  maxLength,
  richText,
  clickToZoom,
  textfit,
}: FormattedTextWithImageProps) => {
  // Container
  return (
    <div
      className={cn(
        'relative flex items-center justify-between [flex:0_0_100%]',
        {
          'items-center': alignment && alignment === Position.Center,
          'items-start': alignment && alignment === Position.Top,
        }
      )}>
      {/* render text */}
      {text !== undefined && text !== '' && lang ? (
        <FormattedText
          className="FormattedTextWithImage-wrapper"
          lang={lang}
          maxLength={maxLength}
          richText={richText}
          text={text}
          textfit={textfit}
        />
      ) : null}

      {/* For render image if exist */}
      {imageUrl ? (
        // ImageWrapper
        // "./app/j/components/Image.tsx"
        <div className="i172n7x2"></div>
      ) : null}
    </div>
  );
};
