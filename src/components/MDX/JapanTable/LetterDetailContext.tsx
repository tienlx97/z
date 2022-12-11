import * as React from 'react';

interface LetterDetailContextValue {
  showStrokeNumbering: boolean;
}

export const LetterDetailContext =
  React.createContext<LetterDetailContextValue>({
    showStrokeNumbering: false,
  });

// context consumer hook
export const useSVGContext = () => {
  // get the context
  const context = React.useContext(LetterDetailContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error('useSVGContext was used outside of its Provider');
  }

  return context;
};
