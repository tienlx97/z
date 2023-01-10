import React from 'react';
import cn from 'classnames';

type ButtonGroupProps = {
  isHidden?: boolean;
  onKnow?: (e?: any) => void;
  onDontKnow?: () => void;
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
        'text-[#edeff4] border-[.125rem] border-solid border-[#346f90] rounded-lg flex items-center relative justify-center w-full mb-4 p-4 font-semibold',
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
      <AnswerControls ariaLabel="1" isDisabled={isHidden} onClick={onKnow!}>
        Next Question
      </AnswerControls>
    </div>
  );
};
