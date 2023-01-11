import React, {useEffect} from 'react';
import cn from 'classnames';

export const QuestionGrid = ({
  className,
  ...prop
}: JSX.IntrinsicElements['div']) => {
  return (
    <div
      className={cn('grid [grid-auto-rows:minmax(0,1fr)]', className)}
      {...prop}
    />
  );
};

export const QuestionGrid_Card = ({
  className,
  ...props
}: JSX.IntrinsicElements['div']) => {
  return (
    <div
      className={cn(
        'bg-[#fff] dark:bg-[#2e3856] py-8 px-6 rounded-lg',
        'QuestionGridCard',
        className
      )}
      {...props}
    />
  );
};

export const QuestionGrid_TopLeft = ({
  className,
  ...props
}: JSX.IntrinsicElements['div']) => {
  return (
    <div className={cn('[grid-row:1] [grid-column:1]', className)} {...props} />
  );
};

export const QuestionGrid_TopRight = ({
  className,
  ...props
}: JSX.IntrinsicElements['div']) => {
  return (
    <div className={cn('[grid-row:1] [grid-column:3]', className)} {...props} />
  );
};

export const QuestionGrid_Center = ({
  className,
  ...props
}: JSX.IntrinsicElements['div']) => {
  return (
    <div className={cn('[grid-row:1] [grid-column:2]', className)} {...props} />
  );
};

export const QuestionGrid_Elements = ({
  className,
  ...props
}: JSX.IntrinsicElements['div']) => {
  return (
    <div
      className={cn(
        'relative min-h-0 [grid-row:2] [grid-column:1/span_3]',
        className
      )}
      {...props}
    />
  );
};

export const QuestionGrid_Options = ({
  className,
  ...props
}: JSX.IntrinsicElements['div']) => {
  return (
    <div
      className={cn('[grid-row:3] [grid-column:1/span_3]', className)}
      {...props}
    />
  );
};
