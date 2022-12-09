import * as React from 'react';

export const useElementSize = (elementRef: any) => {
  const [elementSize, setElementSize] = React.useState({
    width: 0,
    height: 0,
  });
  const listener = React.useCallback(
    () =>
      elementRef?.current &&
      setElementSize({
        width: elementRef.current.offsetWidth,
        height: elementRef.current.offsetHeight,
      }),
    [elementRef]
  );
  React.useEffect(() => {
    listener();
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, []);
  return elementSize;
};
