import React, {useEffect, useRef, useState} from 'react';
import {useRouter} from 'next/router';
import {useI18n} from 'next-localization';
import cn from 'classnames';
import {Button} from '../../Button';
import {H4} from '../Heading';
import {IconChevron} from 'components/Icon/IconChevron';
import {IconCodeBlock} from 'components/Icon/IconCodeBlock';
import {IconCulture} from 'components/Icon/IconCulture';
import {IconVocal} from 'components/Icon/IconVocal';
import {IconBonusPhrase} from 'components/Icon/IconBonusPhrase';
import {IconSkit} from 'components/Icon/IconSkit';
import {IconTryItOut} from 'components/Icon/IconTryItOut';
import {IconKeyPhrase} from 'components/Icon/IconKeyPhrase';
import {IconKanji} from 'components/Icon/IconKanji';
import {IconUseIt} from 'components/Icon/IconUseIt';
import {IconQuiz} from 'components/Icon/IconQuiz';

export default function Expandable({
  children,
  type,
}: {
  children: React.ReactNode;
  type:
    | 'skit'
    | 'vocalbulary'
    | 'key-phrase'
    | 'use-it'
    | 'try-it-out'
    | 'bonus-phrase'
    | 'kanji'
    | 'culture'
    | 'trip-tip'
    | 'quiz';
}) {
  const isSkit = type === 'skit';
  const isVocalbulary = type === 'vocalbulary';
  const isKeyPhrase = type === 'key-phrase';
  const isBonus = type === 'bonus-phrase';
  const isUseIt = type === 'use-it';
  const isTryItOut = type === 'try-it-out';
  const isKanji = type === 'kanji';
  const isCulture = type === 'culture';
  const isQuiz = type === 'quiz';

  const {asPath} = useRouter();
  const {t} = useI18n();
  const shouldAutoExpand = type === asPath.split('#')[1];
  const queuedExpandRef = useRef<boolean>(shouldAutoExpand);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (queuedExpandRef.current) {
      queuedExpandRef.current = false;
      setIsExpanded(true);
    }
  }, []);

  return (
    <details
      open={isExpanded}
      onToggle={(e: any) => {
        setIsExpanded(e.currentTarget!.open);
      }}
      // my-12 rounded-lg shadow-inner relative
      className={cn(
        '-mx-5 rounded-none sm:mx-auto sm:rounded-lg my-8 shadow-inner relative',
        {
          'dark:bg-opacity-20 dark:bg-blue-600 bg-blue-5': isSkit,
          'dark:bg-opacity-20 dark:bg-lime-600 bg-lime-50': isVocalbulary,
          'dark:bg-opacity-20 dark:bg-green-60 bg-green-5': isKeyPhrase,
          'dark:bg-opacity-20 dark:bg-yellow-600 bg-yellow-5': isUseIt,
          'dark:bg-opacity-20 dark:bg-amber-600 bg-amber-50': isTryItOut,
          'dark:bg-opacity-20 dark:bg-pink-600 bg-pink-50': isBonus,
          'dark:bg-opacity-20 dark:bg-indigo-600 bg-indigo-50':
            isKanji || isQuiz,
          'dark:bg-opacity-20 dark:bg-sky-600 bg-sky-50': isCulture,
        }
      )}>
      <summary
        className="list-none p-8 flex flex-row justify-between items-center"
        tabIndex={-1 /* there's a button instead */}
        onClick={(e) => {
          // We toggle using a button instead of this whole area,
          // with an escape case for the header anchor link
          if (!(e.target instanceof SVGElement)) {
            e.preventDefault();
          }
        }}>
        <div
          className={cn('uppercase font-bold flex items-center text-sm', {
            'dark:text-blue-300 text-blue-600': isSkit,
            'dark:text-lime-300 text-lime-600': isVocalbulary,
            'dark:text-green-30 text-green-60': isKeyPhrase,
            'dark:text-amber-300 text-amber-600': isTryItOut,
            'dark:text-yellow-300 text-yellow-600': isUseIt,
            'dark:text-pink-300 text-pink-600': isBonus,
            'dark:text-indigo-300 text-indigo-500': isKanji || isQuiz,
            'dark:text-sky-300 text-sky-500': isCulture,
          })}>
          {isSkit && (
            <>
              <IconSkit className="inline mr-2 dark:text-blue-300 text-blue-500" />
              <H4 as="h2" id={type}>
                {t('mdx.expandable.skit')}
              </H4>
            </>
          )}

          {isVocalbulary && (
            <>
              <IconVocal className="inline mr-2 dark:text-lime-300 text-lime-500" />
              <H4 as="h2" id={type}>
                {t('mdx.expandable.vocalbulary')}
              </H4>
            </>
          )}
          {isKeyPhrase && (
            <>
              <IconKeyPhrase className="inline mr-2 dark:text-lime-30 text-lime-50" />
              <H4 as="h2" id={type}>
                {t('mdx.expandable.key_phrase')}
              </H4>
            </>
          )}

          {isUseIt && (
            <>
              <IconUseIt className="inline mr-2 dark:text-yellow-300 text-yellow-500" />
              <H4 as="h2" id={type}>
                {t('mdx.expandable.try_it_out')}
              </H4>
            </>
          )}
          {isTryItOut && (
            <>
              <IconTryItOut className="inline mr-2 dark:text-amber-300 text-amber-500" />
              <H4 as="h2" id={type}>
                {t('mdx.expandable.use_it')}
              </H4>
            </>
          )}
          {isBonus && (
            <>
              <IconBonusPhrase className="inline mr-2 dark:text-pink-300 text-pink-500" />
              <H4 as="div" id={type}>
                {t('mdx.expandable.bonus_phrase')}
              </H4>
            </>
          )}
          {isKanji && (
            <>
              <IconKanji className="inline mr-2 dark:text-indigo-300 text-indigo-400" />
              <H4 as="h2" id={type}>
                {t('mdx.expandable.kanji')}
              </H4>
            </>
          )}
          {isCulture && (
            <>
              <IconCulture className="inline mr-2 dark:text-sky-300 text-sky-400" />
              <H4 as="h2" id={type}>
                {t('mdx.expandable.culture')}
              </H4>
            </>
          )}
          {isQuiz && (
            <>
              <IconQuiz className="inline mr-2 dark:text-indigo-300 text-indigo-400" />
              <H4 as="h2" id={type}>
                {t('mdx.expandable.quiz')}
              </H4>
            </>
          )}
        </div>
        <Button
          active={true}
          className={cn('w-[100px]', '-mr-5 sm:mr-0 px-2 sm:px-4', {
            'bg-blue-700 border-blue-700 hover:bg-blue-600 focus:bg-blue-700 active:bg-blue-700':
              isSkit,
            'bg-lime-700 border-lime-700 hover:bg-lime-600 focus:bg-lime-700 active:bg-lime-700':
              isVocalbulary,
            'bg-green-50 border-green-50 hover:bg-green-30 focus:bg-green-50 active:bg-green-50':
              isKeyPhrase,
            'bg-amber-700 border-amber-700 hover:bg-amber-600 focus:bg-amber-700 active:bg-amber-700':
              isTryItOut,
            'bg-yellow-700 border-yellow-700 hover:bg-yellow-600 focus:bg-yellow-700 active:bg-yellow-700':
              isUseIt,
            'bg-pink-700 border-pink-700 hover:bg-pink-600 focus:bg-pink-700 active:bg-pink-700':
              isBonus,
            'bg-indigo-700 border-indigo-700 hover:bg-indigo-600 focus:bg-indigo-700 active:bg-indigo-700':
              isKanji || isQuiz,
            'bg-sky-700 border-sky-700 hover:bg-sky-600 focus:bg-sky-700 active:bg-sky-700':
              isCulture,
          })}
          onClick={() => setIsExpanded((current) => !current)}>
          <span className="mr-1">
            <IconChevron displayDirection={isExpanded ? 'up' : 'down'} />
          </span>
          <span className="w-full text-center">
            {' '}
            {isExpanded
              ? t('mdx.expandableexample.hide_details')
              : t('mdx.expandableexample.show_details')}
          </span>
        </Button>
      </summary>
      <div
        className={cn('py-3 px-3 sm:p-8 border-t', {
          'dark:border-blue-600 border-blue-500': isSkit,
          'dark:border-lime-600 border-lime-500': isVocalbulary,
          'dark:border-green-60 border-green-50': isKeyPhrase,
          'dark:border-amber-600 border-amber-500': isTryItOut,
          'dark:border-yellow-600 border-yellow-500': isUseIt,
          'dark:border-pink-600 border-pink-500': isBonus,
          'dark:border-indigo-600 border-indigo-100 ': isKanji || isQuiz,
          'dark:border-sky-600 border-sky-100 ': isCulture,
        })}>
        {children}
      </div>
    </details>
  );
}
