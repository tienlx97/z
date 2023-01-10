import {Children} from 'react';

// TODO: This logic could be in MDX plugins instead.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export const PREPARE_MDX_CACHE_BREAKER = 2;
// !!! IMPORTANT !!! Bump this if you change any logic.
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export function prepareMDX(locale, rawChildren) {
  const toc = getTableOfContents(locale, rawChildren, /* depth */ 10);
  const children = wrapChildrenInMaxWidthContainers(rawChildren);
  return {toc, children};
}

function wrapChildrenInMaxWidthContainers(children) {
  // Auto-wrap everything except a few types into
  // <MaxWidth> wrappers. Keep reusing the same
  // wrapper as long as we can until we meet
  // a full-width section which interrupts it.
  let fullWidthTypes = [
    'Sandpack',
    'FullWidth',
    'Illustration',
    'IllustrationBlock',
    'Challenges',
    'Recipes',
  ];
  let wrapQueue = [];
  let finalChildren = [];
  function flushWrapper(key) {
    if (wrapQueue.length > 0) {
      const Wrapper = 'MaxWidth';
      finalChildren.push(<Wrapper key={key}>{wrapQueue}</Wrapper>);
      wrapQueue = [];
    }
  }
  function handleChild(child, key) {
    if (child == null) {
      return;
    }
    if (typeof child !== 'object') {
      wrapQueue.push(child);
      return;
    }
    if (fullWidthTypes.includes(child.type)) {
      flushWrapper(key);
      finalChildren.push(child);
    } else {
      wrapQueue.push(child);
    }
  }
  Children.forEach(children, handleChild);
  flushWrapper('last');
  return finalChildren;
}

function getTableOfContents(locale, children, depth) {
  const anchors = [];
  extractHeaders(locale, children, depth, anchors);
  if (anchors.length > 0) {
    anchors.unshift({
      url: '#',
      text: 'Overview',
      depth: 2,
    });
  }
  return anchors;
}

const headerTypes = new Set([
  'h1',
  'h2',
  'h3',
  'Challenges',
  'Recap',
  'TeamMember',
  //
  'SkitExpand',
  'VocalbularyExpand',
  'KeyPhraseExpand',
  'BonusPhraseExpand',
  'UseItExpand',
  'TryItOutExpand',
  'KanjiExpand',
  'CultureExpand',
  'TripTipExpand',
  'QuizExpand',
]);
function extractHeaders(locale, children, depth, out) {
  for (const child of Children.toArray(children)) {
    if (child.type && headerTypes.has(child.type)) {
      let header;
      if (child.type === 'SkitExpand') {
        header = {
          url: '#skit',
          depth: 2,
          text: locale === 'en' ? 'Skit' : 'Hội thoại',
        };
      } else if (child.type === 'VocalbularyExpand') {
        header = {
          url: '#vocalbulary',
          depth: 2,
          text: locale === 'en' ? 'Vocalbulary' : 'Từ vựng',
        };
      } else if (child.type === 'BonusPhraseExpand') {
        header = {
          url: '#bonus-phrase',
          depth: 2,
          text: locale === 'en' ? 'Bonus Phrase' : 'Mở rộng',
        };
      } else if (child.type === 'KeyPhraseExpand') {
        header = {
          url: '#key-phrase',
          depth: 2,
          text: locale === 'en' ? 'Key Phrase' : 'Mẫu câu cơ bản',
        };
      } else if (child.type === 'UseItExpand') {
        header = {
          url: '#use-it',
          depth: 2,
          text: locale === 'en' ? 'Use It' : 'Luyện tập',
        };
      }
      // else if (child.type === 'QuizExpand') {
      //   header = {
      //     url: '#quiz',
      //     depth: 2,
      //     text: 'Quiz',
      //   };
      // }
      else if (child.type === 'TryItOutExpand') {
        header = {
          url: '#try-it-out',
          depth: 2,
          text: locale === 'en' ? 'Try It Out' : 'Thực hành',
        };
      } else if (child.type === 'KanjiExpand') {
        header = {
          url: '#kanji',
          depth: 2,
          text: locale === 'en' ? 'Kanji' : 'Hán tự',
        };
      } else if (child.type === 'CultureExpand') {
        header = {
          url: '#culture',
          depth: 2,
          text: locale === 'en' ? 'Culture' : 'Văn hóa',
        };
      } else if (child.type === 'TripTipExpand') {
        header = {
          url: '#trip-tip',
          depth: 2,
          text: locale === 'en' ? 'Trip Tip' : 'Mẹo',
        };
      } else if (child.type === 'ChallengesExpand') {
        header = {
          url: '#challenges',
          depth: 2,
          text: 'Challenges',
        };
      } else if (child.type === 'RecapExpand') {
        header = {
          url: '#recap',
          depth: 2,
          text: 'Recap',
        };
      } else if (child.type === 'TeamMember') {
        header = {
          url: '#' + child.props.permalink,
          depth: 3,
          text: child.props.name,
        };
      } else {
        header = {
          url: '#' + child.props.id,
          depth: (child.type && parseInt(child.type.replace('h', ''), 0)) ?? 0,
          text: child.props.children,
        };
      }
      out.push(header);
    } else if (child.children && depth > 0) {
      extractHeaders(locale, child.children, depth - 1, out);
    }
  }
}
