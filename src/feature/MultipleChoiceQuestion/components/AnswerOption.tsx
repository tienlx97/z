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
      className={cn(
        'break-words w-full relative p-4 leading-6 tracking-normal [grid-template-columns:auto_1fr] font-normal text-base grid cursor-pointer rounded-lg border-[.125rem] border-solid border-[#646f90] items-center text-[#edeff4]',
        'focus:border-[#939bb4] focus:outline-none',
        'hover:border-[#939bb4] hover:outline-none',
        '[@media(max-width:48rem)]:max-w-full',
        {
          'pointer-events-none opacity-100 cursor-auto bg-[#19804f] [transition:all_.5s_ease] border-[#c8ecdb]  focus:border-[#c8ecdb] hover:border-[#c8ecdb]':
            Variant.Correct === variant,
          'pointer-events-none opacity-50 cursor-auto [transition:all_.5s_ease]  border-[#282e3e]  focus:border-[#282e3e] hover:border-[#282e3e]':
            Variant.Disabled === variant,
          'pointer-events-none opacity-100 cursor-auto bg-[#2e3856] [transition:all_.5s_ease] border-[#c34632]  focus:border-[#c34632] hover:border-[#c34632]':
            Variant.Incorrect === variant,
          'bg-[#282e3e] hover:border-[#4257b2] focus:border-[#4257b2] border-[#4257b2]':
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
              'w-6 mr-4 leading-6 tracking-normal h-6 font-semibold text-[.875rem] [flex:0_0_1.5rem] text-[#d9dde8] bg-[#303545] rounded-[50%]',
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
