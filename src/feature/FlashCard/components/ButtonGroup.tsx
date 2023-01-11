import React from 'react';
import cn from 'classnames';

type ButtonGroupProps = {
  isHidden?: boolean;
  onKnow?: (e?: any) => void;
  onDontKnow?: (e?: any) => void;
};

const normalObj = {
  'aria-disabled': false,
  role: 'button',
  tabIndex: 0,
};
const disableObj = {
  c: 'cursor-auto opacity-50 [transition:_all_.5s_ease] [-webkit-transition:_all_.5s_ease]',
  'aria-disabled': true,
  role: 'button',
  tabIndex: -1,
};

const AnswerControls = ({
  ariaLabel,
  children,
  onClick,
  isDisabled = false,
}: {
  ariaLabel: string;
  children?: React.ReactNode;
  isDisabled?: boolean;
  onClick: (e: any) => void;
}) => {
  const buttonObj = isDisabled ? disableObj : normalObj;

  return (
    <div
      aria-label={ariaLabel}
      onClick={onClick}
      className={cn(
        'text-[#303545] dark:text-[#edeff4] border-[.125rem] border-solid border-[#edeff4] dark:border-[#939bb4] rounded-lg flex items-center relative justify-center w-full mb-4 p-4 font-semibold',
        'max-[48rem]:max-w-none',
        'focus:border-[#939bb4] dark:focus:border-[#edeff4] focus:outline-none',
        'hover:border-[#939bb4] dark:hover:border-[#edeff4] hover:outline-none',
        (buttonObj as any).c ?? null
      )}
      {...buttonObj}>
      {children}
    </div>
  );
};

export const ButtonGroup = ({
  onDontKnow,
  onKnow,
  isHidden = false,
}: ButtonGroupProps) => {
  return (
    <div className="flex gap-4 justify-around">
      <AnswerControls ariaLabel="1" isDisabled={isHidden} onClick={onDontKnow!}>
        Undo Card
      </AnswerControls>

      <AnswerControls ariaLabel="1" isDisabled={isHidden} onClick={onKnow!}>
        Next Card
      </AnswerControls>
    </div>
  );
};
