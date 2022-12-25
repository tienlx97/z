/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import * as React from 'react';
import {DocsPageFooter} from 'components/DocsFooter';
import {Seo} from 'components/Seo';
import PageHeading from 'components/PageHeading';
import {useRouteMeta} from './useRouteMeta';
import {useActiveSection} from '../../hooks/useActiveSection';
import {TocContext} from '../MDX/TocContext';
import {Footer} from './Footer';
import UtilityBar from 'components/UitilityBar';
import Comment from 'components/Comment';

import(/* webpackPrefetch: true */ '../MDX/CodeBlock/CodeBlock');

export interface MarkdownProps<Frontmatter> {
  meta: Frontmatter & {description?: string; id: string};
  children?: React.ReactNode;
  toc: Array<{
    url: string;
    text: React.ReactNode;
    depth: number;
  }>;
}

export function MarkdownPage<
  T extends {title: string; status?: string} = {title: string; status?: string}
>({children, meta, toc}: MarkdownProps<T>) {
  const {route, nextRoute, prevRoute} = useRouteMeta();
  const section = useActiveSection();
  const title = meta.title || route?.title || '';
  const description = meta.description || route?.description || '';
  const isHomePage = section === 'home';

  const [open, setOpen] = React.useState(false);
  const [isVisible, setVisible] = React.useState(true);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const listenToScroll = () => {
    const bodyRect = document.body.getBoundingClientRect();
    const elemRect = document
      .getElementById('hide-comment')!
      .getBoundingClientRect();
    const offset = elemRect.top - bodyRect.top - window.innerHeight;

    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (scrollTop < offset) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
    <>
      <div className="pl-0">
        <Seo title={title} />
        {!isHomePage && (
          <PageHeading
            title={title}
            description={description}
            tags={route?.tags}
          />
        )}
        <div className="px-5 sm:px-12">
          <div className="max-w-7xl mx-auto">
            <TocContext.Provider value={toc}>{children}</TocContext.Provider>
          </div>
          <Footer />
          <DocsPageFooter
            route={route}
            nextRoute={nextRoute}
            prevRoute={prevRoute}
          />
        </div>
      </div>
      <UtilityBar isVisible={isVisible} onOpen={onOpen} />
      <div id="hide-comment"></div>
      <Comment term={meta.id} onClose={onClose} isOpenComment={open} />
    </>
  );
}
