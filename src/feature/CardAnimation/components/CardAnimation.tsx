import React, {useEffect} from 'react';
import cn from 'classnames';
import usePrevious from 'hooks/usePrevious';
import {QuestionGrid} from './QuestionGrid';

type CardAnimationProps = {
  children: React.ReactElement;
  controller: any;
};

const AnimationChild = ({
  className,
  ...props
}: JSX.IntrinsicElements['div']) => {
  return (
    <QuestionGrid
      className={cn(
        'grid [transform-style:preserve-3d] [-ms-transform-style:preserve-3d] [-webkit-transform-style:preserve-3d] [grid-row:1/1] [grid-column:1/1]',
        className
      )}
      {...props}
    />
  );
};

const Previous = ({className, ...props}: JSX.IntrinsicElements['div']) => {
  return <AnimationChild className={cn('z-[1]', className)} {...props} />;
};

const Current = ({className, ...props}: JSX.IntrinsicElements['div']) => {
  return <AnimationChild className={cn('z-[0]', className)} {...props} />;
};

export const CardAnimation = ({children, controller}: CardAnimationProps) => {
  const previousChildren = usePrevious(children);

  let cAnimations, tAnimations;
  const [state1, setState1] = React.useState<any>();

  const AnimationExit: keyof JSX.IntrinsicElements =
    null == (cAnimations = controller.animations)
      ? undefined
      : cAnimations.exit;

  const AnimationEnter: keyof JSX.IntrinsicElements = state1
    ? null == (tAnimations = controller.animations)
      ? undefined
      : tAnimations.enter
    : null;

  const onAnimationEnd = () => {
    setState1(undefined);
    controller.onAnimationEnd();
  };

  useEffect(() => {
    previousChildren && setState1(previousChildren);
  }, [children.key]);

  return (
    <QuestionGrid className="min-h-[29.25rem] grid [perspective:62.5rem] [-ms-perspective:62.5rem] [-moz-perspective:62.5rem] [-webkit-perspective:62.5rem]">
      {state1 && AnimationExit ? (
        <Previous>
          <AnimationExit onAnimationEnd={onAnimationEnd}>
            {state1}
          </AnimationExit>
        </Previous>
      ) : null}
      <Current>
        {AnimationEnter ? (
          <AnimationEnter onAnimationEnd={onAnimationEnd}>
            {children}
          </AnimationEnter>
        ) : (
          children
        )}
      </Current>
    </QuestionGrid>
  );
};
