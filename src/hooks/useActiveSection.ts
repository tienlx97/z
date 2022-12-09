/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import {useRouter} from 'next/router';

export function useActiveSection(): 'blog' | 'japan' | 'home' {
  const {asPath} = useRouter();
  if (asPath.startsWith('/japan')) {
    return 'japan';
  } else if (asPath.startsWith('/blog')) {
    return 'blog';
  } else {
    return 'home';
  }
}
