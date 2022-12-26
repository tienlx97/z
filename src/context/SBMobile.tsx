/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import {createContext, useContext} from 'react';

export const SBMobileContext = createContext<
  {japan: any; blog: any} | undefined
>(undefined);

// context consumer hook
export const useSBMobileContext = () => {
  // get the context
  const context = useContext(SBMobileContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error('useSBMobileContext was used outside of its Provider');
  }

  return context;
};
