/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import {Suspense} from 'react';
import * as React from 'react';
import {useRouter} from 'next/router';
import {Nav} from './Nav';
import {RouteItem, SidebarContext} from './useRouteMeta';
import {useActiveSection} from 'hooks/useActiveSection';
import {Toc} from './Toc';
import blogEN from 'locales/sidebarBlog.en.json';
import blogVI from 'locales/sidebarBlog.vi.json';

import japanEN from 'locales/sidebarJapan.en.json';
import japanVI from 'locales/sidebarJapan.vi.json';

import type {TocItem} from 'components/MDX/TocContext';
import {useI18n} from 'next-localization';

interface PageProps {
  children: React.ReactNode;
  toc: Array<TocItem>;
}

export function Page({children, toc}: PageProps) {
  const {asPath} = useRouter();
  const {locale} = useI18n();
  const section = useActiveSection();

  let routeTree = (locale() === 'en' ? blogEN : blogVI) as RouteItem;
  switch (section) {
    case 'japan':
      routeTree = (locale() === 'en' ? japanEN : japanVI) as RouteItem;
      break;
  }
  return (
    <>
      {/* <SocialBanner /> */}
      <SidebarContext.Provider value={routeTree}>
        <div className="w-full grid grid-cols-only-content lg:grid-cols-sidebar-content 2xl:grid-cols-sidebar-content-toc">
          <div className="fixed lg:sticky top-0 left-0 right-0 py-0 shadow lg:shadow-none z-50">
            <Nav />
          </div>
          {/* No fallback UI so need to be careful not to suspend directly inside. */}
          <Suspense fallback={null}>
            <main className="min-w-0">
              <div className="lg:hidden h-16 mb-2" />
              <article className="break-words" key={asPath}>
                {children}
              </article>
            </main>
          </Suspense>
          <div className="hidden lg:max-w-xs 2xl:block">
            {toc.length > 0 && <Toc headings={toc} key={asPath} />}
          </div>
        </div>
      </SidebarContext.Provider>
    </>
  );
}
