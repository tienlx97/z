import React from 'react';
import cn from 'classnames';
import {useMultipleChoiceQuestion} from '../context/MultipleChoideQuestionContext';

export const ContinueButton = ({onClick}: {onClick: any}) => {
  const [state] = useMultipleChoiceQuestion();

  return (
    // BottomBarContainer
    <div
      className={cn(
        'z-[401] w-full fixed px-6 left-0 h-20 [box-shadow:0_-.25rem_1rem_#30354514] bottom-[-5.3125rem] bg-[#1a1d28] [animation:slideup-b1jcf4jl_.4s_ease-in_1s_forwards] [-webkit-animation:slideup-b1jcf4jl_.4s_ease-in_1s_forwards]',
        '[@media(max-width:48rem)]:px:0',
        '[@media(max-width:38.75rem)]:px:0 [@media(max-width:38.75rem)]:h-[5.25rem]'
      )}
      aria-live="polite">
      {/* ContentContainer */}
      <div
        className={cn(
          'p-0 m-auto justify-between h-full flex items-center max-[52.5rem]',
          'lg:w-full lg:p-6 lg:max-w-[45rem] lg:justify-center',
          '[@media(max-width:38.75rem)]:p-4 [@media(max-width:38.75rem)]:max-w-[unset]'
        )}>
        <div className="w-full max-w-[unset] flex-col-reverse items-center flex">
          <div className="w-full">
            <button
              type="button"
              onClick={onClick}
              aria-label="Continue"
              className="bg-[#4255ff] text-white w-full px-6 py-3 text-base rounded-lg font-semibold min-h-[3rem] border-none cursor-pointer">
              <span> {state.stop ? 'Done' : 'Continue'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
