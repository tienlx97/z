import React from 'react';

export default function JaWL({
  children,
  m = 5,
}: {
  children: React.ReactNode;
  m?: number;
}) {
  const arr = React.Children.toArray(children).filter(
    (child) => child !== '\n'
  );

  const append = m - arr.length;

  return (
    <>
      <div className="grid-line">
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
