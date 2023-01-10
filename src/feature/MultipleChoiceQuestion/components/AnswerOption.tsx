import React from 'react';
import cn from 'classnames';
import {AssemblyIcon} from './AssemblyIcon';

export const Variant = {
  Default: 'default',
  Correct: 'correct',
  Disabled: 'disabled',
  Incorrect: 'incorrect',
  Selected: 'selected',
  SkippedCorrect: 'skippedCorrect',
  SkippedIncorrect: 'skippedIncorrect',
};

function VariantClazz(variant: string) {
  switch (variant) {
    case Variant.Correct:
      return 'cv1rd7s';
    case Variant.Disabled:
      return 'd9x7we0';
    case Variant.Incorrect:
      return 'i1p8x1gp';
    case Variant.Selected:
      return 'swjz05g';
    case Variant.SkippedCorrect:
    case Variant.SkippedIncorrect:
      return 's25jw3r';
    default:
      return null;
  }
}

type AnswerOptionCompProps = {
  children: React.ReactNode;
  hint?: any;
  onClick: () => void;
  variant?: string;
};

export const AnswerOption = ({
  children,
  hint,
  onClick,
  variant = Variant.Default,
}: AnswerOptionCompProps) => {
  const IconComp = (function (_variant: string) {
    return _variant === Variant.Correct ||
      _variant === Variant.SkippedCorrect ? (
      <AssemblyIcon icon="check" />
    ) : _variant === Variant.Incorrect ||
      _variant === Variant.SkippedIncorrect ? (
      <AssemblyIcon icon="x" />
    ) : null;
  })(variant);

  return (
    <section
      onClick={onClick}
      tabIndex={0}
      data-label={variant}
      className={cn(
        'break-words w-full relative p-4 leading-6 tracking-normal [grid-template-columns:auto_1fr] font-normal text-base grid cursor-pointer rounded-lg border-[.125rem] border-solid border-[#edeff4] dark:border-[#646f90] items-center text-[#303545] dark:text-[#edeff4]',
        // 'focus:border-[#939bb4] dark:focus:border-[#939bb4] focus:outline-none',
        'hover:border-[#939bb4] dark:hover:border-[#939bb4] hover:outline-none',
        '[@media(max-width:48rem)]:max-w-full',
        {
          'pointer-events-none opacity-100 cursor-auto bg-[#f2fbf6] dark:bg-[#19804f] [transition:all_.5s_ease] border-[#23b26d] focus:border-[#23b26d] hover:border-[#23b26d] dark:border-[#c8ecdb]  dark:focus:border-[#c8ecdb] dark:hover:border-[#c8ecdb]':
            Variant.Correct === variant,
          'pointer-events-none opacity-50 cursor-auto [transition:all_.5s_ease] border-[#d9dde8]  focus:border-[#d9dde8] hover:border-[#d9dde8]  dark:border-[#282e3e]  dark:focus:border-[#282e3e] dark:hover:border-[#282e3e]':
            Variant.Disabled === variant,
          'pointer-events-none opacity-100 cursor-auto bg-[#fff] dark:bg-[#2e3856] [transition:all_.5s_ease] border-[#ff9c8c]  focus:border-[#ff9c8c] hover:border-[#ff9c8c] dark:border-[#c34632]  dark:focus:border-[#c34632] dark:hover:border-[#c34632]':
            Variant.Incorrect === variant,
          'bg-[#eff3fb] dark:bg-[#282e3e] hover:border-[#4257b2] focus:border-[#4257b2] border-[#4257b2] dark:hover:border-[#4257b2] dark:focus:border-[#4257b2] dark:border-[#4257b2]':
            Variant.Selected === variant,
          'pointer-events-none opacity-100 cursor-auto bg-[#646f90] text-[#646f90] [transition:all_.5s_ease]':
            Variant.SkippedCorrect === variant ||
            Variant.SkippedIncorrect === variant,
        }
      )}>
      <div>
        {IconComp ? <div className="mr-5">{IconComp}</div> : null}
        {!IconComp && hint ? (
          <div
            className={cn(
              'w-6 mr-4 leading-6 tracking-normal h-6 font-semibold text-[.875rem] [flex:0_0_1.5rem] text-[#646f90] dark:text-[#d9dde8] bg-[#edeff4] dark:bg-[#303545] rounded-[50%]',
              'justify-center flex items-center'
            )}>
            {hint}
          </div>
        ) : null}
      </div>
      {children}
    </section>
  );
};
