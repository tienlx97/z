import React, {useState, useId} from 'react';
import cn from 'classnames';

const animationName = {
  previous: {
    enter: ({
      children,
      onAnimationEnd,
    }: {
      children: React.ReactNode;
      onAnimationEnd: React.AnimationEventHandler<HTMLDivElement> | undefined;
    }) => (
      <div
        onAnimationEnd={onAnimationEnd}
        style={{'--a131s139-1': '-16%', '--a131s139-0': '16deg'} as any}
        className="[-webkit-animation:slide-a131s139_.24s_ease] [animation:slide-a131s139_.24s_ease]">
        {children}
      </div>
    ),
  },

  next: {
    enter: (e: any) => (
      <div
        onAnimationEnd={e.onAnimationEnd}
        style={{'--a131s139-1': '16%', '--a131s139-0': '-16deg'} as any}
        className="[-webkit-animation:slide-a131s139_.24s_ease] [animation:slide-a131s139_.24s_ease]">
        {e.children}
      </div>
    ),
  },

  dontKnow: {
    exit: ({
      onAnimationEnd,
    }: {
      children: React.ReactNode;
      onAnimationEnd: any;
    }) => {
      return (
        <article
          className={cn(
            // StudyCardLayout0
            '[--shadow-with-opacity:#30354514] dark:[--shadow-with-opacity:#939bb414]',
            '[transition:_all_.5s_ease] [-webkit-transition:_all_.5s_ease] py-6 px-8 min-h-[29.25rem] max-w-[52.5rem] [margin:0_auto_var(--svwhkoh-3)] justify-between flex-col flex [box-shadow:0_.25rem_1rem_0_var(--shadow-with-opacity)] rounded-lg bg-[#f6f7fb] dark:bg-[#2e3856] sm:p-4 lg:py-6 lg:px-8 mb-0',
            'ShuffleOutCardAnimation',
            '[--animation-distance:-7.8125rem] [--animation-rotation:2deg] [--animation-base-color:#FFC38C]',
            '!text-[50px]'
          )}
          onAnimationEnd={onAnimationEnd}>
          Still learning
        </article>
      );
    },
  },

  know: {
    exit: ({
      onAnimationEnd,
    }: {
      children: React.ReactNode;
      onAnimationEnd: any;
    }) => {
      return (
        <article
          className={cn(
            // StudyCardLayout0
            '[--shadow-with-opacity:#30354514] dark:[--shadow-with-opacity:#939bb414]',
            '[transition:_all_.5s_ease] [-webkit-transition:_all_.5s_ease] py-6 px-8 min-h-[29.25rem] max-w-[52.5rem] [margin:0_auto_var(--svwhkoh-3)] justify-between flex-col flex [box-shadow:0_.25rem_1rem_0_var(--shadow-with-opacity)] rounded-lg bg-[#f6f7fb] dark:bg-[#2e3856] sm:p-4 lg:py-6 lg:px-8 mb-0',
            'ShuffleOutCardAnimation',
            '[--animation-distance:7.8125rem] [--animation-rotation:-2deg] [--animation-base-color:#98f1d1]',
            '!text-[50px]'
          )}
          onAnimationEnd={onAnimationEnd}>
          Know
        </article>
      );
    },
  },
};

export const useCardAnimation = () => {
  const [animations, setAnimations] = useState(undefined);
  return {
    animations: animations,
    animate: (e: any) => {
      setAnimations(() => (animationName as any)[e]);
    },
    onAnimationEnd: () => setAnimations(undefined),
  };
};
