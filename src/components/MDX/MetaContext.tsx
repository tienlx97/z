/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import {createContext, useContext} from 'react';

export type MetaItem = {
  id: string;
};

export const MetaContext = createContext<MetaItem | undefined>(undefined);

// context consumer hook
export const useMetaContext = () => {
  // get the context
  const context = useContext(MetaContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error('useMetaContext was used outside of its Provider');
  }

  return context;
};
