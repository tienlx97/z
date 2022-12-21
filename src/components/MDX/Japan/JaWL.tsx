import React from 'react';

export default function JaWL({children}: {children: React.ReactNode}) {
  const arr = React.Children.toArray(children).filter(
    (child) => child !== '\n'
  );

  return (
    <>
      <div className="grid-line">
        {arr.map((item, index) => {
          return (
            <span className="font-ja lg:text-2xl" key={index}>
              {item}
            </span>
          );
        })}
      </div>
      <br />
    </>
  );
}
