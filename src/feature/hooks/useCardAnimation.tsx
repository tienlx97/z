import React, {useState, useId} from 'react';
import cn from 'classnames';

const animationName = {
  previous: {
    enter: (e: any) => (
      <div
        onAnimationEnd={e.onAnimationEnd}
        style={{'--a131s139-1': '-16%', '--a131s139-0': '16deg'} as any}
        className="[-webkit-animation:slide-a131s139_.24s_ease] [animation:slide-a131s139_.24s_ease]">
        {e.children}
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

  know: {
    exit: ({
      onAnimationEnd,
    }: {
      children: React.ReactNode;
      onAnimationEnd: any;
    }) => {
      return (
        <article
          key={Math.floor(Math.random() * 1000)}
          style={
            {
              '--animation-distance': 125 / 16 + 'rem',
              '--animation-rotation': '-2deg',
              '--animation-base-color': '#98F1D1',
            } as any
          }
          className={cn(
            // StudyCardLayout0
            'bg-[#f6f7fb] dark:bg-[#2e3856] rounded-lg flex flex-col justify-between my-0 mx-auto max-w-[52.5rem] min-h-[29.25rem] py-5 px-6 sm:p-4 lg:py-6 lg:px-8 mb-0',
            'KnowExitAnimation z-[999] w-full min-h-[unset] max-h-[unset] leading-5 tracking-normal justify-center h-full font-bold text-[1.5rem]  items-center'
          )}
          onAnimationEnd={onAnimationEnd}
          // StudyCardWrapper : here
        >
          ds
        </article>
      );
    },
  },
};

export const useCardAnimation = () => {
  const [animations, setAnimations] = useState();
  return {
    animations: animations,
    animate: (e: any) => {
      setAnimations(() => (animationName as any)[e]);
    },
    onAnimationEnd: () => setAnimations(undefined),
  };
};
