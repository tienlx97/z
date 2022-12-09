/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import * as React from 'react';
import ButtonLink from 'components/ButtonLink';
import {IconNavArrow} from 'components/Icon/IconNavArrow';

export function Footer() {
  return (
    <>
      <div className="self-stretch w-full">
        <div className="mx-auto w-full px-5 sm:px-12 md:px-12 pt-10 md:pt-12 lg:pt-10">
          <hr className="max-w-7xl mx-auto border-border dark:border-border-dark" />
          <div className="flex flex-col items-center m-4 p-4">
            <p className="font-bold text-primary dark:text-primary-dark text-lg mb-4">
              How do you like these docs?
            </p>
            <div>
              <ButtonLink
                href="https://forms.gle/86J6LhYXZKbYCT5r6"
                className="mt-1"
                type="primary"
                size="md"
                target="_blank">
                Take our survey!
                <IconNavArrow
                  displayDirection="right"
                  className="inline ml-1"
                />
              </ButtonLink>
            </div>
          </div>
          <hr className="max-w-7xl mx-auto border-border dark:border-border-dark" />
        </div>
      </div>
    </>
  );
}
