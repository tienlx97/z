import React, {useState, useId, useEffect, useRef} from 'react';
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
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const counter = useRef(0);
      console.log(counter.current++);

      return (
        <article
          key={Math.floor(Math.random() * 1000)}
          style={
            {
              '--z1xlk8pd-3': 125 / 16 + 'rem',
              '--z1xlk8pd-4': '-2deg',
              '--z1xlk8pd-5': '#98F1D1',
            } as any
          }
          className={cn(
            // StudyCardLayout0
            '[transition:_all_.5s_ease] [-webkit-transition:_all_.5s_ease] py-6 px-8 min-h-[29.25rem] max-w-[52.5rem] [margin:0_auto_var(--svwhkoh-3)] justify-between flex-col flex [box-shadow:0_.25rem_1rem_0_var(--shadow-with-opacity)] rounded-lg bg-[#f6f7fb] dark:bg-[#2e3856] sm:p-4 lg:py-6 lg:px-8 mb-0',
            'KnowExitAnimation'
          )}
          onAnimationEnd={onAnimationEnd}>
          Know
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
