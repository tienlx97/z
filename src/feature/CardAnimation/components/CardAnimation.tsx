import React, {useEffect} from 'react';
import cn from 'classnames';
import usePrevious from 'hooks/usePrevious';
import {QuestionGrid} from './QuestionGrid';
const jsx = require('react/jsx-runtime');

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

  let animationExitVariable, animationEnterVariable;
  const [Comp, setComp] = React.useState<React.ReactNode>();

  const AnimationExitComponent =
    null == (animationExitVariable = controller.animations)
      ? undefined
      : animationExitVariable.exit;

  const AnimationEnterComponent = Comp
    ? null == (animationEnterVariable = controller.animations)
      ? undefined
      : animationEnterVariable.enter
    : null;

  const onAnimationEnd = () => {
    setComp(undefined), controller.onAnimationEnd();
  };

  return (
    useEffect(() => {
      previousChildren && setComp(previousChildren);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [children.key, previousChildren]),
    jsx.jsxs(QuestionGrid, {
      className:
        'min-h-[29.25rem] grid [perspective:62.5rem] [-ms-perspective:62.5rem] [-moz-perspective:62.5rem] [-webkit-perspective:62.5rem]',
      children: [
        Comp !== undefined && Comp !== null && AnimationExitComponent
          ? jsx.jsx(Previous, {
              children: jsx.jsx(AnimationExitComponent, {
                onAnimationEnd: onAnimationEnd,
                children: Comp,
              }),
            })
          : null,

        jsx.jsx(
          Current,
          {
            children: AnimationEnterComponent
              ? jsx.jsx(AnimationEnterComponent, {
                  onAnimationEnd: onAnimationEnd,
                  children: children,
                })
              : children,
          },
          children.key
        ),
      ],
    })
  );
};
//   return (
//     useEffect(() => {
//       previousChildren && setComp(previousChildren);
//     }, [children.key, previousChildren]),
//     (
//       <QuestionGrid className="min-h-[29.25rem] grid [perspective:62.5rem] [-ms-perspective:62.5rem] [-moz-perspective:62.5rem] [-webkit-perspective:62.5rem]">
//         {Comp && AnimationExit && (
//           <Previous>
//             <AnimationExit onAnimationEnd={onAnimationEnd}>
//               {Comp}
//             </AnimationExit>
//           </Previous>
//         )}
//         <Current key={children.key}>
//           {AnimationEnter ? (
//             <AnimationEnter onAnimationEnd={onAnimationEnd}>
//               {children}
//             </AnimationEnter>
//           ) : (
//             children
//           )}
//         </Current>
//       </QuestionGrid>
//     )
//   );
// };
