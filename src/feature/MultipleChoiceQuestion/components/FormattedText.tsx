import React from 'react';
import cn from 'classnames';
import {ellipsis} from '../utils/ellipsis';
import {Textfit} from 'react-textfit';

type FormattedTextProps = {
  className: string;
  lang: string;
  onClick?: () => void;
  richText: any;
  text: string;
  textfit?: any;
  maxLength?: number;
};

type RawTextProps = {
  text: string;
  maxLength?: number;
  lang: string;
};

const RawText = ({lang, maxLength, text}: RawTextProps) => {
  return (
    <React.Fragment>
      {text
        ? (function (txt: string) {
            let currText = txt;

            if (maxLength) {
              currText = ellipsis(txt, maxLength);
            }

            let index = 0;

            return currText.split(/(\r\n|\n\r|\r|\n)/).map((chr) =>
              chr.match(/(\r\n|\n\r|\r|\n)/) ? (
                <br key={index++} />
              ) : lang !== 'math' && lang !== 'chem' ? (
                (function (chr: string) {
                  const t = chr.split(/\*[^*\n\r]+\*/g);
                  const s = [];
                  let n = 0;

                  if (t[n]) {
                    s.push(t[n]);
                  }
                  n += 1;

                  for (let a = /\*([^*\n\r]+)\*/g.exec(chr); a; ) {
                    s.push(<b>{a[1]}</b>);
                    if (t[n]) {
                      s.push(t[n]);
                    }
                    n++;
                    a = /\*([^*\n\r]+)\*/g.exec(chr);
                  }

                  return s;
                })(chr)
              ) : (
                chr
              )
            );
          })(text)
        : '...'}
    </React.Fragment>
  );
};

export const FormattedText = ({
  className,
  lang,
  onClick,
  richText,
  text,
  textfit,
  maxLength,
}: FormattedTextProps) => {
  const clazz = cn('FormattedText', 'notranslate', className, `lang-${lang}`);

  const TextRendering =
    typeof window != 'undefined' && richText ? (
      // for render rich text
      <></>
    ) : (
      // for rander normal text (string only)
      <RawText lang={lang} maxLength={maxLength} text={text} />
    );

  // render text fit line or multiple line
  // using react-textfit
  if (textfit) {
    const textfitOptions = typeof textfit === 'boolean' ? {} : textfit;

    return (
      // ./node_modules/react-textfit/lib/index.js
      <Textfit
        {...textfitOptions}
        aria-label={text}
        className={clazz}
        onClick={onClick}>
        {TextRendering}
      </Textfit>
    );
  }

  return (
    <div aria-label={text} className={clazz} onClick={onClick}>
      {TextRendering}
    </div>
  );
};
