import React from 'react';
import cn from 'classnames';

export default function JaWL({
  children,
  m = 5,
  c = 'fit',
}: {
  children: React.ReactNode;
  m?: number;
  c?: 'fit' | 'fill';
}) {
  const arr = React.Children.toArray(children).filter(
    (child) => child !== '\n'
  );

  const append = m - arr.length;

  return (
    <>
      <div
        className={cn(`grid-line`, {
          'grid-1': c === 'fill',
        })}>
        {arr.map((item, index) => {
          return <React.Fragment key={index}>{item}</React.Fragment>;
        })}

        {append !== 0 &&
          Array.from(Array(append), (e, i) => {
            return <span key={i} />;
          })}
      </div>
      <br />
    </>
  );
}
