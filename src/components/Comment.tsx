import React, {useEffect, useState} from 'react';
import cn from 'classnames';
import {IconClose} from './Icon/IconClose';
import Giscus from '@giscus/react';
import {IconGitHub} from './Icon/IconGitHub';
import {useI18n} from 'next-localization';

const THEME_MAPPING = {
  light: 'light',
  dark: 'dark',
};

export default function Comment({
  isOpenComment,
  onClose,
}: {
  isOpenComment: boolean;
  onClose: any;
}) {
  const [preferredTheme, setPreferredTheme] = useState('light');

  const {locale} = useI18n();

  useEffect(() => {
    // Perform localStorage action
    const item = localStorage.getItem('theme');
    item !== null && setPreferredTheme(item);
  }, [isOpenComment]);

  return (
    <div>
      {/* blur */}
      <div
        onClick={onClose}
        className={cn(
          'comment-blur-animation w-full h-full fixed cursor-pointer opacity-0 top-0 left-0 pointer-events-none bg-[rgba(101,108,133,.8)] dark:bg-[rgba(52,58,70,.8) z-[100] ',
          {
            'pointer-events-auto opacity-100': isOpenComment,
          }
        )}
      />
      <div
        className={cn(
          // 'comment-animation fixed box-border h-full opacity-100 top-0 w-[414px] px-6 z-[520]  bg-[#fff] dark:bg-[#23272f] left-[100%] overflow-auto translate-x-0 invisible',
          'comment-animation  box-border h-full opacity-100 top-0 fixed bg-[#fff] dark:bg-[#23272f]  overflow-auto invisible z-[520] px-6',
          'left-0 translate-y-[100%] w-[100%] rounded-t-[20px]',
          'lg:rounded-t-[0px] lg:w-[450px] lg:left-[100%] lg:translate-y-0 lg:translate-x-0',
          {
            '!visible translate-y-[30px] lg:!translate-y-0 lg:translate-x-[-450px]':
              isOpenComment,
          }
        )}>
        <div className="py-[24px] px-0 flex flex-row justify-between items-center">
          <IconGitHub />
          <h1>Comment</h1>
          <button onClick={onClose}>
            <IconClose />
          </button>
        </div>
        {/* commment lib */}
        <Giscus
          repo="tienlx97/z"
          repoId="R_kgDOIldgSw"
          category="Show and tell"
          categoryId="DIC_kwDOIldgS84CTErr"
          theme={THEME_MAPPING[preferredTheme as keyof typeof THEME_MAPPING]}
          mapping="og:title"
          strict="1"
          emitMetadata="1"
          inputPosition="top"
          lang={locale() === 'en' ? 'en' : 'vi'}
          loading="lazy"
          reactionsEnabled="1"
        />
      </div>
    </div>
  );
}
