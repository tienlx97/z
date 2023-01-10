// (self.webpackChunk_quizlet_web_index =
//   self.webpackChunk_quizlet_web_index || []).push([
//   ['assistant_cards'],
//   {
//     './node_modules/@quizlet/dependency-injection-core/quizlet-shared-kotlin-dependency-injection-core.js':
//       function (e, s, t) {
//         var n, a, r;
//         (a = [
//           s,
//           t('./node_modules/@quizlet/koin-core/core-koin-core-js-ir.js'),
//           t(
//             './node_modules/@quizlet/kotlin-stdlib/kotlin-kotlin-stdlib-js-ir.js'
//           ),
//         ]),
//           void 0 ===
//             (r =
//               'function' ==
//               typeof (n = function (e, s, t) {
//                 'use strict';
//                 var n,
//                   a,
//                   r = s.$_$.l,
//                   o = t.$_$.p4,
//                   i = t.$_$.ub,
//                   d = t.$_$.y1,
//                   l = s.$_$.f,
//                   u = t.$_$.e7,
//                   c = s.$_$.h,
//                   p = t.$_$.qb;
//                 function m(e, s) {
//                   if (null != e.t17_1)
//                     throw new r('A Koin Application has already been started');
//                   e.t17_1 = s.e14_1;
//                 }
//                 function _(e, s) {
//                   var t,
//                     n = e.t17_1;
//                   null == n
//                     ? (t = null)
//                     : (n.d14(s, false, 2, null), (t = o()));
//                   var a = t;
//                   null == a && e.u17(h(s));
//                 }
//                 function h(e) {
//                   return function (s) {
//                     return s.n14(true), s.h14(e), o();
//                   };
//                 }
//                 function g() {
//                   (n = this), (this.t17_1 = null);
//                 }
//                 function j() {
//                   return null == n && new g(), n;
//                 }
//                 function y() {
//                   return a;
//                 }
//                 return (
//                   (g.prototype.wx = function () {
//                     var e = this.t17_1;
//                     if (null == e)
//                       throw d(
//                         i(
//                           'KmpKoinContext is null: have you called KmpKoinContext.startKoin yet?'
//                         )
//                       );
//                     return e;
//                   }),
//                   (g.prototype.v17 = function () {
//                     return this.t17_1;
//                   }),
//                   (g.prototype.u17 = function (e) {
//                     var s = l().g14();
//                     return m(this, s), s.n14(true), e(s), s;
//                   }),
//                   (g.prototype.w17 = function (e) {
//                     _(this, u(e()));
//                   }),
//                   (g.prototype.x17 = function (e) {
//                     _(this, u(e));
//                   }),
//                   (g.prototype.y17 = function (e) {
//                     _(this, e);
//                   }),
//                   (g.$metadata$ = p('KmpKoinContext', [c])),
//                   (a = 'QUIZLET_API_BASE_URL_OVERRIDE'),
//                   (e.$_$ = e.$_$ || {}),
//                   (e.$_$.a = y),
//                   (e.$_$.b = j),
//                   e
//                 );
//               })
//                 ? n.apply(s, a)
//                 : n) || (e.exports = r);
//       },
//     './node_modules/@quizlet/experiment-manager/quizlet-shared-kotlin-experiment-manager.js':
//       function (e, s, t) {
//         var n, a, r;
//         (a = [
//           s,
//           t(
//             './node_modules/@quizlet/kotlin-stdlib/kotlin-kotlin-stdlib-js-ir.js'
//           ),
//           t('./node_modules/@quizlet/koin-core/core-koin-core-js-ir.js'),
//           t(
//             './node_modules/@quizlet/dependency-injection-core/quizlet-shared-kotlin-dependency-injection-core.js'
//           ),
//         ]),
//           (n = function (e, s, t, n) {
//             'use strict';
//             var a,
//               r = s.$_$.wa,
//               o = s.$_$.ma,
//               i = t.$_$.e,
//               d = t.$_$.b,
//               l = s.$_$.l6,
//               u = s.$_$.e,
//               c = t.$_$.i,
//               p = s.$_$.p4,
//               m = t.$_$.n,
//               _ = t.$_$.j,
//               h = t.$_$.d,
//               g = n.$_$.b,
//               j = s.$_$.qb;
//             function y() {}
//             function S() {}
//             function f(e) {
//               return new v(I(e));
//             }
//             function v(e) {
//               this.e2m_1 = e;
//             }
//             function E() {}
//             function x(e) {
//               return function (s, t) {
//                 return f(e);
//               };
//             }
//             function b(e) {
//               return function (s) {
//                 var t,
//                   n = x(e),
//                   a = i().z14_1,
//                   r = d(),
//                   o = l();
//                 t = new c(a, u(S), null, n, r, o);
//                 var h = new m(t);
//                 return s.k16(h), s.a16_1 && s.n16(h), new _(s, h), p();
//               };
//             }
//             function A(e) {
//               return function () {
//                 return h(false, b(e), 1, null);
//               };
//             }
//             function T() {
//               a = this;
//             }
//             function C() {
//               return null == a && new T(), a;
//             }
//             function I(e) {
//               return new w(e);
//             }
//             function w(e) {
//               this.g2m_1 = e;
//             }
//             function O(e) {
//               Object.defineProperty(e, 'ExperimentManagerProvider', {
//                 configurable: true,
//                 get: C,
//               });
//             }
//             return (
//               (y.$metadata$ = r('Experiment')),
//               (S.$metadata$ = r('ExperimentManager')),
//               (v.prototype.d2m = function (e) {
//                 return e.c2m(this.e2m_1.f2m(e));
//               }),
//               (v.$metadata$ = o('WrappedRawExperimentManager', [S])),
//               (E.$metadata$ = r('RawExperimentManager')),
//               (T.prototype.setPlatformRawExperimentManager = function (e) {
//                 g().w17(A(e));
//               }),
//               (T.$metadata$ = j('ExperimentManagerProvider')),
//               (w.prototype.f2m = function (e) {
//                 return this.g2m_1.enrollAndGetVariantName(e.o2());
//               }),
//               (w.$metadata$ = o(void 0, [E])),
//               O(e),
//               (e.$jsExportAll$ = O),
//               (e.$_$ = e.$_$ || {}),
//               (e.$_$.a = S),
//               (e.$_$.b = y),
//               e
//             );
//           }),
//           void 0 === (r = 'function' == typeof n ? n.apply(s, a) : n) ||
//             (e.exports = r);
//       },
//     './node_modules/@quizlet/persistence/quizlet-shared-kotlin-persistence.js':
//       function (e, s, t) {
//         var n, a, r;
//         (a = [
//           s,
//           t(
//             './node_modules/@quizlet/kotlin-stdlib/kotlin-kotlin-stdlib-js-ir.js'
//           ),
//           t('./node_modules/@quizlet/koin-core/core-koin-core-js-ir.js'),
//           t(
//             './node_modules/@quizlet/quizlet-api-models/quizlet-shared-kotlin-quizlet-api-models.js'
//           ),
//         ]),
//           (n = function (e, s, t, n) {
//             'use strict';
//             var a,
//               r,
//               o,
//               i,
//               d = s.$_$.wa,
//               l = s.$_$.p4,
//               u = t.$_$.d,
//               c = s.$_$.qb,
//               p = s.$_$.me,
//               m = n.$_$.c1,
//               _ = s.$_$.a5,
//               h = s.$_$.fb,
//               g = t.$_$.e,
//               j = t.$_$.b,
//               y = s.$_$.l6,
//               S = s.$_$.e,
//               f = t.$_$.i,
//               v = t.$_$.n,
//               E = t.$_$.j,
//               x = t.$_$.r;
//             function b() {}
//             function A() {
//               return C(), a;
//             }
//             function T(e) {
//               return C(), e.j16([L()]), l();
//             }
//             function C() {
//               r || ((r = true), (a = u(false, T, 1, null)));
//             }
//             function I() {
//               o = this;
//             }
//             function w() {
//               return null == o && new I(), o;
//             }
//             function O() {
//               w();
//             }
//             function N() {
//               i = this;
//             }
//             function k() {
//               return null == i && new N(), i;
//             }
//             function L() {
//               return u(false, P, 1, null);
//             }
//             function P(e) {
//               var s,
//                 t,
//                 n = M,
//                 a = g().z14_1,
//                 r = j(),
//                 o = y();
//               t = new f(a, S(N), null, n, r, o);
//               var i = new v(t);
//               return (
//                 e.k16(i),
//                 e.a16_1 && e.n16(i),
//                 (s = new E(e, i)),
//                 x(s, S(O)),
//                 l()
//               );
//             }
//             function M(e, s) {
//               return k();
//             }
//             return (
//               (b.$metadata$ = d('PersistenceStore')),
//               (I.$metadata$ = c('Companion')),
//               (O.$metadata$ = d('StudiableMetadataPersistenceStore', [b])),
//               (N.prototype.t2i = function (e, s) {
//                 return null;
//               }),
//               (N.prototype.m2h = function (e, s) {
//                 return this.t2i(e instanceof m ? e : p(), s);
//               }),
//               (N.prototype.g2j = function (e, s, t) {
//                 return s;
//               }),
//               (N.prototype.f2j = function (e, s, t) {
//                 var n = e instanceof m ? e : p();
//                 return this.g2j(n, null != s && h(s, _) ? s : p(), t);
//               }),
//               (N.$metadata$ = c('NoOpStudiableMetadataPersistenceStore', [O])),
//               (e.$_$ = e.$_$ || {}),
//               (e.$_$.a = A),
//               (e.$_$.b = O),
//               e
//             );
//           }),
//           void 0 === (r = 'function' == typeof n ? n.apply(s, a) : n) ||
//             (e.exports = r);
//       },
//     './app/j/ads/components/ActionBasedAutoRefreshAd.tsx': (e, s, t) => {
//       'use strict';
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//       var n = t('./app/j/ads/compatibility/useQAdManager.ts'),
//         a = t('./app/j/ads/components/Ad.tsx'),
//         r = t('./app/j/ads/constants/adConstants.ts'),
//         o = t('./app/j/ads/enums/RefreshReason.ts'),
//         i = t('./node_modules/react/index.js'),
//         d = t('./app/j/utils/isAdBlockerEnabled.ts'),
//         l = t('./app/j/utils/tamperProofNow.ts'),
//         u = t('./node_modules/react/jsx-runtime.js');
//       s.Z = function (e) {
//         var {
//             headingAlignment: s = 'block',
//             id: t,
//             lastActionTimestamp: c = 0,
//             maxRefreshCount: p,
//             minActionsForRefresh: m = 1,
//             refreshInterval: _ = r.If,
//           } = e,
//           h = (0, n.Z)(),
//           [g, j] = (0, i.useState)(!(null != h && h.config.areAdsDisabled)),
//           y = (0, i.useRef)(-1);
//         (0, i.useEffect)(() => {
//           y.current += 1;
//         }, [c]);
//         var [S, f] = (0, i.useState)((0, l.Z)()),
//           [v, E] = (0, i.useState)(0),
//           x = (0, i.useCallback)(() => {
//             h &&
//               ((y.current = 0),
//               f((0, l.Z)()),
//               E(v + 1),
//               (0, d.ZP)() || h.enqueueAdsForRefresh([t], o.q.ACTION_REFRESH));
//           }, [h, v, t]),
//           b = (0, i.useCallback)(
//             (e) => {
//               y.current >= m && e - S >= 1e3 * _ && x();
//             },
//             [S, x, m, _]
//           );
//         (0, i.useEffect)(() => {
//           !g || (0, d.ZP)() || (p && v >= p) || b(c);
//         }, [c, _, g, v, p, b]);
//         var A = (0, i.useCallback)(() => {
//             if (!(0, d.ZP)() && h) {
//               var e = h.isShowing(t);
//               e && f((0, l.Z)()), j(e);
//             }
//           }, [h, t]),
//           T = (0, i.useCallback)(() => {
//             if (!(0, d.ZP)() && h) {
//               var e = h.isShowing(t);
//               j(e);
//             }
//           }, [h, t]);
//         return (0, u.jsx)(a.Z, {
//           headingAlignment: s,
//           id: t,
//           onDisplayCallback: A,
//           onEmptyAdCallback: T,
//         });
//       };
//     },
//     './app/j/ads/components/flashcards/CardsInterstitialAd.tsx': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => S,
//       });
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//       var n = t('./node_modules/@linaria/react/lib/index.js'),
//         a = t('./app/j/ads/components/studyModes/AdTimeLeft.tsx'),
//         r = t('./app/j/ads/components/studyModes/ContinueButton.tsx'),
//         o = t('./app/j/ads/components/studyModes/StudyBreakAd.tsx'),
//         i = t('./app/j/ads/constants/adConstants.ts'),
//         d = t('./app/j/ads/context/StudyModeAdsContext.tsx'),
//         l = t('./app/j/ads/enums/AdsNames.ts'),
//         u = t('./app/j/compatibility/logger/useLogger.ts'),
//         c = t('./app/j/config/enums.ts'),
//         p = t('./app/j/core/default_store/DefaultStoreProvider.tsx'),
//         m = t('./node_modules/react/index.js'),
//         _ = t('./app/j/study-modes/redesigned_cards/data/ui/selector.ts'),
//         h = t('./node_modules/react/jsx-runtime.js'),
//         g = (0, n.z)('div')({
//           name: 'Wrapper',
//           class: 'w1eomjrv',
//           vars: {
//             'w1eomjrv-0': [(e) => (e.isShowingAd ? 'grid' : 'none')],
//           },
//         }),
//         j = (0, n.z)('div')({
//           name: 'StudyBreakAdWrapper',
//           class: 's1rfytov',
//         }),
//         y = (0, n.z)('div')({
//           name: 'ContinueButtonWrapper',
//           class: 'c10ugvt3',
//         });
//       function S(e) {
//         var {handleSkipStudyBreakAd: s, isRenderingCardsInterstitialAd: t} = e,
//           {logPageAction: n} = (0, u.wL)(),
//           S = (0, d.Jt)().isVideoAd ? i.sV : i.mW,
//           f = (0, p.v9)(_.We),
//           [v, E] = (0, m.useState)(false),
//           x = () => {
//             n('skip_interstitial_ads_clicked'), s();
//           };
//         (0, m.useEffect)(() => {
//           n('interstitial_ads_preloaded');
//         }, []),
//           (0, m.useEffect)(() => {
//             t && v ? s() : t && n('interstitial_ads_viewable');
//           }, [t]),
//           (0, m.useEffect)(() => {
//             if (t && f) {
//               var e = window.setTimeout(() => x(), 1e3 * (S + 1));
//               return () => {
//                 clearTimeout(e);
//               };
//             }
//           }, [f, t]);
//         return (0, h.jsxs)(g, {
//           isShowingAd: t,
//           children: [
//             (0, h.jsx)(j, {
//               children: (0, h.jsx)(o.Z, {
//                 adId: l.h.STUDY_MODE_AD,
//                 isRenderingCardsInterstitialAd: t,
//                 onEmptyAd: () => {
//                   E(true), n('auto_skip_empty_interstitial_ads');
//                 },
//                 shouldShowAdsUpsell: true,
//               }),
//             }),
//             t
//               ? (0, h.jsx)(a.Z, {
//                   content: (0, h.jsx)(y, {
//                     children: (0, h.jsx)(r.Z, {
//                       buttonSize: 'large',
//                       isFullWidth: !t,
//                       onClick: x,
//                     }),
//                   }),
//                   isRenderingCardsInterstitialAd: t,
//                   studyMode: c.aKJ.FLASHCARDS,
//                   timeLeft: S,
//                 })
//               : null,
//           ],
//         });
//       }
//       t(
//         './.linaria-cache/app/j/ads/components/flashcards/CardsInterstitialAd.linaria.css'
//       );
//     },
//     './app/j/ads/components/flashcards/FlashcardAd.tsx': (e, s, t) => {
//       'use strict';
//       var n = t('./node_modules/@linaria/react/lib/index.js'),
//         a = t('./app/j/ads/components/Ad.tsx'),
//         r = t('./app/j/ads/components/hooks/usePreload.ts'),
//         o = t('./node_modules/react/index.js'),
//         i = t('./node_modules/react/jsx-runtime.js'),
//         d = (0, n.z)('div')({
//           name: 'CardsItem',
//           class: 'c1jevetf',
//           vars: {
//             'c1jevetf-0': [
//               (e) => (e.isFullscreenFlashcard ? '0' : '0 0 15% 0'),
//             ],
//             'c1jevetf-1': [
//               (e) => (e.isFullscreenFlashcard ? 'none' : e.handleMaxHeight),
//             ],
//           },
//         }),
//         l = (0, n.z)('div')({
//           name: 'CardsItemSide',
//           class: 'cg52i76',
//         }),
//         u = (e) => {
//           var {
//               clearAdViewable: s,
//               id: t,
//               isFullscreenFlashcard: n,
//               isSortingOn: o,
//               onAdViewableCallback: u,
//               onEmptyAd: c,
//               shouldLoadCardsMwebAd: p = false,
//               showing: m = false,
//             } = e,
//             {setEmptyAd: _} = (0, r.Z)(m, c, true);
//           return p
//             ? (0, i.jsx)(d, {
//                 handleMaxHeight: o ? 300 : 340,
//                 isFullscreenFlashcard: n,
//                 children: (0, i.jsx)(l, {
//                   'aria-label': 'Ad',
//                   'data-testid': 'native-ad',
//                   isFullscreenFlashcard: n,
//                   children: (0, i.jsx)(a.Z, {
//                     clearAdViewable: s,
//                     id: t,
//                     onAdViewableCallback: u,
//                     onEmptyAdCallback: () => _(true),
//                   }),
//                 }),
//               })
//             : null;
//         };
//       (s.Z = o.memo(u)),
//         t(
//           './.linaria-cache/app/j/ads/components/flashcards/FlashcardAd.linaria.css'
//         );
//     },
//     './app/j/ads/components/hooks/useAdTimer.ts': (e, s, t) => {
//       'use strict';
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//       var n = t('./node_modules/react/index.js');
//       s.Z = (e) => {
//         var [s, t] = (0, n.useState)(-1);
//         (0, n.useEffect)(() => {
//           var e;
//           return (
//             s > 0 &&
//               (e = setTimeout(() => {
//                 t(s - 1);
//               }, 1e3)),
//             () => {
//               clearTimeout(e);
//             }
//           );
//         }, [s]);
//         var a = (0, n.useCallback)(() => t(e), [e]);
//         return [s, a];
//       };
//     },
//     './app/j/ads/components/hooks/usePreload.ts': (e, s, t) => {
//       'use strict';
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//       var n = t('./node_modules/react/index.js');
//       s.Z = function (e, s, t) {
//         void 0 === t && (t = false);
//         var [a, r] = (0, n.useState)(false);
//         return (
//           (0, n.useEffect)(() => {
//             e && a && (s(), t && r(false));
//           }, [a, s, e, t]),
//           {
//             setEmptyAd: r,
//           }
//         );
//       };
//     },
//     './app/j/ads/components/hooks/useShouldSeeSidebarAds.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => u,
//       });
//       var n = t('./app/j/config/enums.ts'),
//         a = t('./app/j/context/UserContext.ts'),
//         r = t('./app/j/core/default_store/DefaultStoreProvider.tsx'),
//         o = t('./node_modules/react/index.js'),
//         i = t('./app/j/study-modes/data/settings/selectors/ad.ts'),
//         d = t('./app/j/study-modes/redesigned_cards/data/engine/selectors.ts'),
//         l = t('./app/j/utils/isAdBlockerEnabled.ts');
//       function u() {
//         var e = (0, o.useContext)(a.Z),
//           s = (null == e ? void 0 : e.type) === n.XsQ.PLUS,
//           t = (0, r.v9)(i.Cr),
//           u = (0, r.v9)(d.B5),
//           c = (0, r.v9)(i.cS);
//         return (e) => !u && !!e && !s && t && !c && !(0, l.ZP)();
//       }
//     },
//     './app/j/ads/components/studyModes/AdModal.tsx': (e, s, t) => {
//       'use strict';
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//       var n = t('./node_modules/@linaria/react/lib/index.js'),
//         a = t('./app/j/ads/components/Ad.tsx'),
//         r = t('./app/j/ads/components/studyModes/ContinueButton.tsx'),
//         o = t('./app/j/ads/enums/AdsNames.ts'),
//         i = t('./app/j/ads/utils/isVideoAd.ts'),
//         d = t('./app/j/assembly/buttons/index.ts'),
//         l = t('./node_modules/classnames/index.js'),
//         u = t.n(l),
//         c = t('./app/j/components/T.tsx'),
//         p = t('./app/j/i18n/useTranslation.ts'),
//         m = t('./node_modules/polished/dist/polished.cjs.js'),
//         _ = t('./node_modules/react/index.js'),
//         h = t('./node_modules/react-transition-group/cjs/index.js'),
//         g = t('./node_modules/react/jsx-runtime.js'),
//         j =
//           ((0, m.hO)(12),
//           (0, m.hO)(70),
//           (0, m.hO)(45),
//           'ads-modal-fade-appear'),
//         y = (0, n.z)('div')({
//           name: 'StudyModesAdsModal',
//           class: 's1ytao72',
//         }),
//         S = (0, n.z)('div')({
//           name: 'TextContainer',
//           class: 'tc7vqun',
//         }),
//         f = (0, n.z)('div')({
//           name: 'AdsModalText',
//           class: 'a1ehhxrb',
//         }),
//         v = (0, n.z)('a')({
//           name: 'UpsellLink',
//           class: 'uwy5kzm',
//         }),
//         E = (e) => {
//           var {animationStep: s, order: t, onEntered: n, children: a} = e;
//           return (0, g.jsx)(h.Kv, {
//             appear: true,
//             classNames: 'ads-modal-fade',
//             in: s >= t,
//             onEntered: n,
//             timeout: 600,
//             children: a,
//           });
//         },
//         x = [
//           (0, g.jsx)(c.Z, {
//             id: 'study_ads_modal.messages.message_1',
//           }),
//           (0, g.jsx)(c.Z, {
//             id: 'study_ads_modal.messages.message_2',
//           }),
//           (0, g.jsx)(c.Z, {
//             id: 'study_ads_modal.messages.message_3',
//           }),
//           (0, g.jsx)(c.Z, {
//             id: 'study_ads_modal.messages.message_4',
//           }),
//           (0, g.jsx)(c.Z, {
//             id: 'study_ads_modal.messages.message_5',
//           }),
//           (0, g.jsx)(c.Z, {
//             id: 'study_ads_modal.messages.message_6',
//           }),
//           (0, g.jsx)(c.Z, {
//             id: 'study_ads_modal.messages.message_7',
//           }),
//         ];
//       (s.Z = (e) => {
//         var [s, t] = (() => {
//             var [e, s] = (0, _.useState)(0);
//             return [e, (0, _.useCallback)(() => s((e) => e + 1), [])];
//           })(),
//           [n, l] = (0, _.useState)(false),
//           [m, h] = (0, _.useState)(false),
//           [b, A] = (0, _.useState)(false),
//           [T, C] = (0, _.useState)(false),
//           [I, w] = (0, _.useState)(false),
//           [O, N] = (0, _.useState)(false),
//           [k, L] = (0, _.useState)(true),
//           [P, M] = (0, _.useState)(0),
//           [R] = (0, _.useState)(Math.floor(Math.random() * x.length)),
//           D = (0, _.useRef)(null),
//           Z = (0, _.useRef)(null),
//           F = !I && !T;
//         (0, _.useEffect)(
//           () => (
//             (D.current = setTimeout(e.onSkip, 3e3)),
//             () => clearTimeout(D.current)
//           ),
//           [e.onSkip]
//         ),
//           (0, _.useEffect)(() => {
//             var e;
//             return (
//               P >= 0 &&
//                 (e = setTimeout(() => {
//                   M(P - 1);
//                 }, 1e3)),
//               () => {
//                 clearTimeout(e);
//               }
//             );
//           }, [P]);
//         var z,
//           U = (0, _.useCallback)(() => {
//             C(true), L(false);
//           }, []),
//           H = (0, _.useCallback)(
//             (e) => {
//               clearTimeout(D.current);
//               var {
//                 isVideo: s,
//                 isVertical: n,
//                 isVerticalFullScreen: a,
//                 isVideoWithContent: r,
//               } = (0, i.Z)(e);
//               h(true),
//                 w(s),
//                 l(n),
//                 A(a),
//                 N(r),
//                 (s || T) &&
//                   (setTimeout(() => {
//                     M(5);
//                   }, 600),
//                   L(false)),
//                 t();
//             },
//             [T, t]
//           ),
//           {t: W} = (0, p.Z)(),
//           B = u()('a1gsqf69', j, {
//             'StudyModesAdsModal-NativeContainer': T,
//           }),
//           K = I && T && !O && !n,
//           G = u()('a1p47xn5', {
//             cfn0jmj: b,
//             'StudyModesAdModal-contentVerticalVideo': n,
//             'StudyModesAdModal-contentNative': T,
//             'StudyModesAdModal-contentVideo': I,
//             a1akpkzf: F,
//             'StudyModesAdModal-hasAdMessage': K,
//           });
//         return (0, g.jsx)(y, {
//           children: (0, g.jsxs)('div', {
//             className: G,
//             children: [
//               (0, g.jsx)(E, {
//                 animationStep: s,
//                 onEntered: () => {
//                   t();
//                 },
//                 order: 3,
//                 children: m
//                   ? ((z = u()('s1i2wjtg', j, {
//                       'StudyModesAdsModal-SkipAdButtonVerticalVideo': n,
//                     })),
//                     (0, g.jsx)('div', {
//                       className: z,
//                       children:
//                         P >= 0
//                           ? (0, g.jsx)('div', {
//                               className: 'StudyModesAdsModal-SkipAdCounter',
//                               children: (0, g.jsx)(d.B0, {
//                                 disabled: true,
//                                 size: 'small',
//                                 text: W('study_ads_modal.skip_ad', {
//                                   adTimeLeft: P + 1,
//                                 }),
//                               }),
//                             })
//                           : (0, g.jsx)(r.Z, {
//                               buttonSize: 'small',
//                               onClick: s > 3 ? e.onSkip : void 0,
//                             }),
//                     }))
//                   : (0, g.jsx)(g.Fragment, {}),
//               }),
//               (0, g.jsx)(E, {
//                 animationStep: s,
//                 onEntered: t,
//                 order: 1,
//                 children: (0, g.jsx)('div', {
//                   className: B,
//                   children: (0, g.jsx)(a.Z, {
//                     id: o.h.STUDY_MODE_AD,
//                     onDisplayCallback: H,
//                     onEmptyAdCallback: e.onSkip,
//                     onNativeAd: U,
//                     ref: Z,
//                     showAdAttribution: !F,
//                   }),
//                 }),
//               }),
//               (0, g.jsx)(E, {
//                 animationStep: s,
//                 onEntered: t,
//                 order: 2,
//                 children:
//                   (K || F) && m
//                     ? (0, g.jsx)(S, {
//                         className: j,
//                         children: (0, g.jsxs)(f, {
//                           children: [
//                             K
//                               ? x[R]
//                               : (0, g.jsx)(c.Z, {
//                                   id: 'study_ads_modal.message',
//                                 }),
//                             k
//                               ? (0, g.jsxs)(g.Fragment, {
//                                   children: [
//                                     ' ',
//                                     (0, g.jsx)(v, {
//                                       href: 'https://quizlet.com/upgrade?source=go_remove_ads',
//                                       target: 'upgrade',
//                                       children: (0, g.jsx)(c.Z, {
//                                         id: 'study_ads_modal.upsell_link',
//                                       }),
//                                     }),
//                                   ],
//                                 })
//                               : null,
//                           ],
//                         }),
//                       })
//                     : (0, g.jsx)(g.Fragment, {}),
//               }),
//             ],
//           }),
//         });
//       }),
//         t(
//           './.linaria-cache/app/j/ads/components/studyModes/AdModal.linaria.css'
//         );
//     },
//     './app/j/ads/components/studyModes/AdTimeLeft.tsx': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => g,
//       });
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//       var n = t('./node_modules/@linaria/core/lib/index.js'),
//         a = t('./node_modules/@linaria/react/lib/index.js'),
//         r = t('./app/j/ads/context/StudyModeAdsContext.tsx'),
//         o = t('./app/j/assembly/buttons/index.ts'),
//         i = t('./app/j/config/enums.ts'),
//         d = t('./app/j/i18n/useTranslation.ts'),
//         l = t(
//           './app/j/live_game/teacher/checkpoint/components/ProgressBar.tsx'
//         ),
//         u = t('./node_modules/react/index.js'),
//         c = t('./node_modules/react/jsx-runtime.js'),
//         p = (0, a.z)('div')({
//           name: 'FlashcardAdCountdownWrapper',
//           class: 'f1dlcwmz',
//         }),
//         m = (0, a.z)('div')({
//           name: 'FlashcardAdRedesignCountdownWrapper',
//           class: 'fn9h2w6',
//         }),
//         _ = (0, a.z)('div')({
//           name: 'TestModeCountdownWrapper',
//           class: 'tzvn7jw',
//         }),
//         h = (0, a.z)('div')({
//           name: 'TestModeLoadingGif',
//           class: 'tc63jq6',
//         });
//       function g(e) {
//         var {
//             content: s,
//             isEnrolledInFlashcardAdsCountdownTest: t,
//             isRenderingCardsInterstitialAd: a,
//             isMiniFlashcards: g,
//             studyMode: j,
//             timeLeft: y = 5,
//           } = e,
//           [S, f] = (0, u.useState)(y),
//           v = (0, r.Jt)(),
//           E = v.isVideoAd ? 9 : 5;
//         (0, u.useEffect)(() => {
//           var e;
//           return (
//             S >= 0 &&
//               (e = setTimeout(() => {
//                 f(S - 1);
//               }, 1e3)),
//             () => {
//               clearTimeout(e);
//             }
//           );
//         }, [S]);
//         var {t: x} = (0, d.Z)();
//         return (0, c.jsx)(c.Fragment, {
//           children:
//             (!v.isAdLoaded || v.isVideoAd || t || a) && S > 0
//               ? j === i.aKJ.SCATTER
//                 ? x('highscores_modal.continue_in_seconds', {
//                     second: S.toString(),
//                   })
//                 : j === i.aKJ.TEST
//                 ? (0, c.jsxs)(_, {
//                     children: [
//                       x('study_ads_modal.messages.message_8'),
//                       (0, c.jsx)(h, {
//                         children: (0, c.jsx)(l.Z, {
//                           duration: E,
//                         }),
//                       }),
//                     ],
//                   })
//                 : j !== i.aKJ.FLASHCARDS || (t && !a)
//                 ? j === i.aKJ.FLASHCARDS
//                   ? (0, c.jsx)(p, {
//                       children: x('study_ads_modal.skip_ad', {
//                         adTimeLeft: S.toString(),
//                       }),
//                     })
//                   : void 0
//                 : (0, c.jsx)(m, {
//                     className: (0, n.cx)(a && 'i1796fbi', g && 'm19akclu'),
//                     children: (0, c.jsx)(o.wI, {
//                       disabled: true,
//                       isFullWidth: !a && !g && true,
//                       size: g ? 'medium' : 'large',
//                       text: x('study_ads_modal.skip_ad', {
//                         adTimeLeft: S.toString(),
//                       }),
//                     }),
//                   })
//               : s,
//         });
//       }
//       t(
//         './.linaria-cache/app/j/ads/components/studyModes/AdTimeLeft.linaria.css'
//       );
//     },
//     './app/j/ads/components/studyModes/ContinueButton.tsx': (e, s, t) => {
//       'use strict';
//       var n = t('./app/j/assembly/buttons/index.ts'),
//         a = t('./app/j/hocs/keydownDecorator.tsx'),
//         r = t('./app/j/i18n/useTranslation.ts'),
//         o = t('./node_modules/react/index.js'),
//         i = t('./node_modules/react/jsx-runtime.js');
//       s.Z = (0, a.Z)()((e) => {
//         var {keydownEvent: s, onClick: t, buttonSize: a, isFullWidth: d} = e;
//         (0, o.useEffect)(() => {
//           s && t && (s.preventDefault(), s.stopPropagation(), t());
//         }, [t, s]);
//         var {t: l} = (0, r.Z)();
//         return (0, i.jsx)(n.wI, {
//           isFullWidth: d,
//           onClick: t,
//           size: a,
//           text: l('study_ads_modal.continue'),
//         });
//       });
//     },
//     './app/j/ads/components/studyModes/StudyBreakAd.tsx': (e, s, t) => {
//       'use strict';
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//       var n = t('./node_modules/@linaria/core/lib/index.js'),
//         a = t('./node_modules/@linaria/react/lib/index.js'),
//         r = t('./app/j/ads/components/Ad.tsx'),
//         o = t('./app/j/ads/context/StudyModeAdsContext.tsx'),
//         i = t('./app/j/ads/utils/isVideoAd.ts'),
//         d = t('./app/j/assembly/AssemblyLink.tsx'),
//         l = t('./app/j/components/T.tsx'),
//         u = t('./app/j/i18n/useTranslation.ts'),
//         c = t('./node_modules/polished/dist/polished.cjs.js'),
//         p = t('./node_modules/react/index.js'),
//         m = t('./node_modules/react/jsx-runtime.js'),
//         _ = (0, a.z)('section')({
//           name: 'AdWrapper',
//           class: 'ak6y98h',
//           vars: {
//             'ak6y98h-2': [
//               (e) => {
//                 var {isAdEmpty: s} = e;
//                 return s ? 'none' : '' + (0, c.hO)(50);
//               },
//             ],
//           },
//         }),
//         h = (0, a.z)('div')({
//           name: 'TextContainer',
//           class: 't14navbi',
//         });
//       (s.Z = (e) => {
//         var {
//             adId: s,
//             isAdEmpty: t,
//             isRenderingCardsInterstitialAd: a = false,
//             onDisplayAd: c,
//             onEmptyAd: g,
//             onVideoAd: j,
//             shouldShowAdsUpsell: y,
//           } = e,
//           S = (0, o.Jt)(),
//           [f, v] = (0, p.useState)(y),
//           [E, x] = (0, p.useState)(y),
//           {t: b} = (0, u.Z)(),
//           A = (0, p.useCallback)(
//             (e) => {
//               var {isVideo: s} = (0, i.Z)(e);
//               s &&
//                 (v(false),
//                 null == j || j(),
//                 null == S || null == S.setIsVideoAd || S.setIsVideoAd(true)),
//                 null == c || c(),
//                 null == S || null == S.setIsAdLoaded || S.setIsAdLoaded(true);
//             },
//             [c, j, S]
//           ),
//           T = (0, p.useCallback)(() => {
//             x(false), v(false);
//           }, []),
//           C = (0, p.useCallback)(() => {
//             null == g || g(),
//               null == S || null == S.setIsEmptyAd || S.setIsEmptyAd(true);
//           }, [g, S]);
//         return (0, m.jsxs)(_, {
//           className: (0, n.cx)(a && 'i19byfu7'),
//           isAdEmpty: t,
//           children: [
//             (0, m.jsx)(r.Z, {
//               id: s,
//               onDisplayCallback: A,
//               onEmptyAdCallback: C,
//               onNativeAd: T,
//             }),
//             (0, m.jsxs)(h, {
//               children: [
//                 E
//                   ? (0, m.jsx)(l.Z, {
//                       id: 'study_ads_modal.message',
//                     })
//                   : null,
//                 f
//                   ? (0, m.jsx)(d.ZP, {
//                       linkTo:
//                         'https://quizlet.com/upgrade?source=go_remove_ads',
//                       shouldOpenInNewTab: true,
//                       text: b('study_ads_modal.upsell_link'),
//                       variant: d.U_.Primary,
//                     })
//                   : null,
//               ],
//             }),
//           ],
//         });
//       }),
//         t(
//           './.linaria-cache/app/j/ads/components/studyModes/StudyBreakAd.linaria.css'
//         );
//     },
//     './app/j/ads/context/StudyModeAdsContext.tsx': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Jt: () => i,
//         Uw: () => o,
//       });
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//       var n = t('./node_modules/react/index.js'),
//         a = t('./node_modules/react/jsx-runtime.js'),
//         r = (0, n.createContext)({
//           isVideoAd: false,
//         }),
//         o = (e) => {
//           var {children: s} = e,
//             [t, o] = (0, n.useState)(false),
//             [i, d] = (0, n.useState)(false),
//             [l, u] = (0, n.useState)(false);
//           return (0, a.jsx)(r.Provider, {
//             value: {
//               isAdLoaded: i,
//               isEmptyAd: l,
//               isVideoAd: t,
//               setIsAdLoaded: d,
//               setIsEmptyAd: u,
//               setIsVideoAd: o,
//             },
//             children: s,
//           });
//         },
//         i = () => (0, n.useContext)(r);
//     },
//     './app/j/ads/sizes/video.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         x: () => n,
//       });
//       var n = {
//         ad300x250v: [300, 250],
//         ad300x600v: [300, 600],
//         ad400x300v: [400, 300],
//         ad480x270v: [480, 270],
//         ad640x360v: [640, 360],
//       };
//     },
//     './app/j/ads/utils/isVideoAd.ts': (e, s, t) => {
//       'use strict';
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
//         t('./node_modules/core-js/modules/es.object.values.js');
//       var n = t('./app/j/ads/sizes/video.ts');
//       s.Z = (e) => {
//         var s,
//           t = false;
//         if (e.size instanceof Array) {
//           var [a, r] = e.size;
//           t = Object.values(n.x).some(
//             (e) => e instanceof Array && a === e[0] && r === e[1]
//           );
//         }
//         var o =
//             null != (s = null == e.slot.getHtml ? void 0 : e.slot.getHtml())
//               ? s
//               : '',
//           i = o.includes('NativeAd-vertical-video'),
//           d = o.includes('NativeAd-vertical-video-fullscreen'),
//           l = o.includes('NativeAd-video') || (t && o.includes('video'));
//         return {
//           isVideo: l,
//           isVertical: i,
//           isVerticalFullScreen: d,
//           isVideoWithContent: l && o.includes('NativeAd-content'),
//         };
//       };
//     },
//     './app/j/ads/utils/screenSizes.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         r: () => r,
//       });
//       var n = t('./app/j/constants/BreakpointConstants.ts'),
//         a = (e) => (0, n.hQ)(e, 1) || 0,
//         r = {
//           veryLarge: [a('xl'), 0],
//           largeAndVeryTall: [a('l'), 910],
//           largeAndTall: [a('l'), 750],
//           large: [a('l'), 0],
//           mediumAndVeryTall: [a('m'), 910],
//           medium: [a('m'), 0],
//           small: [a('s'), 0],
//           verySmall: [a('xs'), 0],
//           tiny: [a('xxs'), 300],
//           remaining: [0, 0],
//         };
//     },
//     './app/j/assembly/AssemblyChip.tsx': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         S: () => n,
//         Z: () => m,
//       });
//       var n,
//         a = t('./node_modules/@linaria/core/lib/index.js'),
//         r = t('./node_modules/@linaria/react/lib/index.js'),
//         o = t('./node_modules/@react-aria/button/dist/main.js'),
//         i = t('./app/j/assembly/AssemblyIcon.tsx'),
//         d = t('./node_modules/react/index.js'),
//         l = t('./node_modules/react/jsx-runtime.js'),
//         u = (0, r.z)('span')({
//           name: 'Chip',
//           class: 'c1g4obhz',
//         }),
//         c = (0, r.z)('span')({
//           name: 'Text',
//           class: 't3z88rv',
//         }),
//         p = (0, r.z)('button')({
//           name: 'DeleteButton',
//           class: 'd1r1jp7',
//         });
//       function m(e) {
//         var {
//             chipRef: s,
//             clickable: t = true,
//             onSelect: r,
//             onDelete: m,
//             selected: _ = false,
//             text: h,
//             variant: g = n.ACTION,
//           } = e,
//           j = (0, d.useRef)(null),
//           y = (0, d.useRef)(null),
//           {buttonProps: S} = (0, o.useButton)(
//             {
//               onPress: r,
//             },
//             j
//           ),
//           {buttonProps: f} = (0, o.useButton)(
//             {
//               onPress: m,
//             },
//             y
//           ),
//           v = (0, a.cx)(
//             'input' === g && 'clafzz0',
//             t && 'input' !== g && 'c3s5vdc',
//             'inline' === g && 'ceaiqnj',
//             _ && 'c1aw9hgq'
//           );
//         return (0, l.jsxs)(
//           u,
//           Object.assign({}, S, {
//             className: v,
//             'data-testid': _ ? 'chip-selected' : 'chip-unselected',
//             ref: s,
//             children: [
//               (0, l.jsx)(c, {
//                 children: h,
//               }),
//               g === n.INPUT
//                 ? (0, l.jsx)(
//                     p,
//                     Object.assign({}, f, {
//                       className: (0, a.cx)(_ && 's1vz6hi8'),
//                       children: (0, l.jsx)(i.ZP, {
//                         icon: 'x',
//                         size: i.i.Small,
//                       }),
//                     })
//                   )
//                 : null,
//             ],
//           })
//         );
//       }
//       !(function (e) {
//         (e.ACTION = 'action'), (e.INPUT = 'input'), (e.INLINE = 'inline');
//       })(n || (n = {})),
//         t('./.linaria-cache/app/j/assembly/AssemblyChip.linaria.css');
//     },
//     './app/j/audio_playback/index.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         JF: () => d,
//         XZ: () => l,
//         ZP: () => p,
//         iW: () => c,
//       });
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//       var n = t(
//           './node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js'
//         ),
//         a = t('./app/j/audio_playback/types.ts'),
//         r = t('./app/j/core/default_store/DefaultStore.ts'),
//         o = (0, n.createSlice)({
//           name: a.Q,
//           initialState: {
//             playingAudioId: null,
//             lastPlayedQueue: [],
//             playQueue: [],
//             preloadQueue: [],
//           },
//           reducers: {
//             addToPreloadQueue(e, s) {
//               var {payload: t} = s,
//                 n = t.audioItems.filter((s) => {
//                   var {audioId: t} = s;
//                   return !e.preloadQueue.find((e) => e.audioId === t);
//                 });
//               e.preloadQueue = [...e.preloadQueue, ...n];
//             },
//             setPlayQueue(e, s) {
//               var {payload: t} = s;
//               (e.playQueue = t.audioItems), (e.lastPlayedQueue = t.audioItems);
//             },
//             clearPlayQueue(e) {
//               (e.playingAudioId = null), (e.playQueue = []);
//             },
//             popNextPreloadQueue(e) {
//               e.preloadQueue.length > 0 &&
//                 (e.preloadQueue = e.preloadQueue.slice(1));
//             },
//             popNextPlayQueue(e) {
//               if (e.playQueue.length > 0) {
//                 var s = e.playQueue[0];
//                 (e.playingAudioId = s.audioId),
//                   (e.playQueue = e.playQueue.slice(1));
//               }
//             },
//           },
//         }),
//         {
//           addToPreloadQueue: i,
//           setPlayQueue: d,
//           clearPlayQueue: l,
//           popNextPreloadQueue: u,
//           popNextPlayQueue: c,
//         } = o.actions;
//       o.reducer;
//       function p() {
//         (0, r.bh)().registerReducer(a.Q, o.reducer);
//       }
//     },
//     './app/j/audio_playback/selectors.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         B6: () => p,
//         gA: () => c,
//         jZ: () => m,
//         oq: () => _,
//       });
//       var n = t('./node_modules/lodash/last.js'),
//         a = t.n(n),
//         r = t('./app/j/audio_playback/types.ts'),
//         o = t('./app/j/core/default_store/DefaultStore.ts'),
//         i = t('./node_modules/reselect/lib/index.js'),
//         d = (0, o.iu)(r.Q),
//         l = (0, i.createSelector)(d, (e) => e.preloadQueue),
//         u =
//           ((0, i.createSelector)(l, (e) =>
//             (null == e ? void 0 : e.length) > 0 ? e[0] : null
//           ),
//           (0, i.createSelector)(d, (e) => e.playQueue)),
//         c = (0, i.createSelector)(u, (e) =>
//           (null == e ? void 0 : e.length) > 0 ? e[0] : null
//         ),
//         p = (0, i.createSelector)(u, (e) =>
//           (null == e ? void 0 : e.length) > 0 ? a()(e) : null
//         ),
//         m = (0, i.createSelector)(d, (e) => e.playingAudioId),
//         _ = (0, i.createSelector)(d, (e) => e.lastPlayedQueue);
//     },
//     './app/j/audio_playback/thunks.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         DQ: () => c,
//         fM: () => p,
//         p0: () => l,
//       });
//       var n,
//         a = t('./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'),
//         r =
//           (t('./node_modules/core-js/modules/es.promise.js'),
//           t('./node_modules/core-js/modules/es.array.iterator.js'),
//           t('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
//           t('./app/j/audio_playback/index.ts')),
//         o = t('./app/j/audio_playback/selectors.ts');
//       function i() {
//         return d.apply(this, arguments);
//       }
//       function d() {
//         return (d = (0, a.Z)(function* () {
//           var {default: e} = yield t
//             .e('app_j_utils_AudioPlayer_ts')
//             .then(t.bind(t, './app/j/utils/AudioPlayer.ts'));
//           return (n = n || new e());
//         })).apply(this, arguments);
//       }
//       var l = () =>
//           (function () {
//             var e = (0, a.Z)(function* (e) {
//               return (yield i()).stopAll(), e((0, r.XZ)()), Promise.resolve();
//             });
//             return function (s) {
//               return e.apply(this, arguments);
//             };
//           })(),
//         u = (e) =>
//           (function () {
//             var s = (0, a.Z)(function* (s, t) {
//               var n = (0, o.gA)(t()),
//                 a = (0, o.B6)(t());
//               return n && n.audioId === (0, o.jZ)(t())
//                 ? s(l())
//                 : (n
//                     ? (s((0, r.iW)()),
//                       (yield i()).play(n.url, {
//                         onFinish: () => {
//                           n === a ? (e && e(), s(l())) : s(u(e));
//                         },
//                         onError: () => s(u(e)),
//                       }))
//                     : (e && e(), s(l())),
//                   Promise.resolve());
//             });
//             return function (e, t) {
//               return s.apply(this, arguments);
//             };
//           })(),
//         c = (e) => {
//           var {audioItems: s, onEnd: t} = e;
//           return (function () {
//             var e = (0, a.Z)(function* (e) {
//               return (
//                 (yield i()).stopAll(),
//                 e(
//                   (0, r.JF)({
//                     audioItems: s,
//                   })
//                 ),
//                 e(u(t)),
//                 Promise.resolve()
//               );
//             });
//             return function (s) {
//               return e.apply(this, arguments);
//             };
//           })();
//         },
//         p = () =>
//           (function () {
//             var e = (0, a.Z)(function* (e, s) {
//               var t = (0, o.oq)(s());
//               return (
//                 yield e(
//                   c({
//                     audioItems: t,
//                   })
//                 ),
//                 Promise.resolve()
//               );
//             });
//             return function (s, t) {
//               return e.apply(this, arguments);
//             };
//           })();
//     },
//     './app/j/audio_playback/types.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Q: () => n,
//       });
//       var n = 'audioPlayback';
//     },
//     './app/j/audio_playback/utils.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         $g: () => u,
//         AF: () => d,
//         kW: () => c,
//         os: () => l,
//         v2: () => m,
//       });
//       var n = t('./app/j/config/enums.ts'),
//         a = t('./app/j/global/Rollbar.ts'),
//         r = t('./app/j/study-engine/types.ts'),
//         o = t(
//           './app/j/study-modes/legacy-common/engine/utils/question-element-utils.ts'
//         );
//       function i(e, s) {
//         return (
//           e +
//           '-' +
//           ('string' == typeof s
//             ? (function (e) {
//                 switch (e) {
//                   case n.dU_.WORD:
//                     return n.kH9.WORD;
//                   case n.dU_.DEFINITION:
//                     return n.kH9.DEFINITION;
//                   case n.dU_.LOCATION:
//                     return n.kH9.LOCATION;
//                   default:
//                     throw new Error('Invalid StudiableCardSideLabel ' + e);
//                 }
//               })(s)
//             : s)
//         );
//       }
//       function d(e, s) {
//         var t = s === n.kH9.WORD ? e._wordAudioUrl : e._definitionAudioUrl;
//         return t
//           ? {
//               audioId: i(e.id, s),
//               url: t,
//             }
//           : null;
//       }
//       function l(e) {
//         return {
//           audioItems: [
//             {
//               audioId: e,
//               url: e,
//             },
//           ],
//         };
//       }
//       function u(e) {
//         return e.map((e) => ({
//           audioId: e.url,
//           url: e.url,
//         }));
//       }
//       function c(e) {
//         var s,
//           t,
//           n,
//           {question: i, advancedAudioSettings: d} = e;
//         switch (i.type) {
//           case r.mw.WRITTEN_QUESTION:
//           case r.mw.MULTIPLE_CHOICE_QUESTION:
//           case r.mw.FILL_IN_THE_BLANK_QUESTION:
//             n = i.prompt;
//             break;
//           case r.mw.REVEAL_SELF_ASSESSMENT_QUESTION:
//             n = i.front;
//             break;
//           default:
//             return void a.Z.error(
//               'Unable to find audio url elements for question type ' + i.type,
//               {
//                 advancedAudioSettings: d,
//                 question: i,
//               }
//             );
//         }
//         var u =
//           null != d && d.slowDefinitionEnabled
//             ? null == (s = (0, o.Sg)(n).audio)
//               ? void 0
//               : s.slowUrl
//             : null == (t = (0, o.Sg)(n).audio)
//             ? void 0
//             : t.url;
//         return u ? l(u) : void 0;
//       }
//       function p(e) {
//         return e.sideId + '-' + e.label;
//       }
//       function m(e, s) {
//         return {
//           audioId: p(e),
//           url: s,
//         };
//       }
//     },
//     './app/j/components/DeprecatedModeLayout.tsx': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => f,
//       });
//       var n = t('./app/j/ads/components/studyModes/AdModal.tsx'),
//         a = t('./node_modules/classnames/index.js'),
//         r = t.n(a),
//         o = t('./app/j/components/EmbedFooter.tsx'),
//         i = t('./app/j/components/MobileHeaderBreakpoint.tsx'),
//         d = t('./app/j/components/ModePortal.tsx'),
//         l = t('./app/j/components/UIContainer.tsx'),
//         u = t('./app/j/header/constants.ts'),
//         c = t('./node_modules/matchmedia/index.js'),
//         p = t.n(c),
//         m = t('./node_modules/react/index.js'),
//         _ = t('./app/j/utils/EventListener.ts'),
//         h = t('./app/j/utils/log-pageload-events.ts'),
//         g = t('./app/j/utils/ScrollInfo.ts'),
//         j = t('./app/j/utils/UserAgentHelper.ts'),
//         y = t('./node_modules/react/jsx-runtime.js'),
//         S = (e) =>
//           (0, y.jsx)(i.Z, {
//             above: e.aboveMediumBreakpoint,
//             children: (0, y.jsx)('div', {
//               className: 'ModeLayout-ad',
//               children: e.unit,
//             }),
//           });
//       class f extends m.Component {
//         constructor(e) {
//           super(e),
//             (this.state = {
//               appSmartBannerIsShown: false,
//               scrollTop: 0,
//             }),
//             (this.handleScroll = () => {
//               var e = g.Z.getScrollTop();
//               (e <= u.Pp || this.state.scrollTop <= u.Pp) &&
//                 this.setState({
//                   scrollTop: e,
//                 });
//             }),
//             (this.handleResize = () => {
//               this.checkForSmartBannerApp();
//             }),
//             (this.handleAdSkip = () => {
//               var {onCloseAdModal: e} = this.props;
//               void 0 !== e && e();
//             }),
//             (this.renderControls = (e) => {
//               var s = e
//                 ? {}
//                 : {
//                     top: this.props.isEmbedding
//                       ? 0
//                       : Math.max(0, u.Pp - this.state.scrollTop),
//                   };
//               return (
//                 this.props.showAdModal && (s.display = 'none'),
//                 (0, y.jsx)('div', {
//                   className: 'ModeLayout-controls',
//                   style: s,
//                   children: this.props.controls,
//                 })
//               );
//             }),
//             e.isEmbedding ||
//               ((this._scrollListener = _.Z.listen(window, 'scroll', () =>
//                 window.requestAnimationFrame(this.handleScroll)
//               )),
//               (this._resizeListener = _.Z.listen(window, 'resize', () =>
//                 window.requestAnimationFrame(this.handleResize)
//               )));
//         }
//         UNSAFE_componentWillMount() {
//           this._timeout = window.setTimeout(() => {
//             this.checkForSmartBannerApp();
//           }, 200);
//         }
//         componentDidMount() {
//           (0, h.K7)();
//         }
//         componentWillUnmount() {
//           this._scrollListener && this._scrollListener.remove(),
//             this._resizeListener && this._resizeListener.remove(),
//             this._timeout && clearTimeout(this._timeout);
//         }
//         renderPortal() {
//           return (0, y.jsx)(d.Z, {
//             onMount: this.props.onMount,
//             children: this.props.children,
//           });
//         }
//         renderContent(e) {
//           return (0, y.jsxs)(y.Fragment, {
//             children: [
//               (0, y.jsx)(i.Z, {
//                 children: (e) => this.renderControls(e),
//               }),
//               (0, y.jsx)('div', {
//                 className: e,
//                 children: this.props.shouldUsePortal
//                   ? this.renderPortal()
//                   : this.props.children,
//               }),
//               this.props.mWebAdUnit
//                 ? (0, y.jsx)(S, {
//                     aboveMediumBreakpoint: false,
//                     unit: this.props.mWebAdUnit,
//                   })
//                 : null,
//               this.props.adUnit
//                 ? (0, y.jsx)(S, {
//                     aboveMediumBreakpoint: true,
//                     unit: this.props.adUnit,
//                   })
//                 : null,
//             ],
//           });
//         }
//         render() {
//           var e = r()('ModeLayout', {
//               'is-fullWidth':
//                 this.props.shouldBeFullWidth || this.props.showAdModal,
//               'is-fullHeight': this.props.shouldBeFullHeight,
//               'is-showingAdz': !!this.props.adUnit,
//               'is-showingSmartBanner': this.state.appSmartBannerIsShown,
//               'is-usingDarkBackground': this.props.shouldUseDarkBackground,
//               'is-showingTasks': this.props.shouldHaveNoPadding,
//             }),
//             s = r()('ModeLayout-content', {
//               'is-fullHorizontalBleed': this.props.isFullHorizontalBleed,
//               'is-showingTasks': this.props.shouldHaveNoPadding,
//             });
//           return (0, y.jsxs)('div', {
//             className: e,
//             children: [
//               (0, y.jsx)(l.Z, {
//                 children: this.props.showAdModal
//                   ? (0, y.jsx)(n.Z, {
//                       onSkip: this.handleAdSkip,
//                     })
//                   : this.renderContent(s),
//               }),
//               this.props.isEmbedding
//                 ? (0, y.jsx)(o.Z, {
//                     studyableId: this.props.studyableId,
//                     studyablePath: this.props.studyablePath,
//                   })
//                 : null,
//             ],
//           });
//         }
//         checkForSmartBannerApp() {
//           var e =
//             window.innerHeight !==
//               window.document.documentElement.clientHeight &&
//             (0, j.au)() &&
//             p()('all and (orientation:portrait)').matches;
//           this.setState({
//             appSmartBannerIsShown: e,
//           });
//         }
//       }
//       f.defaultProps = {
//         isEmbedding: false,
//         isFullHorizontalBleed: false,
//         onMount: () => {},
//         shouldBeFullHeight: false,
//         shouldBeFullWidth: false,
//         shouldHaveNoPadding: false,
//         shouldUseDarkBackground: false,
//         shouldUsePortal: true,
//         showAdModal: false,
//       };
//     },
//     './app/j/components/EmbedFooter.tsx': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => u,
//       });
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//       var n = t('./app/j/components/SiteLogo.tsx'),
//         a = t('./app/j/config/enums.ts'),
//         r = t('./app/j/i18n/$t.ts'),
//         o = t('./node_modules/react/index.js'),
//         i = t('./app/j/utils/ModeHelper.ts'),
//         d = t('./app/j/utils/redirect.ts'),
//         l = t('./node_modules/react/jsx-runtime.js');
//       class u extends o.Component {
//         constructor() {
//           super(...arguments),
//             (this.handleOnChange = (e) => {
//               if (
//                 e.target.value !== (0, r.Z)('embed_footer.choose_a_study_mode')
//               ) {
//                 var s = (0, i.$2)(
//                   this.props.studyableId,
//                   parseInt(e.target.value, 10)
//                 );
//                 (0, d.ZP)(s + '/embed');
//               }
//             });
//         }
//         getFullStudyablePath() {
//           return this.props.studyablePath.startsWith('https://')
//             ? this.props.studyablePath
//             : window.location.origin + this.props.studyablePath;
//         }
//         render() {
//           return (0, l.jsxs)('div', {
//             className: 'EmbedFooter',
//             children: [
//               (0, l.jsxs)('select', {
//                 'aria-label': (0, r.Z)('embed_footer.choose_a_study_mode'),
//                 className: 'EmbedFooter-dropdown',
//                 onChange: this.handleOnChange,
//                 children: [
//                   (0, l.jsx)('option', {
//                     children: (0, r.Z)('embed_footer.choose_a_study_mode'),
//                   }),
//                   (0, l.jsx)('option', {
//                     value: a.aKJ.SCATTER,
//                     children: (0, r.Z)('study_mode.name.scatter'),
//                   }),
//                   (0, l.jsx)('option', {
//                     value: a.aKJ.LEARNING_ASSISTANT,
//                     children: (0, r.Z)('study_mode.name.learning_assistant'),
//                   }),
//                   (0, l.jsx)('option', {
//                     value: a.aKJ.TEST,
//                     children: (0, r.Z)('study_mode.name.test'),
//                   }),
//                   (0, l.jsx)('option', {
//                     value: a.aKJ.FLASHCARDS,
//                     children: (0, r.Z)('study_mode.name.flashcards'),
//                   }),
//                   (0, l.jsx)('option', {
//                     value: a.aKJ.SPELLER,
//                     children: (0, r.Z)('study_mode.name.speller'),
//                   }),
//                 ],
//               }),
//               (0, l.jsxs)('div', {
//                 className: 'EmbedFooter-branding',
//                 children: [
//                   (0, l.jsx)('a', {
//                     href: '/',
//                     target: '_top',
//                     children: (0, l.jsx)(n.Z, {
//                       className: 'EmbedFooter-logo',
//                     }),
//                   }),
//                   (0, l.jsxs)('a', {
//                     href: this.getFullStudyablePath(),
//                     target: '_top',
//                     children: [
//                       (0, l.jsx)('span', {
//                         className:
//                           'EmbedFooter-callToAction EmbedFooter-callToAction--normalScreen',
//                         children: (0, r.Z)(
//                           'embed_footer.view_this_study_set_long'
//                         ),
//                       }),
//                       (0, l.jsx)('span', {
//                         className:
//                           'EmbedFooter-callToAction EmbedFooter-callToAction--smallScreen',
//                         children: (0, r.Z)(
//                           'embed_footer.view_this_study_set_short'
//                         ),
//                       }),
//                     ],
//                   }),
//                 ],
//               }),
//             ],
//           });
//         }
//       }
//     },
//     './app/j/components/FormattedText.tsx': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => m,
//       });
//       t('./node_modules/core-js/modules/es.regexp.exec.js');
//       var n = t('./node_modules/classnames/index.js'),
//         a = t.n(n),
//         r =
//           (t('./node_modules/react/index.js'),
//           t('./node_modules/react-textfit/lib/index.js')),
//         o = t('./app/j/rich_text/components/PMDocument.tsx'),
//         i = t('./app/j/utils/ellipsis.ts'),
//         d = t('./node_modules/react/jsx-runtime.js'),
//         l = /\*([^*\n\r]+)\*/g,
//         u = /\*[^*\n\r]+\*/g,
//         c = /(\r\n|\n\r|\r|\n)/;
//       function p(e) {
//         var {text: s, maxLength: t, lang: n} = e;
//         return (0, d.jsx)(d.Fragment, {
//           children: s
//             ? (function (e) {
//                 var s = e;
//                 t && (s = (0, i.Z)(s, t));
//                 var a = 0;
//                 return s.split(c).map((e) =>
//                   e.match(c)
//                     ? (0, d.jsx)('br', {}, 'key-' + a++)
//                     : 'math' !== n && 'chem' !== n
//                     ? (function (e) {
//                         var s = e.split(u),
//                           t = [],
//                           n = 0;
//                         s[n] && t.push(s[n]), (n += 1);
//                         for (var a = l.exec(e); a; )
//                           t.push(
//                             (0, d.jsx)(
//                               'b',
//                               {
//                                 children: a[1],
//                               },
//                               'md-' + n
//                             )
//                           ),
//                             s[n] && t.push(s[n]),
//                             n++,
//                             (a = l.exec(e));
//                         return t;
//                       })(e)
//                     : e
//                 );
//               })(s)
//             : '...',
//         });
//       }
//       function m(e) {
//         var {
//             className: s,
//             lang: t,
//             maxLength: n,
//             onClick: i,
//             richText: l,
//             text: u,
//             textfit: c,
//           } = e,
//           m = a()('FormattedText', 'notranslate', s, 'lang-' + t),
//           _ =
//             'undefined' != typeof window && l
//               ? (0, d.jsx)(o.Z, {
//                   pmJson: l,
//                 })
//               : (0, d.jsx)(p, {
//                   lang: t,
//                   maxLength: n,
//                   text: u,
//                 });
//         if (c) {
//           var h = 'boolean' == typeof c ? {} : c;
//           return (0, d.jsx)(
//             r.ZP,
//             Object.assign(
//               {
//                 'aria-label': u,
//                 className: m,
//                 onClick: i,
//               },
//               h,
//               {
//                 children: _,
//               }
//             )
//           );
//         }
//         return (0, d.jsx)('div', {
//           'aria-label': u,
//           className: m,
//           onClick: i,
//           children: _,
//         });
//       }
//     },
//     './app/j/components/MobileHeaderBreakpoint.tsx': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => i,
//         z: () => o,
//       });
//       var n = t('./app/j/components/UIBreakpoint.tsx'),
//         a = t('./node_modules/react/index.js'),
//         r = t('./node_modules/react/jsx-runtime.js'),
//         o = 'm';
//       class i extends a.PureComponent {
//         render() {
//           return (0, r.jsx)(n.Z, {
//             above: this.props.above ? o : void 0,
//             below: this.props.above ? void 0 : o,
//             children: this.props.children,
//           });
//         }
//       }
//     },
//     './app/j/components/ModeLayout.tsx': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => C,
//       });
//       var n = t('./node_modules/@linaria/core/lib/index.js'),
//         a = t('./node_modules/@linaria/react/lib/index.js'),
//         r = t('./app/j/ads/components/studyModes/AdModal.tsx'),
//         o = t('./app/j/assembly/foundations/Spacing.ts'),
//         i = t('./app/j/components/EmbedFooter.tsx'),
//         d = t('./app/j/components/MobileHeaderBreakpoint.tsx'),
//         l = t('./app/j/components/ModePortal.tsx'),
//         u = t('./app/j/config/enums.ts'),
//         c = t('./app/j/header/constants.ts'),
//         p = t('./node_modules/matchmedia/index.js'),
//         m = t.n(p),
//         _ = t('./node_modules/polished/dist/polished.cjs.js'),
//         h = t('./node_modules/react/index.js'),
//         g = t('./app/j/utils/EventListener.ts'),
//         j = t('./app/j/utils/log-pageload-events.ts'),
//         y = t('./app/j/utils/ScrollInfo.ts'),
//         S = t('./app/j/utils/UserAgentHelper.ts'),
//         f = t('./node_modules/react/jsx-runtime.js'),
//         v = (0, a.z)('div')({
//           name: 'PageContainer',
//           class: 'ptc18zm',
//         }),
//         E = (0, a.z)('div')({
//           name: 'Controls',
//           class: 'c8mixic',
//         }),
//         x = (0, a.z)('div')({
//           name: 'ContentContainer',
//           class: 'cz3cbvv',
//           vars: {
//             'cz3cbvv-0': [(e) => e.height],
//           },
//         }),
//         b = (0, a.z)('div')({
//           name: 'Content',
//           class: 'clarv1u',
//           vars: {
//             'clarv1u-0': [
//               (e) => {
//                 var {studyModeType: s} = e;
//                 return s === u.aKJ.FLASHCARDS ? 3 : 1;
//               },
//             ],
//             'clarv1u-1': [
//               (e) => {
//                 var {shouldHaveNoPadding: s} = e;
//                 return s
//                   ? 0
//                   : o.Ki.Large + ' ' + o.Ki.Medium + ' ' + o.Ki.Medium;
//               },
//             ],
//             'clarv1u-3': [
//               (e) => {
//                 var {shouldShowNewStudyBreak: s, shouldHaveNoPadding: t} = e;
//                 return s || t ? 0 : o.Ki.Medium;
//               },
//             ],
//           },
//         }),
//         A = (0, a.z)('div')({
//           name: 'Ad',
//           class: 'a1ijmfr8',
//           vars: {
//             'a1ijmfr8-0': [
//               (e) => (e.studyModeType === u.aKJ.FLASHCARDS ? 1 : 'auto'),
//             ],
//             'a1ijmfr8-4': [
//               (e) =>
//                 e.studyModeType === u.aKJ.FLASHCARDS
//                   ? 'auto'
//                   : '' + (0, _.hO)(170),
//             ],
//           },
//         }),
//         T = (e) =>
//           (0, f.jsx)(d.Z, {
//             above: e.aboveMediumBreakpoint,
//             children: (0, f.jsx)(A, {
//               studyModeType: e.studyModeType,
//               children: e.unit,
//             }),
//           });
//       class C extends h.Component {
//         constructor(e) {
//           super(e),
//             (this.state = {
//               appSmartBannerIsShown: false,
//               scrollTop: 0,
//             }),
//             (this.handleScroll = () => {
//               var e = y.Z.getScrollTop();
//               (e <= c.Pp || this.state.scrollTop <= c.Pp) &&
//                 this.setState({
//                   scrollTop: e,
//                 });
//             }),
//             (this.handleResize = () => {
//               this.checkForSmartBannerApp();
//             }),
//             (this.handleAdSkip = () => {
//               var {onCloseAdModal: e} = this.props;
//               void 0 !== e && e();
//             }),
//             (this.renderControls = () => {
//               var e = (0, n.cx)(this.props.showAdModal ? 'iwow2le' : null);
//               return (0, f.jsx)(E, {
//                 className: e,
//                 children: this.props.controls,
//               });
//             }),
//             e.isEmbedding ||
//               ((this._scrollListener = g.Z.listen(window, 'scroll', () =>
//                 window.requestAnimationFrame(this.handleScroll)
//               )),
//               (this._resizeListener = g.Z.listen(window, 'resize', () =>
//                 window.requestAnimationFrame(this.handleResize)
//               )));
//         }
//         UNSAFE_componentWillMount() {
//           this._timeout = window.setTimeout(() => {
//             this.checkForSmartBannerApp();
//           }, 200);
//         }
//         componentDidMount() {
//           (0, j.K7)();
//         }
//         componentWillUnmount() {
//           this._scrollListener && this._scrollListener.remove(),
//             this._resizeListener && this._resizeListener.remove(),
//             this._timeout && clearTimeout(this._timeout);
//         }
//         getViewportHeight() {
//           return window.visualViewport
//             ? (0, _.hO)(window.visualViewport.height)
//             : '100vh';
//         }
//         getContentHeight() {
//           var {shouldShowNewStudyBreak: e, studyModeType: s} = this.props,
//             t = this.getViewportHeight();
//           return e
//             ? 'calc(' + t + ' - ' + o.Ki.Xxlarge + ')'
//             : s === u.aKJ.FLASHCARDS
//             ? 'calc(' + t + ' - ' + o.Ki.Xxlarge + ' - ' + o.Ki.Xxsmall + ')'
//             : '100%';
//         }
//         renderPortal() {
//           return (0, f.jsx)(l.Z, {
//             onMount: this.props.onMount,
//             children: this.props.children,
//           });
//         }
//         renderContent() {
//           return (0, f.jsxs)(x, {
//             height: this.getContentHeight(),
//             children: [
//               (0, f.jsx)(b, {
//                 shouldHaveNoPadding:
//                   this.props.shouldHaveNoPadding ||
//                   !!this.props.shouldHideEmbedControl,
//                 shouldShowNewStudyBreak: this.props.shouldShowNewStudyBreak,
//                 studyModeType: this.props.studyModeType,
//                 children: this.props.shouldUsePortal
//                   ? this.renderPortal()
//                   : this.props.children,
//               }),
//               this.props.mWebAdUnit
//                 ? (0, f.jsx)(T, {
//                     aboveMediumBreakpoint: false,
//                     unit: this.props.mWebAdUnit,
//                   })
//                 : null,
//               this.props.adUnit
//                 ? (0, f.jsx)(T, {
//                     aboveMediumBreakpoint: true,
//                     studyModeType: this.props.studyModeType,
//                     unit: this.props.adUnit,
//                   })
//                 : null,
//             ],
//           });
//         }
//         render() {
//           var e = (0, n.cx)(
//             this.props.showAdModal || this.props.shouldShowNewStudyBreak
//               ? 'i1u5o241'
//               : null,
//             this.props.isTaskCardScreen ? 'iloaf9o' : null,
//             this.props.adUnit && !this.props.isTaskCardScreen
//               ? 'i16pip9e'
//               : null,
//             this.state.appSmartBannerIsShown ? 'i1fm3tn7' : null
//           );
//           return (0, f.jsxs)(v, {
//             className: e,
//             children: [
//               this.props.shouldHideEmbedControl ? null : this.renderControls(),
//               this.props.showAdModal
//                 ? (0, f.jsx)(r.Z, {
//                     onSkip: this.handleAdSkip,
//                   })
//                 : this.renderContent(),
//               this.props.isEmbedding && !this.props.shouldHideEmbedControl
//                 ? (0, f.jsx)(i.Z, {
//                     studyableId: this.props.studyableId,
//                     studyablePath: this.props.studyablePath,
//                   })
//                 : null,
//             ],
//           });
//         }
//         checkForSmartBannerApp() {
//           var e =
//             window.innerHeight !==
//               window.document.documentElement.clientHeight &&
//             (0, S.au)() &&
//             m()('all and (orientation:portrait)').matches;
//           this.setState({
//             appSmartBannerIsShown: e,
//           });
//         }
//       }
//       (C.defaultProps = {
//         isEmbedding: false,
//         isTaskCardScreen: false,
//         isTaskRoundCheckpointScreen: false,
//         onMount: () => {},
//         shouldBeFullHeight: false,
//         shouldHaveNoPadding: false,
//         shouldShowNewStudyBreak: false,
//         shouldUseDarkBackground: false,
//         shouldUsePortal: true,
//         showAdModal: false,
//       }),
//         t('./.linaria-cache/app/j/components/ModeLayout.linaria.css');
//     },
//     './app/j/components/ModePortal.tsx': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => a,
//       });
//       var n = t('./node_modules/react/index.js');
//       class a extends n.Component {
//         componentDidMount() {
//           this.props.onMount.call();
//         }
//         shouldComponentUpdate() {
//           return false;
//         }
//         render() {
//           return this.props.children;
//         }
//       }
//     },
//     './app/j/components/NewModeControls.tsx': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         o: () => M,
//         Z: () => K,
//       });
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
//         t('./node_modules/core-js/modules/es.regexp.exec.js'),
//         t('./node_modules/core-js/modules/es.string.replace.js');
//       var n = t('./node_modules/@linaria/react/lib/index.js'),
//         a = t('./app/j/assembly/AssemblyBreakpoint.tsx'),
//         r = t('./app/j/assembly/AssemblyLink.tsx'),
//         o = t('./app/j/assembly/buttons/index.ts'),
//         i = t('./app/j/assembly/buttons/components/AssemblyIconButton.tsx'),
//         d = t(
//           './app/j/assembly/buttons/components/AssemblySecondaryButton.tsx'
//         ),
//         l = t('./app/j/assembly/buttons/types.ts'),
//         u = t('./app/j/assembly/foundations/Color.ts'),
//         c = t('./app/j/assembly/foundations/Primitives.tsx'),
//         p = t('./app/j/assembly/modals/index.ts'),
//         m = t('./app/j/compatibility/logger/useLogger.ts'),
//         _ = t('./app/j/compatibility/router.ts'),
//         h = t('./app/j/i18n/useTranslation.ts'),
//         g = t('./node_modules/react/index.js'),
//         j = t('./node_modules/react/jsx-runtime.js');
//       function y(e) {
//         var {
//             isOpen: s,
//             onClose: t,
//             onClickLeave: n,
//             studyEventLogger: a,
//             totalMissedQuestions: r,
//           } = e,
//           {t: o} = (0, h.Z)(),
//           {logPageAction: i} = (0, m.wL)();
//         (0, g.useEffect)(() => {
//           var e = a ? a.getStudySessionId() : null;
//           i('losing_missed_terms_warning_shown', {
//             study_session_id: e,
//           });
//         }, []);
//         var d = {
//             onClick: n,
//             text: o('modes.learn.exit.exit_learn_button'),
//             variant: l.dN.DANGER,
//           },
//           u = {
//             onClick: t,
//             text: o('modes.learn.exit.cancel_button'),
//           };
//         return (0, j.jsx)(p.g, {
//           includeCloseButton: true,
//           includeFooterBorder: false,
//           isOpen: s,
//           onClose: t,
//           primaryAction: d,
//           secondaryAction: u,
//           subtitle: o('modes.learn.exit.description', {
//             totalMissedQuestions: r,
//           }),
//           title: o('modes.learn.exit.title'),
//         });
//       }
//       var S = t('./app/j/components/StudyModeLogoDropdown.tsx'),
//         f = t('./app/j/config/enums.ts'),
//         v = t('./app/j/context/UserContext.ts'),
//         E = t('./app/j/hooks/useBreakpoint.ts'),
//         x = t('./app/j/lazy/LoginPromptModalContainerLazy.ts'),
//         b = t('./app/j/lazy/SignupPromptModalNewLazy.ts'),
//         A = t('./node_modules/polished/dist/polished.cjs.js'),
//         T = t('./app/j/signup/components/AuthPromptModal.tsx'),
//         C = t('./app/j/signup/types/auth.ts'),
//         I = t('./app/j/site_nav/types.ts'),
//         w = t('./app/j/study-modes/learn/tasks/constants.ts'),
//         O = t('./app/j/utils/BreakpointsHelper.ts'),
//         N = t('./app/j/utils/is-element-active.ts'),
//         k = t('./app/j/utils/log-pageload-events.ts'),
//         L = t('./app/j/utils/ModeHelper.ts'),
//         P = 'study_mode_nav',
//         M = (0, n.z)('div')({
//           name: 'ButtonSpacer',
//           class: 'bmbcei7',
//         }),
//         R = (0, n.z)('div')({
//           name: 'Control',
//           class: 'c1gi3y8b',
//           vars: {
//             'c1gi3y8b-3': [(e) => (e.isInTestToLearn ? (0, A.hO)(96) : 'auto')],
//           },
//         }),
//         D = (0, n.z)('div')({
//           name: 'Inner',
//           class: 'irc6ilh',
//         }),
//         Z = (0, n.z)('div')({
//           name: 'Actions',
//           class: 'anbpm9l',
//         }),
//         F = (0, n.z)('div')({
//           name: 'Options',
//           class: 'o1c0xcc3',
//         }),
//         z = (0, n.z)('div')({
//           name: 'Progress',
//           class: 'pewd1ns',
//         }),
//         U = (0, n.z)('div')({
//           name: 'TitleWrapper',
//           class: 't7xz9a1',
//         }),
//         H = (0, n.z)(c.H3)({
//           name: 'Title',
//           class: 't1xqympq',
//           vars: {
//             't1xqympq-1': [
//               (e) => (e.isEmbedding ? u.fY.SecondaryBodyText : 'unset'),
//             ],
//           },
//         }),
//         W = (0, n.z)(c.H3)({
//           name: 'TotalProgressTitle',
//           class: 't1wbk1ay',
//         }),
//         B = (0, n.z)('div')({
//           name: 'Exit',
//           class: 'e7wjffp',
//         });
//       function K(e) {
//         var {
//             actions: {logStudyNavigationEvent: s, onNavigate: t},
//             additionalOptions: n = null,
//             backText: u,
//             progressText: c,
//             hasSeenTtlCompletionScreen: A,
//             incorrectlyAnsweredStudiableItems: K,
//             isEmbedding: G,
//             isInTestToLearn: V = false,
//             modeName: q,
//             modeType: Q,
//             onClickOptions: $,
//             progress: Y,
//             progressBar: J,
//             renderOptionsCoachmark: X,
//             screenName: ee,
//             setHasSeenTtlCompletionScreen: se,
//             shouldShowOptionsButton: te = true,
//             signupOrigin: ne,
//             studiableContainerId: ae,
//             studiableContainerType: re,
//             studyablePath: oe,
//             studyEventLogger: ie,
//             titleText: de,
//             totalMissedQuestions: le,
//           } = e,
//           {t: ue} = (0, h.Z)(),
//           {logAuthEvent: ce, logPageAction: pe} = (0, m.wL)(),
//           me = void 0 !== J,
//           _e = !!(0, g.useContext)(v.Z),
//           he = !(_e || G),
//           ge = (0, _.E3)(),
//           je = (0, _.wK)();
//         (0, g.useEffect)(() => {
//           (0, k.en)(k.qc.TIME_TO_HEADER_INTERACTIVE);
//         }, []);
//         var ye,
//           Se = (0, E.Z)(),
//           [fe, ve] = (0, g.useState)(false),
//           [Ee, xe] = (0, g.useState)(false),
//           [be, Ae] = (0, g.useState)({
//             selected: false,
//             action: '',
//             link: '',
//           }),
//           [Te, Ce] = (0, g.useState)(false),
//           [Ie, we] = (0, g.useState)(null),
//           [Oe, Ne] = (0, g.useState)(je),
//           ke = (e) => {
//             var s = e.target;
//             (0, N.Z)(s) && s.blur(), $ && $();
//           },
//           Le = function (e, t) {
//             void 0 === e && (e = true),
//               e &&
//                 s({
//                   clickName: 'click_login_menu',
//                   screenName: ee,
//                 }),
//               Ne(t || je),
//               ce(f.g4I.LOGIN_FORM_OPENED, {
//                 auth_origin: P,
//               }),
//               we(I.L.LOGIN);
//           },
//           Pe = function (e) {
//             void 0 === e && (e = true),
//               e &&
//                 s({
//                   clickName: 'click_signup_menu',
//                   screenName: ee,
//                 }),
//               ce(f.g4I.SIGNUP_FORM_OPENED, {
//                 auth_origin: P,
//               }),
//               we(I.L.SIGN_UP);
//           },
//           Me = () => {
//             we(null);
//           },
//           Re = () => {
//             if (V) {
//               if (!Ee && !A) return void xe(true);
//               if (
//                 (se && se(false),
//                 pe('losing_missed_terms_exit_clicked'),
//                 be.selected)
//               )
//                 return (
//                   s({
//                     clickName: be.action,
//                     screenName: ee,
//                   }),
//                   t ? t(be.action) : window.location.assign(be.action),
//                   false
//                 );
//             }
//             pe('study_mode_back_button_clicked'),
//               Te || _e || !L.J.includes(Q)
//                 ? oe && (t ? t(oe) : window.location.replace(oe))
//                 : (ve(true),
//                   Ce(true),
//                   ce(f.g4I.SIGNUP_FORM_OPENED, {
//                     auth_origin: P,
//                   }));
//           },
//           De = () => {
//             pe(w.I1.TASKS_HEADER_SET_NAME_CLICKED, {
//               studiableId: ae,
//             }),
//               t && t();
//           };
//         return (0, j.jsxs)(R, {
//           isInTestToLearn: V,
//           children: [
//             (0, j.jsxs)(D, {
//               children: [
//                 (0, j.jsx)(S.Z, {
//                   actions: {
//                     logStudyNavigationEvent: s,
//                     onNavigate: t,
//                   },
//                   authModalType: Ie,
//                   isEmbedding: G,
//                   isInTestToLearn: V,
//                   modeName: q,
//                   modeType: Q,
//                   screenName: ee,
//                   setOpenExitModal: xe,
//                   setStudyModeSelection: Ae,
//                   studiableContainerId: ae,
//                   studiableContainerType: re,
//                 }),
//                 Y && (0, O.P0)(Se, 's')
//                   ? Y && (0, O.P0)(Se, 's')
//                     ? (0, j.jsx)(z, {
//                         children: Y,
//                       })
//                     : null
//                   : (0, j.jsxs)(U, {
//                       children: [
//                         c
//                           ? (0, j.jsx)(W, {
//                               'data-testid': 'progress-header',
//                               children: c,
//                             })
//                           : null,
//                         (0, O.P0)(Se, 's')
//                           ? (0, j.jsx)(H, {
//                               isEmbedding: G,
//                               children: G
//                                 ? de
//                                 : (0, j.jsx)(r.ZP, {
//                                     linkTo: '/' + ae + '/',
//                                     onClick: De,
//                                     text: de,
//                                     variant: r.U_.Title,
//                                   }),
//                             })
//                           : null,
//                       ],
//                     }),
//                 V && Ee && le
//                   ? (0, j.jsx)(y, {
//                       isOpen: Ee,
//                       onClickLeave: Re,
//                       onClose: () => {
//                         pe('losing_missed_terms_cancel_clicked'), xe(false);
//                       },
//                       studyEventLogger: ie,
//                       totalMissedQuestions: le,
//                     })
//                   : null,
//                 (0, j.jsxs)(Z, {
//                   children: [
//                     he
//                       ? (0, j.jsxs)(F, {
//                           children: [
//                             (0, j.jsx)(a.ZP, {
//                               lowerBound: 'm',
//                               children: (0, j.jsx)(M, {
//                                 children: (0, j.jsx)(d.Z, {
//                                   onClick: () => setTimeout(() => Le(), 0),
//                                   text: ue('global.header.log_in.button'),
//                                 }),
//                               }),
//                             }),
//                             (0, j.jsx)(M, {
//                               children: (0, j.jsx)(o.wI, {
//                                 onClick: () => setTimeout(() => Pe(), 0),
//                                 text: ue('global.header.sign_up.button'),
//                                 variant: l.dN.UPGRADE,
//                               }),
//                             }),
//                           ],
//                         })
//                       : (0, j.jsxs)(j.Fragment, {
//                           children: [
//                             n,
//                             te
//                               ? ((ye = (0, j.jsx)(F, {
//                                   children: (0, O.P0)(Se, 'm')
//                                     ? (0, j.jsx)(d.Z, {
//                                         onClick: ke,
//                                         text: ue(
//                                           'modes.mode_controls.options_button'
//                                         ),
//                                       })
//                                     : (0, j.jsx)(i.Z, {
//                                         alt: ue(
//                                           'modes.mode_controls.options_button'
//                                         ),
//                                         icon: 'settings',
//                                         onClick: ke,
//                                         shape: 'square',
//                                         size: 'medium',
//                                       }),
//                                 })),
//                                 X ? X(ye) : ye)
//                               : null,
//                           ],
//                         }),
//                     G
//                       ? null
//                       : (0, j.jsx)(B, {
//                           children: (0, j.jsx)(i.Z, {
//                             alt: u || ue('modes.mode_controls.back_button'),
//                             icon: 'x',
//                             onClick: () => {
//                               setTimeout(Re, 0);
//                             },
//                             shape: 'square',
//                             size: 'medium',
//                           }),
//                         }),
//                   ],
//                 }),
//               ],
//             }),
//             Y && !(0, O.P0)(Se, 's')
//               ? (0, j.jsx)(z, {
//                   children: Y,
//                 })
//               : null,
//             me ? J : null,
//             _e
//               ? null
//               : (0, j.jsxs)(j.Fragment, {
//                   children: [
//                     (0, j.jsx)(T.q, {
//                       barrierType: 'curtain',
//                       includeSubtitle: false,
//                       isOpen: fe,
//                       onClose: () => {
//                         ve(false);
//                       },
//                       placement: C.V.STUDY_MODE_BACK_BUTTON,
//                       redirectPath: oe || '/latest',
//                       signupOrigin: ne,
//                       titleOverride: ue(
//                         'study_modes_signup_curtain_modal.back_button.title'
//                       ),
//                     }),
//                     (0, j.jsx)(x.Z, {
//                       isOpen: Ie === I.L.LOGIN,
//                       onClose: Me,
//                       onOpenSignup: () => Pe(),
//                       redir: Oe,
//                     }),
//                     (0, j.jsx)(b.Z, {
//                       actions: {
//                         onClose: Me,
//                         onOpenLogin: Le,
//                       },
//                       includeCloseButton: true,
//                       isOpen: Ie === I.L.SIGN_UP,
//                       redir: je,
//                       signupOrigin: 'top-nav',
//                     }),
//                   ],
//                 }),
//             V &&
//               0 === (null == K ? void 0 : K.length) &&
//               (0, j.jsx)(p.g, {
//                 body: ue('modes.learn.test_to_learn.without_data_modal.body'),
//                 includeCloseButton: false,
//                 isOpen: true,
//                 justifyCenter: true,
//                 mobileVariant: 'bottomSheet',
//                 onClose: () => {},
//                 primaryAction: {
//                   onClick: () => {
//                     ge((0, L.$2)(ae, f.aKJ.LEARNING_ASSISTANT));
//                   },
//                   text: ue(
//                     'modes.learn.test_to_learn.without_data_modal.cta_learn_mode'
//                   ),
//                   variant: l.dN.DEFAULT,
//                 },
//                 secondaryAction: {
//                   onClick: () => {
//                     ge(oe || je);
//                   },
//                   text: ue(
//                     'modes.learn.test_to_learn.without_data_modal.cta_set_page'
//                   ),
//                 },
//                 shouldCloseOnOverlayClick: false,
//                 title: ue('modes.learn.test_to_learn.without_data_modal.title'),
//               }),
//           ],
//         });
//       }
//       t('./.linaria-cache/app/j/components/NewModeControls.linaria.css');
//     },
//     './app/j/components/NextStep.tsx': (e, s, t) => {
//       'use strict';
//       t('./node_modules/core-js/modules/es.symbol.description.js');
//       var n = t('./node_modules/@linaria/react/lib/index.js'),
//         a = t('./app/j/assembly/AssemblyIcon.tsx'),
//         r = t('./app/j/assembly/AssemblyPill.tsx'),
//         o = t('./app/j/components/PremiumBrandingBadge.tsx'),
//         i =
//           (t('./node_modules/react/index.js'),
//           t('./node_modules/react/jsx-runtime.js')),
//         d = (0, n.z)('article')({
//           name: 'Wrapper',
//           class: 'w1e3jc65',
//         }),
//         l = (0, n.z)('div')({
//           name: 'IllustrationWrapper',
//           class: 'i1nqww0y',
//         }),
//         u = (0, n.z)('div')({
//           name: 'Badge',
//           class: 'b1xhzaw7',
//         }),
//         c = (0, n.z)('div')({
//           name: 'Illustration',
//           class: 'ie8xxri',
//         }),
//         p = (0, n.z)('div')({
//           name: 'Info',
//           class: 'i15bzn2n',
//         }),
//         m = (0, n.z)('div')({
//           name: 'Title',
//           class: 't7fr19y',
//         }),
//         _ = (0, n.z)('div')({
//           name: 'Description',
//           class: 'dw1ojws',
//         }),
//         h = (0, n.z)('div')({
//           name: 'IconWrapper',
//           class: 'i1wd11tn',
//         });
//       (s.Z = (e) => {
//         var {
//           onClick: s,
//           showPremiumBrandingBadge: t = false,
//           description: n,
//           illustrationCss: g,
//           pillText: j,
//           title: y,
//         } = e;
//         return (0, i.jsxs)(d, {
//           onClick: s,
//           children: [
//             (0, i.jsxs)(l, {
//               children: [
//                 t
//                   ? (0, i.jsx)(u, {
//                       children: (0, i.jsx)(o.ZP, {}),
//                     })
//                   : null,
//                 (0, i.jsx)(c, {
//                   className: g,
//                 }),
//               ],
//             }),
//             (0, i.jsxs)(p, {
//               children: [
//                 j &&
//                   (0, i.jsx)(r.ZP, {
//                     text: j,
//                     variant: r.GP.SUBTLE_COLOR,
//                   }),
//                 (0, i.jsx)(m, {
//                   children: y,
//                 }),
//                 (0, i.jsx)(_, {
//                   children: n,
//                 }),
//               ],
//             }),
//             (0, i.jsx)(h, {
//               children: (0, i.jsx)(a.ZP, {
//                 icon: 'wedge-right',
//                 role: 'presentation',
//                 size: a.i.Small,
//               }),
//             }),
//           ],
//         });
//       }),
//         t('./.linaria-cache/app/j/components/NextStep.linaria.css');
//     },
//     './app/j/components/ProgressMeter.tsx': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         RS: () => a,
//         em: () => n,
//       });
//       var n,
//         a,
//         r = t('./node_modules/@linaria/react/lib/index.js'),
//         o = t('./app/j/assembly/foundations/Color.ts'),
//         i = t('./node_modules/polished/dist/polished.cjs.js'),
//         d =
//           (t('./node_modules/react/index.js'),
//           t('./app/j/utils/NumberFormatters.ts')),
//         l = t('./app/j/utils/ProgressArcHelper.ts'),
//         u = t('./node_modules/react/jsx-runtime.js');
//       !(function (e) {
//         (e.SINGLE_ARC = 'single'), (e.DOUBLE_ARC = 'double');
//       })(n || (n = {})),
//         (function (e) {
//           (e.SMALL = 'small'),
//             (e.MEDIUM = 'medium'),
//             (e.LARGE = 'large'),
//             (e.XLARGE = 'xlarge');
//         })(a || (a = {}));
//       var c = (e) => {
//           var {meterDiameter: s} = e;
//           return 2 * s * Math.PI;
//         },
//         p = (0, r.z)('svg')({
//           name: 'MeterSvg',
//           class: 'm9rdw8h',
//           vars: {
//             'm9rdw8h-0': [(e) => (0, i.hO)(e.meterDiameter)],
//           },
//         }),
//         m = (0, r.z)('circle')({
//           name: 'Circle',
//           class: 'c1vj5ieu',
//           vars: {
//             'c1vj5ieu-0': [
//               (e) =>
//                 ((e) => {
//                   var {percentage: s, variant: t} = e;
//                   return 100 === s
//                     ? o.y1.$400
//                     : t === n.DOUBLE_ARC
//                     ? o.YP.$400
//                     : o.fY.Gray400Gray600;
//                 })(e),
//             ],
//             'c1vj5ieu-2': [(e) => c(e)],
//             'c1vj5ieu-3': [(e) => 2 * c(e)],
//           },
//         }),
//         _ = (0, r.z)('path')({
//           name: 'Arc',
//           class: 'a1dtlril',
//           vars: {
//             'a1dtlril-2': [(e) => c(e)],
//             'a1dtlril-3': [(e) => 2 * c(e)],
//           },
//         }),
//         h = (0, r.z)('tspan')({
//           name: 'Label',
//           class: 'ljt3l6v',
//         });
//       (s.ZP = (e) => {
//         var s,
//           t,
//           r,
//           {
//             percentage: o,
//             shouldShowText: i = true,
//             variant: c = n.SINGLE_ARC,
//             size: g = a.SMALL,
//           } = e;
//         switch (g) {
//           case 'medium':
//             s = 108;
//             break;
//           case 'large':
//             s = 136;
//             break;
//           case 'xlarge':
//             s = 164;
//             break;
//           default:
//             s = 100;
//         }
//         return (0, u.jsxs)(p, {
//           meterDiameter: s,
//           viewBox: '0 0 230 230',
//           children: [
//             (0, u.jsx)('g', {
//               transform: 'translate(115 115)',
//               children: (0, u.jsxs)('g', {
//                 transform: 'rotate(0)',
//                 children: [
//                   (0, u.jsx)(m, {
//                     cx: '100',
//                     cy: '100',
//                     fill: 'none',
//                     meterDiameter: s,
//                     percentage: o,
//                     r: '100',
//                     strokeLinecap: 'round',
//                     strokeWidth: '30',
//                     transform: 'translate(-100, -100)',
//                     variant: c,
//                   }),
//                   100 === o
//                     ? null
//                     : (0, u.jsx)(_, {
//                         d:
//                           ((t = o),
//                           (r = (0, l.hm)(0, t)),
//                           (0, l.x8)(0, 0, 100, 0, 0 + r)),
//                         fill: 'none',
//                         meterDiameter: s,
//                         strokeLinecap: 'round',
//                         strokeWidth: '30',
//                       }),
//                 ],
//               }),
//             }),
//             i
//               ? (0, u.jsx)('text', {
//                   textAnchor: 'middle',
//                   transform: 'translate(115 127)',
//                   children: (0, u.jsx)(h, {
//                     children: (0, d.Sr)(o),
//                   }),
//                 })
//               : null,
//           ],
//         });
//       }),
//         t('./.linaria-cache/app/j/components/ProgressMeter.linaria.css');
//     },
//     './app/j/components/UIKbd.tsx': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => d,
//       });
//       var n = t('./node_modules/classnames/index.js'),
//         a = t.n(n),
//         r = t('./node_modules/react/index.js'),
//         o = t('./node_modules/react/jsx-runtime.js'),
//         i = 'UIKeyboardInput--large';
//       class d extends r.PureComponent {
//         render() {
//           var e = this.props.type
//             ? a()('UIKeyboardInput', i)
//             : 'UIKeyboardInput';
//           return (0, o.jsx)('kbd', {
//             className: e,
//             children: this.props.children,
//           });
//         }
//       }
//     },
//     './app/j/core/getGenericErrorWithToastCallback.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => o,
//       });
//       var n = t('./app/j/assembly/toasts/index.ts'),
//         a = t('./app/j/global/Rollbar.ts'),
//         r = t('./app/j/notifications/Constants.ts');
//       function o(e, s) {
//         return (
//           void 0 === s && (s = true),
//           (t) => {
//             console.error(
//               "generic error callback for '" +
//                 e +
//                 "' received error " +
//                 t.name +
//                 ': ' +
//                 t.message,
//               {
//                 shouldDisplayNotification: s,
//               }
//             ),
//               a.Z.error(e, t),
//               s &&
//                 (0, n.fz)({
//                   duration: r.th.DEFAULT,
//                   includeDismiss: true,
//                   includeEllipsis: false,
//                 });
//           }
//         );
//       }
//     },
//     './app/j/create_set/utils/privoHelper.ts': (e, s, t) => {
//       'use strict';
//       function n(e) {
//         var s = null == e ? void 0 : e.signupCountryCode;
//         return (
//           null !== e &&
//           (null == s || 'us' === s) &&
//           e._isUnderAge &&
//           !e.isConfirmed
//         );
//       }
//       t.d(s, {
//         s: () => n,
//       });
//     },
//     './app/j/header/constants.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Ax: () => n,
//         P7: () => r,
//         Pp: () => a,
//         nU: () => o,
//       });
//       var n,
//         a = 64,
//         r = 'm',
//         o = 'l';
//       !(function (e) {
//         (e.Home = 'home'),
//           (e.Subjects = 'subjects'),
//           (e.Explanations = 'explanations'),
//           (e.Library = 'your-library'),
//           (e.Create = 'create');
//       })(n || (n = {}));
//     },
//     './app/j/hocs/keydownDecorator.tsx': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => d,
//         a: () => i,
//       });
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//       var n = t('./node_modules/react/index.js'),
//         a = t('./app/j/utils/HOCs.ts'),
//         r = t('./node_modules/react/jsx-runtime.js'),
//         o = 1,
//         i = ['CapsLock', 'Tab'];
//       function d(e) {
//         var s = Array.isArray(e) ? e.join(', ') : e;
//         return (0, a.r)(function (e) {
//           return class extends n.Component {
//             constructor() {
//               super(...arguments),
//                 (this.state = {
//                   keydownEvent: null,
//                 }),
//                 (this.handleKeydown = (e) => {
//                   (!s && this.isModifierKey(e)) ||
//                     e.repeat ||
//                     this.setState(
//                       {
//                         keydownEvent: e,
//                       },
//                       () => {
//                         this.setState({
//                           keydownEvent: null,
//                         });
//                       }
//                     );
//                 }),
//                 (this.isModifierKey = (e) => {
//                   var {altKey: s, ctrlKey: t, metaKey: n, shiftKey: a} = e;
//                   return s || t || n || a;
//                 }),
//                 (this.scope = 'keydownDecorator#' + o++);
//             }
//             componentDidMount() {
//               var e = t('./node_modules/keymaster/keymaster.js');
//               s
//                 ? (e.pushScope(this.scope),
//                   e(s, this.scope, this.handleKeydown))
//                 : window.document.addEventListener(
//                     'keydown',
//                     this.handleKeydown,
//                     true
//                   );
//             }
//             componentWillUnmount() {
//               var e = t('./node_modules/keymaster/keymaster.js');
//               s
//                 ? (e.deleteScope(this.scope), e.unbind(s, this.scope))
//                 : window.document.removeEventListener(
//                     'keydown',
//                     this.handleKeydown,
//                     true
//                   );
//             }
//             render() {
//               return (0, r.jsx)(
//                 e,
//                 Object.assign({}, this.props, {
//                   keydownEvent: this.state.keydownEvent,
//                 })
//               );
//             }
//           };
//         });
//       }
//     },
//     './app/j/hooks/useEventThrottling.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => r,
//       });
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//       var n = t('./node_modules/react/index.js'),
//         a = t('./app/j/utils/tamperProofNow.ts');
//       function r(e, s) {
//         var t = (0, n.useRef)();
//         return (0, n.useCallback)(
//           function () {
//             var n = (0, a.Z)();
//             if (!t.current || n - t.current > s)
//               return (t.current = n), e(...arguments);
//           },
//           [e, s]
//         );
//       }
//     },
//     './app/j/hooks/useKeyboardListener.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         g: () => r,
//       });
//       var n = t('./node_modules/react/index.js');
//       function a(e, s) {
//         var t = 'undefined' != typeof window ? window.document.body : null;
//         (0, n.useEffect)(
//           () => (
//             null == t || t.addEventListener(e, s),
//             () => {
//               null == t || t.removeEventListener(e, s);
//             }
//           ),
//           [e, s, t]
//         );
//       }
//       function r(e) {
//         a('keydown', e);
//       }
//     },
//     './app/j/hooks/usePrevious.tsx': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => a,
//       });
//       var n = t('./node_modules/react/index.js');
//       function a(e) {
//         var s = (0, n.useRef)();
//         return (
//           (0, n.useEffect)(() => {
//             s.current = e;
//           }, [e]),
//           s.current
//         );
//       }
//     },
//     './app/j/hooks/useSwipeListeners.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => d,
//       });
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//       var n = t('./app/j/hooks/useEventThrottling.ts'),
//         a = t('./node_modules/react/index.js'),
//         r = (e) => ({
//           x: e.clientX,
//           y: e.clientY,
//         }),
//         o = (e, s) => ({
//           x: e.x - s.x,
//           y: e.y - s.y,
//         }),
//         i = (e) => e.identifier;
//       function d(e, s) {
//         var {
//             onSwipe: t,
//             onSwipeLeft: d = () => {},
//             onSwipeRight: l = () => {},
//           } = s,
//           u = (0, a.useRef)({}),
//           c = (0, n.Z)(t, 300),
//           p = (0, n.Z)(d, 300),
//           m = (0, n.Z)(l, 300),
//           _ = (0, a.useCallback)((e) => {
//             for (var s of e.touches) u.current[i(s)] = r(s);
//           }, []),
//           h = (0, a.useCallback)(
//             (e) => {
//               var s,
//                 t,
//                 n = false,
//                 a = false,
//                 d = false;
//               for (var l of e.touches) {
//                 var _ = u.current[i(l)],
//                   h = r(l);
//                 if (_) {
//                   var g =
//                       ((s = h),
//                       (t = _),
//                       {
//                         x: Math.abs(s.x - t.x),
//                         y: Math.abs(s.y - t.y),
//                       }),
//                     j = o(h, _);
//                   (g.x > 10 || g.y > 10) &&
//                     ((n = true),
//                     g.x > g.y && (j.x < 0 ? (a = true) : j.x > 0 && (d = true)),
//                     delete u.current[i(l)]);
//                 }
//               }
//               n && c(), a && p(), d && m();
//             },
//             [c]
//           ),
//           g = (0, a.useCallback)((e) => {
//             for (var s of e.touches) delete u.current[i(s)];
//           }, []);
//         (0, a.useEffect)(() => {
//           var s = e.current;
//           return (
//             null == s || s.addEventListener('touchstart', _),
//             null == s || s.addEventListener('touchmove', h),
//             null == s || s.addEventListener('touchend', g),
//             () => {
//               (u.current = {}),
//                 null == s || s.removeEventListener('touchstart', _),
//                 null == s || s.removeEventListener('touchmove', h),
//                 null == s || s.removeEventListener('touchend', g);
//             }
//           );
//         }, [g, h, _, e.current]);
//       }
//     },
//     './app/j/lazy/LoginPromptModalContainerLazy.ts': (e, s, t) => {
//       'use strict';
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/es.promise.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//       var n = t('./app/j/hocs/lazilyLoadComponent.tsx');
//       s.Z = (0, n.Z)(() =>
//         Promise.all([
//           t.e('react'),
//           t.e('redux'),
//           t.e('common'),
//           t.e('login_signup_lazy'),
//         ]).then(t.bind(t, './app/j/containers/LoginPromptModalContainer.ts'))
//       );
//     },
//     './app/j/lazy/OptionsModalContainerLazy.ts': (e, s, t) => {
//       'use strict';
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/es.promise.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//       var n = t('./app/j/hocs/lazilyLoadComponent.tsx');
//       s.Z = (0, n.Z)(() =>
//         Promise.all([t.e('react'), t.e('common'), t.e('options_modal')]).then(
//           t.bind(
//             t,
//             './app/j/study-modes/common/containers/OptionsModalContainer.ts'
//           )
//         )
//       );
//     },
//     './app/j/lazy/QuestionLocationLazy.ts': (e, s, t) => {
//       'use strict';
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/es.promise.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//       var n = t('./app/j/hocs/lazilyLoadComponent.tsx');
//       s.Z = (0, n.Z)(
//         () =>
//           Promise.all([
//             t.e('leaflet'),
//             t.e('common'),
//             t.e('question_location_lazy'),
//           ]).then(
//             t.bind(
//               t,
//               './app/j/study-modes/learn/components/QuestionLocation.tsx'
//             )
//           ),
//         {
//           withSpinner: true,
//         }
//       );
//     },
//     './app/j/lazy/SetCreationPrivoModalLazy.ts': (e, s, t) => {
//       'use strict';
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/es.promise.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//       var n = t('./app/j/hocs/lazilyLoadComponent.tsx');
//       s.Z = (0, n.Z)(() =>
//         t
//           .e('set_creation_privo_modal_lazy')
//           .then(
//             t.bind(t, './app/j/create_set/components/SetCreationPrivoModal.tsx')
//           )
//       );
//     },
//     './app/j/live_game/checkpoint/constants.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         BR: () => l,
//         GO: () => d,
//         I5: () => i,
//         KI: () => p,
//         ON: () => n,
//         Ot: () => a,
//         X3: () => m,
//         Zr: () => _,
//         eZ: () => u,
//         mq: () => c,
//         s8: () => o,
//         wi: () => r,
//       });
//       var n,
//         a,
//         r,
//         o = 20,
//         i = 0.5,
//         d = 1,
//         l = 4,
//         u = {
//           LOBBY: 'lobby',
//           PLAYING: 'playing',
//           ENDED: 'ended',
//         },
//         c = 0.01,
//         p = 5e3;
//       !(function (e) {
//         (e.CHECKPOINT_ACTIVITY_SELECTION_LOADED =
//           'checkpoint_activity_selection_load'),
//           (e.CHECKPOINT_ACTIVITY_SELECTED = 'checkpoint_activity_selected'),
//           (e.CHECKPOINT_QUESTION_SELECTION_LOAD =
//             'checkpoint_question_selection_load'),
//           (e.CHECKPOINT_QUESTIONS_SELECTED = 'checkpoint_questions_selected'),
//           (e.CHECKPOINT_LEADERBOARD_DISPLAYED =
//             'checkpoint_leaderboard_displayed'),
//           (e.CHECKPOINT_LOBBY_LOAD = 'checkpoint_lobby_load'),
//           (e.CHECKPOINT_CREATE_CLICKED = 'checkpoint_create_clicked'),
//           (e.CHECKPOINT_OPTIONS_CHANGED = 'checkpoint_options_changed'),
//           (e.CHECKPOINT_PLAYER_WAITING = 'checkpoint_player_waiting'),
//           (e.CHECKPOINT_PLAYER_JOINED = 'checkpoint_player_joined'),
//           (e.CHECKPOINT_ANSWER_SUBMITTED = 'checkpoint_answer_submitted'),
//           (e.CHECKPOINT_SUMMARY_BREAKDOWN_TEACHER_LOAD =
//             'checkpoint_summary_breakdown_teacher_load'),
//           (e.CHECKPOINT_GAME_END_TEACHER = 'checkpoint_game_end_teacher'),
//           (e.CHECKPOINT_GAME_END_PLAYER = 'checkpoint_game_end_player'),
//           (e.CHECKPOINT_CREATE_NEW_ROUND = 'checkpoint_create_new_round'),
//           (e.CHECKPOINT_START_AGAIN = 'checkpoint_start_again'),
//           (e.CHECKPOINT_GAME_EXIT = 'checkpoint_game_exit'),
//           (e.CHECKPOINT_COACHMARK_DISMISS = 'checkpoint_coachmark_dismiss'),
//           (e.CHECKPOINT_START_GAME_ANYWAY = 'checkpoint_start_game_anyway'),
//           (e.CHECKPOINT_FIRST_QUESTION_SELECTED =
//             'checkpoint_first_question_selected'),
//           (e.CHECKPOINT_MUSIC_TOGGLE = 'checkpoint_music_toggle'),
//           (e.CHECKPOINT_WRITTEN_ROUND_START = 'checkpoint_written_round_start'),
//           (e.CHECKPOINT_MCQ_ROUND = 'checkpoint_mcq_round'),
//           (e.CHECKPOINT_WRITTEN_ANSWER_TOGGLE_CLICKED =
//             'checkpoint_written_answer_toggle_clicked'),
//           (e.CHECKPOINNT_START = 'checkpoint_start'),
//           (e.CHECKPOINT_WATCH_HELP_VIDEO = 'checkpoint_watch_help_video'),
//           (e.CHECKPOINT_TEACHER_ACTIVITY_PICKER_WATCH_VIDEO =
//             'checkpoint_teacher_activity_picker_watch_video');
//       })(n || (n = {})),
//         (function (e) {
//           (e.CHECKPOINT_TEACHER_SUMMARY_SCREEN =
//             'checkpoint_teacher_summary_screen'),
//             (e.CHECKPOINT_TEACHER_LOBBY_SCREEN =
//               'checkpoint_teacher_lobby_screen'),
//             (e.CHECKPOINT_TEACHER_QUESTION_SCREEN =
//               'checkpoint_teacher_question_screen'),
//             (e.CHECKPOINT_STUDENT_QUESTION_SCREEN =
//               'checkpoint_student_question_screen'),
//             (e.CHECKPOINT_STUDENT_SUMMARY_SCREEN =
//               'checkpoint_student_summary_screen');
//         })(a || (a = {})),
//         (function (e) {
//           (e.ROUND_SHAPE_ONE = 'round_shape_one'),
//             (e.ROUND_SHAPE_TWO = 'round_shape_two'),
//             (e.TRIANGLE_SHAPE = 'triangle_shape');
//         })(r || (r = {}));
//       var m = {
//           elementCount: 360,
//           duration: 3e4,
//         },
//         _ = 'hasViewedLateJoinCoachmark';
//     },
//     './app/j/live_game/teacher/checkpoint/components/ProgressBar.tsx': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         Z: () => p,
//       });
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
//         t('./node_modules/core-js/modules/es.object.values.js');
//       var n,
//         a = t('./node_modules/@linaria/react/lib/index.js'),
//         r = t('./app/j/assembly/foundations/Color.ts'),
//         o = t('./app/j/live_game/checkpoint/constants.ts'),
//         i = t('./node_modules/react/index.js'),
//         d = t('./node_modules/react/jsx-runtime.js'),
//         l = (0, a.z)('div')({
//           name: 'BarContainer',
//           class: 'b1431m4k',
//           vars: {
//             'b1431m4k-0': [(e) => e.backgroundColor],
//           },
//         }),
//         u = (0, a.z)('div')({
//           name: 'Bar',
//           class: 'btux6nu',
//           vars: {
//             'btux6nu-0': [(e) => e.color],
//             'btux6nu-2': [(e) => e.widthPercent],
//           },
//         });
//       !(function (e) {
//         (e[(e.HIGH = 13)] = 'HIGH'),
//           (e[(e.MEDIUM = 9)] = 'MEDIUM'),
//           (e[(e.LOW = 0)] = 'LOW');
//       })(n || (n = {}));
//       var c = {
//         [n.HIGH]: {
//           progressColor: r.YP.$400,
//           progressBackgroundColor: r.YP.$200,
//         },
//         [n.MEDIUM]: {
//           progressColor: r.gM.$400,
//           progressBackgroundColor: r.gM.$200,
//         },
//         [n.LOW]: {
//           progressColor: r.HA.$500,
//           progressBackgroundColor: r.fY.Twilight200Twilight800,
//         },
//       };
//       function p(e) {
//         var {currentCount: s = 0, duration: t = o.s8} = e,
//           [a, r] = (0, i.useState)(0),
//           p = (1 / (10 * t)) * 0.8;
//         (0, i.useEffect)(() => {
//           var e = 0,
//             s = true,
//             n = setInterval(() => {
//               (e += p), s && r(e), e >= t && clearInterval(n);
//             }, 0.8);
//           return () => {
//             s = false;
//           };
//         }, []);
//         var m = Math.round((a / t) * 1e4) / 100,
//           _ = Object.values(n)
//             .filter((e) => 'number' == typeof e)
//             .find((e) => s >= e),
//           h = c[_];
//         return (0, d.jsx)(l, {
//           backgroundColor: h.progressBackgroundColor,
//           children: (0, d.jsx)(u, {
//             color: h.progressColor,
//             'data-testid': 'progress-bar',
//             widthPercent: m + '%',
//           }),
//         });
//       }
//       t(
//         './.linaria-cache/app/j/live_game/teacher/checkpoint/components/ProgressBar.linaria.css'
//       );
//     },
//     './app/j/login/constants.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         MF: () => n,
//         VO: () => i,
//         Vv: () => o,
//         e: () => d,
//         g4: () => r,
//         vu: () => a,
//       });
//       var n,
//         a = 'generic',
//         r = 250,
//         o = 'login_multiple_accounts_found',
//         i = 'login',
//         d = {
//           PASSWORD: 'password',
//           USERNAME: 'username',
//         };
//       !(function (e) {
//         (e.CHANGE_INPUT = 'LOGIN.CHANGE_INPUT'),
//           (e.RESET_SUBMISSION = 'LOGIN.RESET_SUBMISSION'),
//           (e.SUBMIT_FORM = 'LOGIN.SUBMIT_FORM'),
//           (e.SUBMIT_FORM_ASYNC_FAILURE = 'LOGIN.SUBMIT_FORM_ASYNC_FAILURE'),
//           (e.OPEN_AUTH_MODAL = 'LOGIN.OPEN_AUTH_MODAL'),
//           (e.CLOSE_AUTH_MODAL = 'LOGIN.CLOSE_AUTH_MODAL'),
//           (e.REQUEST_USERNAME = 'LOGIN.REQUEST_USERNAME');
//       })(n || (n = {}));
//     },
//     './app/j/login/index.ts': (e, s, t) => {
//       'use strict';
//       t.r(s),
//         t.d(s, {
//           default: () => u,
//           loginReducer: () => l,
//         });
//       var n = t('./app/j/core/default_store/DefaultStore.ts'),
//         a = t('./app/j/login/constants.ts'),
//         r =
//           (t('./node_modules/core-js/modules/es.array.reduce.js'),
//           t('./node_modules/immer/dist/immer.cjs.production.min.js')),
//         o = {
//           [a.MF.CHANGE_INPUT]: (e, s) => {
//             var {payload: t} = s;
//             return (0, r.default)(e, (e) => {
//               var {name: s, value: n, type: a} = t,
//                 r = 'checkbox' === a ? t.checked : n;
//               (e.form[s] = r), (e.validationErrorsByInputName[s] = null);
//             });
//           },
//           [a.MF.RESET_SUBMISSION]: (e) =>
//             (0, r.default)(e, (e) => {
//               e.wasSubmitted = false;
//             }),
//           [a.MF.SUBMIT_FORM]: (e) =>
//             (0, r.default)(e, (e) => {
//               (e.wasSubmitted = true),
//                 (e.validationErrorsByInputName = {
//                   [a.vu]: [],
//                 });
//             }),
//           [a.MF.SUBMIT_FORM_ASYNC_FAILURE]: (e, s) => {
//             var {payload: t} = s;
//             return (0, r.default)(e, (e) => {
//               (e.validationErrorsByInputName = t.reduce(
//                 (e, s) => (
//                   -1 !== s.type.indexOf(a.e.USERNAME)
//                     ? (e[a.e.USERNAME] = s.message)
//                     : -1 !== s.type.indexOf(a.e.PASSWORD)
//                     ? (e[a.e.PASSWORD] = s.message)
//                     : e[a.vu].push(s),
//                   e
//                 ),
//                 e.validationErrorsByInputName
//               )),
//                 (e.numFailedAttempts += 1);
//             });
//           },
//           [a.MF.REQUEST_USERNAME]: (e) =>
//             (0, r.default)(e, (e) => {
//               e.hasMultipleAccounts = true;
//             }),
//         },
//         i = t(
//           './node_modules/typesafe-actions/dist/typesafe-actions.umd.production.js'
//         ),
//         d = {
//           form: {
//             [a.e.PASSWORD]: '',
//             [a.e.USERNAME]: '',
//           },
//           hasMultipleAccounts: false,
//           numFailedAttempts: 0,
//           openedAuthModal: null,
//           validationErrorsByInputName: {
//             [a.vu]: [],
//           },
//           wasSubmitted: false,
//         },
//         l = (0, i.createReducer)(d, o);
//       function u(e) {
//         void 0 === e && (e = (0, n.bh)()), e.registerReducer(a.VO, l);
//       }
//     },
//     './app/j/models/QSession.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => l,
//       });
//       t('./node_modules/core-js/modules/es.promise.js');
//       var n = t('./app/j/core/superagent-with-csrf.ts'),
//         a = t('./node_modules/invariant/browser.js'),
//         r = t.n(a),
//         o = t(
//           './app/j/models/helpers/extractModelsAndIncludedAssociationsFromFirstResponse.ts'
//         ),
//         i = t('./app/j/models/helpers/prepQueryParams.ts'),
//         d = t('./app/j/models/QModel.ts');
//       class l extends d.Z {
//         static getHighscores(e, s, t, a, d) {
//           void 0 === a && (a = false), void 0 === d && (d = false);
//           var l = (0, i.Z)({
//               filters: {
//                 itemId: e,
//                 itemType: s,
//                 type: t,
//               },
//             }),
//             u = (0, i.Z)({
//               include: {
//                 session: 'user',
//               },
//             });
//           return new Promise((e, s) => {
//             var t = n.Z.get(this._getBaseUrl('highscores'))
//               .timeout(this.REQUEST_TIMEOUT_LIMIT_MS)
//               .credentials()
//               .query(l);
//             return (
//               a && t.query(u),
//               d &&
//                 t.query(
//                   (0, i.Z)({
//                     selectedOnly: true,
//                   })
//                 ),
//               t.end((t, n) => {
//                 if (t) return s(t);
//                 if (n.error) return s(n.error);
//                 var a = (0, o.Z)(this.MODEL_NAME, n, [
//                   {
//                     model: 'user',
//                     isRelated: (e, s) => e.personId === s.id,
//                   },
//                 ]);
//                 return (
//                   r()(a, 'Unable to extract model in getHighScores'),
//                   e({
//                     highscores: this.fromJson(a),
//                   })
//                 );
//               })
//             );
//           });
//         }
//       }
//       (l.REQUEST_TIMEOUT_LIMIT_MS = 6e4),
//         (l.URL_BASE = 'sessions'),
//         (l.MODEL_NAME = 'session');
//     },
//     './app/j/models/QStudiableAnswer.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => a,
//       });
//       var n = t('./app/j/models/QModel.ts');
//       class a extends n.Z {}
//       (a.URL_BASE = 'studiable-answers'),
//         (a.MODEL_NAME = 'studiableAnswer'),
//         (a.ALLOW_SOFT_DELETE = false),
//         (a.API_VERSION = '3.4');
//     },
//     './app/j/models/helpers/extractModelsAndIncludedAssociationsFromFirstResponse.ts':
//       (e, s, t) => {
//         'use strict';
//         t.d(s, {
//           Z: () => r,
//         });
//         var n = t('./node_modules/invariant/browser.js'),
//           a = t.n(n);
//         function r(e, s, t) {
//           a()(
//             s.body && Array.isArray(s.body.responses),
//             'Invalid data param in extractModelsAndIncludedAssociationsFromFirstResponse'
//           );
//           var {models: n} = s.body.responses[0];
//           return (
//             t.forEach((s) => {
//               var t = n[s.model],
//                 a = s.isRelated;
//               !(function (e, s, t, n) {
//                 s.forEach((s) => {
//                   e.forEach((e) => {
//                     n(e, s) && (e[t] = s);
//                   });
//                 });
//               })(n[e], t, s.model, a);
//             }),
//             n[e]
//           );
//         }
//       },
//     './app/j/progress_dashboard/calculateProgress.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => a,
//       });
//       var n = t(
//         './node_modules/@quizlet/progress/quizlet-shared-kotlin-progress.js'
//       );
//       function a(e, s) {
//         var t = e.map((e) => ({
//             containerId: e.id,
//             itemIds: e.termIds,
//             resetTime:
//               null !== e.crossModeResetTimestamp
//                 ? 1e3 * e.crossModeResetTimestamp
//                 : null,
//           })),
//           a = s.map((e) =>
//             Object.assign({}, e, {
//               date: 1e3 * e.date,
//               answerHistory: e.answerHistory.map((e) =>
//                 Object.assign({}, e, {
//                   timestamp: 1e3 * e.timestamp,
//                 })
//               ),
//             })
//           );
//         return n.ProgressGeneratorJs.getProgress(t, a);
//       }
//     },
//     './app/j/signup/components/AuthPromptModal.tsx': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         q: () => N,
//       });
//       var n = t('./node_modules/lodash/noop.js'),
//         a = t.n(n),
//         r =
//           (t('./node_modules/core-js/modules/es.array.iterator.js'),
//           t('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
//           t('./app/j/assembly/AssemblyLink.tsx')),
//         o = t('./app/j/assembly/modals/index.ts'),
//         i = t('./app/j/compatibility/logger/useLogger.ts'),
//         d = t('./app/j/compatibility/router.ts'),
//         l = t('./app/j/config/enums.ts'),
//         u = t('./app/j/i18n/useTranslation.ts'),
//         c = t('./node_modules/react/index.js'),
//         p = t('./node_modules/@linaria/react/lib/index.js'),
//         m = t('./app/j/assembly/AssemblyBreakpoint.tsx'),
//         _ = t('./app/j/assembly/buttons/index.ts'),
//         h = t('./app/j/assembly/buttons/components/AssemblySocialButton.tsx'),
//         g = t('./app/j/context/RouteContext.tsx'),
//         j = t('./app/j/signup/components/TosLegend.tsx'),
//         y = t('./app/j/signup/types/auth.ts'),
//         S = t('./app/j/utils/LoginHelper.ts'),
//         f = t('./node_modules/react/jsx-runtime.js'),
//         v = (0, p.z)('div')({
//           name: 'BodyWrapper',
//           class: 'b6nch9j',
//         }),
//         E = (0, p.z)('div')({
//           name: 'TosWrapper',
//           class: 't1vzruvv',
//         }),
//         x = (0, p.z)('div')({
//           name: 'SignupOptions',
//           class: 'sfkrc64',
//         });
//       function b(e) {
//         var {
//             authOrigin: s,
//             escapeHatch: t,
//             loggingData: n,
//             onClickEmailSignup: a,
//           } = e,
//           {t: r} = (0, u.Z)(),
//           o = (0, S.GG)((0, c.useContext)(g.jj).actionString),
//           {logPageAction: d} = (0, i.wL)();
//         function l(e) {
//           d(
//             y.o.SOCIAL_AUTH_CLICKED,
//             Object.assign({}, n, {
//               provider: e,
//             })
//           );
//         }
//         function p(e) {
//           var t = {
//             customParams: {
//               signupOrigin: s,
//               screenName: o,
//             },
//           };
//           return (0, f.jsxs)(f.Fragment, {
//             children: [
//               (0, f.jsx)(m.ZP, {
//                 lowerBound: 's',
//                 children: (0, f.jsx)(h.ZP, {
//                   onClick: () => l(e),
//                   provider: e,
//                   size: 'xlarge',
//                   urlParams: t,
//                   variant: h.h2.SMALL,
//                 }),
//               }),
//               (0, f.jsx)(m.ZP, {
//                 upperBound: 's',
//                 children: (0, f.jsx)(h.ZP, {
//                   onClick: () => l(e),
//                   provider: e,
//                   size: 'large',
//                   urlParams: t,
//                   variant: h.h2.DEFAULT,
//                 }),
//               }),
//             ],
//           });
//         }
//         var b = (0, f.jsxs)(f.Fragment, {
//           children: [
//             (0, f.jsx)(m.ZP, {
//               lowerBound: 's',
//               children: (0, f.jsx)(_.B0, {
//                 isFullWidth: true,
//                 onClick: a,
//                 size: 'xlarge',
//                 text: r('global.sign_up_modal.email'),
//                 topIcon: 'mail',
//               }),
//             }),
//             (0, f.jsx)(m.ZP, {
//               upperBound: 's',
//               children: (0, f.jsx)(_.B0, {
//                 isFullWidth: true,
//                 leftIcon: 'mail',
//                 onClick: a,
//                 size: 'large',
//                 text: r('signup_wall_inline.cta'),
//               }),
//             }),
//           ],
//         });
//         return (0, f.jsxs)(f.Fragment, {
//           children: [
//             (0, f.jsx)(E, {
//               children: (0, f.jsx)(j.Z, {
//                 authType: 'signup',
//               }),
//             }),
//             (0, f.jsxs)(v, {
//               children: [
//                 (0, f.jsxs)(x, {
//                   children: [p(h.MC.GOOGLE), p(h.MC.FACEBOOK), b],
//                 }),
//                 t,
//               ],
//             }),
//           ],
//         });
//       }
//       t(
//         './.linaria-cache/app/j/signup/components/AuthPromptOptions.linaria.css'
//       );
//       var A = t('./app/j/lazy/LoginPromptModalContainerLazy.ts'),
//         T = t('./app/j/lazy/SignupPromptModalNewLazy.ts'),
//         C = t('./app/j/site_nav/types.ts');
//       function I(e) {
//         var {
//             authOrigin: s,
//             loggingData: t,
//             onCloseAuthModal: n,
//             onEmailLoginModalOpen: a,
//             onEmailSignupModalOpen: r,
//             openedAuthModal: o,
//             redirectPath: l,
//           } = e,
//           u = (0, d.wK)(),
//           {logPageAction: c} = (0, i.wL)();
//         var p = (0, f.jsx)(T.Z, {
//             actions: {
//               onClose: function () {
//                 c(y.o.EMAIL_SIGNUP_MODAL_CLOSED, Object.assign({}, t)), n();
//               },
//               onOpenLogin: a,
//             },
//             includeCloseButton: true,
//             isOpen: o === C.L.SIGN_UP,
//             redir: l || u,
//             signupOrigin: s,
//           }),
//           m = (0, f.jsx)(A.Z, {
//             isOpen: o === C.L.LOGIN,
//             onClose: function () {
//               c(y.o.EMAIL_LOGIN_MODAL_CLOSED, Object.assign({}, t)), n();
//             },
//             onOpenSignup: r,
//             redir: l || u,
//           });
//         return (0, f.jsxs)(f.Fragment, {
//           children: [p, m],
//         });
//       }
//       var w = (0, p.z)('div')({
//           name: 'LoginTextWrapper',
//           class: 'lefre96',
//         }),
//         O = (0, p.z)('div')({
//           name: 'SubtextWrapper',
//           class: 's15jni46',
//         });
//       function N(e) {
//         var {
//             additionalLogData: s = {},
//             barrierType: t,
//             escapePath: n,
//             includeSubtitle: p = true,
//             isOpen: m,
//             onClose: _,
//             onOpen: h = a(),
//             placement: g,
//             redirectPath: j,
//             signupOrigin: S,
//             titleOverride: v,
//           } = e,
//           [E, x] = (0, c.useState)(null),
//           {t: A} = (0, u.Z)(),
//           T = (0, d.wK)(),
//           {logPageAction: N, logAuthEvent: k} = (0, i.wL)(),
//           L =
//             S ||
//             (function (e) {
//               switch (e) {
//                 case y.V.STUDY_MODE_BACK_BUTTON:
//                   return 'study-mode-back-button';
//                 case y.V.SET_PAGE_CURTAIN:
//                   return 'study-mode-signup-curtain';
//                 case y.V.SET_PAGE_LEARN:
//                   return l.qkQ.LEARN_MODE_ENTER_BUTTON;
//                 case y.V.SET_PAGE_TEST:
//                   return l.qkQ.TEST_MODE_ENTER_BUTTON;
//                 case y.V.SET_PAGE_MINI_FLASHCARDS:
//                   return 'set-page-signup-wall-mini-flashcards';
//                 case y.V.TEST:
//                 case y.V.LEARN:
//                 default:
//                   return 'study-mode-signup-wall-modal';
//               }
//             })(g),
//           P = Object.assign(
//             {
//               barrierType: t,
//               placement: g,
//             },
//             s
//           );
//         function M() {
//           N(y.o.EMAIL_SIGNUP_MODAL_OPENED, Object.assign({}, P)),
//             k(l.g4I.SIGNUP_FORM_OPENED, {
//               auth_origin: L,
//             }),
//             'curtain' === t && _(),
//             x(C.L.SIGN_UP);
//         }
//         var R =
//             'escapableWall' === t
//               ? (0, f.jsxs)(O, {
//                   children: [
//                     (0, f.jsx)(w, {
//                       children: A('global.sign_up_modal.wall.escape_hatch'),
//                     }),
//                     (0, f.jsx)(r.ZP, {
//                       linkTo: n,
//                       onClick: function () {
//                         N(y.o.ESCAPE_HATCH_CLICKED, Object.assign({}, P));
//                       },
//                       size: 'small',
//                       text: A('global.sign_up_modal.wall.escape_hatch_option'),
//                       variant: r.U_.Secondary,
//                     }),
//                   ],
//                 })
//               : void 0,
//           D = (0, f.jsx)(b, {
//             authOrigin: L,
//             escapeHatch: R,
//             loggingData: P,
//             onClickEmailSignup: M,
//           }),
//           Z = v
//             ? {
//                 title: v,
//                 subtitle: A('global.sign_up_modal.wall.subtitle'),
//               }
//             : {
//                 title: A('global.sign_up_modal.wall_default.title'),
//                 subtitle: A('global.sign_up_modal.wall_default.subtitle'),
//               };
//         return (0, f.jsxs)(f.Fragment, {
//           children: [
//             (0, f.jsx)(I, {
//               authOrigin: L,
//               loggingData: P,
//               onCloseAuthModal: () => x(null),
//               onEmailLoginModalOpen: function () {
//                 N(y.o.EMAIL_LOGIN_MODAL_OPENED, Object.assign({}, P)),
//                   k(l.g4I.LOGIN_FORM_OPENED, {
//                     auth_origin: L,
//                   }),
//                   'curtain' === t && _(),
//                   x(C.L.LOGIN);
//               },
//               onEmailSignupModalOpen: M,
//               openedAuthModal: E,
//               redirectPath: j || T,
//             }),
//             (0, f.jsx)(o.g, {
//               body: D,
//               includeCloseButton: 'escapableWall' !== t,
//               isOpen: m,
//               justifyCenter: true,
//               mobileVariant: 'bottomSheet',
//               onClose: function () {
//                 'escapableWall' !== t &&
//                   (N(y.o.CLOSED, Object.assign({}, P)), _());
//               },
//               onOpen: function () {
//                 N(y.o.OPENED, Object.assign({}, P)), h();
//               },
//               shouldCloseOnOverlayClick: 'escapableWall' !== t,
//               subtitle: p ? Z.subtitle : void 0,
//               title: Z.title,
//             }),
//           ],
//         });
//       }
//       t(
//         './.linaria-cache/app/j/signup/components/AuthPromptStyling.linaria.css'
//       );
//     },
//     './app/j/signup/types/auth.ts': (e, s, t) => {
//       'use strict';
//       var n, a;
//       t.d(s, {
//         V: () => n,
//         o: () => a,
//       }),
//         (function (e) {
//           (e.STUDY_MODE_BACK_BUTTON = 'study_mode_back_button'),
//             (e.SET_PAGE_CURTAIN = 'set_page_curtain'),
//             (e.SET_PAGE_LEARN = 'set_page_learn'),
//             (e.SET_PAGE_MINI_FLASHCARDS = 'set_page_mini_flashcards'),
//             (e.SET_PAGE_TEST = 'set_page_test'),
//             (e.LEARN = 'learn'),
//             (e.TEST = 'test');
//         })(n || (n = {})),
//         (function (e) {
//           (e.OPENED = 'auth_prompt_modal_opened'),
//             (e.CLOSED = 'auth_prompt_modal_closed'),
//             (e.SOCIAL_AUTH_CLICKED = 'auth_prompt_modal_social_auth_clicked'),
//             (e.ESCAPE_HATCH_CLICKED = 'auth_prompt_modal_escape_hatch_clicked'),
//             (e.EMAIL_LOGIN_MODAL_OPENED =
//               'auth_prompt_modal_email_login_modal_opened'),
//             (e.EMAIL_SIGNUP_MODAL_OPENED =
//               'auth_prompt_modal_email_signup_modal_opened'),
//             (e.EMAIL_LOGIN_MODAL_CLOSED =
//               'auth_prompt_modal_email_login_modal_closed'),
//             (e.EMAIL_SIGNUP_MODAL_CLOSED =
//               'auth_prompt_modal_email_signup_modal_closed');
//         })(a || (a = {}));
//     },
//     './app/j/studiable-data/types.ts': (e, s, t) => {
//       'use strict';
//       var n;
//       t.d(s, {
//         N: () => n,
//       }),
//         (function (e) {
//           (e.N_SIDED_CARD_ANSWER = 'NSidedCardAnswer'),
//             (e.MCQ_ANSWER = 'McqAnswer');
//         })(n || (n = {}));
//     },
//     './app/j/studiable-data/utils.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Ai: () => p,
//         CC: () => l,
//         F_: () => i,
//         KN: () => h,
//         c4: () => _,
//         cD: () => d,
//         lt: () => o,
//         p: () => u,
//         rn: () => m,
//         vQ: () => g,
//         xy: () => c,
//       });
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//       var n = t('./app/j/config/enums.ts'),
//         a = t('./app/j/studiable-data/types.ts');
//       function r(e) {
//         var s = {
//           correctness: e.correctness,
//           round: e.round,
//           studiableItemId: e.itemId,
//           studyModeType: e.studyMode,
//           timestamp: e.timestamp,
//         };
//         return 'selectedOptionIds' in e
//           ? Object.assign(
//               {
//                 type: a.N.MCQ_ANSWER,
//                 selectedOptionIds: e.selectedOptionIds,
//               },
//               s
//             )
//           : Object.assign(
//               {
//                 type: a.N.N_SIDED_CARD_ANSWER,
//                 promptSideIds: e.promptSideIds,
//                 answerSideIds: e.answerSideIds,
//               },
//               s
//             );
//       }
//       function o(e) {
//         return r(e);
//       }
//       function i(e) {
//         return e.type === n.zqd.N_SIDED_CARD;
//       }
//       function d(e) {
//         return e.type === n.zqd.MULTIPLE_CHOICE_QUESTION;
//       }
//       function l(e) {
//         return 1 === e.options.filter((e) => e.isCorrect).length;
//       }
//       function u(e) {
//         var s = e.media.find((e) => e.type === n.DDH.IMAGE);
//         return void 0 !== s && 'width' in s ? s : null;
//       }
//       function c(e) {
//         var s = e.media.find((e) => e.type === n.DDH.TEXT);
//         return void 0 !== s && 'plainText' in s ? s : null;
//       }
//       function p(e) {
//         var s = e.media.find((e) => e.type === n.DDH.AUDIO);
//         return void 0 === s || !('url' in s) || 'width' in s ? null : s;
//       }
//       function m(e) {
//         var s = e.media.find((e) => e.type === n.DDH.DIAGRAM_SHAPE);
//         return void 0 !== s && 'shape' in s ? s.shape : null;
//       }
//       function* _(e, s) {
//         for (var t of e) for (var n of t.cardSides) n.label === s && (yield n);
//       }
//       function h(e, s) {
//         var t = e.cardSides.find((e) => e.label === s);
//         return void 0 === t ? null : t;
//       }
//       function g(e, s, t) {
//         if (!e) return null;
//         if (
//           (s === n.dU_.WORD && !t.wordEnabled) ||
//           (s === n.dU_.DEFINITION && !t.definitionEnabled)
//         )
//           return null;
//         var a,
//           {slowUrl: r, url: o} = e;
//         switch (s) {
//           case n.dU_.WORD:
//             a = t.slowWordEnabled ? r : o;
//             break;
//           case n.dU_.DEFINITION:
//             a = t.slowDefinitionEnabled ? r : o;
//             break;
//           default:
//             throw new Error(
//               'Audio items can only be generated for words and definitions'
//             );
//         }
//         return {
//           audioId: a,
//           url: a,
//         };
//       }
//     },
//     './app/j/study-engine/types.ts': (e, s, t) => {
//       'use strict';
//       var n, a, r, o, i, d, l, u, c;
//       t.d(s, {
//         F9: () => o,
//         LK: () => c,
//         Q_: () => a,
//         ju: () => d,
//         lt: () => n,
//         mw: () => l,
//         xh: () => r,
//       }),
//         (function (e) {
//           (e.LEARN = 'LEARN'),
//             (e.SPELL = 'SPELL'),
//             (e.WEB_WRITE = 'WEB_WRITE'),
//             (e.TEST = 'TEST');
//         })(n || (n = {})),
//         (function (e) {
//           (e.LOCAL_GRADED_ANSWER_METADATA =
//             'assistantMode.grading.LocalGradedAnswerMetadata'),
//             (e.SMART_GRADED_ANSWER_METADATA =
//               'assistantMode.grading.SmartGradedAnswerMetadata');
//         })(a || (a = {})),
//         (function (e) {
//           (e.STRING_ANSWER = 'StringAnswer'),
//             (e.BOOLEAN_ANSWER = 'BooleanAnswer'),
//             (e.MATCHING_ANSWER = 'MatchingAnswer'),
//             (e.OPTION_INDEX_ANSWER = 'OptionIndexAnswer'),
//             (e.OPTION_INDICES_ANSWER = 'OptionIndicesAnswer'),
//             (e.REVEAL_SELF_ASSESSMENT_ANSWER = 'RevealSelfAssessmentAnswer');
//         })(r || (r = {})),
//         (function (e) {
//           e.LEARN_PAYWALL = 'LearnPaywall';
//         })(o || (o = {})),
//         (function (e) {
//           (e.CHECKPOINT = 'CheckpointMetadata'),
//             (e.PAYWALL = 'PaywallMetadata');
//         })(i || (i = {})),
//         (function (e) {
//           e.CHECKPOINT = 'Checkpoint';
//         })(d || (d = {})),
//         (function (e) {
//           (e.SEPARATED_OPTION_MATCHING_QUESTION =
//             'SeparatedOptionMatchingQuestion'),
//             (e.FILL_IN_THE_BLANK_QUESTION = 'FillInTheBlankQuestion'),
//             (e.MIXED_OPTION_MATCHING_QUESTION = 'MixedOptionMatchingQuestion'),
//             (e.MULTIPLE_CHOICE_QUESTION = 'MultipleChoiceQuestion'),
//             (e.REVEAL_SELF_ASSESSMENT_QUESTION =
//               'RevealSelfAssessmentQuestion'),
//             (e.TRUE_FALSE_QUESTION = 'TrueFalseQuestion'),
//             (e.WRITTEN_QUESTION = 'WrittenQuestion'),
//             (e.SPELLING_QUESTION = 'SpellingQuestion');
//         })(l || (l = {})),
//         (function (e) {
//           (e.FITB_TEXT_SEGMENT = 'FITBTextSegment'),
//             (e.FITB_WRITTEN_BLANK_SEGMENT = 'FITBWrittenBlankSegment');
//         })(u || (u = {})),
//         (function (e) {
//           (e.TEXT_ATTRIBUTE = 'TextAttribute'),
//             (e.LOCATION_ATTRIBUTE = 'LocationAttribute'),
//             (e.IMAGE_ATTRIBUTE = 'ImageAttribute'),
//             (e.AUDIO_ATTRIBUTE = 'AudioAttribute');
//         })(c || (c = {}));
//     },
//     './app/j/study-engine/utils.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Cg: () => o,
//         KX: () => i,
//         Vq: () => m,
//         Vr: () => c,
//         bJ: () => p,
//         hB: () => l,
//         jk: () => d,
//         zn: () => r,
//         zo: () => u,
//       });
//       t('./node_modules/core-js/modules/es.object.values.js');
//       var n = t('./app/j/config/enums.ts'),
//         a = t('./app/j/study-engine/types.ts'),
//         r = (e) => e,
//         o = (e) => {
//           switch (e) {
//             case n.kH9.WORD:
//               return n.dU_.WORD;
//             case n.kH9.DEFINITION:
//               return n.dU_.DEFINITION;
//             case n.kH9.LOCATION:
//               return n.dU_.LOCATION;
//             default:
//               throw new Error(
//                 'Cannot convert term side ' +
//                   e +
//                   ' to a studiable card side label.'
//               );
//           }
//         },
//         i = (e) => Object.values(a.mw).includes(e.type),
//         d = (e) => Object.values(a.ju).includes(e.type),
//         l = (e) => Object.values(a.F9).includes(e.type),
//         u = (e) => ({
//           type: a.xh.STRING_ANSWER,
//           value: e,
//         }),
//         c = (e) => ({
//           type: a.xh.BOOLEAN_ANSWER,
//           value: e,
//         }),
//         p = (e) => ({
//           type: a.xh.OPTION_INDEX_ANSWER,
//           value: e,
//         }),
//         m = (e) => ({
//           type: a.xh.REVEAL_SELF_ASSESSMENT_ANSWER,
//           value: e,
//         });
//     },
//     './app/j/study-modes/cards/cards.entry.tsx': (e, s, t) => {
//       'use strict';
//       var n = t('./app/j/ads/enums/AdsNames.ts'),
//         a = t('./app/j/config/enums.ts'),
//         r = t('./app/j/core/default_store/DefaultStore.ts'),
//         o = t('./node_modules/react/index.js'),
//         i = t('./app/j/study-modes/cards/constants.ts'),
//         d = t('./app/j/core/default_store/DefaultStoreProvider.tsx'),
//         l = t('./app/j/core/legacy_store/LegacyStoreProvider.tsx'),
//         u = t('./node_modules/react-redux/lib/index.js'),
//         c = t('./node_modules/redux/lib/redux.js'),
//         p = t('./node_modules/reselect/lib/index.js'),
//         m = t('./node_modules/lodash/noop.js'),
//         _ = t.n(m),
//         h =
//           (t('./node_modules/core-js/modules/es.array.iterator.js'),
//           t('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
//           t('./node_modules/@linaria/core/lib/index.js')),
//         g = t('./app/j/ads/components/ActionBasedAutoRefreshAd.tsx'),
//         j = t('./app/j/ads/components/Ad.tsx'),
//         y = t('./app/j/ads/components/hooks/useShouldSeeSidebarAds.ts'),
//         S = t('./app/j/ads/context/StudyModeAdsContext.tsx'),
//         f = t('./app/j/components/DeprecatedModeLayout.tsx'),
//         v = t('./app/j/components/ModeLayout.tsx'),
//         E = t('./app/j/context/UserContext.ts'),
//         x = t('./app/j/signup/components/AuthPromptModal.tsx'),
//         b = t('./app/j/signup/types/auth.ts'),
//         A = t('./app/j/study-modes/learn/types.ts'),
//         T = t(
//           './app/j/study-modes/legacy-common/hooks/useShouldSeeSignupWall.ts'
//         ),
//         C = t('./app/j/utils/onPageHidden.ts'),
//         I = t('./node_modules/react/jsx-runtime.js'),
//         w = o.memo(function (e) {
//           return e.isBrandedContentSet
//             ? (0, I.jsx)(j.Z, {
//                 headingAlignment: 'block',
//                 id: e.sidebarAdsId,
//               })
//             : (0, I.jsx)(g.Z, {
//                 id: e.sidebarAdsId,
//                 lastActionTimestamp: e.lastActionTimestamp,
//               });
//         }),
//         O = o.memo(function (e) {
//           return (0, I.jsx)(j.Z, {
//             headingAlignment: 'centerAlign',
//             id: e.footerAdsId,
//           });
//         }),
//         N = {
//           [a.aKJ.LEARNING_ASSISTANT]: b.V.LEARN,
//           [a.aKJ.TEST]: b.V.TEST,
//         };
//       t(
//         './.linaria-cache/app/j/study-modes/common/components/StudyModesLayout.linaria.css'
//       );
//       var k = t('./app/j/study-modes/data/metering/selectors.ts'),
//         L = t('./app/j/study-modes/data/sessions/thunks.ts'),
//         P = t('./app/j/study-modes/data/settings/selectors/ad.ts'),
//         M = t('./app/j/study-modes/data/settings/selectors/display.ts'),
//         R = t('./app/j/study-modes/data/studiable-data/selectors.ts'),
//         D = t('./app/j/study-modes/learn/selectors/view.ts'),
//         Z = t('./app/j/study-modes/redesigned_cards/data/ads/selectors.ts'),
//         F = t('./app/j/study-modes/test/selectors/ads.ts'),
//         z = (0, p.createStructuredSelector)({
//           currentView: D.R5,
//           isAdModalView: D.KL,
//           shouldShowTasksScreen: D.O8,
//         }),
//         U = (0, p.createStructuredSelector)({
//           adsIds: P.SV,
//           isBrandedContentSet: P.nm,
//           isCardsModeAdView: Z.iJ,
//           isEmbedding: M.QE,
//           isTestModeAdView: F.X,
//           lastActionTimestamp: P.Xb,
//           shouldBeFullHeight: M.FE,
//           shouldShowAd: P.Cr,
//           shouldShowNewStudyBreak: P.cS,
//           shouldShowStudyTopNav: M.rU,
//           shouldHideEmbedControl: M.V2,
//           studyableId: R.uf,
//           studyablePath: R.f3,
//           studyModeType: M.ez,
//           isSignupWallUnlocked: k.kn,
//         }),
//         H = (0, c.compose)(
//           (0, u.connect)(z, null, null, {
//             context: l.tC,
//           }),
//           (0, u.connect)(
//             U,
//             (e) => ({
//               actions: (0, c.bindActionCreators)(
//                 {
//                   exitSession: L.mc,
//                 },
//                 e
//               ),
//             }),
//             null,
//             {
//               context: d.jJ,
//             }
//           )
//         )(function (e) {
//           var {
//               actions: s,
//               adsIds: t,
//               currentView: n,
//               isBrandedContentSet: r,
//               isEmbedding: i,
//               lastActionTimestamp: d,
//               shouldShowStudyTopNav: l,
//               studyModeType: u,
//               studyableId: c,
//               studyablePath: p,
//               isSignupWallUnlocked: m,
//             } = e,
//             g = (0, o.useContext)(E.Z),
//             j = (null == g ? void 0 : g.type) === a.XsQ.NO_UPGRADE,
//             b = (0, T.Z)(N[u], i, m),
//             [k, L] = (0, o.useState)(b);
//           (0, o.useEffect)(() => {
//             if ([a.aKJ.TEST].includes(u)) return _();
//             var e = (0, C.Z)(() => s.exitSession(), true);
//             return () => e.remove();
//           }, [u, s]);
//           var P,
//             M = (0, y.Z)(),
//             R = l ? v.Z : f.Z;
//           return b
//             ? (0, I.jsx)(x.q, {
//                 additionalLogData: {
//                   studiableContainerId: c,
//                 },
//                 barrierType: 'escapableWall',
//                 escapePath: p,
//                 isOpen: k,
//                 onClose: () => {
//                   L(false);
//                 },
//                 onOpen: () => {
//                   L(true);
//                 },
//                 placement: N[u],
//               })
//             : (0, I.jsx)(S.Uw, {
//                 children: (0, I.jsx)('div', {
//                   className: (0, h.cx)(
//                     'StudyModesLayout',
//                     n === A.py.TASK_ROUND_CHECKPOINT && j ? 'r19uqhu7' : null,
//                     e.isEmbedding ? 'e12cnd5w' : null
//                   ),
//                   children: (0, I.jsx)(R, {
//                     adUnit:
//                       ((P = t.sidebarAdsId),
//                       M(P)
//                         ? (0, I.jsx)(w, {
//                             isBrandedContentSet: r,
//                             lastActionTimestamp: d,
//                             sidebarAdsId: P,
//                           })
//                         : null),
//                     controls: e.modeControls,
//                     isEmbedding: e.isEmbedding,
//                     isTaskCardScreen:
//                       n === A.py.TASK_COMPLETION_CHECKPOINT ||
//                       n === A.py.TASK_SEQUENCE_COMPLETION_CHECKPOINT,
//                     isTaskRoundCheckpointScreen:
//                       n === A.py.TASK_ROUND_CHECKPOINT ||
//                       n === A.py.TASK_COMPLETION_CHECKPOINT,
//                     mWebAdUnit:
//                       e.shouldShowAd && t.footerAdsId
//                         ? ((e) =>
//                             (0, I.jsx)(O, {
//                               footerAdsId: e,
//                             }))(t.footerAdsId)
//                         : null,
//                     onCloseAdModal: e.closeAdModalAndGoToTheNextStep,
//                     shouldBeFullHeight: e.shouldBeFullHeight,
//                     shouldHaveNoPadding:
//                       e.shouldShowNewStudyBreak ||
//                       e.shouldShowTasksScreen ||
//                       e.studyModeType === a.aKJ.FLASHCARDS,
//                     shouldHideEmbedControl: e.shouldHideEmbedControl,
//                     shouldShowNewStudyBreak: e.shouldShowNewStudyBreak,
//                     showAdModal:
//                       e.shouldShowAd &&
//                       (e.isAdModalView ||
//                         e.isTestModeAdView ||
//                         e.isCardsModeAdView),
//                     studyableId: e.studyableId,
//                     studyablePath: e.studyablePath,
//                     studyModeType: e.studyModeType,
//                     children: e.children,
//                   }),
//                 }),
//               });
//         }),
//         W = t('./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'),
//         B = t('./app/j/audio_playback/index.ts'),
//         K = t('./app/j/study-modes/core/LoggerContextWrapper.tsx'),
//         G = t('./app/j/study-modes/data/index.ts'),
//         V = t('./app/j/utils/metering/MeteringPlusPhasedRolloutExperiment.tsx'),
//         q = t('./app/j/utils/readReactTarget.ts'),
//         Q = t('./app/j/utils/renderReactAppToDOM.tsx');
//       function $() {
//         return ($ = (0, W.Z)(function* (e, s, t, n) {
//           var o,
//             i,
//             u,
//             c,
//             {target: p, data: m} = yield (0, q.Z)('AssistantMode'),
//             _ = Object.assign({}, m, s),
//             h = (0, r.bh)();
//           return (
//             (0, G.ZP)(h, _),
//             n && n(_),
//             (0, B.ZP)(),
//             t && (yield t(m)),
//             (0, Q.Z)(
//               (0, I.jsx)(d.ZP, {
//                 children: (0, I.jsx)(l.ZP, {
//                   children: (0, I.jsx)(K.Z, {
//                     children: (0, I.jsx)(V.eW, {
//                       learnMeteringData:
//                         null !=
//                         (o =
//                           null == _ || null == (i = _.meteringData)
//                             ? void 0
//                             : i[a.jrE.LEARN_CHECKPOINT])
//                           ? o
//                           : null,
//                       children: (0, I.jsx)(V.w_, {
//                         testMeteringData:
//                           null !=
//                           (u =
//                             null == _ || null == (c = _.meteringData)
//                               ? void 0
//                               : c[a.jrE.TEST_SUBMISSION])
//                             ? u
//                             : null,
//                         children: (0, I.jsx)(e, {}),
//                       }),
//                     }),
//                   }),
//                 }),
//               }),
//               p
//             ),
//             m
//           );
//         })).apply(this, arguments);
//       }
//       var Y = t('./node_modules/@linaria/react/lib/index.js'),
//         J = t('./app/j/ads/components/flashcards/CardsInterstitialAd.tsx'),
//         X = t('./app/j/global/Rollbar.ts'),
//         ee = t(
//           './app/j/study-modes/common/hooks/useInitialVisibilityTracker.ts'
//         ),
//         se = t('./app/j/study-modes/common/util/testModeUpsell.ts'),
//         te = t('./app/j/study-modes/data/logging/thunks.ts'),
//         ne = t('./app/j/study-modes/data/settings/selectors/preference.ts'),
//         ae = t(
//           './app/j/study-modes/redesigned_cards/containers/CardsSummaryViewContainer.ts'
//         ),
//         re = t(
//           './app/j/study-modes/redesigned_cards/containers/FullscreenQuizViewContainer.tsx'
//         ),
//         oe = t(
//           './app/j/study-modes/redesigned_cards/containers/FullscreenReviewViewContainer.tsx'
//         ),
//         ie = t('./app/j/study-modes/redesigned_cards/data/engine/actions.ts'),
//         de = t('./app/j/study-modes/redesigned_cards/data/engine/selectors.ts'),
//         le = t('./app/j/utils/isAdBlockerEnabled.ts'),
//         ue = (0, Y.z)('div')({
//           name: 'CardsViewControllerContainer',
//           class: 'c1lty3c2',
//         });
//       function ce() {
//         var e = (0, d.v9)(de.Xh),
//           s = (0, d.v9)(de.uF),
//           t = (0, d.v9)(ne.rE),
//           n = (0, d.I0)(),
//           r = (0, o.useContext)(E.Z),
//           l = (0, d.v9)(R.uf),
//           u = (0, d.v9)(R.ZM),
//           c = !(null == s || !s.shouldPreloadAds || (0, le.ZP)()),
//           p = !(null == s || !s.shouldShowAds || (0, le.ZP)());
//         (0, ee.Z)(),
//           (0, o.useEffect)(() => {
//             n(
//               (0, te.pJ)({
//                 action: a.WVJ.BEGIN,
//               })
//             ),
//               (0, se.p)(r, l, u);
//           }, []);
//         return (0, I.jsxs)(ue, {
//           children: [
//             c
//               ? (0, I.jsx)(J.Z, {
//                   handleSkipStudyBreakAd: () => n((0, ie._s)()),
//                   isRenderingCardsInterstitialAd: p,
//                 })
//               : null,
//             ((e) => {
//               if (p) return null;
//               switch (e) {
//                 case null:
//                 case void 0:
//                   return null;
//                 case i.S.CARDS_VIEW:
//                   return t ? (0, I.jsx)(re.Z, {}) : (0, I.jsx)(oe.Z, {});
//                 case i.S.FINISHED_VIEW:
//                   return (0, I.jsx)(ae.Z, {});
//                 case i.S.AD_MODAL:
//                 default:
//                   return X.Z.error('Invalid CardsView: ' + e);
//               }
//             })(e),
//           ],
//         });
//       }
//       t(
//         './.linaria-cache/app/j/study-modes/redesigned_cards/components/CardsViewController.linaria.css'
//       );
//       var pe = t('./app/j/components/NewModeControls.tsx'),
//         me = t('./app/j/hooks/useBreakpoint.ts'),
//         _e = t('./app/j/i18n/useTranslation.ts'),
//         he = t('./app/j/lazy/OptionsModalContainerLazy.ts'),
//         ge = t(
//           './app/j/study-modes/cards/components/CardsToolbarKeyboardShortcutsList.tsx'
//         ),
//         je = t('./app/j/study-modes/legacy-common/components/ProgressBar.tsx'),
//         ye = t('./app/j/study-modes/redesigned_cards/hooks/useProgressText.ts'),
//         Se = t(
//           './app/j/study-modes/redesigned_cards/keyboard/useShortcutsLabels.ts'
//         ),
//         fe = t('./app/j/utils/BreakpointsHelper.ts'),
//         ve = t('./app/j/utils/ModeHelper.ts');
//       var Ee = (0, p.createStructuredSelector)({
//           isEmbedding: M.QE,
//           numCardsProgressed: de.E9,
//           numQuestions: de.UO,
//           studiableContainerId: R.uf,
//           studiableContainerType: R.Sd,
//           studiableContainerTitle: R.ZM,
//           studiablePath: R.f3,
//         }),
//         xe = (0, u.connect)(
//           Ee,
//           (e) => ({
//             actions: (0, c.bindActionCreators)(
//               {
//                 logStudyNavigationEvent: te.F,
//                 logStudyEvent: te.pJ,
//                 onCloseOptions: ie.VP,
//                 reinitializeCardsMode: ie.VW,
//                 toggleShuffleCards: ie.lt,
//               },
//               e
//             ),
//           }),
//           null,
//           {
//             context: d.jJ,
//           }
//         )(function (e) {
//           var {
//               actions: s,
//               numCardsProgressed: t,
//               isEmbedding: n,
//               numQuestions: r,
//               studiableContainerId: i,
//               studiableContainerType: d,
//               studiableContainerTitle: l,
//               studiablePath: u,
//             } = e,
//             {logStudyEvent: c} = s,
//             p = (0, me.Z)(),
//             {t: m} = (0, _e.Z)(),
//             _ = (0, Se.Z)(),
//             [h, g] = (0, o.useState)(null),
//             j = (0, fe.P0)(p, 'l')
//               ? (0, I.jsx)(ge.Z, {
//                   divided: true,
//                   keyboardShortcutsList: _,
//                 })
//               : void 0,
//             y = (0, ye.Z)();
//           (0, o.useEffect)(() => {
//             if (null !== h) {
//               var e = h ? a.WVJ.ENTER_SCREEN : a.WVJ.EXIT_SCREEN;
//               c({
//                 action: e,
//                 extraData: {
//                   screen: a.HtK.SETTINGS,
//                 },
//               });
//             }
//           }, [h, c]);
//           var S =
//             null !== t && null !== r
//               ? {
//                   max: r,
//                   value: t,
//                 }
//               : null;
//           return (0, I.jsxs)(I.Fragment, {
//             children: [
//               (0, I.jsx)(pe.Z, {
//                 actions: {
//                   logStudyNavigationEvent: s.logStudyNavigationEvent,
//                 },
//                 backText: m('modes.mode_controls.back_to_set_button'),
//                 isEmbedding: n,
//                 modeName: (0, ve.ZP)(m, a.aKJ.FLASHCARDS),
//                 modeType: 'flashcards',
//                 onClickOptions: () => g(true),
//                 progressBar: S && (0, I.jsx)(je.Z, Object.assign({}, S)),
//                 progressText: y,
//                 screenName: 'Cards/index',
//                 signupOrigin: a.qkQ.FLASHCARDS_MODE_BACK_BUTTON,
//                 studiableContainerId: i,
//                 studiableContainerType: d,
//                 studyablePath: u,
//                 titleText: l,
//               }),
//               h &&
//                 (0, I.jsx)(he.Z, {
//                   isModalOpen: true,
//                   keyboardShortcuts: j,
//                   onCloseModal: (e) => {
//                     e.has('studyStarredOnly') && s.reinitializeCardsMode(),
//                       g(false),
//                       null == s.onCloseOptions || s.onCloseOptions();
//                   },
//                   onResetProgress: () => {
//                     c({
//                       action: a.WVJ.RESTART,
//                       extraData: {
//                         screen: a.HtK.SETTINGS,
//                       },
//                     }),
//                       s.reinitializeCardsMode(),
//                       g(false);
//                   },
//                 }),
//             ],
//           });
//         }),
//         be = t('./app/j/study-modes/redesigned_cards/data/ads/index.ts'),
//         Ae = t('./app/j/study-modes/redesigned_cards/initCardsMode.ts'),
//         Te = {
//           hiddenSettings: [
//             a.Std.ASSISTANT_MODE_QUESTION_TYPES,
//             a.Std.FLEXIBLE_GRADING_ACCEPT_PARTIAL_ANSWERS,
//             a.Std.FLEXIBLE_GRADING_ACCEPT_ANSWERS_WITH_TYPOS,
//             a.Std.SMART_GRADING,
//           ],
//           questionTypesSetting: {
//             copyAnswer: false,
//             fillInTheBlank: false,
//             matching: false,
//             multipleChoice: false,
//             multipleChoiceWithNoneOption: false,
//             revealSelfAssessment: false,
//             written: false,
//             spelling: false,
//           },
//           adsIds: {
//             sidebarAdsId: n.h.FLASHCARDS_SIDEBAR,
//             footerAdsId: null,
//           },
//           studyModeType: a.aKJ.FLASHCARDS,
//           closeAdModalAndGoToTheNextStep: () => {
//             (0, r.bh)().dispatch((0, be.HL)(i.S.CARDS_VIEW));
//           },
//         };
//       !(function (e, s, t, n) {
//         $.apply(this, arguments);
//       })(
//         function () {
//           return (0, I.jsx)(H, {
//             closeAdModalAndGoToTheNextStep: Te.closeAdModalAndGoToTheNextStep,
//             modeControls: (0, I.jsx)(xe, {}),
//             children: (0, I.jsx)(ce, {}),
//           });
//         },
//         Te,
//         Ae.Z
//       );
//     },
//     './app/j/study-modes/cards/components/CardsFooter.tsx': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         GW: () => r,
//         a8: () => i,
//         tL: () => o,
//         yY: () => a,
//       });
//       var n = t('./node_modules/@linaria/react/lib/index.js'),
//         a = (0, n.z)('div')({
//           name: 'ActionWrapper',
//           class: 'a4fpqck',
//         }),
//         r = (0, n.z)('div')({
//           name: 'ActionWrapperV2',
//           class: 'a1k350fh',
//         }),
//         o = (0, n.z)('div')({
//           name: 'EmptyIcon',
//           class: 'ev7dxe4',
//         });
//       s.ZP = (0, n.z)('div')({
//         name: 'CardsFooter3',
//         class: 'c1xwz1x4',
//       });
//       var i = (0, n.z)('div')({
//         name: 'AdsFooter',
//         class: 'aq8o3dm',
//       });
//       t(
//         './.linaria-cache/app/j/study-modes/cards/components/CardsFooter.linaria.css'
//       );
//     },
//     './app/j/study-modes/cards/components/CardsToolbarKeyboardShortcutsList.tsx':
//       (e, s, t) => {
//         'use strict';
//         t.d(s, {
//           Z: () => c,
//         });
//         t('./node_modules/core-js/modules/es.array.iterator.js'),
//           t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//         var n = t('./node_modules/@linaria/react/lib/index.js'),
//           a =
//             (t('./node_modules/react/index.js'),
//             t('./app/j/components/UIColumn.tsx')),
//           r = t('./app/j/components/UIKbd.tsx'),
//           o = t('./node_modules/react/jsx-runtime.js'),
//           i = (e) => {
//             var {keyValue: s, label: t} = e;
//             return (0, o.jsxs)('div', {
//               className: 'CardsToolbarKeyboardShortcutsListRow',
//               children: [
//                 (0, o.jsx)(a.Z, {
//                   width: 0.5,
//                   children: t,
//                 }),
//                 (0, o.jsx)(a.Z, {
//                   width: 0.5,
//                   children: (0, o.jsx)('div', {
//                     className: 'CardsToolbarKeyboardShortcutsListRow-key',
//                     children: (0, o.jsx)(r.Z, {
//                       children: s,
//                     }),
//                   }),
//                 }),
//               ],
//             });
//           },
//           d = (e) =>
//             e.map((e) => {
//               var [s, t] = e;
//               return (0, o.jsx)(
//                 i,
//                 {
//                   keyValue: t,
//                   label: s,
//                 },
//                 t
//               );
//             }),
//           l = (0, n.z)('div')({
//             name: 'KeyboardShortcutColumnLayout',
//             class: 'k1t40yq6',
//           }),
//           u = (0, n.z)('div')({
//             name: 'KeyboardShortcutColumn',
//             class: 'k136c68z',
//           }),
//           c = (e) => {
//             var {divided: s = false, keyboardShortcutsList: t} = e,
//               n = d(t),
//               a = t.length / 2,
//               r = t.slice(0, a),
//               i = t.slice(a + 1),
//               c = (0, o.jsxs)(l, {
//                 children: [
//                   (0, o.jsx)(u, {
//                     children: d(r),
//                   }),
//                   (0, o.jsx)(u, {
//                     children: d(i),
//                   }),
//                 ],
//               });
//             return (0, o.jsx)('div', {
//               className: 'CardsToolbarKeyboardShortcutsList',
//               children: s ? c : n,
//             });
//           };
//         t(
//           './.linaria-cache/app/j/study-modes/cards/components/CardsToolbarKeyboardShortcutsList.linaria.css'
//         );
//       },
//     './app/j/study-modes/cards/constants.ts': (e, s, t) => {
//       'use strict';
//       var n;
//       t.d(s, {
//         S: () => n,
//       }),
//         (function (e) {
//           (e[(e.AD_MODAL = 0)] = 'AD_MODAL'),
//             (e[(e.CARDS_VIEW = 1)] = 'CARDS_VIEW'),
//             (e[(e.FINISHED_VIEW = 2)] = 'FINISHED_VIEW'),
//             (e[(e.LEARN_UPSELL_VIEW = 3)] = 'LEARN_UPSELL_VIEW'),
//             (e[(e.SIGNUP_WALL = 4)] = 'SIGNUP_WALL');
//         })(n || (n = {}));
//     },
//     './app/j/study-modes/cards/hooks/useInteractionAlertTimeout.ts': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         Z: () => a,
//       });
//       var n = t('./node_modules/react/index.js');
//       function a(e, s) {
//         (0, n.useEffect)(() => {
//           if (e && s) {
//             var t = setTimeout(() => {
//               s(null);
//             }, 4e3);
//             return () => clearTimeout(t);
//           }
//         }, [e, s]);
//       }
//     },
//     './app/j/study-modes/cards/utils/ads.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         b: () => r,
//         r: () => a,
//       });
//       var n = t('./app/j/ads/constants/adConstants.ts'),
//         a = (e, s) => !e && s === n.O8,
//         r = (e, s) => {
//           var t = ((e) => {
//             switch (e) {
//               case 'oneBefore':
//                 return 1;
//               case 'twoBefore':
//               default:
//                 return 2;
//               case 'threeBefore':
//                 return 3;
//             }
//           })(s);
//           return Math.abs(n.O8 - 1 + 0.5 - e) + Number.EPSILON < t;
//         };
//     },
//     './app/j/study-modes/cards/utils/index.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         $A: () => o,
//         X_: () => r,
//         tN: () => a,
//       });
//       var n = t('./app/j/config/enums.ts');
//       function a(e, s) {
//         if (s && e.location) return n.dU_.LOCATION;
//         if (e.term) return n.dU_.WORD;
//         if (e.definition) return n.dU_.DEFINITION;
//         throw new Error('Unsupported settings configuration for cards');
//       }
//       function r(e, s) {
//         return Object.assign({}, s, {
//           answerWith: Object.assign(
//             {
//               definition: false,
//               term: false,
//               location: false,
//             },
//             e
//           ),
//         });
//       }
//       function o(e, s) {
//         return Object.assign({}, s, {
//           promptWith: Object.assign(
//             {
//               definition: false,
//               term: false,
//               location: false,
//             },
//             e
//           ),
//         });
//       }
//     },
//     './app/j/study-modes/common/hooks/useInitialVisibilityTracker.ts': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         Z: () => i,
//       });
//       var n = t('./app/j/config/enums.ts'),
//         a = t('./app/j/core/default_store/DefaultStoreProvider.tsx'),
//         r = t('./node_modules/react/index.js'),
//         o = t('./app/j/study-modes/data/logging/thunks.ts');
//       function i() {
//         var e = (0, a.I0)(),
//           s = () => {
//             e(
//               (0, o.pJ)({
//                 action: n.WVJ.ENTER,
//               })
//             );
//           };
//         (0, r.useEffect)(() => {
//           'visible' === document.visibilityState && s(),
//             document.addEventListener(
//               'visibilitychange',
//               () => {
//                 switch (document.visibilityState) {
//                   case 'hidden':
//                     e(
//                       (0, o.pJ)({
//                         action: n.WVJ.EXIT,
//                       })
//                     );
//                     break;
//                   case 'visible':
//                     s();
//                 }
//               },
//               true
//             );
//         }, []);
//       }
//     },
//     './app/j/study-modes/common/util/testModeUpsell.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Y: () => c,
//         p: () => p,
//       });
//       var n = t('./app/j/tracking/BrazeHelper.ts'),
//         a = t('./app/j/utils/Cookie.ts'),
//         r = 'testModeEncourage2ndTest';
//       function o() {
//         var e = a.ZP.readJson(r);
//         return null === e ? {} : e;
//       }
//       function i(e) {
//         var s;
//         return null != (s = o()[e]) ? s : null;
//       }
//       function d(e, s) {
//         var t = o();
//         (t[e] = s), a.ZP.writeJson(r, t);
//       }
//       function l(e) {
//         return e + '-testScore';
//       }
//       function u(e) {
//         return e + '-studyImpressionCount';
//       }
//       function c(e, s) {
//         d(l(e), s);
//       }
//       function p(e, s, t) {
//         var a = i(l(s));
//         if (null !== a) {
//           var r,
//             o = null != (r = i(u(s))) ? r : 0;
//           o < 2 &&
//             (n.BX('test_mode_2nd_test_study_impression', e, {
//               test_score: a,
//               studiable_id: s,
//               studiable_name: t,
//             }),
//             d(u(s), o + 1));
//         }
//       }
//     },
//     './app/j/study-modes/core/LoggerContextWrapper.tsx': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => p,
//       });
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//       var n = t('./app/j/compatibility/logger/useLogger.ts'),
//         a = t('./app/j/context/RequestContext.ts'),
//         r = t('./app/j/context/RouteContext.tsx'),
//         o = t('./app/j/context/UidContext.tsx'),
//         i = t('./app/j/context/UserContext.ts'),
//         d = t('./app/j/core/default_store/DefaultStore.ts'),
//         l = t('./node_modules/react/index.js'),
//         u = t('./app/j/study-modes/data/logging/index.ts'),
//         c = t('./node_modules/react/jsx-runtime.js');
//       function p(e) {
//         var {children: s} = e,
//           t = (0, d.bh)(),
//           p = (0, n.qL)(),
//           m = (0, n.HP)(),
//           _ = (0, l.useContext)(r.jj),
//           h = (0, l.useContext)(a.Z),
//           g = (0, n.m0)(),
//           j = (0, l.useContext)(o.Z),
//           y = (0, l.useContext)(i.Z),
//           [S, f] = (0, l.useState)(false);
//         if (!S) {
//           var v = Object.assign({}, g, h, _);
//           t.dispatch(
//             (0, u.dt)({
//               config: v,
//               logPageActionFn: p,
//               logNavigationEventFn: m,
//               uid: j,
//               user: y,
//             })
//           );
//         }
//         return (
//           (0, l.useEffect)(() => {
//             f(true);
//           }, []),
//           (0, c.jsx)(c.Fragment, {
//             children: s,
//           })
//         );
//       }
//     },
//     './app/j/study-modes/data/constants.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Dg: () => a,
//         JS: () => r,
//         Oj: () => i,
//         _$: () => n,
//         jY: () => l,
//         rl: () => d,
//         t9: () => o,
//       });
//       var n = 'studyModesCommon',
//         a = n + '/gradings',
//         r = n + '/gradings',
//         o = n + '/logging',
//         i = n + '/settings',
//         d = n + '/studiable-data',
//         l = n + '/sessions';
//     },
//     './app/j/study-modes/data/engine/index.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Jh: () => c,
//       });
//       var n = t('./app/j/study-modes/data/constants.ts'),
//         a = (0, t('./app/j/utils/createDynamicSlice.ts').Z)({
//           name: '' + n.Dg,
//           getInitialState: () => ({
//             instance: null,
//             gradedAnswer: null,
//             studyStep: null,
//             totalProgress: null,
//             roundProgress: null,
//             answerHistory: null,
//             taskRoundProgress: null,
//             tasksWithProgress: null,
//             taskSequenceProgress: null,
//             currentTaskIndex: null,
//           }),
//           reducers: {
//             setStudyEngineInstance(e, s) {
//               e.instance = s.payload;
//             },
//             setGradedAnswer(e, s) {
//               e.gradedAnswer = s.payload;
//             },
//             setAnswerHistory(e, s) {
//               e.answerHistory = s.payload;
//             },
//             addToAnswerHistory(e, s) {
//               if (null === e.answerHistory)
//                 throw new Error(
//                   'You must set the answer history before adding to it.'
//                 );
//               e.answerHistory = s.payload;
//             },
//             setStudyStepAndProgress(e, s) {
//               var {
//                 roundProgress: t,
//                 studyStep: n,
//                 totalProgress: a,
//               } = s.payload;
//               (e.studyStep = n), (e.totalProgress = a), (e.roundProgress = t);
//             },
//             setStudyStepAndProgressForTasks(e, s) {
//               var {
//                 studyStep: t,
//                 tasksWithProgress: n,
//                 taskRoundProgress: a,
//                 taskSequenceProgress: r,
//                 currentTaskIndex: o,
//               } = s.payload;
//               (e.studyStep = t),
//                 (e.tasksWithProgress = n),
//                 (e.taskRoundProgress = a),
//                 (e.taskSequenceProgress = r),
//                 (e.currentTaskIndex = o);
//             },
//           },
//         }),
//         {
//           addToAnswerHistory: r,
//           setAnswerHistory: o,
//           setGradedAnswer: i,
//           setStudyEngineInstance: d,
//           setStudyStepAndProgress: l,
//           setStudyStepAndProgressForTasks: u,
//         } = a.actions,
//         {ssr: c} = a;
//       s.ZP = a.getReducer;
//     },
//     './app/j/study-modes/data/engine/selectors/index.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         C1: () => _,
//         C9: () => f,
//         WJ: () => E,
//         zt: () => S,
//       });
//       var n = t('./app/j/config/enums.ts'),
//         a = t('./app/j/core/default_store/DefaultStore.ts'),
//         r = t('./node_modules/nullthrows/nullthrows.js'),
//         o = t.n(r),
//         i = t('./node_modules/reselect/lib/index.js'),
//         d = t('./app/j/study-engine/types.ts'),
//         l = t('./app/j/study-engine/utils.ts'),
//         u = t('./app/j/study-modes/data/constants.ts'),
//         c = t('./app/j/study-modes/data/settings/types.ts'),
//         p = t(
//           './app/j/study-modes/legacy-common/grading/utils/isAnswerGradedAsCorrectWithLevenshteinPlus.ts'
//         ),
//         m = (0, i.createSelector)((0, a.iu)(u._$), (e) => e.engine),
//         _ =
//           ((0, i.createSelector)(m, (e) => e.instance),
//           (0, i.createSelector)(m, (e) =>
//             o()(
//               e.instance,
//               'You must initialize the study engine before selecting it.'
//             )
//           )),
//         h = (0, i.createSelector)(m, (e) =>
//           o()(
//             e.studyStep,
//             'You must generate the study step before selecting it.'
//           )
//         ),
//         g = (0, i.createSelector)(m, (e) =>
//           o()(
//             e.answerHistory,
//             'You must set the answer history before selecting it.'
//           )
//         ),
//         j = (0, i.createSelector)(h, (e) => ((0, l.KX)(e) ? e : null)),
//         y =
//           ((0, i.createSelector)(h, (e) => {
//             if (!(0, l.KX)(e))
//               throw new Error(
//                 'You cannot select a question if the current study step is not a question. The current study step type is: ' +
//                   e.type +
//                   '.'
//               );
//             return e;
//           }),
//           (0, i.createSelector)(h, (e) => {
//             if ((0, l.hB)(e)) return e.checkpoint;
//             if (!(0, l.jk)(e))
//               throw new Error(
//                 'You cannot select a checkpoint if the current study step is not a checkpoint.'
//               );
//             return e;
//           }),
//           (0, i.createSelector)([j, g], (e, s) => {
//             if (null === e) return false;
//             for (var t = s.length - 1; t >= 0; t--) {
//               var a = s[t];
//               if (
//                 a.studiableItemId === e.metadata.studiableItemId &&
//                 ((a.round === (0, c.Q)().multipleChoice &&
//                   e.type === d.mw.MULTIPLE_CHOICE_QUESTION) ||
//                   (a.round === (0, c.Q)().written &&
//                     e.type === d.mw.WRITTEN_QUESTION))
//               )
//                 return (
//                   a.correctness === n.p7P.INCORRECT ||
//                   a.correctness === n.p7P.INCORRECT_WITH_HINT
//                 );
//             }
//             return false;
//           }),
//           (0, i.createSelector)(h, (e) => {
//             if (!(0, l.hB)(e))
//               throw new Error(
//                 'You cannot select a paywall if the current study step is not a paywall.'
//               );
//             return e;
//           })),
//         S =
//           ((0, i.createSelector)(h, (e) => {
//             var s;
//             if (!(0, l.hB)(e) && !(0, l.jk)(e))
//               throw new Error(
//                 'You cannot select study step metering data when the step is not a checkpoint or paywall, this is to prevent too many calls to the metering endpoint'
//               );
//             return null != (s = e.metadata.meteringData) ? s : null;
//           }),
//           (0, i.createSelector)(y, (e) => {
//             var {checkpoint: s} = e;
//             return null !== s && s.roundResults.length > 0;
//           }),
//           (0, i.createSelector)(h, (e) =>
//             (0, l.hB)(e)
//               ? e.checkpoint.roundResults
//               : (0, l.jk)(e)
//               ? e.roundResults
//               : []
//           ),
//           (0, i.createSelector)(m, (e) =>
//             o()(
//               e.totalProgress,
//               'You must compute the total progress before selecting it.'
//             )
//           )),
//         f =
//           ((0, i.createSelector)(m, (e) =>
//             o()(
//               e.roundProgress,
//               'You must compute the round progress before selecting it.'
//             )
//           ),
//           (0, i.createSelector)(
//             h,
//             (e) => !!(0, l.jk)(e) && e.progressState === n.kg$.PERCENT_100
//           ),
//           (0, i.createSelector)(m, (e) =>
//             o()(
//               e.tasksWithProgress,
//               'You must compute tasks with progress before selecting it.'
//             )
//           ),
//           (0, i.createSelector)(m, (e) => {
//             var s = o()(
//                 e.tasksWithProgress,
//                 'You must compute tasks with progress before selecting it.'
//               ),
//               t = e.currentTaskIndex;
//             return s.length && null !== t ? s[t].totalProgress : null;
//           }),
//           (0, i.createSelector)(m, (e) => {
//             var s = e.tasksWithProgress;
//             if (s) {
//               var t = [];
//               return (
//                 s.forEach((e) => {
//                   var s = e.task.questionSource;
//                   e.task.questionTypes.forEach((e) => {
//                     t.push([e, s]);
//                   });
//                 }),
//                 t
//               );
//             }
//             return [];
//           }),
//           (0, i.createSelector)(m, (e) =>
//             o()(
//               e.taskRoundProgress,
//               'You must compute task round progress before selecting it.'
//             )
//           ),
//           (0, i.createSelector)(m, (e) =>
//             o()(
//               e.taskSequenceProgress,
//               'You must compute task sequence progress before selecting it.'
//             )
//           )),
//         v =
//           ((0, i.createSelector)(m, (e) =>
//             o()(
//               e.currentTaskIndex,
//               'You must set current task index before selecting it.'
//             )
//           ),
//           (0, i.createSelector)(m, (e) => e.gradedAnswer)),
//         E =
//           ((0, i.createSelector)(v, (e) =>
//             o()(e, 'You must compute the graded answer before selecting it.')
//           ),
//           (0, i.createSelector)(v, (e) => {
//             var s;
//             return (0, p.q)(
//               null != (s = null == e ? void 0 : e.gradingSettingsSuggestion)
//                 ? s
//                 : null
//             );
//           }));
//     },
//     './app/j/study-modes/data/gradings/selectors.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         lc: () => l,
//       });
//       var n = t('./app/j/core/default_store/DefaultStore.ts'),
//         a = t('./node_modules/reselect/lib/index.js'),
//         r = t('./app/j/study-modes/data/constants.ts'),
//         o = t('./app/j/study-modes/data/engine/selectors/index.ts'),
//         i = (0, a.createSelector)((0, n.iu)(r._$), (e) => e.gradings),
//         d = (0, a.createSelector)(
//           i,
//           (e) => e.answerGradedByLongtextGradingService
//         ),
//         l =
//           ((0, a.createSelector)([d, o.WJ], (e, s) => e || s),
//           (0, a.createSelector)(i, (e) => e.isEligibleForSmartGrading));
//       (0, a.createSelector)(i, (e) => e.overrideCorrectnessCounter),
//         (0, a.createSelector)(i, (e) => e.shouldShowSmartGradingUpsell),
//         (0, a.createSelector)(i, (e) => e.isGrading);
//     },
//     './app/j/study-modes/data/index.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         ZP: () => O,
//       });
//       var n = t('./node_modules/redux/lib/redux.js'),
//         a = t('./app/j/study-modes/data/constants.ts'),
//         r = t('./app/j/study-modes/data/engine/index.ts'),
//         o = t('./app/j/utils/createDynamicSlice.ts'),
//         i = (0, o.Z)({
//           name: '' + a.JS,
//           getInitialState: (e) => ({
//             answerGradedByLongtextGradingService: false,
//             isEligibleForSmartGrading: e.isEligibleForSmartGrading,
//             isGrading: false,
//             overrideCorrectnessCounter: 0,
//             shouldShowSmartGradingUpsell: e.shouldShowSmartGradingUpsell,
//           }),
//           reducers: {
//             setAnswerGradedByLongtextGradingService(e, s) {
//               e.answerGradedByLongtextGradingService = s.payload;
//             },
//             setIsGrading(e, s) {
//               e.isGrading = s.payload;
//             },
//             incrementOverrideCorrectness(e) {
//               e.overrideCorrectnessCounter = e.overrideCorrectnessCounter + 1;
//             },
//           },
//         }),
//         {
//           setAnswerGradedByLongtextGradingService: d,
//           setIsGrading: l,
//           incrementOverrideCorrectness: u,
//         } = i.actions,
//         {ssr: c} = i,
//         p = i.getReducer,
//         m = t('./app/j/study-modes/data/logging/index.ts'),
//         _ = (0, o.Z)({
//           name: a._$ + '/metering',
//           getInitialState: (e) => {
//             var s;
//             return {
//               meteringData: null != (s = e.meteringData) ? s : {},
//               isSignupWallUnlocked: e.isSignupWallUnlocked,
//             };
//           },
//           reducers: {
//             setMeteringData(e, s) {
//               e.meteringData = s.payload;
//             },
//           },
//         }),
//         h = _.getReducer,
//         {setMeteringData: g} = _.actions,
//         {ssr: j} = _,
//         y = (0, o.Z)({
//           name: a._$ + '/onboarding',
//           getInitialState: (e) => ({
//             daysSinceLastVisit: e.daysSinceLastVisit,
//           }),
//           reducers: {},
//         }),
//         {ssr: S} = y,
//         f = y.getReducer,
//         v = t('./app/j/study-modes/data/sessions/index.ts'),
//         E = t('./app/j/study-modes/data/settings/index.ts'),
//         x = t('./node_modules/lodash/keyBy.js'),
//         b = t.n(x),
//         A =
//           (t('./node_modules/core-js/modules/es.array.iterator.js'),
//           t('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
//           t('./app/j/study-engine/utils.ts')),
//         T = t('./app/j/study-modes/data/studiable-data/thunks.ts'),
//         C = (0, o.Z)({
//           name: a.rl,
//           getInitialState: (e) =>
//             Object.assign({}, e.studiableDocumentData, {
//               accents: e.studiableAccents,
//               diagramImages: e.images,
//               editableStudiableItemIds: [
//                 ...new Set(e.editableStudiableItemIds),
//               ],
//               selectedTerms: b()(e.selectedTerms, (e) => {
//                 var {termId: s} = e;
//                 return s;
//               }),
//               starredStudiableItemIds: [
//                 ...new Set(e.selectedTerms.map((e) => (0, A.zn)(e.termId))),
//               ],
//               studiableContainer: e.studyable,
//               studiableContainerType: e.studyableType,
//               crossModeResetTimestamp: e.crossModeResetTimestamp,
//               progressBucketName: e.progressBucketName,
//               studySummaries: e.studySummaries,
//             }),
//           reducers: {},
//           extraReducers: (e) =>
//             e
//               .addCase(T.lr.pending, (e, s) => {
//                 var t = s.meta.arg,
//                   n = new Set(e.starredStudiableItemIds);
//                 n.delete(t), (e.starredStudiableItemIds = [...n]);
//               })
//               .addCase(T.lr.fulfilled, (e, s) => {
//                 var t = s.meta.arg;
//                 delete e.selectedTerms[t];
//               })
//               .addCase(T.Dk.pending, (e, s) => {
//                 var {itemId: t} = s.meta.arg,
//                   n = new Set(e.starredStudiableItemIds);
//                 n.add(t), (e.starredStudiableItemIds = [...n]);
//               })
//               .addCase(T.Dk.fulfilled, (e, s) => {
//                 if (s.payload) {
//                   var {termId: t} = s.payload;
//                   e.selectedTerms[t] = s.payload;
//                 }
//               })
//               .addCase(T.OC.fulfilled, (e, s) => {
//                 var t = s.payload,
//                   n = s.meta.arg;
//                 if (t) {
//                   var a = e.studiableItems.findIndex((e) => e.id === n.id);
//                   -1 !== a &&
//                     (delete e.studiableItems[a], (e.studiableItems[a] = t));
//                 }
//               }),
//         }),
//         {ssr: I} = C,
//         w = C.getReducer;
//       (0, n.combineReducers)({
//         engine: r.Jh.reducer,
//         gradings: c.reducer,
//         logging: m.Jh.reducer,
//         studiableData: I.reducer,
//         sessions: v.Jh.reducer,
//         settings: E.Jh.reducer,
//         metering: j.reducer,
//         onboarding: S.reducer,
//       });
//       function O(e, s) {
//         e.registerReducer(
//           a._$,
//           ((e) =>
//             (0, n.combineReducers)({
//               engine: (0, r.ZP)(e),
//               gradings: p(e),
//               logging: (0, m.ZP)(e),
//               studiableData: w(e),
//               sessions: (0, v.ZP)(e),
//               settings: (0, E.ZP)(e),
//               metering: h(e),
//               onboarding: f(e),
//             }))(s)
//         );
//       }
//     },
//     './app/j/study-modes/data/logging/index.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         ZP: () => l,
//         Jh: () => d,
//         dt: () => i,
//       });
//       var n = t('./app/j/study-modes/data/constants.ts'),
//         a = t('./app/j/config/enums.ts'),
//         r = t('./app/j/study-modes/redesigned_cards/constants.ts');
//       var o = (0, t('./app/j/utils/createDynamicSlice.ts').Z)({
//           name: '' + n.t9,
//           getInitialState: (e) => {
//             return {
//               embedType:
//                 ((s = e.isEmbedding),
//                 (t = e.cardsOrigin),
//                 s
//                   ? a.b_7.EXTERNAL
//                   : t === r.ou.SET_PAGE
//                   ? a.b_7.INTERNAL
//                   : null),
//               funnelUUID: e.funnelUUID,
//               config: null,
//               logPageActionFn: null,
//               logNavigationEventFn: null,
//               modeType: e.studyModeType,
//               selectedOnly: e.selectedOnly,
//               studyableId: e.studyable.id,
//               studyableType: e.studyableType,
//               uid: '',
//               user: null,
//             };
//             var s, t;
//           },
//           reducers: {
//             updateContext(e, s) {
//               var {
//                 config: t,
//                 logPageActionFn: n,
//                 logNavigationEventFn: a,
//                 uid: r,
//                 user: o,
//               } = s.payload;
//               (e.config = t),
//                 (e.logPageActionFn = n),
//                 (e.logNavigationEventFn = a),
//                 (e.user = o),
//                 (e.uid = r);
//             },
//           },
//         }),
//         {updateContext: i} = o.actions,
//         {ssr: d} = o,
//         l = o.getReducer;
//     },
//     './app/j/study-modes/data/logging/thunks.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         ds: () => b,
//         lV: () => C,
//         Ny: () => I,
//         pJ: () => T,
//         F: () => A,
//       });
//       var n = t(
//           './node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
//         ),
//         a = t(
//           './node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js'
//         ),
//         r = t('./app/j/config/enums.ts'),
//         o = t('./app/j/study-modes/data/constants.ts'),
//         i =
//           (t('./node_modules/core-js/modules/es.json.stringify.js'),
//           t('./app/j/core/default_store/DefaultStore.ts')),
//         d = t('./node_modules/nullthrows/nullthrows.js'),
//         l = t.n(d),
//         u = t('./node_modules/reselect/lib/index.js'),
//         c =
//           (t('./app/j/study-engine/types.ts'), t('./app/j/global/Rollbar.ts')),
//         p = t('./app/j/utils/log-event.ts'),
//         m = t('./app/j/utils/unix-timestamp.ts');
//       class _ {
//         constructor(e, s) {
//           this.personId = s ? s.id : e;
//         }
//         assemblePayload(e) {
//           return Object.assign(
//             {
//               person_id: this.personId,
//               client_id: 'web',
//               platform: r.t4T.WEB,
//               client_timestamp: (0, m.vJ)(),
//             },
//             e
//           );
//         }
//         logMLFeedbackEvent(e) {
//           var {
//               studySessionId: s,
//               questionSessionId: t,
//               mlFeature: n,
//               studiableContainerId: a,
//               studiableItemId: o,
//               feedbackQuestionType: i,
//               feedbackQuestion: d,
//               feedbackAnswer: l,
//               metadata: u,
//             } = e,
//             m = {
//               study_session_id: s,
//               question_session_id: t,
//               ml_feature: n,
//               ml_inference_id: null,
//               studiable_container_id: a,
//               studiable_item_id: o,
//               feedback_question_type: i,
//               feedback_question: d,
//               flagging_answer: null,
//               upvotes_answer: null,
//               contribution_answer: null,
//               metadata: u,
//             };
//           switch (i) {
//             case r.ary.FLAGGING:
//               'string' == typeof l && (m.flagging_answer = String(l));
//               break;
//             case r.ary.UPVOTES:
//               'boolean' == typeof l && (m.upvotes_answer = Boolean(l));
//               break;
//             case r.ary.CONTRIBUTION:
//               'string' == typeof l && (m.contribution_answer = String(l));
//               break;
//             default:
//               return void c.Z.error('Unexpected MLFeedbackType ' + d);
//           }
//           var _ = this.assemblePayload(m);
//           (0, p.Z)('ml_feedback_events', _);
//         }
//       }
//       t('./app/j/study-modes/data/settings/types.ts'),
//         t('./app/j/study-modes/legacy-common/utils/studiablesToTermUtils.ts');
//       var h = t('./app/j/utils/StudyEventLogger.ts'),
//         g = (0, u.createSelector)((0, i.iu)(o._$), (e) => e.logging),
//         j = (0, u.createSelector)(g, (e) => l()(e.config)),
//         y = (0, u.createSelector)(g, (e) => l()(e.logPageActionFn)),
//         S = (0, u.createSelector)(g, (e) => l()(e.logNavigationEventFn)),
//         f = (0, u.createSelector)(g, (e) => {
//           var s;
//           return new h.Z({
//             modeType: e.modeType,
//             selectedOnly: e.selectedOnly,
//             studyableId: e.studyableId,
//             studyableType: e.studyableType,
//             embedType: e.embedType,
//             funnelUUID: e.funnelUUID,
//             userId: null == (s = e.user) ? void 0 : s.id,
//             uid: e.uid,
//           });
//         }),
//         v = (0, u.createSelector)(f, (e) => e.getQuestionEventLogger()),
//         E =
//           ((0, u.createSelector)(v, (e) => e.getQuestionSessionId()),
//           (0, u.createSelector)(g, (e) => new _(e.uid, e.user)),
//           (0, u.createSelector)(f, (e) => e.getStudySessionId()),
//           (0, u.createSelector)(v, (e) => e.getMultipleChoiceOptionLogger()),
//           (0, u.createSelector)(v, (e) => e.getTextGradingEventLogger()),
//           (0, u.createSelector)(f, (e) => e.logStudyEvent),
//           t('./app/j/study-modes/data/settings/selectors/preference.ts')),
//         x = t('./app/j/utils/SearchEventLogger.ts'),
//         b = (0, a.createAsyncThunk)(
//           o.t9 + '/logPageAction',
//           (function () {
//             var e = (0, n.Z)(function* (e, s) {
//               var {action: t, additionalInfo: n} = e,
//                 {getState: a} = s,
//                 r = a();
//               y(r)(t, n);
//             });
//             return function (s, t) {
//               return e.apply(this, arguments);
//             };
//           })()
//         ),
//         A = (0, a.createAsyncThunk)(
//           o.t9 + '/logStudyNavigationEvent',
//           (function () {
//             var e = (0, n.Z)(function* (e, s) {
//               var {
//                   action: t = r.$w5.CLICK,
//                   additionalInfo: n,
//                   clickCategory: a = r.Qje.BROWSE,
//                   clickName: o,
//                   screenName: i,
//                 } = e,
//                 {getState: d} = s,
//                 l = d();
//               S(l)(i, a, o, n, t);
//             });
//             return function (s, t) {
//               return e.apply(this, arguments);
//             };
//           })()
//         ),
//         T = (0, a.createAsyncThunk)(
//           o.t9 + '/logStudyEvent',
//           (function () {
//             var e = (0, n.Z)(function* (e, s) {
//               var {action: t, extraData: n} = e,
//                 {getState: a} = s,
//                 r = a(),
//                 o = j(r),
//                 i = f(r),
//                 d = (0, E.zg)(r);
//               i.logStudyEvent(
//                 t,
//                 {
//                   loggerConfig: o,
//                 },
//                 Object.assign({}, n, {
//                   selectedOnly: d,
//                 })
//               );
//             });
//             return function (s, t) {
//               return e.apply(this, arguments);
//             };
//           })()
//         ),
//         C = (0, a.createAsyncThunk)(
//           o.t9 + '/logQuestionEvent',
//           (function () {
//             var e = (0, n.Z)(function* (e, s) {
//               var {action: t, questionEventData: n} = e,
//                 {getState: a} = s,
//                 r = a(),
//                 o = j(r);
//               v(r).logQuestionEvent(t, n, false, o);
//             });
//             return function (s, t) {
//               return e.apply(this, arguments);
//             };
//           })()
//         ),
//         I = (0, a.createAsyncThunk)(
//           o.t9 + '/logSearchSetPageEngagement',
//           (function () {
//             var e = (0, n.Z)(function* (e, s) {
//               var {studiableContainerId: t} = e,
//                 {getState: n} = s,
//                 a = n(),
//                 o = j(a),
//                 i = v(a).getStudySessionId();
//               x.ZP.logSearchSetPageEngagement(t, r.MG.SET, i, {
//                 loggerConfig: o,
//               });
//             });
//             return function (s, t) {
//               return e.apply(this, arguments);
//             };
//           })()
//         );
//     },
//     './app/j/study-modes/data/metering/selectors.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         kn: () => m,
//         hh: () => u,
//         UQ: () => c,
//       });
//       var n = t(
//           './node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js'
//         ),
//         a = t('./app/j/config/enums.ts'),
//         r = t('./app/j/core/default_store/DefaultStore.ts'),
//         o = t('./app/j/study-modes/data/constants.ts'),
//         i =
//           (t('./app/j/compatibility/fetch.ts'),
//           t('./app/j/global/Rollbar.ts'),
//           (e) => !!e && e.numEvents >= e.threshold),
//         d = (0, n.createSelector)((0, r.iu)(o._$), (e) => e.metering),
//         l = (0, n.createSelector)(d, (e) => {
//           var s;
//           return null != (s = e.meteringData) ? s : {};
//         }),
//         u = (0, n.createSelector)(l, (e) => {
//           var s;
//           return null != (s = e[a.jrE.LEARN_CHECKPOINT]) ? s : null;
//         }),
//         c = (0, n.createSelector)(l, (e) => {
//           var s;
//           return null != (s = e[a.jrE.TEST_SUBMISSION]) ? s : null;
//         }),
//         p =
//           ((0, n.createSelector)(u, (e) => i(e)),
//           (0, n.createSelector)(c, (e) => i(e)),
//           (0, n.createSelector)(u, (e) => {
//             if (!e) return null;
//             var {numEvents: s, threshold: t} = e;
//             return t - s;
//           })),
//         m =
//           ((0, n.createSelector)(p, (e) => (null === e ? null : e > 0)),
//           (0, n.createSelector)(u, (e) => {
//             if (!e) return null;
//             var {threshold: s} = e;
//             return s;
//           }),
//           (0, n.createSelector)(c, (e) => {
//             if (!e) return null;
//             var {numEvents: s, threshold: t} = e;
//             return t - s;
//           }),
//           (0, n.createSelector)(u, (e) => {
//             if (!e) return null;
//             var {numEvents: s} = e;
//             return s;
//           }),
//           (0, n.createSelector)(u, (e) => {
//             if (!e) return null;
//             var {canShowRewardAd: s} = e;
//             return null != s && s;
//           }),
//           (0, n.createSelector)(d, (e) => {
//             var s;
//             return null != (s = e.isSignupWallUnlocked) && s;
//           }));
//     },
//     './app/j/study-modes/data/sessions/index.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Ch: () => o,
//         Jh: () => r,
//         ai: () => i,
//       });
//       var n = t('./app/j/study-modes/data/constants.ts'),
//         a = (0, t('./app/j/utils/createDynamicSlice.ts').Z)({
//           name: n._$ + '/sessions',
//           getInitialState: (e) => ({
//             initialSessions: e.sessions,
//             personId: e.personId,
//             sessionLuid: null,
//             serverTimestamp: e.serverTimestamp,
//           }),
//           reducers: {
//             setSessionLuid(e, s) {
//               e.sessionLuid = s.payload;
//             },
//             setInitialSessions(e, s) {
//               s.payload.isStarredOnly
//                 ? (e.initialSessions.starred = s.payload.session)
//                 : (e.initialSessions.unstarred = s.payload.session);
//             },
//           },
//         }),
//         {ssr: r} = a;
//       s.ZP = a.getReducer;
//       var {setSessionLuid: o, setInitialSessions: i} = a.actions;
//     },
//     './app/j/study-modes/data/sessions/selectors.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Ug: () => p,
//         a5: () => m,
//         b7: () => _,
//         gP: () => c,
//         sl: () => u,
//       });
//       var n = t(
//           './node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js'
//         ),
//         a = t('./app/j/core/default_store/DefaultStore.ts'),
//         r =
//           (t('./node_modules/nullthrows/nullthrows.js'),
//           t('./app/j/study-modes/data/constants.ts')),
//         o = t('./app/j/study-modes/data/settings/selectors/preference.ts'),
//         i = t('./app/j/syncers/SessionSyncer.ts'),
//         d = (0, n.createSelector)((0, a.iu)(r._$), (e) => e.sessions),
//         l = (0, n.createSelector)(d, (e) => e.initialSessions),
//         u = (0, n.createSelector)([l, o.zg], (e, s) =>
//           s ? e.starred : e.unstarred
//         ),
//         c = (0, n.createSelector)(d, (e) => e.personId),
//         p = (0, n.createSelector)(d, (e) => e.sessionLuid),
//         m = (e) => {
//           var s = p(e);
//           return s ? i.Z.getModel(s).getProperties() : null;
//         },
//         _ = (0, n.createSelector)(d, (e) => e.serverTimestamp);
//     },
//     './app/j/study-modes/data/sessions/thunks.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         mc: () => x,
//         TS: () => v,
//         KN: () => f,
//         K_: () => S,
//       });
//       var n = t(
//           './node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
//         ),
//         a =
//           (t('./node_modules/core-js/modules/es.array.iterator.js'),
//           t('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
//           t(
//             './node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js'
//           )),
//         r = t('./app/j/core/getGenericErrorWithToastCallback.ts'),
//         o = t('./app/j/study-modes/data/constants.ts'),
//         i = t('./app/j/study-modes/data/sessions/index.ts'),
//         d = t('./app/j/study-modes/data/sessions/selectors.ts'),
//         l = t('./app/j/config/enums.ts'),
//         u = t('./app/j/study-modes/data/engine/selectors/index.ts'),
//         c = t('./app/j/study-modes/data/settings/selectors/display.ts'),
//         p = t('./app/j/utils/tamperProofNow.ts'),
//         m = (e, s) => {
//           var t,
//             n = (0, c.ez)(e);
//           if (void 0 !== s && n === l.aKJ.FLASHCARDS) {
//             var a = (0, d.b7)(e);
//             t = (0, p.Z)() / 1e3 - a + s.get('score');
//           } else
//             t =
//               n === l.aKJ.LEARNING_ASSISTANT
//                 ? (0, u.C9)(e)
//                 : (0, u.zt)(e).studyProgress;
//           return Math.round(t);
//         },
//         _ = t('./app/j/study-modes/data/settings/selectors/preference.ts'),
//         h = t('./app/j/study-modes/data/studiable-data/selectors.ts'),
//         g = t('./app/j/syncers/SessionSyncer.ts'),
//         j = t('./app/j/utils/isCookieSupportEnabled.ts'),
//         y = t('./app/j/utils/unix-timestamp.ts'),
//         S = (0, a.createAsyncThunk)(
//           o.jY + '/setInitialSession',
//           (function () {
//             var e = (0, n.Z)(function* (e, s) {
//               var {getState: t, dispatch: n} = s,
//                 a = t();
//               n(
//                 (0, i.ai)({
//                   session: e,
//                   isStarredOnly: (0, _.zg)(a),
//                 })
//               );
//             });
//             return function (s, t) {
//               return e.apply(this, arguments);
//             };
//           })()
//         ),
//         f = (0, a.createAsyncThunk)(
//           o.jY + '/initializeSession',
//           (function () {
//             var e = (0, n.Z)(function* (e, s) {
//               var t,
//                 {getState: n, dispatch: a} = s,
//                 r = n();
//               if (
//                 ((t = e || {
//                   personId: Number((0, d.gP)(r)),
//                   selectedOnly: (0, _.zg)(r),
//                   type: (0, c.ez)(r),
//                   itemType: (0, h.Sd)(r),
//                   itemId: (0, h.uf)(r),
//                   timestamp: (0, y.S0)(),
//                 }),
//                 (0, j.Z)())
//               ) {
//                 var o = g.Z.add(t);
//                 a((0, i.Ch)(o)),
//                   yield g.Z.save(o, t).then((s) => {
//                     var [n, r] = s;
//                     if (!e && r) {
//                       var o = Object.assign({}, t, {
//                         id: r.getProperties().id,
//                       });
//                       a(S(o));
//                     }
//                   });
//               }
//             });
//             return function (s, t) {
//               return e.apply(this, arguments);
//             };
//           })()
//         ),
//         v =
//           ((0, a.createAsyncThunk)(
//             o.jY + '/awaitSession',
//             (function () {
//               var e = (0, n.Z)(function* (e, s) {
//                 var {dispatch: t, getState: n} = s,
//                   a = n();
//                 (0, d.a5)(a) || (yield t(f((0, d.sl)(a))));
//               });
//               return function (s, t) {
//                 return e.apply(this, arguments);
//               };
//             })()
//           ),
//           (0, a.createAsyncThunk)(
//             o.jY + '/finishSession',
//             (function () {
//               var e = (0, n.Z)(function* (e, s) {
//                 var {getState: t} = s,
//                   n = t(),
//                   a = (0, d.Ug)(n);
//                 (0, j.Z)() &&
//                   a &&
//                   g.Z.save(
//                     a,
//                     Object.assign({}, e, {
//                       endedTimestamp: (0, y.S0)(),
//                     })
//                   ).catch((0, r.Z)('Error updating session', false));
//               });
//               return function (s, t) {
//                 return e.apply(this, arguments);
//               };
//             })()
//           )),
//         E =
//           ((0, a.createAsyncThunk)(
//             o.jY + '/updateProgressAndFinishSession',
//             (function () {
//               var e = (0, n.Z)(function* (e, s) {
//                 var t,
//                   {getState: n} = s,
//                   a = n(),
//                   r = m(a);
//                 if ((0, d.Ug)(a)) t = (0, d.Ug)(a);
//                 else {
//                   if (!(0, d.sl)(a)) return;
//                   t = g.Z.add((0, d.sl)(a));
//                 }
//                 (0, j.Z)() &&
//                   t &&
//                   g.Z.save(t, {
//                     score: r,
//                     endedTimestamp: (0, p.Z)(),
//                   });
//               });
//               return function (s, t) {
//                 return e.apply(this, arguments);
//               };
//             })()
//           ),
//           (e, s, t) => {
//             var n = m(t, s);
//             0 !== n &&
//               s.get('score') !== n &&
//               (0, j.Z)() &&
//               ((e, s, t, n) => {
//                 var a = (0, d.b7)(n);
//                 s.set('score', t),
//                   s.set('lastModified', a),
//                   g.Z.save(e, s.properties);
//               })(e, s, n, t);
//           }),
//         x = (0, a.createAsyncThunk)(
//           o.jY + '/exitSession',
//           (function () {
//             var e = (0, n.Z)(function* (e, s) {
//               var {getState: t} = s,
//                 n = t(),
//                 a = (0, d.Ug)(n);
//               if (!a) return null;
//               var r = g.Z.getModel(a);
//               if (!r) return null;
//               E(a, r, n);
//             });
//             return function (s, t) {
//               return e.apply(this, arguments);
//             };
//           })()
//         );
//     },
//     './app/j/study-modes/data/settings/actions.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         OZ: () => I,
//         j$: () => O,
//         ex: () => w,
//       });
//       var n = t('./node_modules/lodash/merge.js'),
//         a = t.n(n),
//         r = t('./node_modules/nullthrows/nullthrows.js'),
//         o = t.n(r),
//         i = t('./app/j/config/enums.ts'),
//         d =
//           (t('./app/j/study-modes/data/engine/index.ts'),
//           t('./app/j/study-modes/data/engine/selectors/index.ts')),
//         l = t('./app/j/study-modes/data/settings/selectors/display.ts'),
//         u = t('./app/j/study-modes/data/settings/index.ts'),
//         c = t('./app/j/study-modes/data/settings/selectors/preference.ts'),
//         p = t('./node_modules/lodash/isEqual.js'),
//         m = t.n(p),
//         _ = t('./node_modules/lodash/flatten.js'),
//         h = t.n(_),
//         g =
//           (t('./node_modules/core-js/modules/es.array.reduce.js'),
//           t('./app/j/study-modes/data/logging/thunks.ts')),
//         j = t('./app/j/study-modes/data/settings/types.ts');
//       var y = t('./app/j/syncers/StudySettingSyncer.ts'),
//         S = t('./app/j/utils/ensureArray.ts'),
//         f = t('./app/j/utils/StudySettingEncodingHelper.ts');
//       function v(e) {
//         switch (e) {
//           case 'definition':
//             return i.kH9.DEFINITION;
//           case 'term':
//           case 'word':
//             return i.kH9.WORD;
//           case 'location':
//             return i.kH9.LOCATION;
//           default:
//             return i.kH9.UNKNOWN;
//         }
//       }
//       function E(e) {
//         if ('boolean' == typeof e || 'number' == typeof e)
//           throw new Error('Cannot treat boolean as an immutable Map');
//         return e;
//       }
//       function x(e) {
//         return (0, f.S5)(
//           Object.keys(e)
//             .filter((s) => !!e[s])
//             .map(v)
//             .filter((e) => e !== i.kH9.UNKNOWN)
//         );
//       }
//       function b(e, s, t, n) {
//         switch ((void 0 === n && (n = false), s)) {
//           case 'isAudioOn':
//             return e === i.aKJ.SPELLER
//               ? {
//                   settingType: i.Std.ASSISTANT_SPELL_MODE_AUDIO_ENABLED,
//                   settingValue: !!t,
//                 }
//               : {
//                   settingType: i.Std.TAP_TO_PLAY_AUDIO,
//                   settingValue: !!t,
//                 };
//           case 'promptWith':
//             var a = (function (e) {
//               switch (e) {
//                 case i.aKJ.LEARNING_ASSISTANT:
//                   return i.Std.PROMPT_TERM_SIDES;
//                 case i.aKJ.FLASHCARDS:
//                   return i.Std.CARDS_PROMPT_SIDES;
//                 case i.aKJ.WRITE:
//                   return i.Std.WRITE_PROMPT_SIDES;
//                 case i.aKJ.SPELLER:
//                 default:
//                   return null;
//               }
//             })(e);
//             return a
//               ? {
//                   settingType: a,
//                   settingValue: x(E(t)),
//                 }
//               : [];
//           case 'answerWith':
//             var r = (function (e) {
//               switch (e) {
//                 case i.aKJ.LEARNING_ASSISTANT:
//                   return i.Std.ANSWER_TERM_SIDES;
//                 case i.aKJ.WRITE:
//                   return i.Std.WRITE_ANSWER_SIDES;
//                 case i.aKJ.FLASHCARDS:
//                   return i.Std.CARDS_ANSWER_SIDES;
//                 case i.aKJ.SPELLER:
//                   return i.Std.SPELL_ANSWER_SIDES;
//                 default:
//                   throw new Error(
//                     'All study modes should contain answer with study setting type'
//                   );
//               }
//             })(e);
//             return r
//               ? {
//                   settingType: r,
//                   settingValue: x(E(t)),
//                 }
//               : [];
//           case 'questionTypes':
//             if (e !== i.aKJ.LEARNING_ASSISTANT) return [];
//             var o = Object.keys(E(t))
//               .filter((e) => !!t[e])
//               .map((e) => (0, j.Q)()[e] || 0);
//             return Object.assign(
//               {
//                 settingType: i.Std.ASSISTANT_MODE_QUESTION_TYPES,
//                 settingValue: o.reduce((e, s) => e | s),
//               },
//               n && {
//                 settingValueRaw: o,
//               }
//             );
//           case 'writtenTypes':
//             return [
//               {
//                 settingType: i.Std.ASSISTANT_MODE_WRITTEN_DEFINITION_SIDE,
//                 settingValue: !!E(t).term,
//               },
//               {
//                 settingType: i.Std.ASSISTANT_MODE_WRITTEN_WORD_SIDE,
//                 settingValue: !!E(t).definition,
//               },
//             ];
//           case 'advancedAudioSettings':
//             return [
//               {
//                 settingType: i.Std.ASSISTANT_MODE_WORD_AUDIO_ENABLED,
//                 settingValue: !!E(t).wordEnabled,
//               },
//               {
//                 settingType: i.Std.ASSISTANT_MODE_DEFINITION_AUDIO_ENABLED,
//                 settingValue: !!E(t).definitionEnabled,
//               },
//               {
//                 settingType: i.Std.ASSISTANT_MODE_SLOW_WORD_AUDIO,
//                 settingValue: !!E(t).slowWordEnabled,
//               },
//               {
//                 settingType: i.Std.ASSISTANT_MODE_SLOW_DEFINITION_AUDIO,
//                 settingValue: !!E(t).slowDefinitionEnabled,
//               },
//             ];
//           case 'acceptsPartialAnswer':
//             return {
//               settingType: i.Std.FLEXIBLE_GRADING_ACCEPT_PARTIAL_ANSWERS,
//               settingValue: !!t,
//             };
//           case 'typoHelpGradingSetting':
//             return {
//               settingType: i.Std.FLEXIBLE_GRADING_ACCEPT_ANSWERS_WITH_TYPOS,
//               settingValue: !!t,
//             };
//           case 'smartGrading':
//             return {
//               settingType: i.Std.SMART_GRADING,
//               settingValue: !!t,
//             };
//           case 'studyPath':
//             return {
//               settingType: i.Std.STUDY_PATH,
//               settingValue: Number(t),
//             };
//           case 'guidanceDisabled':
//             return {
//               settingType: i.Std.GUIDANCE_DISABLED,
//               settingValue: !!t,
//             };
//           case 'sortingOn':
//             return {
//               settingType: i.Std.CARDS_SORTING_ON,
//               settingValue: !!t,
//             };
//           case 'cardsShuffleSeed':
//             return {
//               settingType: i.Std.CARDS_SHUFFLE_RANDOM_SEED,
//               settingValue: Number(t),
//             };
//           case 'studyStarredOnly':
//             return e === i.aKJ.FLASHCARDS
//               ? {
//                   settingType: i.Std.CARDS_SELECTED_ONLY,
//                   settingValue: !!t,
//                 }
//               : [];
//           case 'shuffle':
//             return {
//               settingType: i.Std.SHUFFLE,
//               settingValue: !!t,
//             };
//           default:
//             return [];
//         }
//       }
//       function A(e, s, t, n, a) {
//         var r = h()(
//           Object.keys(
//             (function (e, s) {
//               return Object.keys(s)
//                 .filter((t) => !m()(s[t], e[t]))
//                 .reduce((e, t) => ((e[t] = s[t]), e), {});
//             })(e, s)
//           ).map((e) => {
//             var r = b(n, e, s[e]),
//               o = b(n, e, s[e], true);
//             return (
//               a(
//                 (0, g.ds)({
//                   action: 'study_options_setting_changed',
//                   additionalInfo: o,
//                 })
//               ),
//               (0, S.Z)(r).map((e) => Object.assign({}, t, e))
//             );
//           })
//         );
//         r.length && y.Z.bulkAddAndSave(r);
//       }
//       var T = t('./app/j/study-modes/data/studiable-data/selectors.ts'),
//         C = t('./app/j/utils/isCookieSupportEnabled.ts');
//       var I = (e) => (s, t) => {
//           var n = t(),
//             r = (0, c.Oz)(n),
//             o = a()({}, r, e);
//           s((0, u.A$)(o));
//         },
//         w = (e) => (s, t) => {
//           var n,
//             a,
//             r,
//             i = t(),
//             d = (0, c.Oz)(i),
//             p =
//               ((n = e),
//               (a = o()(n.questionTypes)),
//               (r = Object.assign({}, a, {
//                 matching: false,
//                 multipleChoiceWithNoneOption: false,
//                 copyAnswer: a.written,
//               })),
//               Object.assign({}, n, {
//                 questionTypes: r,
//               }));
//           s((0, u.A$)(p)),
//             (function (e, s, t) {
//               if (e.studyStarredOnly !== s.studyStarredOnly) {
//                 var n = (0, l.$2)(t),
//                   a = (0, l.LP)(t),
//                   r = s.studyStarredOnly ? a : n;
//                 window.history.pushState({}, '', r);
//               }
//             })(d, p, i),
//             (0, C.Z)() &&
//               A(
//                 d,
//                 p,
//                 {
//                   personId: (0, l.gP)(i),
//                   studyableId: (0, T.uf)(i),
//                   studyableType: (0, T.Sd)(i),
//                 },
//                 (0, l.ez)(i),
//                 s
//               );
//         },
//         O = (e) => (s, t) => {
//           var n,
//             a,
//             r = t();
//           s(
//             ((e) => (s, t) => {
//               (0, d.C1)(t()).setGradingSettings(e);
//             })({
//               acceptsPartialAnswer: null != (n = (0, c.R9)(r)) && n,
//               acceptsAnswersWithTypos: e,
//               acceptsSmartGrading: null != (a = (0, c.qg)(r)) && a,
//             })
//           );
//         };
//     },
//     './app/j/study-modes/data/settings/index.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         A$: () => u,
//         ZP: () => E,
//         lM: () => _,
//         Jh: () => v,
//         QU: () => S,
//       });
//       var n = t('./app/j/study-modes/data/constants.ts'),
//         a = t('./app/j/utils/tamperProofNow.ts');
//       function r(e) {
//         var s, t, n, a, r, o, i;
//         return {
//           acceptsPartialAnswer: null != (s = e.acceptsPartialAnswer) && s,
//           advancedAudioSettings: e.advancedAudioSettings,
//           answerWith: e.answerWithSetting,
//           cardsShuffleSeed: null != (t = e.cardsShuffleSeed) ? t : null,
//           guidanceDisabled: null != (n = e.guidanceDisabled) && n,
//           isAudioOn: e.audioEnabledSetting,
//           locationQuestionTypes: null != (a = e.locationQuestionTypes) ? a : [],
//           promptWith: e.promptWithSetting,
//           questionTypes: e.questionTypesSetting,
//           shuffle: null != (r = e.shuffle) && r,
//           smartGrading: e.smartGradingSetting || null === e.smartGradingSetting,
//           sortingOn: null != (o = e.sortingOn) && o,
//           studyPath: void 0 === e.studyPathSetting ? null : e.studyPathSetting,
//           studyPathGoal:
//             void 0 === e.studyPathGoalSetting ? null : e.studyPathGoalSetting,
//           studyPathKnowledgeLevel:
//             void 0 === e.studyPathKnowledgeLevelSetting
//               ? null
//               : e.studyPathKnowledgeLevelSetting,
//           studyStarredOnly: null != (i = e.selectedOnly) && i,
//           typoHelpGradingSetting:
//             e.typoHelpGradingSetting || null === e.typoHelpGradingSetting,
//           writtenTypes: e.writtenTypesSetting,
//         };
//       }
//       function o(e) {
//         var s, t;
//         return {
//           canEditRichText: e.canEditRichText,
//           hasNonImageOnlyDefinitions: e.hasNonImageOnlyDefinitions,
//           hiddenSettings: null != (s = e.hiddenSettings) ? s : [],
//           isEmbedding: e.isEmbedding,
//           isOptionsModalOpen: false,
//           modePath: e.modePath,
//           personId: e.personId,
//           shouldHideEmbedControl: null != (t = e.shouldHideEmbedControl) && t,
//           shouldShowStudyTopNav: e.shouldShowStudyTopNav,
//           starredModePath: e.starredModePath,
//           startTimestamp: e.userStudyable.startTimestamp,
//           studyModeType: e.studyModeType,
//           userStudyable: e.userStudyable,
//         };
//       }
//       function i(e) {
//         return {
//           adModalShownAt: (0, a.Z)(),
//           adModalTimesShown: 0,
//           adsIds: e.adsIds,
//           isBrandedContentSet: e.isBCSEnabled,
//           lastActionTimestamp: null,
//           shouldShowAd: e.shouldShowAd,
//           shouldShowNewStudyBreak: false,
//         };
//       }
//       function d(e) {
//         var s, t, n;
//         return {
//           shouldInterleaveQuestions:
//             null != (s = e.shouldInterleaveQuestions) && s,
//           shouldShowTestToLearn: null != (t = e.shouldShowTestToLearn) && t,
//           shouldShowUnderstandingTask:
//             null != (n = e.shouldShowUnderstandingTask) && n,
//         };
//       }
//       var l = (0, t('./app/j/utils/createDynamicSlice.ts').Z)({
//           name: '' + n.Oj,
//           getInitialState: (e) => ({
//             ad: i(e),
//             display: o(e),
//             preference: r(e),
//             abTest: d(e),
//           }),
//           reducers: {
//             changePreference(e, s) {
//               e.preference = s.payload;
//             },
//             updateAcceptsPartialAnswer(e, s) {
//               e.preference.acceptsPartialAnswer = s.payload;
//             },
//             updateAcceptsSmartGrading(e, s) {
//               e.preference.smartGrading = s.payload;
//             },
//             setStudyStarredOnly(e, s) {
//               e.preference.studyStarredOnly = s.payload;
//             },
//             updateTypoHelpSetting(e, s) {
//               e.preference.typoHelpGradingSetting = s.payload;
//             },
//             setIsOptionsModalOpen(e, s) {
//               e.display.isOptionsModalOpen = s.payload;
//             },
//             restartUserStudyable(e, s) {
//               (e.display.userStudyable.startTimestamp = s.payload),
//                 (e.display.startTimestamp = s.payload);
//             },
//             updateAdModalState(e) {
//               (e.ad.adModalShownAt = (0, a.Z)()),
//                 (e.ad.adModalTimesShown = e.ad.adModalTimesShown + 1);
//             },
//             setShowNewStudyBreak(e, s) {
//               e.ad.shouldShowNewStudyBreak = s.payload;
//             },
//             updateLastActionTimestamp(e, s) {
//               e.ad.lastActionTimestamp = s.payload;
//             },
//           },
//         }),
//         {
//           changePreference: u,
//           init: c,
//           restartUserStudyable: p,
//           setIsOptionsModalOpen: m,
//           setShowNewStudyBreak: _,
//           setStudyStarredOnly: h,
//           updateAcceptsPartialAnswer: g,
//           updateAcceptsSmartGrading: j,
//           updateAdModalState: y,
//           updateLastActionTimestamp: S,
//           updateTypoHelpSetting: f,
//         } = l.actions,
//         {ssr: v} = l,
//         E = l.getReducer;
//     },
//     './app/j/study-modes/data/settings/selectors/ad.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Cr: () => p,
//         SV: () => h,
//         Xb: () => y,
//         cS: () => g,
//         nm: () => j,
//       });
//       var n = t('./app/j/ads/AdsHelper.ts'),
//         a = t('./app/j/ads/utils/screenSizes.ts'),
//         r = t('./node_modules/nullthrows/nullthrows.js'),
//         o = t.n(r),
//         i = t('./node_modules/reselect/lib/index.js'),
//         d = t('./app/j/study-modes/data/settings/selectors/index.ts'),
//         l = t('./app/j/utils/isAdBlockerEnabled.ts'),
//         u = t('./app/j/utils/viewport.ts'),
//         c = (0, i.createSelector)([d.G], (e) => e.ad),
//         p = (0, i.createSelector)(c, (e) => e.shouldShowAd),
//         m = (0, i.createSelector)(c, (e) => e.adModalTimesShown),
//         _ = (0, i.createSelector)(c, (e) => e.adModalShownAt),
//         h = (0, i.createSelector)(c, (e) =>
//           o()(
//             e.adsIds,
//             'Please include ad units for your study modes in entry.ts file'
//           )
//         ),
//         g = (0, i.createSelector)(c, (e) => e.shouldShowNewStudyBreak),
//         j = (0, i.createSelector)(c, (e) => e.isBrandedContentSet),
//         y = (0, i.createSelector)(c, (e) => e.lastActionTimestamp);
//       (0, i.createSelector)(
//         p,
//         (e) =>
//           (0, u.getWidth)() > a.r.tiny[0] &&
//           (0, u.getHeight)() > a.r.tiny[1] &&
//           e &&
//           !(0, l.ZP)()
//       ),
//         (0, i.createSelector)(
//           [p, m, _],
//           (e, s, t) => e && (0 === s || (s > 0 && (0, n.Rk)(t, 5)))
//         );
//     },
//     './app/j/study-modes/data/settings/selectors/display.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         $2: () => c,
//         BG: () => d,
//         FE: () => _,
//         LP: () => g,
//         QE: () => u,
//         V2: () => m,
//         ZB: () => l,
//         ds: () => i,
//         ez: () => j,
//         gP: () => p,
//         rU: () => h,
//       });
//       var n = t('./app/j/config/enums.ts'),
//         a = t('./node_modules/reselect/lib/index.js'),
//         r = t('./app/j/study-modes/data/settings/selectors/index.ts'),
//         o = (0, a.createSelector)([r.G], (e) => e.display),
//         i = (0, a.createSelector)(o, (e) => e.canEditRichText),
//         d = (0, a.createSelector)(o, (e) => e.hasNonImageOnlyDefinitions),
//         l = (0, a.createSelector)(o, (e) => e.hiddenSettings),
//         u = (0, a.createSelector)(o, (e) => e.isEmbedding),
//         c =
//           ((0, a.createSelector)(o, (e) => e.isOptionsModalOpen),
//           (0, a.createSelector)(o, (e) => e.modePath)),
//         p = (0, a.createSelector)(o, (e) => e.personId),
//         m = (0, a.createSelector)(o, (e) => e.shouldHideEmbedControl),
//         _ = (0, a.createSelector)(o, (e) => e.studyModeType === n.aKJ.TEST),
//         h = (0, a.createSelector)(o, (e) => e.shouldShowStudyTopNav),
//         g =
//           ((0, a.createSelector)(o, (e) => e.startTimestamp),
//           (0, a.createSelector)(o, (e) => e.starredModePath)),
//         j = (0, a.createSelector)(o, (e) => e.studyModeType);
//       (0, a.createSelector)(o, (e) => e.userStudyable);
//     },
//     './app/j/study-modes/data/settings/selectors/index.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         G: () => o,
//       });
//       var n = t('./app/j/core/default_store/DefaultStore.ts'),
//         a = t('./node_modules/reselect/lib/index.js'),
//         r = t('./app/j/study-modes/data/constants.ts'),
//         o = (0, a.createSelector)((0, n.iu)(r._$), (e) => e.settings);
//     },
//     './app/j/study-modes/data/settings/selectors/preference.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Oz: () => o,
//         R9: () => i,
//         e: () => p,
//         mm: () => c,
//         o3: () => d,
//         pE: () => l,
//         qg: () => m,
//         rE: () => _,
//         zK: () => u,
//         zg: () => h,
//       });
//       var n = t('./node_modules/reselect/lib/index.js'),
//         a = t('./app/j/study-modes/data/gradings/selectors.ts'),
//         r = t('./app/j/study-modes/data/settings/selectors/index.ts'),
//         o = (0, n.createSelector)([r.G], (e) => e.preference),
//         i = (0, n.createSelector)(o, (e) => e.acceptsPartialAnswer),
//         d = (0, n.createSelector)(o, (e) => e.advancedAudioSettings),
//         l = (0, n.createSelector)(o, (e) => {
//           var {answerWith: s} = e;
//           if (!s)
//             throw new Error(
//               'You must setup settings with recommended answerWith setting'
//             );
//           return e.answerWith;
//         }),
//         u =
//           ((0, n.createSelector)(i, (e) => null !== e),
//           (0, n.createSelector)(o, (e) => e.isAudioOn)),
//         c = (0, n.createSelector)(o, (e) => e.cardsShuffleSeed),
//         p =
//           ((0, n.createSelector)(o, (e) => e.guidanceDisabled),
//           (0, n.createSelector)(
//             [o, a.lc],
//             (e, s) => (e.smartGrading && s) || e.typoHelpGradingSetting
//           ),
//           (0, n.createSelector)(o, (e) => e.locationQuestionTypes),
//           (0, n.createSelector)(o, (e) => {
//             var {promptWith: s} = e;
//             if (!s)
//               throw new Error(
//                 'You must setup settings with recommended promptWith setting'
//               );
//             return e.promptWith;
//           })),
//         m =
//           ((0, n.createSelector)(o, (e) => {
//             var {questionTypes: s} = e;
//             if (!s)
//               throw new Error(
//                 'You must setup settings with recommended questionTypes setting'
//               );
//             return e.questionTypes;
//           }),
//           (0, n.createSelector)([o, a.lc], (e, s) => e.smartGrading && s)),
//         _ = (0, n.createSelector)(o, (e) => e.sortingOn),
//         h = (0, n.createSelector)(o, (e) => e.studyStarredOnly),
//         g =
//           ((0, n.createSelector)(o, (e) => e.studyPath),
//           (0, n.createSelector)(o, (e) => e.studyPathGoal),
//           (0, n.createSelector)(o, (e) => e.studyPathKnowledgeLevel),
//           (0, n.createSelector)(o, (e) => e.typoHelpGradingSetting));
//       (0, n.createSelector)(o, (e) => {
//         var {writtenTypes: s} = e;
//         if (!s)
//           throw new Error(
//             'You must setup settings with recommended writtenTypes setting'
//           );
//         return e.writtenTypes;
//       }),
//         (0, n.createSelector)([i, g, m], (e, s, t) => ({
//           acceptsPartialAnswer: null != e && e,
//           acceptsAnswersWithTypos: s,
//           acceptsSmartGrading: null != t && t,
//         }));
//     },
//     './app/j/study-modes/data/settings/types.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Q: () => r,
//       });
//       var n = t('./app/j/config/study-setting-metadata.ts'),
//         {bitValues: a} = n.ZP.ASSISTANT_MODE_QUESTION_TYPES;
//       function r() {
//         return a;
//       }
//     },
//     './app/j/study-modes/data/studiable-data/selectors.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Uv: () => C,
//         hy: () => L,
//         UR: () => D,
//         aW: () => R,
//         KH: () => N,
//         XQ: () => T,
//         kx: () => Z,
//         bs: () => F,
//         VZ: () => S,
//         ke: () => g,
//         Jh: () => f,
//         kI: () => U,
//         Cv: () => y,
//         uf: () => E,
//         ZM: () => b,
//         Sd: () => x,
//         r9: () => k,
//         TQ: () => _,
//         h1: () => j,
//         f3: () => A,
//         lb: () => z,
//       });
//       var n = t('./node_modules/lodash/keyBy.js'),
//         a = t.n(n),
//         r =
//           (t('./node_modules/core-js/modules/es.array.iterator.js'),
//           t('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
//           t(
//             './node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js'
//           )),
//         o = t('./app/j/config/enums.ts'),
//         i = t('./app/j/core/default_store/DefaultStore.ts'),
//         d = t('./app/j/global/Rollbar.ts'),
//         l = t('./app/j/progress_dashboard/calculateProgress.ts'),
//         u = t('./app/j/studiable-data/utils.ts'),
//         c = t('./app/j/study-modes/data/constants.ts'),
//         p = t('./app/j/study-modes/data/settings/selectors/preference.ts');
//       function m(e, s) {
//         for (var t of (0, u.c4)(e.filter(u.F_), s)) {
//           var n = (0, u.xy)(t);
//           if (n) return n.languageCode;
//         }
//         return null;
//       }
//       var _ = (0, r.createSelector)((0, i.iu)(c._$), (e) => e.studiableData),
//         h = (0, r.createSelector)(_, (e) => e.studiableItems),
//         g =
//           ((0, r.createSelector)(_, (e) => e.studiableItems.map((e) => e.id)),
//           (0, r.createSelector)(h, (e) => e.length)),
//         j = (0, r.createSelector)(h, (e) => a()(e, (e) => e.id)),
//         y = (0, r.createSelector)(_, (e) => new Set(e.starredStudiableItemIds)),
//         S = (0, r.createSelector)(y, (e) => e.size),
//         f = (0, r.createSelector)(_, (e) => e.selectedTerms),
//         v = (0, r.createSelector)(_, (e) => e.studiableContainer),
//         E = (0, r.createSelector)(v, (e) => e.id),
//         x = (0, r.createSelector)(_, (e) => e.studiableContainerType),
//         b = (0, r.createSelector)(v, (e) => ('title' in e ? e.title : e.name)),
//         A = (0, r.createSelector)(v, (e) => e._webUrl),
//         T = (0, r.createSelector)(_, (e) => {
//           var s;
//           return (
//             Object.keys(null != (s = e.setIdToDiagramImage) ? s : {}).length > 0
//           );
//         }),
//         C = (0, r.createSelector)(_, (e) => e.accents),
//         I = (0, r.createSelector)(_, (e) => e.studySummaries),
//         w = (0, r.createSelector)(_, (e) => e.progressBucketName),
//         O = (0, r.createSelector)(_, (e) => e.crossModeResetTimestamp),
//         N = (0, r.createSelector)(
//           _,
//           (e) => new Set(e.editableStudiableItemIds)
//         ),
//         k = (0, r.createSelector)([_, p.zg, y, I, w, O], (e, s, t, n, a, r) => {
//           var {
//               studiableItems: o,
//               studiableContainer: i,
//               studiableMetadataByType: u,
//               setIdToDiagramImage: c,
//               exampleSentenceByStudiableItemId: p,
//             } = e,
//             m = new Set();
//           if (!s && void 0 !== n) {
//             var _ = o.map((e) => e.id),
//               h = [
//                 Object.assign({}, i, {
//                   termIds: _,
//                   crossModeResetTimestamp: r,
//                 }),
//               ],
//               g = (0, l.Z)(h, n || []),
//               j = g[i.id];
//             null == j &&
//               d.Z.error(
//                 'Progress buckets for studiable container: ' +
//                   i.id +
//                   ' does not exist, got progress buckets by set id: ' +
//                   g
//               );
//             var y = j[a];
//             m = new Set(y.map(Number));
//           }
//           var S = s ? t : m;
//           return 0 === S.size
//             ? {
//                 studiableItems: o,
//                 setIdToDiagramImage: c,
//                 exampleSentenceByStudiableItemId: p,
//                 studiableMetadataByType: u,
//               }
//             : (function (e, s) {
//                 var {studiableItems: t} = e,
//                   n = t.filter((e) => s.has(e.id));
//                 return Object.assign({}, e, {
//                   studiableItems: n,
//                 });
//               })(
//                 {
//                   studiableItems: o,
//                   setIdToDiagramImage: c,
//                   exampleSentenceByStudiableItemId: p,
//                   studiableMetadataByType: u,
//                 },
//                 S
//               );
//         }),
//         L = (0, r.createSelector)(_, (e) => {
//           var s = e.studiableItems.filter(u.F_);
//           for (var t of (0, u.c4)(s, o.dU_.DEFINITION)) {
//             if (
//               !t.media.some((e) => {
//                 if (e.type !== o.DDH.TEXT) return false;
//                 var s = e,
//                   t = '' === s.plainText && !s.richText;
//                 return s.languageCode !== o.spR.PHOTOS && !t;
//               })
//             )
//               return false;
//           }
//           return true;
//         }),
//         P = (0, r.createSelector)(
//           _,
//           (e) =>
//             false ===
//             (0, u.c4)(e.studiableItems.filter(u.F_), o.dU_.WORD).next().done
//         ),
//         M = (0, r.createSelector)(
//           _,
//           (e) =>
//             false ===
//             (0, u.c4)(e.studiableItems.filter(u.F_), o.dU_.DEFINITION).next()
//               .done
//         ),
//         R = (0, r.createSelector)(_, (e) =>
//           m(e.studiableItems, o.dU_.DEFINITION)
//         ),
//         D = (0, r.createSelector)(P, M, T, (e, s, t) => ({
//           definition: s,
//           location: t,
//           term: e,
//         })),
//         Z = (0, r.createSelector)(k, (e) => {
//           var s;
//           return (
//             (null == e ? void 0 : e.studiableMetadataByType) &&
//             !(
//               null ==
//                 (s =
//                   e.studiableMetadataByType[
//                     o._KG.FILL_IN_THE_BLANK_KEYPHRASES
//                   ]) || !s.length
//             )
//           );
//         }),
//         F = (0, r.createSelector)(k, (e) =>
//           e.studiableItems.some((e) => !!(0, u.F_)(e) && e.cardSides.some(u.p))
//         ),
//         z = (0, r.createSelector)(_, (e) => m(e.studiableItems, o.dU_.WORD)),
//         U = (0, r.createSelector)(y, (e) => e.size > 0);
//       (0, r.createSelector)(_, (e) =>
//         e.diagramImages ? e.diagramImages[0] : null
//       ),
//         (0, r.createSelector)(h, (e) =>
//           e.some((e) => e.type === o.zqd.MULTIPLE_CHOICE_QUESTION)
//         ),
//         (0, r.createSelector)(_, (e) => e.exampleSentenceByStudiableItemId);
//     },
//     './app/j/study-modes/data/studiable-data/thunks.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Dk: () => g,
//         OC: () => j,
//         lr: () => h,
//       });
//       var n = t(
//           './node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
//         ),
//         a =
//           (t('./node_modules/core-js/modules/es.array.iterator.js'),
//           t('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
//           t(
//             './node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js'
//           )),
//         r = t('./app/j/config/enums.ts'),
//         o = t('./app/j/global/Rollbar.ts'),
//         i = t('./node_modules/nullthrows/nullthrows.js'),
//         d = t.n(i),
//         l = t('./app/j/studiable-data/utils.ts'),
//         u = t('./app/j/study-modes/data/constants.ts'),
//         c = t('./app/j/study-modes/data/studiable-data/selectors.ts'),
//         p = t(
//           './app/j/study-modes/legacy-common/utils/studiablesToTermUtils.ts'
//         ),
//         m = t('./app/j/syncers/SelectedTermSyncer.ts'),
//         _ = t('./app/j/syncers/TermSyncer.ts'),
//         h = (0, a.createAsyncThunk)(
//           u.rl + '/unstarStudiableItem',
//           (function () {
//             var e = (0, n.Z)(function* (e, s) {
//               var {getState: t} = s,
//                 n = t(),
//                 a = (0, c.Jh)(n),
//                 r = (0, p.K)(e);
//               try {
//                 var i = a[r],
//                   d = m.Z.add(i);
//                 yield m.Z.del(d);
//               } catch (l) {
//                 throw (o.Z.warn('Failed API request on selected-terms.', l), l);
//               }
//             });
//             return function (s, t) {
//               return e.apply(this, arguments);
//             };
//           })()
//         ),
//         g = (0, a.createAsyncThunk)(
//           u.rl + '/starStudiableItem',
//           (function () {
//             var e = (0, n.Z)(function* (e, s) {
//               var {itemId: t, source: n} = e,
//                 {getState: a} = s,
//                 i = a(),
//                 d = (0, c.uf)(i);
//               if ((0, c.Sd)(i) !== r.MG.SET) {
//                 var l = (0, c.h1)(i)[t];
//                 if (l.studiableContainerType !== r.MG.SET)
//                   throw new Error(
//                     'Unsupported studiable item with a studiable container != SET.'
//                   );
//                 d = l.studiableContainerId;
//               }
//               try {
//                 var u = (0, p.K)(t),
//                   [_, h] = yield m.Z.addAndSave({
//                     termId: u,
//                     setId: d,
//                     source: n,
//                   });
//                 return h.properties;
//               } catch (g) {
//                 o.Z.warn('Failed API request on selected-terms.', g);
//               }
//             });
//             return function (s, t) {
//               return e.apply(this, arguments);
//             };
//           })()
//         ),
//         j = (0, a.createAsyncThunk)(
//           u.rl + '/updateStudiableItemTextValues',
//           (function () {
//             var e = (0, n.Z)(function* (e) {
//               var s = (0, p.K)(e.id),
//                 t = (0, l.KN)(e, r.dU_.WORD),
//                 n = (0, l.KN)(e, r.dU_.DEFINITION);
//               if (!t || !n)
//                 throw new Error(
//                   'Studiable Item must have valid word and definition card sides to be edited.'
//                 );
//               var {plainText: a, richText: o} = d()((0, l.xy)(t)),
//                 {plainText: i, richText: u} = d()((0, l.xy)(n));
//               try {
//                 _.Z.setShouldSyncDelay(false);
//                 var c = {
//                     id: s,
//                     word: a,
//                     wordRichText: o,
//                     definition: i,
//                     definitionRichText: u,
//                   },
//                   m =
//                     e.studiableContainerType === r.MG.SET
//                       ? e.studiableContainerId
//                       : void 0,
//                   [h, g] = yield _.Z.addAndSave(
//                     Object.assign({}, c, {
//                       setId: m,
//                     })
//                   );
//                 if (g.isValid()) return e;
//               } catch (y) {
//                 var [j] = y;
//                 throw j.message;
//               }
//             });
//             return function (s) {
//               return e.apply(this, arguments);
//             };
//           })()
//         );
//     },
//     './app/j/study-modes/learn/selectors/base.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         r: () => n,
//       });
//       var n = (e) => e.get('learnMode');
//     },
//     './app/j/study-modes/learn/selectors/view.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         KL: () => u,
//         O8: () => l,
//         R5: () => d,
//       });
//       var n = t('./node_modules/reselect/lib/index.js'),
//         a = t('./app/j/study-modes/learn/selectors/base.ts'),
//         r = t('./app/j/study-modes/learn/types.ts'),
//         o = t('./app/j/study-modes/spell/types.ts'),
//         i = t('./app/j/study-modes/write/types.ts'),
//         d = (0, n.createSelector)(a.r, (e) => (null == e ? void 0 : e.view)),
//         l = (0, n.createSelector)([d], (e) => {
//           var {TASK_ROUND_CHECKPOINT: s, TASK_COMPLETION_CHECKPOINT: t} = r.py;
//           return [s, t].includes(e);
//         }),
//         u = (0, n.createSelector)(
//           (e) => e,
//           (e) => {
//             var s, t, n;
//             return (
//               (null == (s = e.get('learnMode')) ? void 0 : s.view) ===
//                 r.py.AD_MODAL ||
//               (null == (t = e.get('write')) ? void 0 : t.currentView) ===
//                 i.i9.AD_MODAL ||
//               (null == (n = e.get('spellMode')) ? void 0 : n.currentView) ===
//                 o.f.AD_MODAL
//             );
//           }
//         );
//     },
//     './app/j/study-modes/learn/tasks/constants.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Fp: () => d,
//         I1: () => a,
//         N_: () => i,
//         ik: () => l,
//       });
//       var n,
//         a,
//         r = t('./app/j/assembly/foundations/Spacing.ts'),
//         o = t('./node_modules/polished/dist/polished.cjs.js');
//       !(function (e) {
//         (e.FEEDBACK = 'feedbackLink'),
//           (e.ASSEMBLY_SECONDARY = 'assemblySecondary');
//       })(n || (n = {})),
//         (function (e) {
//           (e.TASKS_BACK_TO_SET_PAGE_CLICK = 'TASKS_BACK_TO_SET_PAGE_CLICK'),
//             (e.TASKS_SEQUENCE_COMPLETION_CHECKPOINT_SCREEN_LOAD =
//               'tasks_sequence_completion_checkpoint_screen_load'),
//             (e.TASKS_ESCAPE_HATCH_LINK_CLICK = 'tasks_escape_hatch_link_click'),
//             (e.TASKS_HEADER_SET_NAME_CLICKED = 'tasks_header_set_name_clicked'),
//             (e.TASKS_ONBOARDING_MODAL_CANCEL = 'tasks_onboarding_modal_cancel'),
//             (e.TASKS_ONBOARDING_MODAL_CLOSE = 'tasks_onboarding_modal_close'),
//             (e.TASKS_ONBOARDING_MODAL_LOAD = 'tasks_onboarding_modal_load'),
//             (e.TASKS_RESTART_LEARN_TASK_SEQUENCE =
//               'tasks_restart_learn_task_sequence'),
//             (e.TASKS_ROUND_CHECKPOINT_AUDIO_CLICKED =
//               'tasks_round_checkpoint_audio_clicked'),
//             (e.TASKS_ROUND_CHECKPOINT_SCREEN_LOAD =
//               'tasks_round_checkpoint_screen_load'),
//             (e.TASKS_ROUND_CHECKPOINT_STAR_CLICKED =
//               'tasks_round_checkpoint_star_clicked'),
//             (e.TASKS_ROUND_CHECKPOINT_STUDIED_TERMS =
//               'tasks_round_checkpoint_studied_terms'),
//             (e.TASKS_SKIP_PERSONALIZATION_CANCEL_CLICK =
//               'tasks_skip_personalization_cancel_click'),
//             (e.TASKS_SKIP_PERSONALIZATION_CONFIRM_CLICK =
//               'tasks_skip_personalization_confirm_click'),
//             (e.TASKS_ROUND_PAYWALL_REMAINING_TERMS =
//               'tasks_round_paywall_remaining_terms');
//         })(a || (a = {}));
//       (0, o.hO)(646);
//       var i = 'https://www.surveymonkey.com/r/WQVLF9Z',
//         d = 'https://www.surveymonkey.com/r/WJPDJQ8',
//         l = ((0, o.hO)(468), (0, o.hO)(940), r.Ki.Xlarge);
//     },
//     './app/j/study-modes/learn/types.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         FE: () => d,
//         MF: () => l,
//         Qr: () => u,
//         py: () => n,
//         qk: () => r,
//       });
//       var n,
//         a,
//         r,
//         o,
//         i = t('./app/j/study-engine/types.ts');
//       !(function (e) {
//         (e[(e.AD_MODAL = 0)] = 'AD_MODAL'),
//           (e[(e.LOADING = 1)] = 'LOADING'),
//           (e[(e.VIDEO_AD = 2)] = 'VIDEO_AD'),
//           (e[(e.QUESTION = 3)] = 'QUESTION'),
//           (e[(e.TASK_ROUND_CHECKPOINT = 4)] = 'TASK_ROUND_CHECKPOINT'),
//           (e[(e.TASK_COMPLETION_CHECKPOINT = 5)] =
//             'TASK_COMPLETION_CHECKPOINT'),
//           (e[(e.TASK_SEQUENCE_COMPLETION_CHECKPOINT = 6)] =
//             'TASK_SEQUENCE_COMPLETION_CHECKPOINT'),
//           (e[(e.PAYWALL = 7)] = 'PAYWALL');
//       })(n || (n = {})),
//         (function (e) {
//           (e.UNFAMILIAR = 'unfamiliar'),
//             (e.FAMILIAR = 'familiar'),
//             (e.KNOWN_WELL = 'knownWell');
//         })(a || (a = {})),
//         (function (e) {
//           (e[(e.FILL_IN_THE_BLANK_QUESTION = i.mw.FILL_IN_THE_BLANK_QUESTION)] =
//             'FILL_IN_THE_BLANK_QUESTION'),
//             (e[(e.MULTIPLE_CHOICE_QUESTION = i.mw.MULTIPLE_CHOICE_QUESTION)] =
//               'MULTIPLE_CHOICE_QUESTION'),
//             (e[
//               (e.REVEAL_SELF_ASSESSMENT_QUESTION =
//                 i.mw.REVEAL_SELF_ASSESSMENT_QUESTION)
//             ] = 'REVEAL_SELF_ASSESSMENT_QUESTION'),
//             (e[(e.WRITTEN_QUESTION = i.mw.WRITTEN_QUESTION)] =
//               'WRITTEN_QUESTION');
//         })(r || (r = {})),
//         (function (e) {
//           (e.PROMPT = 'promptSide'), (e.ANSWER = 'answerSide');
//         })(o || (o = {}));
//       var d,
//         l,
//         u = 800;
//       !(function (e) {
//         (e.AVAILABLE = 'question_hint_available'),
//           (e.BTN_CLICKED = 'question_hint_btn_clicked'),
//           (e.ADVANCED_QUESTION = 'question_hint_advanced_question');
//       })(d || (d = {})),
//         (function (e) {
//           (e.HIDE_FLASHCARD_SHORTCUTS = 'LEARN_MODE.HIDE_FLASHCARD_SHORTCUTS'),
//             (e.INCREMENT_CHECKPOINT_COUNTER = 'INCREMENT_CHECKPOINT_COUNTER'),
//             (e.SET_SEEN_CONFIDENCE_CHECK_IN_SETS =
//               'SET_SEEN_CONFIDENCE_CHECK_IN_SETS'),
//             (e.SET_SEEN_CONFIDENCE_CHECK_IN_MODAL_SETS =
//               'SET_SEEN_CONFIDENCE_CHECK_IN_MODAL_SETS'),
//             (e.SET_LEARN_VIEW = 'LEARN_MODE.SET_LEARN_VIEW'),
//             (e.SET_IS_SETTINGS_MERGED = 'LEARN_MODE.IS_SETTINGS_MERGED'),
//             (e.SET_IS_ADVANCING = 'LEARN_MODE.IS_ADVANCING'),
//             (e.SET_SHOULD_SEE_SPELL_WRITE_COACHMARK =
//               'SET_SHOULD_SEE_SPELL_WRITE_COACHMARK'),
//             (e.UPDATE_STUDY_MODE_AD_TIMESTAMP =
//               'UPDATE_STUDY_MODE_AD_TIMESTAMP.IS_SKIPPING_FEEDBACK'),
//             (e.UPDATE_SHOULD_SHOW_ALTERNATIVE_QUESTION_COACHMARK =
//               'UPDATE_SHOULD_SHOW_ALTERNATIVE_QUESTION_COACHMARK'),
//             (e.SET_INCORRECTLY_ANSWERED_STUDIABLE_ITEMS =
//               'SET_INCORRECTLY_ANSWERED_STUDIABLE_ITEMS'),
//             (e.SET_SEEN_INTERVENTION_POINTS = 'SET_SEEN_INTERVENTION_POINTS');
//         })(l || (l = {}));
//     },
//     './app/j/study-modes/legacy-common/components/ProgressBar.tsx': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       var n = t('./node_modules/@linaria/react/lib/index.js'),
//         a = t('./app/j/assembly/foundations/Color.ts'),
//         r = t('./app/j/assembly/foundations/Spacing.ts'),
//         o = t('./node_modules/react/index.js'),
//         i = t('./app/j/utils/bound-range.ts'),
//         d = t('./app/j/utils/NumberFormatters.ts'),
//         l = t('./node_modules/react/jsx-runtime.js'),
//         u = (0, n.z)('div')({
//           name: 'Container',
//           class: 'cgyrcnx',
//           vars: {
//             'cgyrcnx-1': [
//               (e) => {
//                 var {backgroundColor: s} = e;
//                 return null != s ? s : 'none';
//               },
//             ],
//             'cgyrcnx-2': [
//               (e) => {
//                 var {round: s} = e;
//                 return s ? r.wU.Small : 0;
//               },
//             ],
//           },
//         }),
//         c = (0, n.z)('div')({
//           name: 'Bar',
//           class: 'byhd60',
//           vars: {
//             'byhd60-0': [
//               (e) => {
//                 var {foregroundColor: s} = e;
//                 return null != s ? s : a.TE.$300;
//               },
//             ],
//             'byhd60-1': [
//               (e) => {
//                 var {progress: s} = e;
//                 return s + '%';
//               },
//             ],
//             'byhd60-2': [
//               (e) => {
//                 var {round: s} = e;
//                 return s ? r.wU.Small : 0;
//               },
//             ],
//           },
//         });
//       function p(e) {
//         var {
//             backgroundColor: s,
//             foregroundColor: t,
//             round: n = false,
//             max: a,
//             value: r,
//           } = e,
//           o = Math.round((0, d.nr)(r, a)),
//           p = (0, i.Z)(o, 0, 100);
//         return (0, l.jsx)(u, {
//           backgroundColor: s,
//           round: n,
//           children: (0, l.jsx)(c, {
//             'data-progress': p,
//             'data-testid': 'ProgressBar-progress',
//             foregroundColor: t,
//             progress: p,
//             round: n,
//           }),
//         });
//       }
//       (s.Z = o.memo(p)),
//         t(
//           './.linaria-cache/app/j/study-modes/legacy-common/components/ProgressBar.linaria.css'
//         );
//     },
//     './app/j/study-modes/legacy-common/components/StudyCardLayout.tsx': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         Z: () => o,
//       });
//       var n = t('./node_modules/@linaria/react/lib/index.js'),
//         a = t('./app/j/assembly/foundations/Spacing.ts'),
//         r = (0, t('./node_modules/polished/dist/polished.cjs.js').hO)(80),
//         o = (0, n.z)('article')({
//           name: 'StudyCardLayout0',
//           class: 'svwhkoh',
//           vars: {
//             'svwhkoh-3': [(e) => (e.bottomBarShown ? r : 0)],
//             'svwhkoh-13': [(e) => (e.isMobileCard ? a.wU.Medium : 'initial')],
//           },
//         });
//       t(
//         './.linaria-cache/app/j/study-modes/legacy-common/components/StudyCardLayout.linaria.css'
//       );
//     },
//     './app/j/study-modes/legacy-common/engine/utils/question-element-utils.ts':
//       (e, s, t) => {
//         'use strict';
//         t.d(s, {
//           Im: () => u,
//           Sg: () => _,
//           Ux: () => c,
//           Wv: () => l,
//           dC: () => i,
//           gS: () => m,
//           j6: () => d,
//           rr: () => p,
//         });
//         t('./node_modules/core-js/modules/es.array.reduce.js');
//         var n = t('./node_modules/memoize-one/dist/memoize-one.cjs.js'),
//           a = t.n(n),
//           r = t('./app/j/study-engine/types.ts');
//         function o(e, s) {
//           return e.find((e) => e.type === s);
//         }
//         function i(e) {
//           var s;
//           return null == (s = o(e.attributes, r.LK.TEXT_ATTRIBUTE))
//             ? void 0
//             : s.plainText;
//         }
//         function d(e) {
//           var s;
//           return null == (s = o(e.attributes, r.LK.TEXT_ATTRIBUTE))
//             ? void 0
//             : s.richText;
//         }
//         function l(e) {
//           var s;
//           return null == (s = o(e.attributes, r.LK.TEXT_ATTRIBUTE))
//             ? void 0
//             : s.languageCode;
//         }
//         function u(e) {
//           var s;
//           return null == (s = o(e.attributes, r.LK.IMAGE_ATTRIBUTE))
//             ? void 0
//             : s.url;
//         }
//         function c(e, s) {
//           var t, n, a;
//           return (
//             (null !=
//             (t =
//               null == (n = o(e.attributes, r.LK.TEXT_ATTRIBUTE)) ||
//               null == (a = n.plainText)
//                 ? void 0
//                 : a.length)
//               ? t
//               : 0) > s
//           );
//         }
//         function p(e) {
//           return (
//             ((s = e.attributes),
//             (t = r.LK.TEXT_ATTRIBUTE),
//             s.filter((e) => e.type === t)).length > 0
//           );
//           var s, t;
//         }
//         function m(e) {
//           var s;
//           return null == (s = o(e.attributes, r.LK.LOCATION_ATTRIBUTE))
//             ? void 0
//             : s.shape;
//         }
//         var _ = a()((e) =>
//           e.attributes.reduce((e, s) => {
//             switch (s.type) {
//               case r.LK.AUDIO_ATTRIBUTE:
//                 e.audio = s;
//                 break;
//               case r.LK.IMAGE_ATTRIBUTE:
//                 e.image = s;
//                 break;
//               case r.LK.LOCATION_ATTRIBUTE:
//                 e.location = s;
//                 break;
//               case r.LK.TEXT_ATTRIBUTE:
//                 e.text = s;
//                 break;
//               default:
//                 !(function (e) {
//                   throw new Error('Unsupported Media Attribute: ' + e + '.');
//                 })(s);
//             }
//             return e;
//           }, {})
//         );
//       },
//     './app/j/study-modes/legacy-common/grading/utils/isAnswerGradedAsCorrectWithLevenshteinPlus.ts':
//       (e, s, t) => {
//         'use strict';
//         t.d(s, {
//           q: () => n,
//         });
//         var n = (e) =>
//           false === (null == e ? void 0 : e.acceptsAnswersWithTypos);
//       },
//     './app/j/study-modes/legacy-common/hooks/useShouldSeeSignupWall.ts': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         Z: () => r,
//       });
//       var n = t('./app/j/context/UserContext.ts'),
//         a = t('./node_modules/react/index.js');
//       function r(e, s, t) {
//         return (
//           void 0 === t && (t = false),
//           !(0, a.useContext)(n.Z) && !t && void 0 !== e && !s
//         );
//       }
//     },
//     './app/j/study-modes/legacy-common/styles/ZIndex.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         gX: () => a,
//         pf: () => r,
//       });
//       var n = t('./app/j/assembly/foundations/ZIndex.ts'),
//         a = (n.Z.One, n.Z.Zero),
//         r = n.Z.One;
//       n.Z.Two, n.Z.Three, n.Z.Four;
//     },
//     './app/j/study-modes/legacy-common/types.ts': (e, s, t) => {
//       'use strict';
//       var n;
//       t.d(s, {
//         _: () => n,
//       }),
//         (function (e) {
//           (e.FRONT = 'front'), (e.BACK = 'back');
//         })(n || (n = {}));
//     },
//     './app/j/study-modes/legacy-common/utils/label-utils.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         O$: () => o,
//         hC: () => a,
//         yW: () => r,
//       });
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//       var n = t('./app/j/config/enums.ts');
//       function a(e, s) {
//         switch (s) {
//           case n.dU_.WORD:
//             return e('assistant.label.term');
//           case n.dU_.DEFINITION:
//             return e('assistant.label.definition');
//           default:
//             return e('assistant.label.term');
//         }
//       }
//       function r(e, s) {
//         switch (s) {
//           case n.dU_.WORD:
//             return e('assistant.label.term');
//           case n.dU_.DEFINITION:
//             return e('assistant.label.definition');
//           case n.dU_.LOCATION:
//             return e('assistant.label.location');
//           default:
//             return e('assistant.label.term');
//         }
//       }
//       function o(e, s) {
//         var t = [s];
//         for (var a of (0 !== s && t.push(0), t)) {
//           switch (e - 3 * a) {
//             case 0:
//               return n.dU_.WORD;
//             case 1:
//               return n.dU_.DEFINITION;
//             case 2:
//               return n.dU_.LOCATION;
//           }
//         }
//         return null;
//       }
//     },
//     './app/j/study-modes/redesigned_cards/animations/CardAnimation.tsx': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         Z: () => p,
//       });
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//       var n = t('./node_modules/@linaria/react/lib/index.js'),
//         usePrevious = t('./app/j/hooks/usePrevious.tsx'),
//         r = t('./node_modules/react/index.js'),
//         o = t(
//           './app/j/study-modes/redesigned_cards/ui/shared/QuestionGrid.tsx'
//         ),
//         i = t('./node_modules/react/jsx-runtime.js'),
//         d = (0, n.z)(o.w)({
//           name: 'AnimationWrapper',
//           class: 'aae3pqg',
//         }),
//         l = (0, n.z)(o.w)({
//           name: 'AnimationChild',
//           class: 'a1dqhhu1',
//         }),
//         u = (0, n.z)(l)({
//           name: 'Current',
//           class: 'cs85a86',
//         }),
//         c = (0, n.z)(l)({
//           name: 'Previous',
//           class: 'pqt0asd',
//         });
//       function p(props) {
//         var animationExit,
//           animationEnter,
//           {children: children, controller: controller} = props,
//           previousChildren = (0, usePrevious.Z)(children),
//           [p, m] = (0, r.useState)(),
//           _ = null == (animationExit = controller.animations) ? void 0 : animationExit.exit,
//           h = p ? (null == (animationEnter = controller.animations) ? void 0 : animationEnter.enter) : null,
//           g = () => {
//             m(void 0), controller.onAnimationEnd();
//           };
//         return (
//           (0, r.useEffect)(() => {
//             previousChildren && m(previousChildren);
//           }, [children.key]),
//           (0, i.jsxs)(d, {
//             children: [
//               p && _
//                 ? (0, i.jsx)(c, {
//                     children: (0, i.jsx)(_, {
//                       onAnimationEnd: g,
//                       children: p,
//                     }),
//                   })
//                 : null,
//               (0, i.jsx)(
//                 u,
//                 {
//                   children: h
//                     ? (0, i.jsx)(h, {
//                         onAnimationEnd: g,
//                         children: children,
//                       })
//                     : children,
//                 },
//                 children.key
//               ),
//             ],
//           })
//         );
//       }
//       t(
//         './.linaria-cache/app/j/study-modes/redesigned_cards/animations/CardAnimation.linaria.css'
//       );
//     },
//     './app/j/study-modes/redesigned_cards/animations/useCardAnimation.ts': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         O: () => h,
//       });
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//       var n = t('./node_modules/react/index.js'),
//         a = t('./node_modules/@linaria/react/lib/index.js'),
//         r = t('./node_modules/react/jsx-runtime.js'),
//         o = (0, a.z)('div')({
//           name: 'Animation',
//           class: 'a131s139',
//           vars: {
//             'a131s139-0': [(e) => e.rotation],
//             'a131s139-1': [(e) => e.distance],
//           },
//         });
//       t(
//         './.linaria-cache/app/j/study-modes/redesigned_cards/animations/SlideIn.linaria.css'
//       );
//       var i = t('./node_modules/polished/dist/polished.cjs.js'),
//         d = (0, i.hO)(125),
//         l =
//           ((0, i.hO)(-125),
//           (0, a.z)('div')({
//             name: 'SlideOut',
//             class: 's191ubuw',
//             vars: {
//               's191ubuw-1': [(e) => e.distance],
//             },
//           }));
//       t(
//         './.linaria-cache/app/j/study-modes/redesigned_cards/animations/SlideOut.linaria.css'
//       );
//       var u = t('./app/j/assembly/foundations/Color.ts'),
//         c = t('./app/j/i18n/useTranslation.ts'),
//         p = t(
//           './app/j/study-modes/legacy-common/components/StudyCardLayout.tsx'
//         ),
//         m = (0, a.z)(p.Z)({
//           name: 'Zigzag',
//           class: 'z1xlk8pd',
//           vars: {
//             'z1xlk8pd-3': [(e) => e.distance],
//             'z1xlk8pd-4': [(e) => e.rotation],
//             'z1xlk8pd-5': [(e) => e.color],
//           },
//         });
//       t(
//         './.linaria-cache/app/j/study-modes/redesigned_cards/animations/Zigzag.linaria.css'
//       );
//       var _ = {
//         next: {
//           enter: (e) =>
//             (0, r.jsx)(o, {
//               distance: '16%',
//               onAnimationEnd: e.onAnimationEnd,
//               rotation: '-16deg',
//               children: e.children,
//             }),
//         },
//         previous: {
//           enter: (e) =>
//             (0, r.jsx)(o, {
//               distance: '-16%',
//               onAnimationEnd: e.onAnimationEnd,
//               rotation: '16deg',
//               children: e.children,
//             }),
//         },
//         know: {
//           exit: (e) => {
//             var {t: s} = (0, c.Z)();
//             return (0, r.jsx)(m, {
//               color: u.y1.$300,
//               distance: (0, i.hO)(125),
//               onAnimationEnd: e.onAnimationEnd,
//               rotation: '-2deg',
//               children: s('modes.cards.header.know_label'),
//             });
//           },
//         },
//         dontKnow: {
//           exit: (e) => {
//             var {t: s} = (0, c.Z)();
//             return (0, r.jsx)(m, {
//               color: u.YP.$300,
//               distance: (0, i.hO)(-125),
//               onAnimationEnd: e.onAnimationEnd,
//               rotation: '2deg',
//               children: s('modes.cards.header.still_learning_label'),
//             });
//           },
//         },
//         undo: {
//           exit: (e) =>
//             (0, r.jsx)(
//               l,
//               Object.assign({}, e, {
//                 distance: d,
//               })
//             ),
//         },
//       };
//       function h() {
//         var [e, s] = (0, n.useState)();
//         return {
//           animations: e,
//           animate: (e) => {
//             s(() => _[e]);
//           },
//           onAnimationEnd: () => s(void 0),
//         };
//       }
//     },
//     './app/j/study-modes/redesigned_cards/components/BaseCardViewWrapper.tsx': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       var n = t('./node_modules/@linaria/core/lib/index.js'),
//         a = t('./node_modules/@linaria/react/lib/index.js'),
//         r = t('./app/j/ads/components/hooks/useShouldSeeSidebarAds.ts'),
//         o = t('./app/j/core/default_store/DefaultStoreProvider.tsx'),
//         i = t('./node_modules/react/index.js'),
//         d = t('./app/j/study-modes/data/settings/selectors/ad.ts'),
//         l = t('./app/j/study-modes/redesigned_cards/constants.ts'),
//         u = t('./app/j/study-modes/redesigned_cards/data/ui/selector.ts'),
//         c = t('./node_modules/react/jsx-runtime.js'),
//         p = (0, a.z)('div')({
//           name: 'Outer',
//           class: 'oteer4c',
//           vars: {
//             'oteer4c-1': [(e) => (e.hasAds ? 'flex-end' : 'center')],
//           },
//         }),
//         m = (0, a.z)('div')({
//           name: 'Inner',
//           class: 'i1v8iq9n',
//         });
//       function _(e, s) {
//         var {children: t, className: a, style: i} = e,
//           _ = (0, r.Z)()((0, o.v9)(d.SV).sidebarAdsId),
//           h = (0, o.v9)(u.bq) === l.ou.SET_PAGE;
//         return (0, c.jsx)(p, {
//           hasAds: _,
//           children: (0, c.jsx)(m, {
//             className: (0, n.cx)(
//               a,
//               !h && _ && 'acw2lh9',
//               !h && !_ && 'n1ldcbd1'
//             ),
//             ref: s,
//             style: i,
//             children: t,
//           }),
//         });
//       }
//       (s.Z = i.forwardRef(_)),
//         t(
//           './.linaria-cache/app/j/study-modes/redesigned_cards/components/BaseCardViewWrapper.linaria.css'
//         );
//     },
//     './app/j/study-modes/redesigned_cards/components/CardsInteractionAlertMessage.tsx':
//       (e, s, t) => {
//         'use strict';
//         t.d(s, {
//           Z: () => i,
//         });
//         var n = t('./node_modules/@linaria/react/lib/index.js'),
//           a = t('./app/j/i18n/useTranslation.ts'),
//           r =
//             (t('./node_modules/react/index.js'),
//             t('./node_modules/react/jsx-runtime.js')),
//           o = (0, n.z)('div')({
//             name: 'InteractionAlert',
//             class: 'i1o93yj',
//           });
//         function i(e) {
//           var {interaction: s, isToggledOn: t} = e,
//             {t: n} = (0, a.Z)();
//           return (0, r.jsx)(o, {
//             children: (() => {
//               switch (s) {
//                 case 'autoplay':
//                   return n(
//                     t
//                       ? 'modes.cards.alerts.autoplay_on'
//                       : 'modes.cards.alerts.autoplay_off'
//                   );
//                 case 'shuffle':
//                   return n(
//                     t
//                       ? 'modes.cards.alerts.shuffle_on'
//                       : 'modes.cards.alerts.shuffle_off'
//                   );
//                 default:
//                   throw new Error(
//                     'Unknown interaction ' +
//                       s +
//                       ' in CardsInteractionAlertMessage'
//                   );
//               }
//             })(),
//           });
//         }
//         t(
//           './.linaria-cache/app/j/study-modes/redesigned_cards/components/CardsInteractionAlertMessage.linaria.css'
//         );
//       },
//     './app/j/study-modes/redesigned_cards/constants.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Cy: () => o,
//         M6: () => r,
//         X4: () => l,
//         ou: () => n,
//         wD: () => i,
//         xl: () => d,
//       });
//       var n,
//         a = t('./app/j/config/enums.ts'),
//         r = 500,
//         o = 4,
//         i = 100,
//         d = 8,
//         l = 28;
//       !(function (e) {
//         (e.MODE = 'mode'), (e.SET_PAGE = 'set_page');
//       })(n || (n = {}));
//       a.Std.ASSISTANT_MODE_QUESTION_TYPES,
//         a.Std.FLEXIBLE_GRADING_ACCEPT_PARTIAL_ANSWERS,
//         a.Std.FLEXIBLE_GRADING_ACCEPT_ANSWERS_WITH_TYPOS,
//         a.Std.SMART_GRADING,
//         a.aKJ.FLASHCARDS,
//         n.SET_PAGE;
//     },
//     './app/j/study-modes/redesigned_cards/containers/CardsFooterBaseContainer.tsx':
//       (e, s, t) => {
//         'use strict';
//         t.d(s, {
//           Z: () => de,
//         });
//         var n,
//           a = t('./app/j/core/default_store/DefaultStoreProvider.tsx'),
//           r = t('./node_modules/react-redux/lib/index.js'),
//           o = t('./node_modules/redux/lib/redux.js'),
//           i = t('./app/j/study-modes/data/logging/thunks.ts'),
//           d =
//             (t('./node_modules/core-js/modules/es.array.iterator.js'),
//             t('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
//             t('./node_modules/@linaria/core/lib/index.js')),
//           l = t('./node_modules/@linaria/react/lib/index.js'),
//           u = t('./app/j/ads/components/studyModes/AdTimeLeft.tsx'),
//           c = t('./app/j/ads/components/studyModes/ContinueButton.tsx'),
//           p = t('./app/j/ads/constants/adConstants.ts'),
//           m = t('./app/j/ads/context/StudyModeAdsContext.tsx'),
//           _ = t('./app/j/assembly/AssemblyTooltip.tsx'),
//           h = t('./app/j/assembly/buttons/index.ts'),
//           g = t('./app/j/assembly/buttons/types.ts'),
//           j = t('./app/j/compatibility/logger/useLogger.ts'),
//           y = t('./app/j/config/enums.ts'),
//           S = t('./app/j/context/UserContext.ts'),
//           f = t('./app/j/hooks/useBreakpoint.ts'),
//           v = t('./app/j/i18n/useTranslation.ts'),
//           E = t('./app/j/lazy/OptionsModalContainerLazy.ts'),
//           x = t('./node_modules/react/index.js'),
//           b = t('./app/j/study-modes/cards/components/CardsFooter.tsx'),
//           A = t(
//             './app/j/study-modes/cards/components/CardsToolbarKeyboardShortcutsList.tsx'
//           ),
//           T = t(
//             './app/j/study-modes/cards/hooks/useInteractionAlertTimeout.ts'
//           ),
//           C = t('./app/j/study-modes/redesigned_cards/constants.ts'),
//           I = t('./node_modules/reselect/lib/index.js'),
//           w = t('./app/j/study-modes/data/settings/selectors/preference.ts'),
//           O = t('./app/j/assembly/AssemblyIcon.tsx'),
//           N = t('./app/j/compatibility/userAgentHelper.ts'),
//           k = t('./app/j/components/T.tsx'),
//           L = t('./node_modules/react/jsx-runtime.js');
//         !(function (e) {
//           (e[(e.CHANGE_ANSWER_WITH = 0)] = 'CHANGE_ANSWER_WITH'),
//             (e[(e.CUSTOMIZE = 1)] = 'CUSTOMIZE'),
//             (e[(e.FLIP = 2)] = 'FLIP'),
//             (e[(e.PLAY = 3)] = 'PLAY'),
//             (e[(e.SIGN_UP = 4)] = 'SIGN_UP'),
//             (e[(e.SORT = 5)] = 'SORT'),
//             (e[(e.UNDO = 6)] = 'UNDO');
//         })(n || (n = {}));
//         var P,
//           M = {
//             0: {
//               isFlipped: n.SORT,
//               isNotFlipped: n.FLIP,
//             },
//             4: n.UNDO,
//             6: n.CUSTOMIZE,
//             8: n.CHANGE_ANSWER_WITH,
//           },
//           R = {
//             0: {
//               isFlipped: null,
//               isNotFlipped: n.FLIP,
//             },
//             4: n.CUSTOMIZE,
//             6: n.PLAY,
//             8: n.CHANGE_ANSWER_WITH,
//           },
//           D = {
//             0: {
//               isFlipped: n.SORT,
//               isNotFlipped: n.FLIP,
//             },
//             1: n.UNDO,
//             4: n.SIGN_UP,
//           },
//           Z = {
//             0: {
//               isFlipped: null,
//               isNotFlipped: n.FLIP,
//             },
//             4: n.SIGN_UP,
//             5: n.PLAY,
//             8: n.CHANGE_ANSWER_WITH,
//           },
//           F = {
//             0: {
//               isFlipped: null,
//               isNotFlipped: n.FLIP,
//             },
//             4: n.CUSTOMIZE,
//             8: n.CHANGE_ANSWER_WITH,
//           },
//           z = (0, l.z)('span')({
//             name: 'HintKey',
//             class: 'h1gdxt4m',
//           }),
//           U = (0, L.jsx)(O.ZP, {
//             icon: 'keyboard',
//             size: O.i.Small,
//           }),
//           H = (e) => {
//             switch (e) {
//               case '1':
//               case '2':
//                 return (0, L.jsx)(z, {
//                   children: e,
//                 });
//               case 'space':
//                 return (0, L.jsx)(z, {
//                   children: (0, L.jsx)(k.Z, {
//                     id: 'assistant.reveal_self_assessment.hint.hint_2_space_key',
//                   }),
//                 });
//               case 'rightArrow':
//                 return (0, L.jsx)(z, {
//                   children: (0, L.jsx)(
//                     O.ZP,
//                     {
//                       icon: 'system-arrow-right',
//                       size: O.i.Small,
//                     },
//                     'right'
//                   ),
//                 });
//               case 'leftArrow':
//                 return (0, L.jsx)(z, {
//                   children: (0, L.jsx)(
//                     O.ZP,
//                     {
//                       icon: 'system-arrow-left',
//                       size: O.i.Small,
//                     },
//                     'left'
//                   ),
//                 });
//               default:
//                 return null;
//             }
//           },
//           W = (e, s, t, a, r, o) => {
//             if (void 0 === e) return null;
//             var i = ((e) =>
//               Object.prototype.hasOwnProperty.call(e, 'isNotFlipped'))(e)
//               ? ((e, s) => (s ? e.isFlipped : e.isNotFlipped))(e, s)
//               : e;
//             switch (i) {
//               case n.CHANGE_ANSWER_WITH:
//                 return ((e, s) => {
//                   var t = (0, L.jsx)(
//                     O.ZP,
//                     {
//                       alt: s('modes.mode_controls.options_button'),
//                       icon: 'settings',
//                       size: O.i.Small,
//                     },
//                     'settings'
//                   );
//                   return e
//                     ? (0, L.jsx)(k.Z, {
//                         id: 'modes.cards.onboarding.mobile.change_answer_with',
//                         optionsIcon: t,
//                       })
//                     : (0, L.jsx)(k.Z, {
//                         id: 'modes.cards.onboarding.desktop.change_answer_with',
//                       });
//                 })(t, o);
//               case n.CUSTOMIZE:
//                 return ((e, s) => {
//                   var t = (0, L.jsx)(
//                     O.ZP,
//                     {
//                       alt: s('modes.mode_controls.options_button'),
//                       icon: 'settings',
//                       size: O.i.Small,
//                     },
//                     'settings'
//                   );
//                   return e
//                     ? (0, L.jsx)(k.Z, {
//                         id: 'modes.cards.onboarding.mobile.tap_options',
//                         optionsIcon: t,
//                       })
//                     : (0, L.jsx)(k.Z, {
//                         id: 'modes.cards.onboarding.desktop.click_options',
//                       });
//                 })(t, o);
//               case n.FLIP:
//                 return ((e, s) =>
//                   s
//                     ? null
//                     : e
//                     ? (0, L.jsx)(k.Z, {
//                         id: 'modes.cards.onboarding.mobile.tap_to_flip',
//                       })
//                     : (0, L.jsx)(k.Z, {
//                         id: 'modes.cards.onboarding.desktop.click_to_flip',
//                       }))(t, r);
//               case n.PLAY:
//                 return ((e, s) => {
//                   var t = (0, L.jsx)(
//                     O.ZP,
//                     {
//                       alt: s('modes.cards.options.play'),
//                       icon: 'play',
//                       size: O.i.Small,
//                     },
//                     'play'
//                   );
//                   return e
//                     ? (0, L.jsx)(k.Z, {
//                         autoPlayIcon: t,
//                         id: 'modes.cards.onboarding.mobile.tap_autoplay',
//                       })
//                     : (0, L.jsx)(k.Z, {
//                         autoPlayIcon: t,
//                         id: 'modes.cards.onboarding.desktop.click_autoplay',
//                       });
//                 })(t, o);
//               case n.SIGN_UP:
//                 return (0, L.jsx)(k.Z, {
//                   id: 'modes.cards.onboarding.logged_out.signup_to_save_progress',
//                 });
//               case n.SORT:
//                 return ((e) =>
//                   e
//                     ? (0, L.jsx)(k.Z, {
//                         id: 'modes.cards.onboarding.mobile.tap_to_sort',
//                       })
//                     : (0, L.jsx)(k.Z, {
//                         id: 'modes.cards.onboarding.desktop.click_to_sort',
//                       }))(t);
//               case n.UNDO:
//                 return ((e, s) => {
//                   var t = (0, L.jsx)(
//                     O.ZP,
//                     {
//                       alt: s('modes.cards.options.undo'),
//                       icon: 'undo',
//                       size: O.i.Small,
//                     },
//                     'undo'
//                   );
//                   return e
//                     ? (0, L.jsx)(k.Z, {
//                         id: 'modes.cards.onboarding.mobile.tap_undo_last_sort',
//                         undoIcon: t,
//                       })
//                     : (0, L.jsx)(k.Z, {
//                         id: 'modes.cards.onboarding.desktop.click_undo_last_sort',
//                         undoIcon: t,
//                       });
//                 })(t, o);
//               default:
//                 return null;
//             }
//           },
//           B = (e) => {
//             var s,
//               {
//                 currentCardIndex: t,
//                 isCurrentCardFlipped: n,
//                 isSortingEnabled: a,
//                 isShowingBothSides: r,
//               } = e,
//               {t: o} = (0, v.Z)(),
//               i = (0, N.p3)(),
//               d = (0, x.useContext)(S.Z);
//             if (null === t) return null;
//             if (
//               (null !== d && a
//                 ? (s = M)
//                 : null === d || a || i
//                 ? null === d && a
//                   ? (s = D)
//                   : null !== d || a
//                   ? null !== d && !a && i && (s = F)
//                   : (s = Z)
//                 : (s = R),
//               void 0 === s)
//             )
//               return null;
//             var l = s[t];
//             return W(l, n, i, 0, r, o);
//           },
//           K = (e) => {
//             var {
//                 currentCardIndex: s,
//                 isCurrentCardFlipped: t,
//                 isShowingBothSides: n,
//               } = e,
//               a = (0, N.p3)(),
//               r = H('space');
//             return 0 !== s || t || n || a
//               ? null
//               : (0, L.jsx)(k.Z, {
//                   id: 'modes.cards.onboarding.desktop.keyboard.hit_space_to_flip',
//                   keyboardIcon: U,
//                   spaceIcon: r,
//                 });
//           },
//           G = (e) => {
//             var {currentCardIndex: s, isSortingEnabled: t} = e,
//               n = (0, N.p3)();
//             return null === s || 0 !== s || n
//               ? null
//               : ((e) =>
//                   e
//                     ? (0, L.jsx)(k.Z, {
//                         id: 'modes.cards.onboarding.desktop.keyboard.hit_to_sort',
//                         keyboardIcon: U,
//                         oneIcon: H('1'),
//                         twoIcon: H('2'),
//                       })
//                     : (0, L.jsx)(k.Z, {
//                         id: 'modes.cards.onboarding.desktop.keyboard.hit_to_navigate',
//                         keyboardIcon: U,
//                         leftIcon: H('leftArrow'),
//                         rightIcon: H('rightArrow'),
//                       }))(t);
//           };
//         t(
//           './.linaria-cache/app/j/study-modes/redesigned_cards/components/OnboardingMessages.linaria.css'
//         ),
//           (function (e) {
//             (e.FIRST_TIME = '1'),
//               (e.KEYBOARD_FLIP = '2'),
//               (e.KEYBOARD_NAVIGATION = '3');
//           })(P || (P = {}));
//         var V = t('./app/j/utils/LocalStorageHelper.ts'),
//           q = 'cardsOnboardingCompletionLevel';
//         function Q() {
//           return new V.Z().getItem(q);
//         }
//         function $(e) {
//           new V.Z().setItem(q, e);
//         }
//         var Y = (0, l.z)('div')({
//           name: 'OnboardingMessage',
//           class: 'o1iujizv',
//         });
//         t(
//           './.linaria-cache/app/j/study-modes/redesigned_cards/components/CardsOnboardingMessage.linaria.css'
//         );
//         var J = t(
//             './app/j/study-modes/redesigned_cards/data/engine/selectors.ts'
//           ),
//           X = t('./app/j/study-modes/redesigned_cards/data/ui/selector.ts'),
//           ee = (0, I.createStructuredSelector)({
//             currentCardIndex: J.yl,
//             isCurrentCardFlipped: X.ZV,
//             isShowingBothSides: X.ju,
//             isSortingEnabled: w.rE,
//           }),
//           se = (0, r.connect)(ee, null, null, {
//             context: a.jJ,
//           })(function (e) {
//             var {
//                 currentCardIndex: s,
//                 isCurrentCardFlipped: t,
//                 isSortingEnabled: n,
//                 isShowingBothSides: a,
//               } = e,
//               r = (0, x.useMemo)(() => Q(), []);
//             return (
//               (0, x.useEffect)(() => {
//                 null !== s &&
//                   (s >= 9 && null === r
//                     ? $(P.FIRST_TIME)
//                     : s >= 1 && r === P.FIRST_TIME
//                     ? $(P.KEYBOARD_FLIP)
//                     : s >= 1 &&
//                       r === P.KEYBOARD_FLIP &&
//                       $(P.KEYBOARD_NAVIGATION));
//               }, [s, n, r]),
//               (0, L.jsx)(
//                 Y,
//                 {
//                   children: (() => {
//                     switch (r) {
//                       case null:
//                         return (0, L.jsx)(B, {
//                           currentCardIndex: s,
//                           isCurrentCardFlipped: t,
//                           isShowingBothSides: a,
//                           isSortingEnabled: n,
//                         });
//                       case P.FIRST_TIME:
//                         return (0, L.jsx)(K, {
//                           currentCardIndex: s,
//                           isCurrentCardFlipped: t,
//                           isShowingBothSides: a,
//                         });
//                       case P.KEYBOARD_FLIP:
//                         return (0, L.jsx)(G, {
//                           currentCardIndex: s,
//                           isSortingEnabled: n,
//                         });
//                       case P.KEYBOARD_NAVIGATION:
//                       default:
//                         return null;
//                     }
//                   })(),
//                 },
//                 'onboardingMessage'
//               )
//             );
//           }),
//           te = t(
//             './app/j/study-modes/redesigned_cards/keyboard/useShortcutsLabels.ts'
//           ),
//           ne = t('./app/j/utils/BreakpointsHelper.ts'),
//           ae = t('./app/j/utils/ModeHelper.ts'),
//           re = (0, l.z)('div')({
//             name: 'ContinueButtonWrapper',
//             class: 'c601csr',
//           }),
//           oe = 'mjxpo2v';
//         t(
//           './.linaria-cache/app/j/study-modes/redesigned_cards/components/CardsFooterBase.linaria.css'
//         );
//         var ie = t(
//             './app/j/study-modes/redesigned_cards/data/engine/actions.ts'
//           ),
//           de = (0, r.connect)(
//             null,
//             (e) => ({
//               actions: (0, o.bindActionCreators)(
//                 {
//                   logStudyNavigationEvent: i.F,
//                   logStudyEvent: i.pJ,
//                   onCloseOptions: ie.VP,
//                   reinitializeCardsMode: ie.VW,
//                   toggleShuffleCards: ie.lt,
//                 },
//                 e
//               ),
//             }),
//             null,
//             {
//               context: a.jJ,
//             }
//           )(function (e) {
//             var {
//                 actions: {
//                   onCloseOptions: s,
//                   reinitializeCardsMode: t,
//                   logStudyEvent: n,
//                 },
//                 autoplayProps: a,
//                 fullscreenProps: r,
//                 handleSkipAd: o,
//                 interactionAlert: i,
//                 isMiniFlashcards: l,
//                 isShowingCardsMwebAd: I,
//                 setInteractionAlert: w,
//                 shouldRenderSkipAdButton: O,
//                 shuffleProps: N,
//                 undoProps: k,
//               } = e,
//               {t: M} = (0, v.Z)(),
//               R = (0, f.Z)(),
//               D = (0, j.qL)(),
//               Z = (0, x.useContext)(S.Z),
//               F = (0, te.Z)(),
//               [z, U] = (0, x.useState)(null),
//               H = (0, m.Jt)().isVideoAd ? p.sV : p.mW;
//             (0, x.useEffect)(() => {
//               if (l && null !== z) {
//                 var e = z ? y.WVJ.ENTER_SCREEN : y.WVJ.EXIT_SCREEN;
//                 n({
//                   action: e,
//                   extraData: {
//                     screen: y.HtK.SETTINGS,
//                   },
//                 });
//               }
//             }, [z, n, l]),
//               (0, T.Z)(i, w);
//             var W,
//               B,
//               K,
//               G,
//               V,
//               q = !(Q() === P.KEYBOARD_NAVIGATION || l),
//               $ = (0, ne.P0)(R, 'l')
//                 ? (0, L.jsx)(A.Z, {
//                     divided: true,
//                     keyboardShortcutsList: F,
//                   })
//                 : void 0,
//               Y = i || (q ? (0, L.jsx)(se, {}) : null),
//               J = () => {
//                 U(true);
//               },
//               X = (e) => {
//                 e.has('studyStarredOnly') && t(), U(false), s();
//               },
//               ee = () => {
//                 n({
//                   action: y.WVJ.RESTART,
//                   extraData: {
//                     screen: y.HtK.SETTINGS,
//                   },
//                 }),
//                   t(),
//                   U(false);
//               };
//             return (0, L.jsx)(b.ZP, {
//               'data-testid': 'CardsFooterBase',
//               children:
//                 ((W = (() => {
//                   if (a) {
//                     var {icon: e, text: s, key: t, onClick: n, variant: r} = a;
//                     return (0, L.jsx)(_.Z, {
//                       offset: C.Cy,
//                       text: s,
//                       children: (0, L.jsx)(
//                         h.JZ,
//                         {
//                           alt: s,
//                           icon: e,
//                           onClick: n,
//                           size: 'medium',
//                           variant: r,
//                         },
//                         t
//                       ),
//                     });
//                   }
//                   return (0, L.jsx)(b.tL, {});
//                 })()),
//                 (B = (() => {
//                   if (N) {
//                     var {onClick: e, variant: s} = N;
//                     return (0, L.jsx)(_.Z, {
//                       offset: C.Cy,
//                       text: M('modes.cards.options.shuffle'),
//                       children: (0, L.jsx)(
//                         h.JZ,
//                         {
//                           alt: M('modes.cards.options.shuffle'),
//                           icon: 'shuffle',
//                           onClick: e,
//                           size: 'medium',
//                           variant: s,
//                         },
//                         'shuffle'
//                       ),
//                     });
//                   }
//                   return (0, L.jsx)(b.tL, {});
//                 })()),
//                 (K = (() => {
//                   if (r) {
//                     var {studiableContainerId: e} = r,
//                       s = M('modes.mode_controls.fullscreen_button');
//                     return (0, L.jsx)(_.Z, {
//                       offset: C.Cy,
//                       text: s,
//                       children: (0, L.jsx)(
//                         h.JZ,
//                         {
//                           alt: s,
//                           icon: 'fullscreen',
//                           linkTo: (0, ae.$2)(e, ae.II, false),
//                           onClick: () =>
//                             D('flashcards_fullscreen', {
//                               origin,
//                               sorting_enabled: void 0 !== k,
//                             }),
//                           size: 'medium',
//                           variant: g.IQ.TERTIARY,
//                         },
//                         'fullscreen'
//                       ),
//                     });
//                   }
//                   return (0, L.jsx)(b.tL, {});
//                 })()),
//                 (G = (() => {
//                   if (k) {
//                     var {onClick: e, variant: s, disabled: t} = k;
//                     return (0, L.jsx)(_.Z, {
//                       offset: C.Cy,
//                       text: M('modes.cards.options.undo'),
//                       children: (0, L.jsx)(
//                         h.JZ,
//                         {
//                           alt: M('modes.cards.options.undo'),
//                           disabled: t,
//                           icon: 'undo',
//                           onClick: e,
//                           variant: s,
//                         },
//                         'undo'
//                       ),
//                     });
//                   }
//                   return (0, L.jsx)(b.tL, {});
//                 })()),
//                 (V = (() => {
//                   if (null !== Z) {
//                     var e = M('modes.mode_controls.options_button');
//                     return (0, L.jsx)(_.Z, {
//                       offset: C.Cy,
//                       text: e,
//                       children: (0, L.jsx)(h.JZ, {
//                         alt: e,
//                         icon: 'settings',
//                         onClick: J,
//                         size: 'medium',
//                         variant: g.IQ.TERTIARY,
//                       }),
//                     });
//                   }
//                   return (0, L.jsx)(b.tL, {});
//                 })()),
//                 l
//                   ? (0, L.jsxs)(L.Fragment, {
//                       children: [
//                         z &&
//                           null !== Z &&
//                           (0, L.jsx)(E.Z, {
//                             cardsOrigin: C.ou.SET_PAGE,
//                             isModalOpen: true,
//                             keyboardShortcuts: $,
//                             onCloseModal: X,
//                             onResetProgress: ee,
//                           }),
//                         (0, L.jsxs)(b.yY, {
//                           children: [a ? W : G, B],
//                         }),
//                         Y,
//                         I &&
//                           (0, L.jsx)(u.Z, {
//                             content: (0, L.jsx)(re, {
//                               className: (0, d.cx)(I && oe),
//                               children: (0, L.jsx)(c.Z, {
//                                 onClick: o,
//                               }),
//                             }),
//                             isMiniFlashcards: l,
//                             studyMode: y.aKJ.FLASHCARDS,
//                             timeLeft: H,
//                           }),
//                         (0, L.jsxs)(b.yY, {
//                           children: [V, K],
//                         }),
//                       ],
//                     })
//                   : (0, L.jsx)(L.Fragment, {
//                       children: O
//                         ? (0, L.jsx)(re, {
//                             className: (0, d.cx)(I && oe),
//                             children: (0, L.jsx)(c.Z, {
//                               buttonSize: 'large',
//                               isFullWidth: true,
//                               onClick: o,
//                             }),
//                           })
//                         : (0, L.jsxs)(L.Fragment, {
//                             children: [a ? W : G, Y, B],
//                           }),
//                     })),
//             });
//           });
//       },
//     './app/j/study-modes/redesigned_cards/containers/CardsSummaryViewContainer.ts':
//       (e, s, t) => {
//         'use strict';
//         t.d(s, {
//           Z: () => es,
//         });
//         var n = t('./app/j/config/enums.ts'),
//           a = t('./app/j/core/default_store/DefaultStoreProvider.tsx'),
//           r =
//             (t('./node_modules/core-js/modules/es.array.iterator.js'),
//             t('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
//             t('./node_modules/react/index.js')),
//           o = t('./app/j/utils/HOCs.ts'),
//           i = t('./node_modules/react/jsx-runtime.js');
//         var d,
//           l = t('./node_modules/react-redux/lib/index.js'),
//           u = t('./node_modules/redux/lib/redux.js'),
//           c = t('./node_modules/reselect/lib/index.js'),
//           p = t('./app/j/study-modes/data/logging/thunks.ts'),
//           m = t('./app/j/study-modes/data/metering/selectors.ts'),
//           _ = t('./app/j/study-modes/data/settings/selectors/display.ts'),
//           h = t('./app/j/study-modes/data/settings/selectors/preference.ts'),
//           g = t('./app/j/study-modes/data/studiable-data/selectors.ts'),
//           j = t('./node_modules/@linaria/react/lib/index.js'),
//           y = t('./app/j/ads/components/hooks/useAdTimer.ts'),
//           S = t('./app/j/ads/components/studyModes/StudyBreakAd.tsx'),
//           f = t('./app/j/ads/constants/adConstants.ts'),
//           v = t('./app/j/ads/enums/AdsNames.ts'),
//           E = t('./app/j/assembly/AssemblyBreakpoint.tsx'),
//           x = t('./app/j/assembly/AssemblyConfetti.tsx'),
//           b = t('./app/j/assembly/AssemblyIcon.tsx'),
//           A = t('./app/j/assembly/foundations/Spacing.ts'),
//           T = t('./app/j/compatibility/logger/useLogger.ts'),
//           C = t('./app/j/context/UserContext.ts'),
//           I = t('./app/j/hooks/useBreakpoint.ts'),
//           w = t('./app/j/hooks/useQMeasure.ts'),
//           O = t('./app/j/i18n/useTranslation.ts'),
//           N = t('./node_modules/polished/dist/polished.cjs.js'),
//           k = t('./app/j/compatibility/userAgentHelper.ts'),
//           L = t('./app/j/components/NextStep.tsx'),
//           P = t('./app/j/hocs/keydownDecorator.tsx'),
//           M = t('./node_modules/keycode-js/dist/keycode.cjs.js');
//         !(function (e) {
//           (e[(e.CONTINUE_STUDYING_STARRED = 0)] = 'CONTINUE_STUDYING_STARRED'),
//             (e[(e.LEARN = 1)] = 'LEARN'),
//             (e[(e.RESTART = 2)] = 'RESTART'),
//             (e[(e.RESTUDY = 3)] = 'RESTUDY'),
//             (e[(e.STUDY_ALL_FROM_STARRED = 4)] = 'STUDY_ALL_FROM_STARRED'),
//             (e[(e.STUDY_STARRED_FROM_ALL = 5)] = 'STUDY_STARRED_FROM_ALL'),
//             (e[(e.STUDY_STARRED_FROM_STARRED = 6)] =
//               'STUDY_STARRED_FROM_STARRED'),
//             (e[(e.TEST = 7)] = 'TEST');
//         })(d || (d = {}));
//         var R = {
//             primary: d.RESTART,
//           },
//           D = {
//             primary: d.RESTUDY,
//             secondary: d.RESTART,
//           },
//           Z = {
//             primary: d.TEST,
//             secondary: d.RESTART,
//           },
//           F = {
//             primary: d.STUDY_ALL_FROM_STARRED,
//             secondary: d.STUDY_STARRED_FROM_STARRED,
//           },
//           z = {
//             primary: d.STUDY_STARRED_FROM_ALL,
//             secondary: d.RESTART,
//           },
//           U = {
//             primary: d.TEST,
//             secondary: d.RESTART,
//           },
//           H = {
//             primary: d.LEARN,
//             secondary: d.RESTART,
//           },
//           W = 'f10h2116',
//           B = (e) => {
//             var {
//               actions: s,
//               showLearnButtonIcon: t,
//               nextStep: n,
//               starredTermsCount: a,
//               stillLearningCount: r,
//               showTestButtonIcon: o,
//               totalCardCount: i,
//               t: l,
//             } = e;
//             switch (n) {
//               case d.LEARN:
//                 return {
//                   onClick: s.onClickLearn,
//                   showPremiumBrandingBadge: t,
//                   description: l('global.next_step.learn.description', {
//                     numTerms: i,
//                   }),
//                   illustrationCss: 'l15gr8op',
//                   title: l('global.next_step.learn.title'),
//                 };
//               case d.RESTART:
//                 return {
//                   onClick: s.onRestart,
//                   description: l(
//                     'global.next_step.flashcard_restart.description',
//                     {
//                       numTerms: i,
//                     }
//                   ),
//                   illustrationCss: 'f1vz78qt',
//                   title: l('global.next_step.flashcard_restart.title'),
//                 };
//               case d.RESTUDY:
//                 return {
//                   onClick: s.onClickRestudy,
//                   description: l(
//                     'global.next_step.flashcard_restudy.description',
//                     {
//                       numTerms: r,
//                     }
//                   ),
//                   illustrationCss: 'fm42011',
//                   title: l('global.next_step.flashcard_restudy.title'),
//                 };
//               case d.STUDY_ALL_FROM_STARRED:
//                 return {
//                   onClick: s.onToggleStarredTerms,
//                   description: l(
//                     'global.next_step.flashcard_study_all.description',
//                     {
//                       numTerms: i,
//                     }
//                   ),
//                   illustrationCss: 'f1kvbk12',
//                   title: l('global.next_step.flashcard_study_all.title'),
//                 };
//               case d.STUDY_STARRED_FROM_ALL:
//                 return {
//                   onClick: s.onToggleStarredTerms,
//                   description: l(
//                     'global.next_step.flashcard_study_starred.description',
//                     {
//                       numTerms: a,
//                     }
//                   ),
//                   illustrationCss: W,
//                   title: l('global.next_step.flashcard_study_starred.title'),
//                 };
//               case d.STUDY_STARRED_FROM_STARRED:
//                 return {
//                   onClick: s.onRestart,
//                   description: l(
//                     'global.next_step.flashcard_study_starred.description',
//                     {
//                       numTerms: a,
//                     }
//                   ),
//                   illustrationCss: W,
//                   title: l('global.next_step.flashcard_study_starred.title'),
//                 };
//               case d.TEST:
//                 return {
//                   onClick: s.onClickTest,
//                   showPremiumBrandingBadge: o,
//                   description: l('global.next_step.test.description'),
//                   illustrationCss: 't13hjh4z',
//                   title: l('global.next_step.test.title'),
//                 };
//               default:
//                 throw new Error('Unable to find props for next step ' + n);
//             }
//           },
//           K = (e) => {
//             var {
//                 actions: s,
//                 user: t,
//                 isEmbedding: a,
//                 showLearnButtonIcon: r,
//                 sortingOn: o,
//                 knowCount: i,
//                 starredTermsCount: d,
//                 stillLearningCount: l,
//                 showTestButtonIcon: u,
//                 totalCardCount: c,
//                 studyStarredOnly: p,
//                 studiableContainerType: m,
//                 t: _,
//               } = e,
//               h = ((e) => {
//                 var {
//                   user: s,
//                   isEmbedding: t,
//                   sortingOn: a,
//                   knowCount: r,
//                   totalCardCount: o,
//                   starredTermsCount: i,
//                   studiableContainerType: d,
//                   studyStarredOnly: l,
//                 } = e;
//                 return t && a && r < o
//                   ? D
//                   : t || null === s
//                   ? R
//                   : a && r < o
//                   ? D
//                   : a
//                   ? Z
//                   : l
//                   ? F
//                   : i
//                   ? z
//                   : d === n.MG.FOLDER
//                   ? U
//                   : H;
//               })({
//                 user: t,
//                 isEmbedding: a,
//                 sortingOn: o,
//                 knowCount: i,
//                 totalCardCount: c,
//                 starredTermsCount: d,
//                 studyStarredOnly: p,
//                 studiableContainerType: m,
//               }),
//               g = [
//                 B({
//                   actions: s,
//                   showLearnButtonIcon: r,
//                   nextStep: h.primary,
//                   starredTermsCount: d,
//                   stillLearningCount: l,
//                   showTestButtonIcon: u,
//                   totalCardCount: c,
//                   t: _,
//                 }),
//               ];
//             return (
//               void 0 !== h.secondary &&
//                 g.push(
//                   B({
//                     actions: s,
//                     showLearnButtonIcon: r,
//                     nextStep: h.secondary,
//                     starredTermsCount: d,
//                     stillLearningCount: l,
//                     showTestButtonIcon: u,
//                     totalCardCount: c,
//                     t: _,
//                   })
//                 ),
//               g
//             );
//           };
//         t(
//           './.linaria-cache/app/j/study-modes/cards/utils/nextStep.linaria.css'
//         );
//         var G = t('./app/j/utils/ModeHelper.ts'),
//           V = t('./app/j/utils/redirect.ts'),
//           q = (0, j.z)('div')({
//             name: 'SectionTitle',
//             class: 's12gm7zj',
//           }),
//           Q = (0, j.z)('div')({
//             name: 'NextStepsSection',
//             class: 'nen4lrv',
//             vars: {
//               'nen4lrv-0': [
//                 (e) => (e.shouldHideAd && !e.isVideoAd ? '0s' : '2s'),
//               ],
//               'nen4lrv-1': [
//                 (e) => {
//                   var {shouldHideAd: s} = e;
//                   return s ? '' + A.Ki.Small : '0';
//                 },
//               ],
//             },
//           }),
//           $ = (0, j.z)('div')({
//             name: 'NextSteps',
//             class: 'ncoqjul',
//           }),
//           Y = (0, j.z)('a')({
//             name: 'ContinueLink',
//             class: 'cm82zyp',
//           }),
//           J = (0, j.z)('div')({
//             name: 'ContinueIcon',
//             class: 'c148ffap',
//           }),
//           X = (0, P.Z)()((e) => {
//             var {
//                 actions: s,
//                 isEmbedding: t,
//                 isVideoAd: a,
//                 keydownEvent: o,
//                 knowCount: d,
//                 showLearnButtonIcon: l = false,
//                 shouldHideAd: u = false,
//                 shouldSeeCardsRedesignAds: c,
//                 sortingOn: p,
//                 starredTermsCount: m,
//                 stillLearningCount: _ = 0,
//                 studiableContainerType: h,
//                 studiableId: g,
//                 studyStarredOnly: j,
//                 showTestButtonIcon: y = false,
//                 totalCardCount: S = 0,
//               } = e,
//               {t: f} = (0, O.Z)(),
//               {logPageAction: v} = (0, T.wL)(),
//               E = (0, k.p3)(),
//               x = (0, r.useContext)(C.Z),
//               A = () => {
//                 v('flashcards_end_upsell_learn_clicked'),
//                   (0, V.ZP)((0, G.$2)(g, n.aKJ.LEARNING_ASSISTANT));
//               },
//               I = () => {
//                 v('flashcards_end_upsell_test_clicked'),
//                   (0, V.ZP)((0, G.$2)(g, n.aKJ.TEST));
//               },
//               w = () => {
//                 v('flashcards_end_upsell_review_terms'),
//                   c && E && s.setCardsAdModalView(),
//                   s.onContinueStudying();
//               },
//               N = () => {
//                 v('flashcards_end_upsell_restart'),
//                   c && E && s.setCardsAdModalView(),
//                   s.onRestart();
//               },
//               P = () => {
//                 v('flashcards_end_upsell_toggle_study_starred'),
//                   s.toggleStudyingStarredOnly(),
//                   c && E && s.setCardsAdModalView();
//               },
//               R = (0, r.useMemo)(
//                 () =>
//                   K({
//                     actions: {
//                       onClickLearn: A,
//                       onClickRestudy: w,
//                       onClickTest: I,
//                       onToggleStarredTerms: P,
//                       onRestart: N,
//                     },
//                     isEmbedding: t,
//                     knowCount: d,
//                     showLearnButtonIcon: l,
//                     shouldSeeCardsRedesignAds: c,
//                     sortingOn: p,
//                     starredTermsCount: m,
//                     stillLearningCount: _,
//                     studiableContainerType: h,
//                     studyStarredOnly: j,
//                     t: f,
//                     showTestButtonIcon: y,
//                     totalCardCount: S,
//                     user: x,
//                   }),
//                 [d, c, p, m, _, j]
//               ),
//               {onClick: D} = R[0];
//             (0, r.useEffect)(() => {
//               E ||
//                 (null === x && !t) ||
//                 !o ||
//                 (o.stopPropagation(),
//                 o.preventDefault(),
//                 o.which === M.ob ? s.onClickPrevious() : D());
//             }, [o, D]);
//             var Z = (x || t) && !E;
//             return (0, i.jsxs)(Q, {
//               isVideoAd: a,
//               shouldHideAd: u,
//               children: [
//                 (0, i.jsx)(q, {
//                   children: f('modes.cards.summary.review.next_steps'),
//                 }),
//                 (0, i.jsx)($, {
//                   children: R.map((e) =>
//                     (0, r.createElement)(
//                       L.Z,
//                       Object.assign({}, e, {
//                         key: e.title,
//                       })
//                     )
//                   ),
//                 }),
//                 Z
//                   ? (0, i.jsxs)(Y, {
//                       onClick: D,
//                       children: [
//                         f('modes.cards.summary.review.continue'),
//                         (0, i.jsx)(J, {
//                           children: (0, i.jsx)(b.ZP, {
//                             icon: 'system-arrow-right',
//                             size: b.i.Small,
//                           }),
//                         }),
//                       ],
//                     })
//                   : null,
//               ],
//             });
//           });
//         t(
//           './.linaria-cache/app/j/study-modes/cards/components/CardsSummaryNextSteps.linaria.css'
//         );
//         var ee = t('./app/j/components/ProgressMeter.tsx'),
//           se = (0, j.z)('div')({
//             name: 'SectionTitle',
//             class: 's1oh3hhk',
//           }),
//           te = (0, j.z)('div')({
//             name: 'ProgressWrapper',
//             class: 'p9wp6lt',
//           }),
//           ne = (0, j.z)('div')({
//             name: 'CountWrapper',
//             class: 'c1oh51f3',
//           }),
//           ae = (0, j.z)('div')({
//             name: 'Labels',
//             class: 'l5puwla',
//           }),
//           re = (0, j.z)('div')({
//             name: 'KnowLabel',
//             class: 'kd0xsme',
//           }),
//           oe = (0, j.z)('div')({
//             name: 'StillLearningLabel',
//             class: 's1iaxazp',
//           }),
//           ie = (0, j.z)('div')({
//             name: 'CompletedLabel',
//             class: 'c1qqa6m3',
//           }),
//           de = (0, j.z)('div')({
//             name: 'RemainingLabel',
//             class: 'rbzdxbf',
//           }),
//           le = (0, j.z)('div')({
//             name: 'Counts',
//             class: 'c1wbg5ry',
//           }),
//           ue = (0, j.z)('div')({
//             name: 'Count',
//             class: 'cemenc5',
//           }),
//           ce = (0, j.z)(ue)({
//             name: 'KnowCount',
//             class: 'k1743ftp',
//           }),
//           pe = (0, j.z)(ue)({
//             name: 'StillLearningCount',
//             class: 's1j7iim3',
//           }),
//           me = (0, j.z)(ue)({
//             name: 'CompletedCount',
//             class: 'c958pry',
//           }),
//           _e = (0, j.z)(ue)({
//             name: 'TermsLeftCount',
//             class: 't1h4qi70',
//           }),
//           he = (e) => {
//             var {
//                 totalCardCount: s,
//                 knowCount: t,
//                 sortingOn: n,
//                 stillLearningCount: a = 0,
//               } = e,
//               {t: r} = (0, O.Z)();
//             return (0, i.jsxs)(i.Fragment, {
//               children: [
//                 (0, i.jsx)(se, {
//                   children: r('modes.cards.summary.review.results'),
//                 }),
//                 (0, i.jsxs)(te, {
//                   children: [
//                     (0, i.jsx)(ee.ZP, {
//                       percentage: n && void 0 !== s ? (t / s) * 100 : 100,
//                       variant: n ? ee.em.DOUBLE_ARC : ee.em.SINGLE_ARC,
//                     }),
//                     n
//                       ? (0, i.jsxs)(ne, {
//                           children: [
//                             (0, i.jsxs)(ae, {
//                               children: [
//                                 (0, i.jsx)(re, {
//                                   children: r(
//                                     'modes.cards.summary.review.terms_known'
//                                   ),
//                                 }),
//                                 (0, i.jsx)(oe, {
//                                   children: r(
//                                     'modes.cards.summary.review.terms_still_learning'
//                                   ),
//                                 }),
//                               ],
//                             }),
//                             (0, i.jsxs)(le, {
//                               children: [
//                                 (0, i.jsx)(ce, {
//                                   children: t,
//                                 }),
//                                 (0, i.jsx)(pe, {
//                                   children: a,
//                                 }),
//                               ],
//                             }),
//                           ],
//                         })
//                       : (0, i.jsxs)(ne, {
//                           children: [
//                             (0, i.jsxs)(ae, {
//                               children: [
//                                 (0, i.jsx)(ie, {
//                                   children: r(
//                                     'modes.cards.summary.review.terms_completed'
//                                   ),
//                                 }),
//                                 (0, i.jsx)(de, {
//                                   children: r(
//                                     'modes.cards.summary.review.terms_left'
//                                   ),
//                                 }),
//                               ],
//                             }),
//                             (0, i.jsxs)(le, {
//                               children: [
//                                 (0, i.jsx)(me, {
//                                   children: null != s ? s : 0,
//                                 }),
//                                 (0, i.jsx)(_e, {
//                                   children: '0',
//                                 }),
//                               ],
//                             }),
//                           ],
//                         }),
//                   ],
//                 }),
//               ],
//             });
//           };
//         t(
//           './.linaria-cache/app/j/study-modes/cards/components/CardsSummaryResults.linaria.css'
//         );
//         var ge = t('./app/j/assembly/AssemblyLink.tsx'),
//           je = t('./app/j/assembly/buttons/index.ts'),
//           ye = t(
//             './app/j/assembly/buttons/components/AssemblySocialButton.tsx'
//           ),
//           Se = t('./app/j/compatibility/router.ts'),
//           fe = t('./app/j/context/RouteContext.tsx'),
//           ve = t('./app/j/lazy/LoginPromptModalContainerLazy.ts'),
//           Ee = t('./app/j/lazy/SignupPromptModalNewLazy.ts'),
//           xe = t('./app/j/site_nav/types.ts'),
//           be = t('./app/j/tracking/isFacebookBlocked.ts'),
//           Ae = t('./app/j/utils/LoginHelper.ts'),
//           Te = 'flashcards-end-screen-full',
//           Ce = (0, j.z)('div')({
//             name: 'SectionTitle',
//             class: 's27x5oo',
//           }),
//           Ie = (0, j.z)('div')({
//             name: 'LoginButtons',
//             class: 'l14u3jk8',
//           }),
//           we = (0, j.z)('div')({
//             name: 'LoginText',
//             class: 'l1ib4nkc',
//           }),
//           Oe = () => {
//             var {t: e} = (0, O.Z)(),
//               {logAuthEvent: s, logPageAction: t} = (0, T.wL)(),
//               a = (0, Se.wK)(),
//               o = n.qkQ.FLASHCARDS_MODE_END_SCREEN,
//               {actionString: d} = (0, r.useContext)(fe.jj),
//               l = (0, Ae.GG)(d),
//               u = {
//                 customParams: {
//                   signupOrigin: o,
//                   screenName: l,
//                 },
//               },
//               [c, p] = (0, r.useState)(false);
//             (0, r.useEffect)(() => {
//               (0, be.Z)().then(p);
//             }, []);
//             var m = (e) => t('student_onboarding_cards_signup_' + e + '_click'),
//               [_, h] = (0, r.useState)(null),
//               g = () => {
//                 t('student_onboarding_cards_login_click'),
//                   s(n.g4I.LOGIN_FORM_OPENED, {
//                     auth_origin: Te,
//                   }),
//                   h(xe.L.LOGIN);
//               },
//               j = () => {
//                 t('student_onboarding_cards_signup_email_click'),
//                   s(n.g4I.SIGNUP_FORM_OPENED, {
//                     auth_origin: Te,
//                   }),
//                   h(xe.L.SIGN_UP);
//               },
//               y = () => {
//                 h(null);
//               };
//             return (0, i.jsxs)('div', {
//               children: [
//                 (0, i.jsx)(Ce, {
//                   children: e('modes.cards.summary.review.sign_up_header'),
//                 }),
//                 (0, i.jsxs)(Ie, {
//                   children: [
//                     (0, i.jsx)(ye.ZP, {
//                       onClick: () => m(ye.MC.GOOGLE),
//                       provider: ye.MC.GOOGLE,
//                       size: 'large',
//                       urlParams: u,
//                     }),
//                     c
//                       ? null
//                       : (0, i.jsx)(ye.ZP, {
//                           onClick: () => m(ye.MC.FACEBOOK),
//                           provider: ye.MC.FACEBOOK,
//                           size: 'large',
//                           urlParams: u,
//                         }),
//                     (0, i.jsx)(je.B0, {
//                       isFullWidth: true,
//                       leftIcon: 'mail',
//                       onClick: j,
//                       size: 'large',
//                       text: e('signup_wall_inline.cta'),
//                     }),
//                     (0, i.jsxs)(we, {
//                       children: [
//                         e('global.sign_up_modal.already_have_account'),
//                         ' ',
//                         (0, i.jsx)(ge.ZP, {
//                           onClick: g,
//                           size: 'small',
//                           text: e('global.sign_up_modal.log_in_link'),
//                         }),
//                       ],
//                     }),
//                   ],
//                 }),
//                 (0, i.jsx)(Ee.Z, {
//                   actions: {
//                     onClose: y,
//                     onOpenLogin: g,
//                   },
//                   includeCloseButton: true,
//                   isOpen: _ === xe.L.SIGN_UP,
//                   redir: a,
//                   signupOrigin: o,
//                 }),
//                 (0, i.jsx)(ve.Z, {
//                   isOpen: _ === xe.L.LOGIN,
//                   onClose: y,
//                   onOpenSignup: j,
//                   redir: a,
//                 }),
//               ],
//             });
//           };
//         t(
//           './.linaria-cache/app/j/study-modes/cards/components/CardsSummarySignup.linaria.css'
//         );
//         var Ne = t('./app/j/study-modes/redesigned_cards/constants.ts'),
//           ke = t('./app/j/utils/BreakpointsHelper.ts'),
//           Le = t('./app/j/utils/isAdBlockerEnabled.ts'),
//           Pe = t(
//             './app/j/utils/metering/MeteringPlusPhasedRolloutExperiment.tsx'
//           ),
//           Me = (0, j.z)('article')({
//             name: 'Layout',
//             class: 'l1bykoy4',
//             vars: {
//               'l1bykoy4-0': [(e) => (0, N.hO)(e.maxLayoutWidth)],
//             },
//           }),
//           Re = (0, j.z)('div')({
//             name: 'ContentContainer',
//             class: 'chwos5y',
//             vars: {
//               'chwos5y-1': [(e) => (e.includePadding ? A.Ki.Xlarge : 0)],
//             },
//           }),
//           De = (0, j.z)('div')({
//             name: 'BackWrapper',
//             class: 'byi8v38',
//             vars: {
//               'byi8v38-0': [
//                 (e) => (e.shouldSeeCardsRedesignAds ? '' + A.Ki.Small : 'auto'),
//               ],
//             },
//           }),
//           Ze = (0, j.z)('a')({
//             name: 'BackLink',
//             class: 'bhu1enx',
//           }),
//           Fe = (0, j.z)('div')({
//             name: 'BackIcon',
//             class: 'b15aqgty',
//           }),
//           ze = (0, j.z)('h2')({
//             name: 'Headline',
//             class: 'hralq3g',
//           }),
//           Ue = (0, j.z)('div')({
//             name: 'ContentWrapper',
//             class: 'c15u4720',
//             vars: {
//               'c15u4720-0': [
//                 (e) => {
//                   var {shouldHideAd: s} = e;
//                   return s ? 'row wrap' : 'column';
//                 },
//               ],
//             },
//           }),
//           He = (0, j.z)('div')({
//             name: 'SectionWrapper',
//             class: 's3jxcjl',
//           }),
//           We = (0, j.z)('div')({
//             name: 'Header',
//             class: 'h1xqgn4f',
//           }),
//           Be = (0, j.z)('div')({
//             name: 'Permafetti',
//             class: 'p18twua4',
//           }),
//           Ke = (0, j.z)('div')({
//             name: 'ConfettiWrapper',
//             class: 'c1502e1d',
//           }),
//           Ge = (0, j.z)('div')({
//             name: 'CardsStudyBreakAdWrapper',
//             class: 'cn8to8y',
//             vars: {
//               'cn8to8y-0': [
//                 (e) => {
//                   var {shouldHideAd: s} = e;
//                   return s ? 'none' : 'flex';
//                 },
//               ],
//             },
//           }),
//           Ve = (0, j.z)('span')({
//             name: 'TimeLeftText',
//             class: 'tkh3rwo',
//           }),
//           qe = (e) => {
//             var {
//                 actions: s,
//                 cardsOrigin: t,
//                 isEmbedding: a,
//                 knowCount: o = 0,
//                 learnMeteringData: d,
//                 sortingOn: l,
//                 stillLearningCount: u,
//                 starredTermsCount: c,
//                 studiableContainerType: p,
//                 studiableId: m,
//                 studyStarredOnly: _,
//                 testMeteringData: h,
//                 totalCardCount: g,
//               } = e,
//               {logPageAction: j} = (0, T.wL)(),
//               [A, N] = (0, r.useState)(false),
//               [k, L] = (0, r.useState)(false),
//               [P, M] = (0, r.useState)(false),
//               R = (0, r.useContext)(C.Z),
//               D = (null == R ? void 0 : R.type) !== n.XsQ.NO_UPGRADE,
//               Z = (0, Pe.bX)(),
//               F = (0, I.Z)(),
//               z = (0, w.Z)(),
//               U =
//                 t === Ne.ou.MODE &&
//                 'redesign' ===
//                   z.getVariationAndEnroll(
//                     'FlashcardsStudyLoopRedesignAdsV2[default,ads]'
//                   ),
//               H = !U || k || !(0, ke.P0)(F, 'm') || (0, Le.ZP)(),
//               W = _ ? c : g,
//               B = P ? f.sV : 0,
//               [K, G] = (0, y.Z)(B);
//             (0, r.useEffect)(() => {
//               G();
//             }, [G]),
//               (0, r.useEffect)(() => {
//                 (l && 0 !== u) || j('finish_flashcards');
//               }, [u]),
//               (0, r.useEffect)(() => {
//                 N(null === u || 0 === u);
//               }, [u]);
//             var V,
//               {t: q} = (0, O.Z)(),
//               Q = () =>
//                 (0, i.jsxs)(Ze, {
//                   onClick: s.onClickPrevious,
//                   children: [
//                     (0, i.jsx)(Fe, {
//                       children: (0, i.jsx)(b.ZP, {
//                         icon: 'system-arrow-left',
//                         size: b.i.Small,
//                       }),
//                     }),
//                     q('modes.cards.summary.review.back'),
//                   ],
//                 }),
//               $ = (e) =>
//                 q(
//                   l
//                     ? e < 40
//                       ? null !== R || a
//                         ? 'modes.cards.summary.review.headline_sorting1'
//                         : 'modes.cards.summary.review.headline_sorting1_logged_out'
//                       : e < 60
//                       ? null !== R || a
//                         ? 'modes.cards.summary.review.headline_sorting2'
//                         : 'modes.cards.summary.review.headline_sorting2_logged_out'
//                       : e < 80
//                       ? null !== R || a
//                         ? 'modes.cards.summary.review.headline_sorting3'
//                         : 'modes.cards.summary.review.headline_sorting3_logged_out'
//                       : e < 90
//                       ? null !== R || a
//                         ? 'modes.cards.summary.review.headline_sorting4'
//                         : 'modes.cards.summary.review.headline_sorting4_logged_out'
//                       : e < 100
//                       ? null !== R || a
//                         ? 'modes.cards.summary.review.headline_sorting5'
//                         : 'modes.cards.summary.review.headline_sorting5_logged_out'
//                       : null !== R || a
//                       ? 'modes.cards.summary.review.headline_sorting_done'
//                       : 'modes.cards.summary.review.headline_sorting_done_logged_out'
//                     : null !== R || a
//                     ? 'modes.cards.summary.review.headline_non_sorting'
//                     : 'modes.cards.summary.review.headline_non_sorting_logged_out'
//                 );
//             return (0, i.jsxs)(Me, {
//               maxLayoutWidth: H ? (H && l ? 890 : 800) : 1200,
//               children: [
//                 (0, i.jsxs)(Re, {
//                   includePadding: t === Ne.ou.MODE,
//                   children: [
//                     ((V = l && void 0 !== W ? (o / W) * 100 : 100),
//                     (0, i.jsxs)(We, {
//                       children: [
//                         (0, i.jsx)(ze, {
//                           children: $(V),
//                         }),
//                         (0, i.jsx)(Be, {}),
//                       ],
//                     })),
//                     (0, i.jsxs)(Ue, {
//                       shouldHideAd: H,
//                       children: [
//                         (0, i.jsxs)(He, {
//                           children: [
//                             null !== R || a
//                               ? (0, i.jsx)(he, {
//                                   knowCount: o,
//                                   sortingOn: l,
//                                   stillLearningCount: u,
//                                   totalCardCount: W,
//                                 })
//                               : (0, i.jsx)(Oe, {}),
//                             (0, i.jsx)(De, {
//                               shouldSeeCardsRedesignAds: U,
//                               children: (0, i.jsx)(E.ZP, {
//                                 lowerBound: 'm',
//                                 children: Q(),
//                               }),
//                             }),
//                           ],
//                         }),
//                         (0, i.jsx)(He, {
//                           children:
//                             K >= 1
//                               ? (0, i.jsx)(Ve, {
//                                   children: q('study_ads_modal.skip_ad', {
//                                     adTimeLeft: K,
//                                   }),
//                                 })
//                               : (0, i.jsx)(X, {
//                                   actions: s,
//                                   isEmbedding: a,
//                                   isVideoAd: P,
//                                   knowCount: o,
//                                   shouldHideAd: H,
//                                   shouldSeeCardsRedesignAds: U,
//                                   showLearnButtonIcon: (0, Pe.Fi)(d, D, Z),
//                                   showTestButtonIcon: (0, Pe.Fi)(h, D, Z),
//                                   sortingOn: l,
//                                   starredTermsCount: c,
//                                   stillLearningCount: u,
//                                   studiableContainerType: p,
//                                   studiableId: m,
//                                   studyStarredOnly: _,
//                                   totalCardCount: W,
//                                 }),
//                         }),
//                       ],
//                     }),
//                     (0, i.jsx)(De, {
//                       children: (0, i.jsx)(E.ZP, {
//                         upperBound: 'm',
//                         children: Q(),
//                       }),
//                     }),
//                     (0, i.jsx)(Ke, {
//                       children: (0, i.jsx)(x.ZP, {
//                         active: A,
//                       }),
//                     }),
//                   ],
//                 }),
//                 U
//                   ? (0, i.jsx)(E.ZP, {
//                       lowerBound: 'm',
//                       children: (0, i.jsx)(Ge, {
//                         shouldHideAd: H,
//                         children: (0, i.jsx)(S.Z, {
//                           adId: v.h.STUDY_MODE_AD,
//                           onEmptyAd: () => L(true),
//                           onVideoAd: () => M(true),
//                         }),
//                       }),
//                     })
//                   : null,
//               ],
//             });
//           };
//         t(
//           './.linaria-cache/app/j/study-modes/redesigned_cards/components/CardsSummaryView.linaria.css'
//         );
//         var Qe,
//           $e = t('./app/j/study-modes/redesigned_cards/data/engine/actions.ts'),
//           Ye = t(
//             './app/j/study-modes/redesigned_cards/data/engine/selectors.ts'
//           ),
//           Je = t('./app/j/study-modes/redesigned_cards/data/ui/selector.ts'),
//           Xe = (0, c.createStructuredSelector)({
//             cardsOrigin: Je.bq,
//             isEmbedding: _.QE,
//             knowCount: Ye.AY,
//             learnMeteringData: m.hh,
//             sortingOn: h.rE,
//             starredTermsCount: g.VZ,
//             stillLearningCount: Ye.oK,
//             studiableContainerType: g.Sd,
//             studiableId: g.uf,
//             studyStarredOnly: h.zg,
//             testMeteringData: m.UQ,
//             totalCardCount: g.ke,
//           }),
//           es = (0, u.compose)(
//             (0, l.connect)(
//               Xe,
//               (e) => ({
//                 actions: (0, u.bindActionCreators)(
//                   {
//                     logStudyEvent: p.pJ,
//                     onClickPrevious: $e.gl,
//                     onContinueStudying: $e.Lr,
//                     onRestart: $e.VW,
//                     setCardsAdModalView: $e._X,
//                     toggleStudyingStarredOnly: $e.PY,
//                   },
//                   e
//                 ),
//               }),
//               null,
//               {
//                 context: a.jJ,
//               }
//             ),
//             ((Qe = n.HtK.RESULTS),
//             (0, o.E)(function (e) {
//               return class extends r.Component {
//                 constructor() {
//                   super(...arguments),
//                     (this.getScreen = (e) => {
//                       var {sortingOn: s, stillLearningCount: t} = e;
//                       return s && t && t > 0 ? n.HtK.CHECKPOINT : Qe;
//                     });
//                 }
//                 componentDidMount() {
//                   var {
//                     actions: e,
//                     creatorId: s,
//                     sortingOn: t,
//                     stillLearningCount: a,
//                   } = this.props;
//                   (this.updatedScreen = this.getScreen({
//                     sortingOn: t,
//                     stillLearningCount: a,
//                   })),
//                     e.logStudyEvent({
//                       action: n.WVJ.ENTER_SCREEN,
//                       extraData: {
//                         creatorId: s,
//                         screen: this.updatedScreen,
//                       },
//                     });
//                 }
//                 componentWillUnmount() {
//                   var {actions: e, creatorId: s} = this.props;
//                   e.logStudyEvent({
//                     action: n.WVJ.EXIT_SCREEN,
//                     extraData: {
//                       creatorId: s,
//                       screen: this.updatedScreen,
//                     },
//                   });
//                 }
//                 render() {
//                   return (0, i.jsx)(e, Object.assign({}, this.props));
//                 }
//               };
//             }))
//           )(qe);
//       },
//     './app/j/study-modes/redesigned_cards/containers/FullscreenQuizViewContainer.tsx':
//       (e, s, t) => {
//         'use strict';
//         t.d(s, {
//           Z: () => Se,
//         });
//         var n = t('./app/j/audio_playback/thunks.ts'),
//           a = t('./app/j/core/default_store/DefaultStoreProvider.tsx'),
//           r = t('./node_modules/react-redux/lib/index.js'),
//           o = t('./node_modules/redux/lib/redux.js'),
//           i = t('./node_modules/reselect/lib/index.js'),
//           d = t('./app/j/study-modes/data/studiable-data/selectors.ts'),
//           l = t('./app/j/study-modes/redesigned_cards/data/ads/selectors.ts'),
//           u = t('./app/j/study-modes/redesigned_cards/data/engine/actions.ts'),
//           c = t(
//             './app/j/study-modes/redesigned_cards/data/engine/selectors.ts'
//           ),
//           p = t('./app/j/study-modes/redesigned_cards/data/ui/actions.ts'),
//           m = t('./app/j/study-modes/redesigned_cards/data/ui/selector.ts'),
//           _ =
//             (t('./node_modules/core-js/modules/es.array.iterator.js'),
//             t('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
//             t('./node_modules/@linaria/react/lib/index.js')),
//           h = t('./app/j/ads/components/flashcards/FlashcardAd.tsx'),
//           g = t('./app/j/ads/constants/adConstants.ts'),
//           j = t('./app/j/ads/enums/AdsNames.ts'),
//           y = t('./app/j/compatibility/logger/useLogger.ts'),
//           Enums = t('./app/j/config/enums.ts'),
//           f = t('./node_modules/react/index.js'),
//           EngineUtils = t('./app/j/study-engine/utils.ts'),
//           E = t('./app/j/i18n/useTranslation.ts'),
//           x = t('./app/j/hooks/usePrevious.tsx'),
//           b = t('./app/j/study-modes/redesigned_cards/constants.ts'),
//           JSX = t('./node_modules/react/jsx-runtime.js');
//         function T(e) {
//           var {animatedWrapper: s, count: t, children: n} = e,
//             a = (0, f.useRef)(false),
//             r = (0, f.useRef)(null),
//             o = (0, x.Z)(t),
//             [i, d] = (0, f.useState)(null);
//           return (
//             (0, f.useEffect)(() => {
//               if (a.current)
//                 return (
//                   d(
//                     ((e, s) =>
//                       'number' != typeof s
//                         ? null
//                         : {
//                             delta: e > s ? '+1' : '-1',
//                           })(t, o)
//                   ),
//                   (r.current = setTimeout(() => d(null), b.M6)),
//                   () => {
//                     r.current && clearTimeout(r.current);
//                   }
//                 );
//               a.current = true;
//             }, [t]),
//             i
//               ? (0, JSX.jsx)(s, {
//                   children: i.delta,
//                 })
//               : (0, JSX.jsx)(JSX.Fragment, {
//                   children: n,
//                 })
//           );
//         }
//         var C = (0, _.z)('div')({
//             name: 'Wrapper',
//             class: 'w1irq87v',
//           }),
//           I = (0, _.z)('div')({
//             name: 'Count',
//             class: 'cbb9lkx',
//           }),
//           w = (0, _.z)('div')({
//             name: 'StillLearning',
//             class: 's1cg428y',
//           }),
//           O = (0, _.z)(I)({
//             name: 'StillLearningCount',
//             class: 's1e29328',
//           }),
//           N = (0, _.z)('div')({
//             name: 'Label',
//             class: 'l40n85g',
//           }),
//           k = (0, _.z)(N)({
//             name: 'StillLearningLabel',
//             class: 'soyu1j6',
//           }),
//           L = (0, _.z)('div')({
//             name: 'Know',
//             class: 'kj3bw3g',
//           }),
//           P = (0, _.z)(N)({
//             name: 'KnowLabel',
//             class: 'kahyre1',
//           }),
//           M = (0, _.z)(I)({
//             name: 'KnowCount',
//             class: 'kzo3tk',
//           }),
//           R = (0, _.z)(M)({
//             name: 'ActiveKnowCount',
//             class: 'as053jd',
//           }),
//           D = (0, _.z)(O)({
//             name: 'ActiveLearningCount',
//             class: 'axrvw3e',
//           }),
//           Z = (e) => {
//             var {knowCount: s, stillLearningCount: t} = e,
//               {t: n} = (0, E.Z)();
//             return (0, JSX.jsxs)(C, {
//               children: [
//                 (0, JSX.jsxs)(w, {
//                   children: [
//                     (0, JSX.jsx)(T, {
//                       animatedWrapper: D,
//                       count: t,
//                       children: (0, JSX.jsx)(O, {
//                         children: t,
//                       }),
//                     }),
//                     (0, JSX.jsx)(k, {
//                       children: n('modes.cards.header.still_learning_label'),
//                     }),
//                   ],
//                 }),
//                 (0, JSX.jsxs)(L, {
//                   children: [
//                     (0, JSX.jsx)(P, {
//                       children: n('modes.cards.header.know_label'),
//                     }),
//                     (0, JSX.jsx)(T, {
//                       animatedWrapper: R,
//                       count: s,
//                       children: (0, JSX.jsx)(M, {
//                         children: s,
//                       }),
//                     }),
//                   ],
//                 }),
//               ],
//             });
//           };
//         t(
//           './.linaria-cache/app/j/study-modes/cards/components/CardsHeader.linaria.css'
//         );
//         var F = t('./app/j/ads/components/studyModes/AdTimeLeft.tsx'),
//           z = t('./app/j/ads/context/StudyModeAdsContext.tsx'),
//           U = t('./app/j/assembly/buttons/types.ts'),
//           H = t(
//             './app/j/study-modes/redesigned_cards/components/CardsInteractionAlertMessage.tsx'
//           ),
//           W = t(
//             './app/j/study-modes/redesigned_cards/containers/CardsFooterBaseContainer.tsx'
//           );
//         function B(e) {
//           var {
//               cardsOrigin: s,
//               hasActionToUndo: t,
//               handleSkipAd: n,
//               handleToggleShuffleCards: a,
//               handleUndo: r,
//               isShowingCardsMwebAd: o,
//               isShuffled: i,
//               studiableContainerId: d,
//             } = e,
//             l = s === b.ou.SET_PAGE,
//             [u, c] = (0, f.useState)(null),
//             p = (0, z.Jt)().isVideoAd ? g.sV : g.mW,
//             m = {
//               disabled: !t,
//               onClick: () => {
//                 t && r();
//               },
//               variant: U.IQ.TERTIARY,
//             },
//             _ = {
//               onClick: () => {
//                 a(),
//                   c(
//                     (0, JSX.jsx)(H.Z, {
//                       interaction: 'shuffle',
//                       isToggledOn: !i,
//                     })
//                   );
//               },
//               variant: i ? U.IQ.SECONDARY : U.IQ.TERTIARY,
//             },
//             h = {
//               studiableContainerId: d,
//             };
//           return o && !l
//             ? (0, JSX.jsx)(F.Z, {
//                 content: (0, JSX.jsx)(W.Z, {
//                   fullscreenProps: h,
//                   handleSkipAd: n,
//                   interactionAlert: u,
//                   isMiniFlashcards: l,
//                   isShowingCardsMwebAd: o,
//                   setInteractionAlert: c,
//                   shouldRenderSkipAdButton: true,
//                   shuffleProps: _,
//                   undoProps: m,
//                 }),
//                 studyMode: Enums.aKJ.FLASHCARDS,
//                 timeLeft: p,
//               })
//             : (0, JSX.jsx)(W.Z, {
//                 fullscreenProps: h,
//                 handleSkipAd: n,
//                 interactionAlert: u,
//                 isMiniFlashcards: l,
//                 isShowingCardsMwebAd: o,
//                 setInteractionAlert: c,
//                 shuffleProps: _,
//                 undoProps: m,
//               });
//         }
//         var K = t('./app/j/study-modes/cards/utils/ads.ts'),
//           CardAnimation = t(
//             './app/j/study-modes/redesigned_cards/animations/CardAnimation.tsx'
//           ),
//           useCardAnimation = t(
//             './app/j/study-modes/redesigned_cards/animations/useCardAnimation.ts'
//           ),
//           q = t(
//             './app/j/study-modes/redesigned_cards/components/BaseCardViewWrapper.tsx'
//           ),
//           Q = t('./app/j/study-modes/redesigned_cards/data/ui/utils.ts'),
//           $ = t('./app/j/study-modes/redesigned_cards/hooks/useAutoplay.ts'),
//           Y = t('./app/j/compatibility/userAgentHelper.ts'),
//           J = t('./app/j/hooks/useSwipeListeners.ts'),
//           X =
//             (t('./node_modules/core-js/modules/es.promise.js'),
//             (0, t('./app/j/hocs/lazilyLoadComponent.tsx').Z)(() =>
//               t
//                 .e('swip_upsell_lazy')
//                 .then(
//                   t.bind(
//                     t,
//                     './app/j/study-modes/legacy-common/components/FlashcardSwipeUpsellModal.tsx'
//                   )
//                 )
//             ));
//         var ee = t(
//             './app/j/study-modes/redesigned_cards/keyboard/QuizModeShortcuts.ts'
//           ),
//           se = t(
//             './app/j/study-modes/redesigned_cards/keyboard/useKeyboardShortcuts.ts'
//           ),
//           te = t(
//             './app/j/study-modes/redesigned_cards/logging/useCardLogger.ts'
//           ),
//           ne = t(
//             './app/j/study-modes/redesigned_cards/ui/mini/ProgressText.tsx'
//           ),
//           ae = t(
//             './app/j/study-modes/redesigned_cards/ui/shared/AnswerControls.tsx'
//           ),
//           re = (0, _.z)('div')({
//             name: 'Wrapper',
//             class: 'w1hxlffd',
//           });
//         function oe(e) {
//           var {isHidden: s = false, onKnow: onKnow, onDontKnow: n} = e,
//             {t: t} = (0, E.Z)();
//           return (0, JSX.jsxs)(re, {
//             children: [
//               (0, JSX.jsx)(ae.Z, {
//                 ariaLabel: t('modes.cards.card_controls.previous_button_label'),
//                 isDisabled: s,
//                 onClick: s ? void 0 : n,
//                 children: t('assistant.reveal_self_assessment.still_learning'),
//               }),
//               (0, JSX.jsx)(ae.Z, {
//                 ariaLabel: t('modes.cards.card_controls.next_button_label'),
//                 isDisabled: s,
//                 onClick: s ? void 0 : onKnow,
//                 children: t('assistant.reveal_self_assessment.know'),
//               }),
//             ],
//           });
//         }
//         t(
//           './.linaria-cache/app/j/study-modes/redesigned_cards/ui/quiz/QuizNavigationControls.linaria.css'
//         );
//         var Flashcard = t(
//             './app/j/study-modes/redesigned_cards/ui/shared/Flashcard.tsx'
//           ),
//           FlashcardLabel = t(
//             './app/j/study-modes/redesigned_cards/ui/shared/FlashcardLabel.tsx'
//           );
//         function le(e) {
//           var {
//             question: s,
//             isFlipped: t,
//             onClickCard: n,
//             onKnow: a,
//             onDontKnow: r,
//           } = e;
//           return (0, JSX.jsx)(Flashcard.Z, {
//             elements: {
//               topLeft: (e) => {
//                 var {side: s, isShowing: t} = e;
//                 return (0, JSX.jsx)(FlashcardLabel.Z, {
//                   isHidden: !t,
//                   side: s,
//                 });
//               },
//               topCenter: () => (0, JSX.jsx)(ne.Z, {}),
//               buttons: (e) => {
//                 var {isShowing: s} = e;
//                 return (0, JSX.jsx)(oe, {
//                   isHidden: !s,
//                   onDontKnow: r,
//                   onKnow: a,
//                 });
//               },
//             },
//             isFlipped: t,
//             onClickCard: n,
//             question: s,
//           });
//         }
//         function LearnFlashCard(e) {
//           var {
//             question: s,
//             isFlipped: t,
//             onClickCard: n,
//             onKnow: a,
//             onDontKnow: r,
//           } = e;
//           return (0, JSX.jsx)(Flashcard.Z, {
//             elements: {
//               topLeft: (e) => {
//                 var {side: s, isShowing: t} = e;
//                 return (0, JSX.jsx)(FlashcardLabel.Z, {
//                   isHidden: !t,
//                   side: s,
//                 });
//               },
//               buttons: (e) => {
//                 var {isShowing: s} = e;
//                 return (0, JSX.jsx)(oe, {
//                   isHidden: !s,
//                   onDontKnow: r,
//                   onKnow: a,
//                 });
//               },
//             },
//             isFlipped: t,
//             onClickCard: n,
//             question: s,
//           });
//         }
//         var ce = t(
//             './app/j/study-modes/redesigned_cards/ui/review/ReviewActions.tsx'
//           ),
//           pe = t(
//             './app/j/study-modes/redesigned_cards/ui/shared/TwoSidedFlashcard.tsx'
//           );
//         function me(e) {
//           var {onDontKnow: s, onKnow: t, question: n} = e;
//           return (0, JSX.jsx)(pe.Z, {
//             elements: {
//               topLeft: (0, JSX.jsx)(FlashcardLabel.Z, {}),
//               topRight: (0, JSX.jsx)(ce.Z, {}),
//               buttons: (0, JSX.jsx)(oe, {
//                 onDontKnow: s,
//                 onKnow: t,
//               }),
//             },
//             question: n,
//           });
//         }
//         var _e = t(
//             './app/j/study-modes/redesigned_cards/ui/shared/FlashcardsEditingModal.tsx'
//           ),
//           he = (0, _.z)(q.Z)({
//             name: 'Wrapper',
//             class: 'w9n9u14',
//           }),
//           ge = (0, _.z)('div')({
//             name: 'FlashcardAdWrapper',
//             class: 'fef6tfw',
//             vars: {
//               'fef6tfw-0': [(e) => (e.isShowingAd ? 'grid' : 'none')],
//             },
//           }),
//           je = (e) => {
//             var {
//                 actions: actions,
//                 areCardsMovingForward: t,
//                 cardsOrigin: cardsOrigin,
//                 currentCardIndex: a,
//                 hasActionToUndo: r,
//                 isMiniFCMwebAdsEnabled: o,
//                 isCardFlipped: isFlipped,
//                 isRenderingMiniFCMwebAd: d,
//                 isShowingBothSides: l,
//                 isShowingCardsMwebAd: u,
//                 isShuffled: c,
//                 knowCount: p = 0,
//                 shouldLoadCardsMwebAd: m,
//                 stillLearningCount: _ = 0,
//                 studiableContainerId: studiableContainerId,
//                 question: question,
//               } = e,
//               T = (0, f.useRef)(null),
//               {logPageAction: C} = (0, y.wL)(),
//               {
//                 logQuestionEvent: logQuestionEvent,
//                 logSearchSetPageEngagement: w,
//               } = (0, te.Z)(),
//               {maybeRenderNotice: O} = (function (e) {
//                 var s = (0, Y.YQ)(),
//                   [t, n] = (0, f.useState)(false);
//                 return (
//                   (0, J.Z)(e, {
//                     onSwipe: () => n(true),
//                   }),
//                   {
//                     maybeRenderNotice: () =>
//                       s
//                         ? (0, JSX.jsx)(X, {
//                             isModalOpen: t,
//                           })
//                         : null,
//                   }
//                 );
//               })(T),
//               [N, k] = (0, f.useState)(Enums.AaD.KNOW),
//               L = cardsOrigin === b.ou.SET_PAGE,
//               P = (o && a === g.O8) || false;
//             (0, f.useEffect)(
//               () => (
//                 logQuestionEvent(Enums.WFi.VIEW_START, {
//                   question: question,
//                 }),
//                 () =>
//                   logQuestionEvent(Enums.WFi.VIEW_END, {
//                     question: question,
//                   })
//               ),
//               [question]
//             );
//             var M = (0, f.useMemo)(() => (0, ee.F)(cardsOrigin), [cardsOrigin]),
//               Controller = (0, useCardAnimation.O)();
//             (0, $.Z)(Controller), (0, se.Z)(M, Controller, T);
//             var D,
//               onKnow = (e) => {
//                 e.preventDefault(), e.stopPropagation();
//                 var t = (0, EngineUtils.Vq)(Enums.AaD.KNOW);
//                 C('flashcards_know_card', {
//                   origin: cardsOrigin,
//                 }),
//                   L && (0, Q.C$)(C, w, studiableContainerId),
//                   logQuestionEvent(Enums.WFi.ANSWER, {
//                     question: question,
//                     answer: t,
//                   }),
//                   Controller.animate('know'),
//                   actions.answerQuestion(t),
//                   k(Enums.AaD.KNOW);
//               },
//               onDontKnow = (e) => {
//                 e.preventDefault(), e.stopPropagation();
//                 var t = (0, EngineUtils.Vq)(Enums.AaD.DO_NOT_KNOW);
//                 C('flashcards_still_learning_card', {
//                   origin: cardsOrigin,
//                 }),
//                   L && (0, Q.C$)(C, w, studiableContainerId),
//                   logQuestionEvent(Enums.WFi.ANSWER, {
//                     question: question,
//                     answer: t,
//                   }),
//                   Controller.animate('dontKnow'),
//                   actions.answerQuestion(t),
//                   k(Enums.AaD.DO_NOT_KNOW);
//               },
//               onClickCard = () => {
//                 C('flashcards_flip_card', {
//                   origin: cardsOrigin,
//                 }),
//                   L && (0, Q.C$)(C, w, studiableContainerId),
//                   logQuestionEvent(Enums.WFi.REVEAL, {
//                     question: question,
//                   }),
//                   actions.flipCard();
//               },
//               H = () => {
//                 C('skip_ad_button_clicked');
//                 var e = (0, EngineUtils.Vq)(N);
//                 return t ? actions.answerQuestion(e) : actions.undoLastAnswer();
//               },
//               W =
//                 cardsOrigin === b.ou.SET_PAGE
//                   ? (0, JSX.jsx)(
//                       le,
//                       {
//                         isFlipped: isFlipped,
//                         onClickCard: onClickCard,
//                         onDontKnow: onDontKnow,
//                         onKnow: onKnow,
//                         question: question,
//                       },
//                       question.metadata.studiableItemId
//                     )
//                   : (0, JSX.jsx)(
//                       LearnFlashCard,
//                       {
//                         isFlipped: isFlipped,
//                         onClickCard: onClickCard,
//                         onDontKnow: onDontKnow,
//                         onKnow: onKnow,
//                         question: question,
//                       },
//                       question.metadata.studiableItemId
//                     );
//             return (0, JSX.jsxs)(he, {
//               ref: T,
//               children: [
//                 (0, JSX.jsx)(Z, {
//                   knowCount: p,
//                   stillLearningCount: _,
//                 }),
//                 u || d
//                   ? null
//                   : (0, JSX.jsx)(CardAnimation.Z, {
//                       controller: Controller,
//                       children: l
//                         ? (0, JSX.jsx)(
//                             me,
//                             {
//                               onDontKnow: onDontKnow,
//                               onKnow: onKnow,
//                               question: question,
//                             },
//                             question.metadata.studiableItemId
//                           )
//                         : W,
//                     }),
//                 (0, JSX.jsx)(ge, {
//                   isInMiniFlashcards: L,
//                   isShowingAd: u || d,
//                   children: (0, JSX.jsx)(
//                     h.Z,
//                     {
//                       id: L
//                         ? j.h.SET_PAGE_FLASHCARD_NATIVE
//                         : j.h.FLASHCARDS_NATIVE,
//                       isFullscreenFlashcard: !L,
//                       isSortingOn: true,
//                       onAdViewableCallback: () => {
//                         C('flashcard_ad_viewable');
//                       },
//                       onEmptyAd: H,
//                       shouldLoadCardsMwebAd:
//                         m || ((D = (0, K.b)(a)), !(!o || (!P && !D))),
//                       showing: u || d,
//                     },
//                     L ? j.h.SET_PAGE_FLASHCARD_NATIVE : j.h.FLASHCARDS_NATIVE
//                   ),
//                 }),
//                 (0, JSX.jsx)(B, {
//                   cardsOrigin: cardsOrigin,
//                   handleSkipAd: H,
//                   handleToggleShuffleCards: () => {
//                     C('flashcards_shuffle', {
//                       origin: cardsOrigin,
//                     }),
//                       actions.toggleShuffleCards();
//                   },
//                   handleUndo: () => {
//                     C('flashcards_undo', {
//                       origin: cardsOrigin,
//                     }),
//                       Controller.animate('undo'),
//                       actions.undoLastAnswer();
//                   },
//                   hasActionToUndo: r,
//                   isShowingCardsMwebAd: u || d,
//                   isShuffled: c,
//                   studiableContainerId: studiableContainerId,
//                 }),
//                 O(),
//                 (0, JSX.jsx)(_e.Z, {}),
//               ],
//             });
//           };
//         t(
//           './.linaria-cache/app/j/study-modes/redesigned_cards/ui/quiz/FullscreenQuizView.linaria.css'
//         );
//         var ye = (0, i.createStructuredSelector)({
//             areCardsMovingForward: l.eG,
//             cardsOrigin: m.bq,
//             currentCardIndex: c.yl,
//             hasActionToUndo: c.Gz,
//             isCardFlipped: m.ZV,
//             isMiniFCMwebAdsEnabled: l.ur,
//             isRenderingMiniFCMwebAd: l.dN,
//             isShowingBothSides: m.ju,
//             isShowingCardsMwebAd: l.kF,
//             isShuffled: m.Zz,
//             knowCount: c.tg,
//             question: c.wG,
//             shouldLoadCardsMwebAd: l.Wi,
//             stillLearningCount: c.XT,
//             studiableContainerId: d.uf,
//           }),
//           Se = (0, r.connect)(
//             ye,
//             (e) => ({
//               actions: (0, o.bindActionCreators)(
//                 {
//                   answerQuestion: u.tn,
//                   flipCard: p.GY,
//                   stopAndPlayAudio: n.DQ,
//                   toggleShuffleCards: u.lt,
//                   undoLastAnswer: u.gl,
//                 },
//                 e
//               ),
//             }),
//             null,
//             {
//               context: a.jJ,
//             }
//           )(je);
//       },
//     './app/j/study-modes/redesigned_cards/containers/FullscreenReviewViewContainer.tsx':
//       (e, s, t) => {
//         'use strict';
//         t.d(s, {
//           Z: () => ss,
//         });
//         var n = t('./app/j/audio_playback/thunks.ts'),
//           a = t('./app/j/core/default_store/DefaultStoreProvider.tsx'),
//           r = t('./node_modules/react-redux/lib/index.js'),
//           o = t('./node_modules/redux/lib/redux.js'),
//           i = t('./node_modules/reselect/lib/index.js'),
//           d = t('./app/j/study-modes/data/settings/selectors/preference.ts'),
//           l = t('./app/j/study-modes/data/studiable-data/selectors.ts'),
//           u = t('./app/j/study-modes/redesigned_cards/data/ads/selectors.ts'),
//           c = t('./app/j/study-modes/redesigned_cards/data/engine/actions.ts'),
//           p = t(
//             './app/j/study-modes/redesigned_cards/data/engine/selectors.ts'
//           ),
//           m = t('./app/j/study-modes/redesigned_cards/data/ui/index.ts'),
//           _ = t('./app/j/study-modes/redesigned_cards/data/ui/actions.ts'),
//           h = t('./app/j/study-modes/redesigned_cards/data/ui/selector.ts'),
//           g =
//             (t('./node_modules/core-js/modules/es.array.iterator.js'),
//             t('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
//             t('./node_modules/@linaria/react/lib/index.js')),
//           j = t('./app/j/ads/components/flashcards/FlashcardAd.tsx'),
//           y = t('./app/j/ads/enums/AdsNames.ts'),
//           S = t('./app/j/assembly/foundations/Spacing.ts'),
//           f = t('./app/j/compatibility/logger/useLogger.ts'),
//           v = t('./app/j/compatibility/userAgentHelper.ts'),
//           E = t('./app/j/config/enums.ts'),
//           x = t('./app/j/hooks/useSwipeListeners.ts'),
//           b = t('./node_modules/react/index.js'),
//           A = t('./app/j/study-engine/utils.ts'),
//           T = t('./app/j/study-modes/cards/utils/ads.ts'),
//           C = t(
//             './app/j/study-modes/redesigned_cards/animations/CardAnimation.tsx'
//           ),
//           I = t(
//             './app/j/study-modes/redesigned_cards/animations/useCardAnimation.ts'
//           ),
//           w = t(
//             './app/j/study-modes/redesigned_cards/components/BaseCardViewWrapper.tsx'
//           ),
//           O = t('./node_modules/@linaria/core/lib/index.js'),
//           N = t('./node_modules/react/jsx-runtime.js');
//         function k(e) {
//           var {
//               children: s,
//               flipCard: t,
//               shouldFlipAndShimmy: n,
//               onFlipAndShimmy: a,
//             } = e,
//             [r, o] = (0, b.useState)(false),
//             [i, d] = (0, b.useState)(false),
//             l = (0, b.useRef)(r);
//           (l.current = r),
//             (0, b.useEffect)(() => {
//               if (n) {
//                 var e;
//                 r ||
//                   (e = setTimeout(() => {
//                     t(), o(true);
//                   }, 750));
//                 var s = setTimeout(() => {
//                     l.current && (d(true), setTimeout(() => a(), 500));
//                   }, 1500),
//                   i = setTimeout(() => {
//                     d(false);
//                   }, 2e3);
//                 return () => {
//                   clearTimeout(e), clearTimeout(s), clearTimeout(i);
//                 };
//               }
//             }, [n]);
//           var u = (0, O.cx)(i && 'sz5a9pw');
//           return (0, N.jsx)('div', {
//             className: u,
//             children: s,
//           });
//         }
//         t(
//           './.linaria-cache/app/j/study-modes/redesigned_cards/components/CardsFlipAndShimmyAnimation.linaria.css'
//         );
//         var L = t('./app/j/study-modes/redesigned_cards/constants.ts'),
//           P = {
//             onClickNext: () => {},
//             onClickPrev: () => {},
//           },
//           M = (0, b.createContext)(P),
//           R = t('./app/j/study-modes/redesigned_cards/data/ui/utils.ts'),
//           D = t('./app/j/study-modes/redesigned_cards/hooks/useAutoplay.ts'),
//           Z = t('./app/j/context/UserContext.ts'),
//           F = t('./app/j/core/default_store/DefaultStore.ts'),
//           z = t('./app/j/study-modes/data/constants.ts'),
//           U = (0, i.createSelector)((0, F.iu)(z._$), (e) => e.onboarding),
//           H = (0, i.createSelector)(U, (e) => e.daysSinceLastVisit);
//         var W = t(
//           './app/j/study-modes/redesigned_cards/hooks/useIsInMiniFlashcardsExperiment.ts'
//         );
//         function B(e, s) {
//           var t = (function (e, s, t, n) {
//               return !(null === e || 0 !== e || !n) && (!s || t >= L.X4);
//             })(e, (0, b.useContext)(Z.Z), (0, a.v9)(H), s),
//             [n, r] = (0, b.useState)(false),
//             [o, i] = (0, b.useState)(false);
//           return {
//             shouldFlipAndShimmy: t && !n && !o,
//             setHasClickedCard: r,
//             setHasFlippedAndShimmied: i,
//           };
//         }
//         var K = t(
//             './app/j/study-modes/redesigned_cards/keyboard/ReviewModeShortcuts.ts'
//           ),
//           G = t(
//             './app/j/study-modes/redesigned_cards/keyboard/useKeyboardShortcuts.ts'
//           ),
//           V = t(
//             './app/j/study-modes/redesigned_cards/logging/useCardLogger.ts'
//           ),
//           q = t('./app/j/assembly/AssemblyChip.tsx'),
//           Q = t('./app/j/i18n/useTranslation.ts'),
//           $ = t(
//             './app/j/study-modes/redesigned_cards/ui/mini/ProgressText.tsx'
//           ),
//           Y = t(
//             './app/j/study-modes/redesigned_cards/ui/review/ReviewActions.tsx'
//           ),
//           J = t('./app/j/assembly/AssemblyIcon.tsx'),
//           X = t(
//             './app/j/study-modes/redesigned_cards/ui/shared/AnswerControls.tsx'
//           ),
//           ee = (0, g.z)('div')({
//             name: 'Wrapper',
//             class: 'w1sdvtcn',
//           }),
//           se = (0, g.z)('span')({
//             name: 'NavigationAction',
//             class: 'nnlsqua',
//           });
//         function te(e) {
//           var {
//               hasActionToUndo: s,
//               onNext: t,
//               onPrevious: n,
//               isHidden: a = false,
//             } = e,
//             {t: r} = (0, Q.Z)(),
//             o = !s || a;
//           return (0, N.jsxs)(ee, {
//             children: [
//               (0, N.jsx)(X.Z, {
//                 ariaLabel: r('modes.cards.card_controls.previous_button_label'),
//                 isDisabled: o,
//                 onClick: o
//                   ? (e) => {
//                       e.stopPropagation();
//                     }
//                   : n,
//                 children: (0, N.jsx)(se, {
//                   children: (0, N.jsx)(J.ZP, {
//                     icon: 'caret-left',
//                   }),
//                 }),
//               }),
//               (0, N.jsx)(X.Z, {
//                 ariaLabel: r('modes.cards.card_controls.next_button_label'),
//                 isDisabled: a,
//                 onClick: t,
//                 children: (0, N.jsx)(se, {
//                   children: (0, N.jsx)(J.ZP, {
//                     icon: 'caret-right',
//                   }),
//                 }),
//               }),
//             ],
//           });
//         }
//         t(
//           './.linaria-cache/app/j/study-modes/redesigned_cards/ui/review/ReviewNavigationControls.linaria.css'
//         );
//         var ne = t(
//             './app/j/study-modes/redesigned_cards/ui/shared/Flashcard.tsx'
//           ),
//           ae = t(
//             './app/j/study-modes/redesigned_cards/ui/shared/FlashcardLabel.tsx'
//           );
//         function re(e) {
//           var {
//               question: s,
//               hasActionToUndo: t,
//               isFlipped: n,
//               onClickCard: a,
//               onClickNext: r,
//               onClickPrevious: o,
//               shouldShowOnboarding: i,
//             } = e,
//             d = (0, v.YQ)(),
//             {t: l} = (0, Q.Z)();
//           return (0, N.jsx)(ne.Z, {
//             elements: {
//               topLeft: (e) => {
//                 var {side: s} = e;
//                 return (0, N.jsx)(ae.Z, {
//                   side: s,
//                 });
//               },
//               topCenter: () => (0, N.jsx)($.Z, {}),
//               topRight: () => (0, N.jsx)(Y.Z, {}),
//               buttons: () =>
//                 (0, N.jsx)(te, {
//                   hasActionToUndo: t,
//                   onNext: r,
//                   onPrevious: o,
//                 }),
//             },
//             isFlipped: n,
//             onClickCard: a,
//             overlayElement: (() => {
//               if (i) {
//                 var e = l(
//                   d
//                     ? 'modes.cards.onboarding.mobile.tap_to_flip'
//                     : 'modes.cards.onboarding.desktop.click_to_flip'
//                 );
//                 return (0, N.jsx)(q.Z, {
//                   text: e + ' 👆',
//                 });
//               }
//             })(),
//             question: s,
//           });
//         }
//         var oe = t('./app/j/ads/components/studyModes/AdTimeLeft.tsx'),
//           ie = t('./app/j/ads/constants/adConstants.ts'),
//           de = t('./app/j/ads/context/StudyModeAdsContext.tsx'),
//           le = t('./app/j/assembly/buttons/types.ts'),
//           ue = t(
//             './app/j/study-modes/redesigned_cards/components/CardsInteractionAlertMessage.tsx'
//           ),
//           ce = t(
//             './app/j/study-modes/redesigned_cards/containers/CardsFooterBaseContainer.tsx'
//           );
//         function pe(e) {
//           var {
//               handleSkipAd: s,
//               handleToggleAutoplay: t,
//               handleToggleShuffleCards: n,
//               isAutoplayOn: a,
//               isShowingCardsMwebAd: r,
//               isShuffled: o,
//               cardsOrigin: i,
//               studiableContainerId: d,
//             } = e,
//             {t: l} = (0, Q.Z)(),
//             u = i === L.ou.SET_PAGE,
//             [c, p] = (0, b.useState)(null),
//             m = (0, de.Jt)().isVideoAd ? ie.sV : ie.mW,
//             _ = {
//               icon: a ? 'pause' : 'play',
//               text: l(
//                 a ? 'modes.cards.options.pause' : 'modes.cards.options.play'
//               ),
//               key: a ? 'pause' : 'play',
//               onClick: () => {
//                 t(),
//                   p(
//                     (0, N.jsx)(ue.Z, {
//                       interaction: 'autoplay',
//                       isToggledOn: !a,
//                     })
//                   );
//               },
//               variant: a ? le.IQ.SECONDARY : le.IQ.TERTIARY,
//             },
//             h = {
//               onClick: () => {
//                 n(),
//                   p(
//                     (0, N.jsx)(ue.Z, {
//                       interaction: 'shuffle',
//                       isToggledOn: !o,
//                     })
//                   );
//               },
//               variant: o ? le.IQ.SECONDARY : le.IQ.TERTIARY,
//             },
//             g = {
//               studiableContainerId: d,
//             };
//           return r && !u
//             ? (0, N.jsx)(oe.Z, {
//                 content: (0, N.jsx)(ce.Z, {
//                   autoplayProps: _,
//                   fullscreenProps: g,
//                   handleSkipAd: s,
//                   interactionAlert: c,
//                   isMiniFlashcards: u,
//                   isShowingCardsMwebAd: r,
//                   setInteractionAlert: p,
//                   shouldRenderSkipAdButton: true,
//                   shuffleProps: h,
//                 }),
//                 studyMode: E.aKJ.FLASHCARDS,
//                 timeLeft: m,
//               })
//             : (0, N.jsx)(ce.Z, {
//                 autoplayProps: _,
//                 fullscreenProps: g,
//                 handleSkipAd: s,
//                 interactionAlert: c,
//                 isMiniFlashcards: u,
//                 isShowingCardsMwebAd: r,
//                 setInteractionAlert: p,
//                 shuffleProps: h,
//               });
//         }
//         var me = t('./app/j/assembly/AssemblyBreakpoint.tsx'),
//           _e = t('./app/j/hooks/useBreakpoint.ts'),
//           he = t('./app/j/lazy/OptionsModalContainerLazy.ts'),
//           ge = t('./app/j/study-modes/cards/components/CardsFooter.tsx'),
//           je = t(
//             './app/j/study-modes/cards/components/CardsToolbarKeyboardShortcutsList.tsx'
//           ),
//           ye = t(
//             './app/j/study-modes/cards/hooks/useInteractionAlertTimeout.ts'
//           ),
//           Se = t('./app/j/study-modes/data/logging/thunks.ts'),
//           fe = t('./app/j/assembly/AssemblyTooltip.tsx'),
//           ve = t('./app/j/assembly/buttons/index.ts');
//         function Ee() {
//           var e = (0, a.I0)(),
//             s = (0, a.v9)(h.We),
//             {t} = (0, Q.Z)(),
//             n = s ? 'pause' : 'play',
//             r = t(s ? 'modes.cards.options.pause' : 'modes.cards.options.play'),
//             o = s ? 'pause' : 'play',
//             i = s ? le.IQ.SECONDARY : le.IQ.TERTIARY;
//           return (0, N.jsx)(fe.Z, {
//             offset: L.Cy,
//             text: r,
//             children: (0, N.jsx)(
//               ve.JZ,
//               {
//                 alt: r,
//                 icon: n,
//                 onClick: () => e((0, m.by)()),
//                 size: 'medium',
//                 variant: i,
//               },
//               o
//             ),
//           });
//         }
//         var xe = (0, g.z)('div')({
//             name: 'Footer',
//             class: 'f1yz2hqp',
//           }),
//           be = (0, g.z)('div')({
//             name: 'LeftWrapper',
//             class: 'lyzzf1s',
//           }),
//           Ae = (0, g.z)('div')({
//             name: 'CenterWrapper',
//             class: 'c1myr3p4',
//           }),
//           Te = (0, g.z)('div')({
//             name: 'RightWrapper',
//             class: 'r1ta8pip',
//           });
//         function Ce(e) {
//           var {left: s, center: t, right: n} = e;
//           return (0, N.jsxs)(xe, {
//             children: [
//               (0, N.jsx)(be, {
//                 children: s,
//               }),
//               (0, N.jsx)(Ae, {
//                 children: t,
//               }),
//               (0, N.jsx)(Te, {
//                 children: n,
//               }),
//             ],
//           });
//         }
//         t(
//           './.linaria-cache/app/j/study-modes/redesigned_cards/components/footer/BaseFooter.linaria.css'
//         );
//         var Ie = t('./app/j/ads/components/studyModes/ContinueButton.tsx'),
//           we = (0, g.z)('div')({
//             name: 'ContinueButtonWrapper',
//             class: 'c83ufwu',
//           });
//         function Oe(e) {
//           var {isMiniFlashcards: s, handleSkipAd: t} = e,
//             n = (0, de.Jt)().isVideoAd ? ie.sV : ie.mW;
//           return (0, N.jsx)(oe.Z, {
//             content: (0, N.jsx)(we, {
//               className: 'm1gymz7q',
//               children: (0, N.jsx)(Ie.Z, {
//                 onClick: t,
//               }),
//             }),
//             isMiniFlashcards: s,
//             studyMode: E.aKJ.FLASHCARDS,
//             timeLeft: n,
//           });
//         }
//         t(
//           './.linaria-cache/app/j/study-modes/redesigned_cards/components/footer/FlashcardsAdsTimeLeftButton.linaria.css'
//         );
//         var Ne = t('./app/j/utils/ModeHelper.ts');
//         function ke() {
//           var {t: e} = (0, Q.Z)(),
//             s = (0, f.qL)(),
//             t = (0, a.v9)(l.uf),
//             n = e('modes.mode_controls.fullscreen_button');
//           return (0, N.jsx)(fe.Z, {
//             offset: L.Cy,
//             text: n,
//             children: (0, N.jsx)(
//               ve.JZ,
//               {
//                 alt: n,
//                 icon: 'fullscreen',
//                 linkTo: (0, Ne.$2)(t, Ne.II, false),
//                 onClick: () =>
//                   s('flashcards_fullscreen', {
//                     origin,
//                     sorting_enabled: false,
//                   }),
//                 size: 'medium',
//                 variant: le.IQ.TERTIARY,
//               },
//               'fullscreen'
//             ),
//           });
//         }
//         function Le() {
//           var {onClickNext: e, onClickPrev: s} = (0, b.useContext)(M);
//           return {
//             onClickNext: e,
//             onClickPrev: s,
//           };
//         }
//         function Pe() {
//           var {onClickNext: e, onClickPrev: s} = Le();
//           return (0, N.jsxs)(ge.GW, {
//             children: [
//               (0, N.jsx)(ve.JZ, {
//                 icon: 'system-arrow-left',
//                 onClick: () => s(),
//                 size: 'large',
//               }),
//               (0, N.jsx)($.Z, {}),
//               (0, N.jsx)(ve.JZ, {
//                 icon: 'system-arrow-right',
//                 onClick: () => e(),
//                 size: 'large',
//               }),
//             ],
//           });
//         }
//         function Me(e) {
//           var {handleOnClickOptions: s} = e,
//             {t} = (0, Q.Z)(),
//             n = t('modes.mode_controls.options_button');
//           return (0, N.jsx)(fe.Z, {
//             offset: L.Cy,
//             text: n,
//             children: (0, N.jsx)(ve.JZ, {
//               alt: n,
//               icon: 'settings',
//               onClick: s,
//               size: 'medium',
//               variant: le.IQ.TERTIARY,
//             }),
//           });
//         }
//         function Re(e) {
//           var {setInteractionAlert: s} = e,
//             t = (0, a.I0)(),
//             n = (0, a.v9)(h.bq),
//             r = (0, a.v9)(h.Zz),
//             o = (0, f.qL)(),
//             {t: i} = (0, Q.Z)();
//           var d = r ? le.IQ.SECONDARY : le.IQ.TERTIARY;
//           return (0, N.jsx)(fe.Z, {
//             offset: L.Cy,
//             text: i('modes.cards.options.shuffle'),
//             children: (0, N.jsx)(
//               ve.JZ,
//               {
//                 alt: i('modes.cards.options.shuffle'),
//                 icon: 'shuffle',
//                 onClick: function () {
//                   o('flashcards_shuffle', {
//                     origin: n,
//                   }),
//                     t((0, c.lt)()),
//                     s(
//                       (0, N.jsx)(ue.Z, {
//                         interaction: 'shuffle',
//                         isToggledOn: !r,
//                       })
//                     );
//                 },
//                 size: 'medium',
//                 variant: d,
//               },
//               'shuffle'
//             ),
//           });
//         }
//         var De = t(
//             './app/j/study-modes/redesigned_cards/keyboard/useShortcutsLabels.ts'
//           ),
//           Ze = t('./app/j/utils/BreakpointsHelper.ts');
//         function Fe(e) {
//           var {
//               handleSkipAd: s,
//               interactionAlert: t,
//               isShowingCardsMwebAd: n,
//               setInteractionAlert: r,
//             } = e,
//             o = (0, a.I0)(),
//             i = (0, _e.Z)(),
//             d = (0, b.useContext)(Z.Z),
//             l = (0, De.Z)(),
//             [u, p] = (0, b.useState)(null);
//           (0, b.useEffect)(() => {
//             if (null !== u) {
//               var e = u ? E.WVJ.ENTER_SCREEN : E.WVJ.EXIT_SCREEN;
//               o(
//                 (0, Se.pJ)({
//                   action: e,
//                   extraData: {
//                     screen: E.HtK.SETTINGS,
//                   },
//                 })
//               );
//             }
//           }, [u, Se.pJ]),
//             (0, ye.Z)(t, r);
//           var m = (0, Ze.P0)(i, 'l')
//             ? (0, N.jsx)(je.Z, {
//                 divided: true,
//                 keyboardShortcutsList: l,
//               })
//             : void 0;
//           return (0, N.jsxs)(N.Fragment, {
//             children: [
//               u &&
//                 null !== d &&
//                 (0, N.jsx)(he.Z, {
//                   cardsOrigin: L.ou.SET_PAGE,
//                   isModalOpen: true,
//                   keyboardShortcuts: m,
//                   onCloseModal: (e) => {
//                     e.has('studyStarredOnly') && o((0, c.VW)()),
//                       p(false),
//                       o((0, c.VP)());
//                   },
//                   onResetProgress: () => {
//                     o(
//                       (0, Se.pJ)({
//                         action: E.WVJ.RESTART,
//                         extraData: {
//                           screen: E.HtK.SETTINGS,
//                         },
//                       })
//                     ),
//                       o((0, c.VW)()),
//                       p(false);
//                   },
//                 }),
//               (0, N.jsx)(Ce, {
//                 center: n
//                   ? (0, N.jsx)(Oe, {
//                       handleSkipAd: s,
//                       isMiniFlashcards: true,
//                     })
//                   : (0, N.jsx)(Pe, {}),
//                 'data-testid': 'MiniReviewFooter',
//                 left: (0, N.jsxs)(ge.GW, {
//                   children: [
//                     (0, N.jsx)(Ee, {}),
//                     (0, N.jsx)(me.ZP, {
//                       lowerBound: 's',
//                       children: (0, N.jsx)(Re, {
//                         setInteractionAlert: r,
//                       }),
//                     }),
//                   ],
//                 }),
//                 right: (0, N.jsxs)(ge.GW, {
//                   children: [
//                     (0, N.jsx)(me.ZP, {
//                       lowerBound: 's',
//                       children:
//                         null !== d
//                           ? (0, N.jsx)(Me, {
//                               handleOnClickOptions: () => {
//                                 p(true);
//                               },
//                             })
//                           : (0, N.jsx)(ge.tL, {}),
//                     }),
//                     (0, N.jsx)(ke, {}),
//                   ],
//                 }),
//               }),
//             ],
//           });
//         }
//         var ze = (0, g.z)(ge.GW)({
//           name: 'ActionWrapperWide',
//           class: 'a1ps69o3',
//         });
//         function Ue() {
//           var {onClickNext: e, onClickPrev: s} = Le();
//           return (0, N.jsxs)(ze, {
//             children: [
//               (0, N.jsx)(ve.JZ, {
//                 icon: 'system-arrow-left',
//                 onClick: () => s(),
//                 size: 'large',
//               }),
//               (0, N.jsx)(ve.JZ, {
//                 icon: 'system-arrow-right',
//                 onClick: () => e(),
//                 size: 'large',
//               }),
//             ],
//           });
//         }
//         t(
//           './.linaria-cache/app/j/study-modes/redesigned_cards/components/footer/NavButtons.linaria.css'
//         );
//         var He = (0, g.z)('div')({
//             name: 'ContinueButtonWrapper',
//             class: 'ctey21k',
//           }),
//           We = (0, g.z)('div')({
//             name: 'FooterWrapper',
//             class: 'f1e1hude',
//           });
//         function Be(e) {
//           var {
//             handleSkipAd: s,
//             interactionAlert: t,
//             isShowingCardsMwebAd: n,
//             setInteractionAlert: a,
//           } = e;
//           (0, ye.Z)(t, a);
//           var r = (0, de.Jt)().isVideoAd ? ie.sV : ie.mW;
//           return n
//             ? (0, N.jsx)(ge.a8, {
//                 children: (0, N.jsx)(oe.Z, {
//                   content: (0, N.jsx)(He, {
//                     className: 'm1xegw9s',
//                     children: (0, N.jsx)(Ie.Z, {
//                       buttonSize: 'large',
//                       isFullWidth: true,
//                       onClick: s,
//                     }),
//                   }),
//                   studyMode: E.aKJ.FLASHCARDS,
//                   timeLeft: r,
//                 }),
//               })
//             : (0, N.jsx)(We, {
//                 children: (0, N.jsx)(Ce, {
//                   center: (0, N.jsx)(Ue, {}),
//                   'data-testid': 'ReviewFooter',
//                   left: (0, N.jsx)(ge.GW, {
//                     children: (0, N.jsx)(Ee, {}),
//                   }),
//                   right: (0, N.jsx)(ge.GW, {
//                     children: (0, N.jsx)(Re, {
//                       setInteractionAlert: a,
//                     }),
//                   }),
//                 }),
//               });
//         }
//         function Ke(e) {
//           var {handleSkipAd: s, isShowingCardsMwebAd: t, isMiniFC: n} = e,
//             [a, r] = (0, b.useState)(null);
//           return n
//             ? (0, N.jsx)(Fe, {
//                 handleSkipAd: s,
//                 interactionAlert: a,
//                 isShowingCardsMwebAd: t,
//                 setInteractionAlert: r,
//               })
//             : (0, N.jsx)(Be, {
//                 handleSkipAd: s,
//                 interactionAlert: a,
//                 isShowingCardsMwebAd: t,
//                 setInteractionAlert: r,
//               });
//         }
//         function Ge(e) {
//           var {
//             question: s,
//             hasActionToUndo: t,
//             isFlipped: n,
//             onClickCard: a,
//             onClickNext: r,
//             onClickPrevious: o,
//           } = e;
//           return (0, N.jsx)(ne.Z, {
//             elements: {
//               topLeft: (e) => {
//                 var {side: s, isShowing: t} = e;
//                 return (0, N.jsx)(ae.Z, {
//                   isHidden: !t,
//                   side: s,
//                 });
//               },
//               topRight: (e) => {
//                 var {isShowing: s} = e;
//                 return (0, N.jsx)(Y.Z, {
//                   isHidden: !s,
//                 });
//               },
//               buttons: (e) => {
//                 var {isShowing: s} = e;
//                 return (0, N.jsx)(te, {
//                   hasActionToUndo: t,
//                   isHidden: !s,
//                   onNext: r,
//                   onPrevious: o,
//                 });
//               },
//             },
//             isFlipped: n,
//             onClickCard: a,
//             question: s,
//           });
//         }
//         t(
//           './.linaria-cache/app/j/study-modes/redesigned_cards/components/footer/ReviewFooterV2.linaria.css'
//         );
//         var Ve = t(
//           './app/j/study-modes/redesigned_cards/ui/shared/TwoSidedFlashcard.tsx'
//         );
//         function qe(e) {
//           var {
//             onClickNext: s,
//             onClickPrevious: t,
//             hasActionToUndo: n,
//             question: a,
//           } = e;
//           return (0, N.jsx)(Ve.Z, {
//             'data-testid': 'Card',
//             elements: {
//               topLeft: (0, N.jsx)(ae.Z, {}),
//               topRight: (0, N.jsx)(Y.Z, {}),
//               buttons: (0, N.jsx)(te, {
//                 hasActionToUndo: n,
//                 onNext: s,
//                 onPrevious: t,
//               }),
//             },
//             question: a,
//           });
//         }
//         var Qe = t(
//             './app/j/study-modes/redesigned_cards/ui/shared/FlashcardsEditingModal.tsx'
//           ),
//           $e = (0, g.z)(w.Z)({
//             name: 'Wrapper',
//             class: 'w1tt3fd6',
//             vars: {
//               'w1tt3fd6-0': [
//                 (e) =>
//                   e.isMiniFC ? 'calc(100% - ' + S.Ki.Small + ')' : '100%',
//               ],
//               'w1tt3fd6-2': [
//                 (e) =>
//                   e.isMiniFC ? 'calc(100% - ' + S.Ki.Xsmall + ')' : '100%',
//               ],
//             },
//           }),
//           Ye = (0, g.z)('div')({
//             name: 'FlashcardAdWrapper',
//             class: 'f1vn9erm',
//             vars: {
//               'f1vn9erm-0': [(e) => (e.isShowingAd ? 'grid' : 'none')],
//             },
//           });
//         function Je(e) {
//           return function (s) {
//             s.stopPropagation(), e();
//           };
//         }
//         var Xe = (e) => {
//           var {
//               actions: s,
//               areCardsMovingForward: t,
//               currentCardIndex: n,
//               cardsOrigin: r,
//               hasActionToUndo: o,
//               isMiniFCMwebAdsEnabled: i,
//               isAutoplayOn: d,
//               isCurrentCardFlipped: l,
//               isRenderingMiniFCMwebAd: u,
//               isShowingBothSides: c,
//               isShowingCardsMwebAd: p,
//               isShuffled: m,
//               question: _,
//               shouldLoadCardsMwebAd: h,
//               studiableContainerId: g,
//             } = e,
//             S = (0, v.YQ)(),
//             w = r === L.ou.SET_PAGE,
//             {
//               shouldFlipAndShimmy: O,
//               setHasClickedCard: P,
//               setHasFlippedAndShimmied: F,
//             } = B(n, w),
//             z = (0, b.useRef)(null),
//             {logPageAction: U} = (0, f.wL)(),
//             {logQuestionEvent: q, logSearchSetPageEngagement: Q} = (0, V.Z)();
//           (0, x.Z)(z, {
//             onSwipe: () => {},
//             onSwipeLeft: () => {
//               S && ne(true);
//             },
//             onSwipeRight: () => {
//               S && oe(true);
//             },
//           });
//           var $ = (0, I.O)();
//           (0, D.Z)($),
//             (0, b.useEffect)(
//               () => (
//                 q(E.WFi.VIEW_START, {
//                   question: _,
//                 }),
//                 c &&
//                   q(E.WFi.REVEAL, {
//                     question: _,
//                   }),
//                 () =>
//                   q(E.WFi.VIEW_END, {
//                     question: _,
//                   })
//               ),
//               [_, c]
//             );
//           var Y = (0, b.useMemo)(() => (0, K.e)(r), [r]);
//           (0, G.Z)(Y, $, z);
//           var J,
//             X,
//             [ee, se] = (function (e) {
//               var s = null === (0, b.useContext)(Z.Z),
//                 t = (0, a.v9)(H),
//                 [n, r] = (0, b.useState)(false);
//               return [((!s && t >= L.X4) || s) && !n && e, () => r(true)];
//             })(0 === n && w),
//             te = () => {
//               U('flashcards_flip_card', {
//                 origin: r,
//               }),
//                 q(E.WFi.REVEAL, {
//                   question: _,
//                 }),
//                 w && (0, R.C$)(U, Q, g),
//                 ee && se(),
//                 s.onClickCard(),
//                 P(true);
//             },
//             ne = (e) => {
//               U('flashcards_next_card', {
//                 origin: r,
//                 swipe: e,
//               }),
//                 w && (0, R.C$)(U, Q, g);
//               var t = (0, A.Vq)(E.AaD.SKIP);
//               $.animate('next'), s.onClickNext(t);
//             },
//             ae = Je(() => ne(false)),
//             oe = (e) => {
//               U('flashcards_previous_card', {
//                 origin: r,
//                 swipe: e,
//               }),
//                 w && (0, R.C$)(U, Q, g),
//                 $.animate('previous'),
//                 s.onClickPrevious();
//             },
//             ie = Je(() => oe(false)),
//             de = () => {
//               U('skip_ad_button_clicked');
//               var e = (0, A.Vq)(E.AaD.SKIP);
//               return t ? s.onClickNext(e) : s.onClickPrevious();
//             },
//             le = w
//               ? (0, N.jsx)(
//                   re,
//                   {
//                     hasActionToUndo: o,
//                     isFlipped: l,
//                     onClickAudio: s.stopAndPlayAudio,
//                     onClickCard: te,
//                     onClickNext: ae,
//                     onClickPrevious: ie,
//                     question: _,
//                     shouldShowOnboarding: ee,
//                   },
//                   _.metadata.studiableItemId
//                 )
//               : (0, N.jsx)(
//                   Ge,
//                   {
//                     hasActionToUndo: o,
//                     isFlipped: l,
//                     onClickCard: te,
//                     onClickNext: ae,
//                     onClickPrevious: ie,
//                     question: _,
//                   },
//                   _.metadata.studiableItemId
//                 ),
//             ue = (0, W.e)();
//           return (0, N.jsxs)($e, {
//             isMiniFC: w,
//             ref: z,
//             children: [
//               p || u
//                 ? null
//                 : ((X = c
//                     ? (0, N.jsx)(
//                         qe,
//                         {
//                           hasActionToUndo: o,
//                           onClickNext: ae,
//                           onClickPrevious: ie,
//                           question: _,
//                         },
//                         _.metadata.studiableItemId
//                       )
//                     : le),
//                   O
//                     ? (0, N.jsx)(k, {
//                         flipCard: s.flipCardForOnboarding,
//                         onFlipAndShimmy: () => F(true),
//                         shouldFlipAndShimmy: O,
//                         children: X,
//                       })
//                     : (0, N.jsx)(C.Z, {
//                         controller: $,
//                         children: X,
//                       })),
//               (0, N.jsx)(Ye, {
//                 isMiniFC: w,
//                 isShowingAd: p || u,
//                 children: (0, N.jsx)(
//                   j.Z,
//                   {
//                     id: w
//                       ? y.h.SET_PAGE_FLASHCARD_NATIVE
//                       : y.h.FLASHCARDS_NATIVE,
//                     isFullscreenFlashcard: !w,
//                     onAdViewableCallback: () => {
//                       U('flashcard_ad_viewable');
//                     },
//                     onEmptyAd: de,
//                     shouldLoadCardsMwebAd:
//                       h || ((J = (0, T.b)(n)), !(!w || !i || (!u && !J))),
//                     showing: p || u,
//                   },
//                   w ? y.h.SET_PAGE_FLASHCARD_NATIVE : y.h.FLASHCARDS_NATIVE
//                 ),
//               }),
//               (0, N.jsx)(M.Provider, {
//                 value: {
//                   onClickNext: () => ne(false),
//                   onClickPrev: () => oe(false),
//                 },
//                 children: ue
//                   ? (0, N.jsx)(Ke, {
//                       handleSkipAd: de,
//                       isMiniFC: w,
//                       isShowingCardsMwebAd: p || u,
//                     })
//                   : (0, N.jsx)(pe, {
//                       cardsOrigin: r,
//                       handleSkipAd: de,
//                       handleToggleAutoplay: () => {
//                         U('flashcards_toggle_auto_play', {
//                           origin: r,
//                         }),
//                           s.toggleAutoplay();
//                       },
//                       handleToggleShuffleCards: () => {
//                         U('flashcards_shuffle', {
//                           origin: r,
//                         }),
//                           s.toggleShuffleCards();
//                       },
//                       isAutoplayOn: d,
//                       isShowingCardsMwebAd: p || u,
//                       isShuffled: m,
//                       studiableContainerId: g,
//                     }),
//               }),
//               (0, N.jsx)(Qe.Z, {}),
//             ],
//           });
//         };
//         t(
//           './.linaria-cache/app/j/study-modes/redesigned_cards/ui/review/FullscreenReviewView.linaria.css'
//         );
//         var es = (0, i.createStructuredSelector)({
//             advancedAudioSettings: d.o3,
//             areCardsMovingForward: u.eG,
//             cardsOrigin: h.bq,
//             currentCardIndex: p.yl,
//             engineAdsState: p.uF,
//             hasActionToUndo: p.Gz,
//             isAutoplayOn: h.We,
//             isAudioOn: d.zK,
//             isCurrentCardFlipped: h.ZV,
//             isMiniFCMwebAdsEnabled: u.ur,
//             isRenderingMiniFCMwebAd: u.dN,
//             isShowingBothSides: h.ju,
//             isShowingCardsMwebAd: u.kF,
//             isShuffled: h.Zz,
//             numQuestions: p.UO,
//             question: p.wG,
//             shouldLoadCardsMwebAd: u.Wi,
//             starredItemIds: l.Cv,
//             studiableContainerId: l.uf,
//           }),
//           ss = (0, r.connect)(
//             es,
//             (e) => ({
//               actions: (0, o.bindActionCreators)(
//                 {
//                   editableStudiableItemIds: l.KH,
//                   onClickCard: _.GY,
//                   onClickNext: c.tn,
//                   onClickPrevious: c.gl,
//                   flipCardForOnboarding: m.bD,
//                   saveCardEdit: _.XU,
//                   stopAndPlayAudio: n.DQ,
//                   toggleIsEditing: m.lT,
//                   toggleAutoplay: m.by,
//                   toggleShuffleCards: c.lt,
//                 },
//                 e
//               ),
//             }),
//             null,
//             {
//               context: a.jJ,
//             }
//           )(Xe);
//       },
//     './app/j/study-modes/redesigned_cards/data/ads/index.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         HL: () => u,
//         LM: () => p,
//         S1: () => d,
//         Sy: () => m,
//         kc: () => l,
//         nz: () => c,
//       });
//       var n = t(
//           './node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js'
//         ),
//         a = t('./app/j/study-modes/redesigned_cards/data/constants.ts'),
//         r = t('./app/j/study-modes/redesigned_cards/data/types.ts'),
//         o = (0, n.createSlice)({
//           name: r.Gq,
//           initialState: {
//             shouldShowCardIntervalAd: false,
//             cardsView: a.S1.CARDS_VIEW,
//             isAdsInCardsEnabled: false,
//             isMiniFCMwebAdsEnabled: false,
//             mwebAdsState: {
//               areCardsMovingForward: true,
//               isRenderingMiniFCMwebAd: false,
//               isShowingCardsMwebAd: false,
//               shouldLoadCardsMwebAd: false,
//             },
//           },
//           reducers: {
//             init(e, s) {
//               var t,
//                 n,
//                 a,
//                 {payload: r} = s;
//               (e.shouldShowCardIntervalAd =
//                 null != (t = r.shouldShowCardIntervalAd) && t),
//                 (e.isAdsInCardsEnabled =
//                   null != (n = r.isAdsInCardsEnabled) && n),
//                 (e.isMiniFCMwebAdsEnabled =
//                   null != (a = r.isMiniFCMwebAdsEnabled) && a);
//             },
//             setAreCardsMovingForward(e, s) {
//               var {payload: t} = s;
//               e.mwebAdsState.areCardsMovingForward = t;
//             },
//             setIsRenderingMiniFCMwebAd(e, s) {
//               var {payload: t} = s;
//               e.mwebAdsState.isRenderingMiniFCMwebAd = t;
//             },
//             setIsShowingCardsMwebAd(e, s) {
//               var {payload: t} = s;
//               e.mwebAdsState.isShowingCardsMwebAd = t;
//             },
//             setShouldLoadCardsMwebAd(e, s) {
//               var {payload: t} = s;
//               e.mwebAdsState.shouldLoadCardsMwebAd = t;
//             },
//             setCardsView(e, s) {
//               var {payload: t} = s;
//               e.cardsView = t;
//             },
//           },
//         }),
//         i = o.reducer,
//         {
//           init: d,
//           setAreCardsMovingForward: l,
//           setCardsView: u,
//           setIsRenderingMiniFCMwebAd: c,
//           setIsShowingCardsMwebAd: p,
//           setShouldLoadCardsMwebAd: m,
//         } = o.actions;
//       s.ZP = i;
//     },
//     './app/j/study-modes/redesigned_cards/data/ads/selectors.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Wi: () => f,
//         dN: () => y,
//         eG: () => j,
//         iJ: () => p,
//         iy: () => m,
//         kF: () => S,
//         n_: () => _,
//         ur: () => h,
//       });
//       var n = t('./app/j/core/default_store/DefaultStore.ts'),
//         a = t('./node_modules/reselect/lib/index.js'),
//         r = t('./app/j/study-modes/redesigned_cards/data/constants.ts'),
//         o = t('./app/j/study-modes/redesigned_cards/data/types.ts'),
//         i = {
//           numCardsPriorToPreloadAds: 2,
//           numCardsToShowAds: 7,
//         },
//         d = (0, a.createSelector)((0, n.iu)(o.sF), (e) => e.ads),
//         l = (0, a.createSelector)(d, (e) => e.shouldShowCardIntervalAd),
//         u = (0, a.createSelector)(d, (e) => e.cardsView),
//         c = (0, a.createSelector)(u, (e) => e === r.S1.AD_MODAL),
//         p = (e) => o.sF in e && c(e),
//         m = (0, a.createSelector)(l, (e) =>
//           e
//             ? Object.assign({}, i, {
//                 numCardsToShowAds: 15,
//               })
//             : null
//         ),
//         _ = (0, a.createSelector)(d, (e) => e.isAdsInCardsEnabled),
//         h = (0, a.createSelector)(d, (e) => e.isMiniFCMwebAdsEnabled),
//         g = (0, a.createSelector)(d, (e) => e.mwebAdsState),
//         j = (0, a.createSelector)(g, (e) => e.areCardsMovingForward),
//         y = (0, a.createSelector)(g, (e) => e.isRenderingMiniFCMwebAd),
//         S = (0, a.createSelector)(g, (e) => e.isShowingCardsMwebAd),
//         f = (0, a.createSelector)(g, (e) => e.shouldLoadCardsMwebAd);
//     },
//     './app/j/study-modes/redesigned_cards/data/constants.ts': (e, s, t) => {
//       'use strict';
//       var n;
//       t.d(s, {
//         S1: () => n,
//         _b: () => o,
//         cg: () => r,
//         ou: () => a,
//       }),
//         (function (e) {
//           (e[(e.AD_MODAL = 0)] = 'AD_MODAL'),
//             (e[(e.CARDS_VIEW = 1)] = 'CARDS_VIEW'),
//             (e[(e.FINISHED_VIEW = 2)] = 'FINISHED_VIEW'),
//             (e[(e.LEARN_UPSELL_VIEW = 3)] = 'LEARN_UPSELL_VIEW'),
//             (e[(e.SIGNUP_WALL = 4)] = 'SIGNUP_WALL');
//         })(n || (n = {}));
//       var a,
//         r = {
//           acceptsPartialAnswer: false,
//           answerWith: {
//             definition: false,
//             location: false,
//             term: true,
//           },
//           promptWith: {
//             definition: true,
//             location: true,
//             term: false,
//           },
//         },
//         o = {
//           acceptsPartialAnswer: false,
//           answerWith: {
//             definition: true,
//             location: false,
//             term: false,
//           },
//           promptWith: {
//             definition: false,
//             location: false,
//             term: true,
//           },
//         };
//       !(function (e) {
//         (e.MODE = 'mode'), (e.SET_PAGE = 'set_page');
//       })(a || (a = {}));
//     },
//     './app/j/study-modes/redesigned_cards/data/engine/actions.ts': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         Av: () => P,
//         Co: () => N,
//         Lr: () => A,
//         PY: () => w,
//         VP: () => T,
//         VW: () => I,
//         _X: () => C,
//         _s: () => L,
//         gl: () => b,
//         lt: () => k,
//         tn: () => x,
//         tz: () => O,
//       });
//       var n = t(
//           './node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
//         ),
//         a = t('./node_modules/immer/dist/immer.cjs.production.min.js'),
//         r = t('./node_modules/react-redux/lib/index.js'),
//         o = t('./app/j/study-modes/cards/constants.ts'),
//         i = t('./app/j/study-modes/cards/utils/index.ts'),
//         d = t('./app/j/study-modes/cards/utils/ads.ts'),
//         l = t('./app/j/study-modes/data/settings/actions.ts'),
//         u = t('./app/j/study-modes/data/settings/index.ts'),
//         c = t('./app/j/study-modes/data/settings/selectors/preference.ts'),
//         p = t('./app/j/study-modes/redesigned_cards/data/ads/index.ts'),
//         m = t('./app/j/study-modes/redesigned_cards/data/ads/selectors.ts'),
//         _ = t('./app/j/study-modes/redesigned_cards/data/engine/index.ts'),
//         h = t('./app/j/study-modes/redesigned_cards/data/engine/selectors.ts'),
//         g = t('./app/j/study-modes/redesigned_cards/data/engine/thunks.ts'),
//         j = t('./app/j/study-modes/redesigned_cards/data/onboarding/index.tsx'),
//         y = t('./app/j/study-modes/redesigned_cards/data/ui/index.ts'),
//         S = t('./app/j/study-modes/redesigned_cards/data/ui/actions.ts'),
//         f = t('./app/j/utils/isAdBlockerEnabled.ts'),
//         v = t('./app/j/utils/tamperProofNow.ts'),
//         E = (e, s) => s || (0, d.b)(e),
//         x = (e) =>
//           (function () {
//             var s = (0, n.Z)(function* (s, t) {
//               var n = t(),
//                 a = (0, h.V9)(n);
//               if ((s((0, p.kc)(true)), (0, m.ur)(n) && !(0, f.ZP)())) {
//                 var o = (0, m.dN)(n),
//                   i = (0, h.yl)(n) || 0,
//                   l = (0, d.r)(o, i + 1);
//                 if ((l ? s((0, p.nz)(true)) : o && s((0, p.nz)(false)), l))
//                   return;
//               }
//               if ((0, m.n_)(n) && !(0, f.ZP)()) {
//                 var c = (0, m.kF)(n),
//                   g = (0, h.yl)(n) || 0,
//                   x = (0, d.r)(c, g + 1);
//                 if (
//                   (x ? s((0, p.LM)(true)) : c && s((0, p.LM)(false)),
//                   s((0, p.Sy)(E(g + 1, c))),
//                   x)
//                 )
//                   return;
//               }
//               var b = (0, h.wG)(n);
//               null !== b &&
//                 (a.submitAnswer(e),
//                 s((0, S.ee)(e, b)),
//                 (0, r.batch)(() => {
//                   s((0, _.zR)()),
//                     s((0, _.X5)()),
//                     s((0, y.LQ)()),
//                     s((0, S.Bf)()),
//                     s((0, j.Ci)());
//                 }),
//                 s((0, u.QU)((0, v.Z)())));
//             });
//             return function (e, t) {
//               return s.apply(this, arguments);
//             };
//           })();
//       function b() {
//         return (e, s) => {
//           var t = s();
//           if ((0, h.Gz)(t)) {
//             if ((e((0, p.kc)(false)), (0, m.ur)(t) && !(0, f.ZP)())) {
//               var n = (0, m.dN)(t),
//                 a = (0, h.yl)(t) || 0,
//                 o = (0, d.r)(n, a);
//               if ((o ? e((0, p.nz)(true)) : n && e((0, p.nz)(false)), o))
//                 return;
//             }
//             var i = (0, m.kF)(t),
//               l = (0, h.yl)(t) || 0;
//             if ((0, m.n_)(t) && !(0, f.ZP)()) {
//               var c = (0, d.r)(i, l);
//               if (
//                 (c ? e((0, p.LM)(true)) : i && e((0, p.LM)(false)),
//                 e((0, p.Sy)(E(l - 1, i))),
//                 c)
//               )
//                 return;
//             }
//             (0, h.V9)(t).undoLastAnswer(),
//               (0, r.batch)(() => {
//                 e((0, S.YT)()),
//                   e((0, _.zR)()),
//                   e((0, _.X5)()),
//                   e((0, y.LQ)()),
//                   e((0, j.mf)());
//               }),
//               e((0, u.QU)((0, v.Z)()));
//           }
//         };
//       }
//       function A() {
//         return (e, s) => {
//           e((0, u.lM)(false)),
//             (0, h.V9)(s()).beginNextRound(),
//             (0, r.batch)(() => {
//               e((0, _.zR)()), e((0, _.X5)()), e((0, y.LQ)());
//             }),
//             e((0, u.QU)((0, v.Z)()));
//         };
//       }
//       function T() {
//         return (e, s) => {
//           var t = s(),
//             n = (0, h.V9)(t),
//             a = (0, h.Gu)(t);
//           e(n.updateSettings(a) ? (0, g.QV)() : (0, _.zR)());
//         };
//       }
//       function C() {
//         return (e) => {
//           e((0, p.HL)(o.S.AD_MODAL));
//         };
//       }
//       function I() {
//         return (e) => {
//           e((0, u.lM)(false)),
//             (0, r.batch)(() => {
//               e((0, S.Vy)()), e((0, S.TK)()), e((0, g.QV)());
//             }),
//             e((0, u.QU)((0, v.Z)()));
//         };
//       }
//       function w() {
//         return (e, s) => {
//           var t = (0, c.Oz)(s()),
//             n = (0, a.default)(t, (e) => {
//               e.studyStarredOnly = !e.studyStarredOnly;
//             });
//           e((0, l.ex)(n)), e(I());
//         };
//       }
//       function O() {
//         return (e, s) => {
//           var t = s(),
//             n = (0, c.Oz)(t);
//           e(
//             (0, l.ex)(
//               (0, i.$A)(
//                 {
//                   term: true,
//                 },
//                 (0, i.X_)(
//                   {
//                     definition: true,
//                   },
//                   n
//                 )
//               )
//             )
//           ),
//             e(I());
//         };
//       }
//       function N() {
//         return (e, s) => {
//           var t = (0, c.Oz)(s());
//           e(
//             (0, l.ex)(
//               (0, i.$A)(
//                 {
//                   definition: true,
//                 },
//                 (0, i.X_)(
//                   {
//                     term: true,
//                   },
//                   t
//                 )
//               )
//             )
//           ),
//             e(I());
//         };
//       }
//       function k() {
//         return (e, s) => {
//           var t,
//             n = (0, c.Oz)(s()),
//             a =
//               null !== (t = n.cardsShuffleSeed) && t > 0
//                 ? 0
//                 : Math.floor(4294967295 * Math.random());
//           e(
//             (0, l.ex)(
//               Object.assign({}, n, {
//                 cardsShuffleSeed: a,
//               })
//             )
//           ),
//             e((0, u.QU)((0, v.Z)())),
//             e((0, g.QV)());
//         };
//       }
//       function L() {
//         return (e, s) => {
//           (0, h.V9)(s()).dismissAds(), e((0, _.X5)());
//         };
//       }
//       var P = () => (e, s) => {
//         var t = (0, c.Oz)(s()),
//           n = (0, a.default)(t, (e) => {
//             e.isAudioOn = !e.isAudioOn;
//           });
//         e((0, l.ex)(n));
//       };
//     },
//     './app/j/study-modes/redesigned_cards/data/engine/index.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Tr: () => c,
//         X5: () => u,
//         zR: () => l,
//       });
//       var n = t(
//           './node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js'
//         ),
//         a = t('./node_modules/nullthrows/nullthrows.js'),
//         r = t.n(a),
//         o = t('./app/j/study-modes/redesigned_cards/data/types.ts'),
//         i = (0, n.createSlice)({
//           name: o.DI,
//           initialState: {
//             adsState: null,
//             engine: void 0,
//             isFlipped: false,
//             modeState: void 0,
//           },
//           reducers: {
//             updateFlashcardsState(e) {
//               e.modeState = r()(e.engine).getFlashcardsState();
//             },
//             updateFlashcardsEngineAdsState(e) {
//               e.adsState = r()(e.engine).getAdsState();
//             },
//             setFlashcardsEngine(e, s) {
//               var {payload: t} = s;
//               (e.engine = t), (e.modeState = t.getFlashcardsState());
//             },
//             setFlashcardsEngineWithoutState(e, s) {
//               var {payload: t} = s;
//               e.engine = t;
//             },
//             setFlashcardsModeStateFromEngine(e, s) {
//               var {payload: t} = s;
//               e.modeState = t.getFlashcardsState();
//             },
//           },
//         }),
//         d = i.reducer,
//         {
//           updateFlashcardsState: l,
//           updateFlashcardsEngineAdsState: u,
//           setFlashcardsEngine: c,
//           setFlashcardsEngineWithoutState: p,
//           setFlashcardsModeStateFromEngine: m,
//         } = i.actions;
//       s.ZP = d;
//     },
//     './app/j/study-modes/redesigned_cards/data/engine/selectors.ts': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         AY: () => E,
//         B5: () => R,
//         E9: () => C,
//         Gu: () => f,
//         Gz: () => b,
//         P: () => P,
//         UO: () => w,
//         V9: () => j,
//         XT: () => N,
//         Xh: () => D,
//         bl: () => Z,
//         oK: () => x,
//         rg: () => A,
//         sx: () => k,
//         tg: () => O,
//         uF: () => M,
//         wG: () => L,
//         yl: () => I,
//       });
//       var n = t('./node_modules/lodash/first.js'),
//         a = t.n(n),
//         r = t('./app/j/config/enums.ts'),
//         o = t('./app/j/core/default_store/DefaultStore.ts'),
//         i = t('./node_modules/nullthrows/nullthrows.js'),
//         d = t.n(i),
//         l = t('./node_modules/reselect/lib/index.js'),
//         u = t('./app/j/study-modes/cards/constants.ts'),
//         c = t('./app/j/study-modes/cards/utils/index.ts'),
//         p = t('./app/j/study-modes/data/settings/selectors/preference.ts'),
//         m = t('./app/j/study-modes/data/studiable-data/selectors.ts'),
//         _ = t('./app/j/study-modes/redesigned_cards/data/types.ts'),
//         h =
//           ((0, l.createSelector)((0, o._k)(_.sF), (e) => e),
//           (0, l.createSelector)((0, o.iu)(_.sF), (e) => e.engine)),
//         g = (0, l.createSelector)(h, (e) => e.modeState),
//         j = (0, l.createSelector)(h, (e) => d()(e.engine)),
//         y = (0, l.createSelector)([p.e, m.XQ], (e, s) => (0, c.tN)(e, s)),
//         S = (0, l.createSelector)([p.pE, m.XQ], (e, s) => (0, c.tN)(e, s)),
//         f = (0, l.createSelector)([y, S, p.mm, p.rE], (e, s, t, n) => ({
//           frontCardSide: e,
//           rearCardSide: s,
//           cardOrdering: t ? r.Y2X.SHUFFLED : r.Y2X.IN_ORDER,
//           isSortingEnabled: n,
//         })),
//         v = (0, l.createSelector)(g, (e) => {
//           var s;
//           return null != (s = null == e ? void 0 : e.progress) ? s : null;
//         }),
//         E = (0, l.createSelector)(v, (e) =>
//           null == e ? void 0 : e.totalProgress.masteryBuckets.completed.length
//         ),
//         x = (0, l.createSelector)(v, (e) =>
//           null == e ? void 0 : e.totalProgress.masteryBuckets.remaining.length
//         ),
//         b =
//           ((0, l.createSelector)(v, (e) =>
//             e
//               ? e.totalProgress.masteryBuckets.completed.length +
//                 e.totalProgress.masteryBuckets.remaining.length
//               : null
//           ),
//           (0, l.createSelector)(g, (e) => {
//             var s;
//             return (
//               null != (s = null == e ? void 0 : e.hasActionAvailableToUndo) && s
//             );
//           })),
//         A = (0, l.createSelector)(v, (e) => {
//           if (!e) return null;
//           var {currentRound: s} = e,
//             {isRoundComplete: t} = e.roundProgress;
//           return t ? s + 1 : s;
//         }),
//         T = (0, l.createSelector)(v, (e) => {
//           var s;
//           return null != (s = null == e ? void 0 : e.roundProgress) ? s : null;
//         }),
//         C = (0, l.createSelector)(T, (e) =>
//           null !== e ? e.numCardsCompleted + e.numCardsMovedToNextCycle : null
//         ),
//         I = (0, l.createSelector)([T, C], (e, s) => {
//           if (null === e) return null;
//           var {isRoundComplete: t, numCards: n} = e;
//           return t ? n - 1 : s;
//         }),
//         w = (0, l.createSelector)(T, (e) => {
//           var s;
//           return null != (s = null == e ? void 0 : e.numCards) ? s : null;
//         }),
//         O = (0, l.createSelector)(T, (e) =>
//           null == e ? void 0 : e.numCardsCompleted
//         ),
//         N = (0, l.createSelector)(T, (e) =>
//           null == e ? void 0 : e.numCardsMovedToNextCycle
//         ),
//         k = (0, l.createSelector)(T, (e) => {
//           var s;
//           return null != (s = null == e ? void 0 : e.isRoundComplete)
//             ? s
//             : null;
//         }),
//         L = (0, l.createSelector)(g, (e) => {
//           var s;
//           return null !=
//             (s = a()(null == e ? void 0 : e.cardsRemainingInCurrentRound))
//             ? s
//             : null;
//         }),
//         P = (0, l.createSelector)(L, (e) =>
//           null == e ? void 0 : e.metadata.studiableItemId
//         ),
//         M = (0, l.createSelector)(h, (e) => e.adsState),
//         R = (e) => {
//           var s;
//           return _.sF in e && !(null == (s = M(e)) || !s.shouldShowAds);
//         },
//         D = (0, l.createSelector)([v, L], (e, s) =>
//           null != e && e.roundProgress.isRoundComplete
//             ? u.S.FINISHED_VIEW
//             : s
//             ? u.S.CARDS_VIEW
//             : void 0
//         ),
//         Z = (0, l.createSelector)([m.h1, P], (e, s) => (s ? e[s] : null));
//     },
//     './app/j/study-modes/redesigned_cards/data/engine/thunks.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         QV: () => c,
//       });
//       var n = t('./app/j/study-modes/data/settings/selectors/preference.ts'),
//         a = t('./app/j/study-modes/data/studiable-data/selectors.ts'),
//         r = t('./app/j/study-modes/redesigned_cards/data/ads/selectors.ts'),
//         o = t('./app/j/study-modes/redesigned_cards/data/engine/index.ts'),
//         i = t('./app/j/study-modes/redesigned_cards/data/engine/selectors.ts'),
//         d = t(
//           './node_modules/@quizlet/flashcards-engine/quizlet-shared-kotlin-flashcards-engine.js'
//         ).FlashcardsEngineJs,
//         l = t('./app/j/study-modes/redesigned_cards/data/ui/selector.ts');
//       function u(e) {
//         var s = (0, a.r9)(e),
//           t = (0, n.zg)(e),
//           o = (0, l.z5)(e),
//           u = (0, n.mm)(e) || -1,
//           c = (0, i.Gu)(e),
//           p = (0, r.iy)(e);
//         return new d(s, c, t ? o.starred : o.unstarred, u, p);
//       }
//       var c = () => (e, s) => {
//         var t = u(s());
//         e((0, o.Tr)(t));
//       };
//     },
//     './app/j/study-modes/redesigned_cards/data/onboarding/index.tsx': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         Ci: () => i,
//         mf: () => d,
//       });
//       var n = t(
//           './node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js'
//         ),
//         a = t('./app/j/study-modes/redesigned_cards/data/types.ts'),
//         r = (0, n.createSlice)({
//           name: a.Ap,
//           initialState: {
//             numCardsSeen: 0,
//           },
//           reducers: {
//             incrementCardSeen(e) {
//               e.numCardsSeen += 1;
//             },
//             decrementCardSeen(e) {
//               e.numCardsSeen = Math.max(0, e.numCardsSeen - 1);
//             },
//           },
//         }),
//         o = r.reducer;
//       s.ZP = o;
//       var {incrementCardSeen: i, decrementCardSeen: d} = r.actions;
//     },
//     './app/j/study-modes/redesigned_cards/data/types.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         AI: () => r,
//         Ap: () => o,
//         DI: () => a,
//         Gq: () => i,
//         sF: () => n,
//       });
//       var n = 'cards',
//         a = n + '/engine',
//         r = n + '/ui',
//         o = n + '/onboarding',
//         i = n + '/ads';
//     },
//     './app/j/study-modes/redesigned_cards/data/ui/actions.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         TK: () => k,
//         Vy: () => C,
//         GY: () => w,
//         IR: () => N,
//         Bf: () => I,
//         YT: () => T,
//         ee: () => P,
//         XU: () => M,
//       });
//       var n = t(
//           './node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
//         ),
//         a =
//           (t('./node_modules/core-js/modules/es.array.iterator.js'),
//           t('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
//           t('./app/j/config/enums.ts')),
//         r = t('./app/j/global/Rollbar.ts'),
//         o = t('./node_modules/react-redux/lib/index.js'),
//         i = t(
//           './node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js'
//         ),
//         d = t('./app/j/syncers/StudiableAnswerSyncer.ts'),
//         l = t('./app/j/utils/tamperProofNow.ts'),
//         u = ['answerSideId', 'promptSideId', 'studiableItemId', 'round'];
//       function c() {
//         return (c = (0, n.Z)(function* (e) {
//           var {
//               answerSideId: s,
//               promptSideId: t,
//               studiableItemId: n,
//               round: r = 0,
//             } = e,
//             o = (0, i.Z)(e, u),
//             c = Object.assign(
//               {
//                 answerSideIds: [s],
//                 correctness: a.p7P.SKIPPED,
//                 itemId: n,
//                 itemType: a.zqd.N_SIDED_CARD,
//                 promptSideIds: [t],
//                 round: r,
//                 studyMode: a.aKJ.FLASHCARDS,
//                 timestamp: (0, l.Z)(),
//               },
//               o
//             ),
//             [p, m] = yield d.Z.addAndSave(c);
//           return null == m ? void 0 : m.getProperties();
//         })).apply(this, arguments);
//       }
//       var p,
//         m = t('./app/j/study-modes/data/sessions/index.ts'),
//         _ = t('./app/j/study-modes/data/sessions/selectors.ts'),
//         h = t('./app/j/study-modes/data/sessions/thunks.ts'),
//         g = t('./app/j/study-modes/data/settings/index.ts'),
//         j = t('./app/j/study-modes/data/settings/selectors/preference.ts'),
//         y = t('./app/j/study-modes/data/studiable-data/selectors.ts'),
//         S = t('./app/j/study-modes/data/studiable-data/thunks.ts'),
//         f = t('./app/j/study-modes/redesigned_cards/data/engine/selectors.ts'),
//         v = t('./app/j/study-modes/redesigned_cards/data/engine/thunks.ts'),
//         E = t('./app/j/study-modes/redesigned_cards/data/ui/index.ts'),
//         x = t('./app/j/study-modes/redesigned_cards/data/ui/utils.ts'),
//         b = t('./app/j/utils/filterNull.ts'),
//         A = t('./app/j/utils/isCookieSupportEnabled.ts');
//       function T() {
//         return (function () {
//           var e = (0, n.Z)(function* (e, s) {
//             var t = s();
//             if ((yield p, !(0, _.a5)(t))) {
//               p = e((0, h.KN)((0, _.sl)(t)));
//               try {
//                 yield p;
//               } catch (n) {
//                 r.Z.error(n), e(C());
//               } finally {
//                 p = void 0;
//               }
//             }
//           });
//           return function (s, t) {
//             return e.apply(this, arguments);
//           };
//         })();
//       }
//       function C() {
//         return (e) => {
//           (0, o.batch)(() => {
//             e((0, m.Ch)(null)), e((0, h.K_)(null));
//           });
//         };
//       }
//       function I() {
//         return (function () {
//           var e = (0, n.Z)(function* (e, s) {
//             var t = s(),
//               n = (0, f.sx)(t);
//             n && e((0, g.lM)(true));
//             var a = (0, f.oK)(t);
//             n && 0 === a && e((0, h.TS)({}));
//           });
//           return function (s, t) {
//             return e.apply(this, arguments);
//           };
//         })();
//       }
//       function w() {
//         return (e) => {
//           e((0, E.bD)()), e(T()), e((0, g.QU)((0, l.Z)()));
//         };
//       }
//       var O = (e, s) => {
//         var t = [],
//           n = [];
//         for (var a of e) {
//           var o = (0, x.Vg)(s, a.itemId),
//             i = (0, x.NI)(a, o);
//           null !== i
//             ? t.push(i)
//             : n.push({
//                 answer: a,
//                 card: o,
//               });
//         }
//         return (
//           n.length > 0 &&
//             (function (e) {
//               var s = e.map((e) => {
//                 var s;
//                 return {
//                   answer: e.answer,
//                   foundCard: !!e.card,
//                   cardSides:
//                     null == (s = e.card)
//                       ? void 0
//                       : s.cardSides.map((e) =>
//                           ((e) => {
//                             var {sideId: s, label: t} = e;
//                             return {
//                               sideId: s,
//                               label: t,
//                             };
//                           })(e)
//                         ),
//                 };
//               });
//               r.Z.warn(
//                 'Tried to initialize engine with invalid studiableAnswer',
//                 {
//                   invalidAnswers: s,
//                 }
//               );
//             })(n),
//           t
//         );
//       };
//       function N(e) {
//         return (s, t) => {
//           var n = t(),
//             {studiableItems: a} = (0, y.r9)(n),
//             r = O(e.starred, a),
//             o = O(e.unstarred, a);
//           s(
//             (0, E.vB)({
//               starred: r.filter(b.K),
//               unstarred: o.filter(b.K),
//             })
//           );
//         };
//       }
//       function k() {
//         return (e, s) => {
//           var t = s(),
//             n = {};
//           (0, j.zg)(t) ? (n.starred = []) : (n.unstarred = []), e((0, E.vB)(n));
//         };
//       }
//       function L(e, s, t) {
//         return (
//           void 0 === t && (t = true),
//           null === e &&
//             t &&
//             r.Z.warn(
//               'Tried to save an answer from an invalid state. State has null ' +
//                 s +
//                 ".\n      Failure to save answers means the user won't be able to pick up progress on Flashcards\n      after a screen refresh. Please contact Study Tools."
//             ),
//           null !== e
//         );
//       }
//       var P = (e, s) =>
//           (function () {
//             var t = (0, n.Z)(function* (t, r) {
//               yield t(T());
//               var o = r(),
//                 i = (0, _.a5)(o),
//                 d = (0, A.Z)();
//               if (i || d) {
//                 var l = (0, y.r9)(o),
//                   u = (0, f.rg)(o),
//                   p = (0, _.gP)(o),
//                   m = null == s ? void 0 : s.metadata.studiableItemId;
//                 if (
//                   L(i, 'session', false) &&
//                   L(s, 'question') &&
//                   L(l, 'studiable data') &&
//                   L(m, 'studiable item id')
//                 ) {
//                   var h = (0, x.Vg)(l.studiableItems, m);
//                   if (L(h, 'studiable item', !(0, j.zg)(o))) {
//                     var g = (0, x.YX)(h, s.metadata.promptSide),
//                       S = (0, x.YX)(h, s.metadata.answerSide);
//                     if (L(g, 'prompt side') && L(S, 'answer side')) {
//                       var v,
//                         b =
//                           (v = e.value) === a.AaD.KNOW
//                             ? a.p7P.CORRECT
//                             : v === a.AaD.DO_NOT_KNOW
//                             ? a.p7P.INCORRECT
//                             : a.p7P.SKIPPED,
//                         C = yield (function (e) {
//                           return c.apply(this, arguments);
//                         })({
//                           promptSideId: g.sideId,
//                           answerSideId: S.sideId,
//                           containerId: h.studiableContainerId,
//                           containerType: h.studiableContainerType,
//                           studiableItemId: m,
//                           personId: p,
//                           sessionId: i.id,
//                           correctness: b,
//                           round: null != u ? u : void 0,
//                         });
//                       t(
//                         (function (e) {
//                           return (function () {
//                             var s = (0, n.Z)(function* (s, t) {
//                               var n = t(),
//                                 a = (0, j.zg)(n);
//                               s(
//                                 (0, E.oe)({
//                                   key: a ? 'starred' : 'unstarred',
//                                   answer: (0, x.cW)(e),
//                                 })
//                               );
//                             });
//                             return function (e, t) {
//                               return s.apply(this, arguments);
//                             };
//                           })();
//                         })(C)
//                       );
//                     }
//                   }
//                 }
//               }
//             });
//             return function (e, s) {
//               return t.apply(this, arguments);
//             };
//           })(),
//         M = (e) =>
//           (function () {
//             var s = (0, n.Z)(function* (s) {
//               s((0, E.le)(true));
//               try {
//                 yield s((0, S.OC)(e)),
//                   (0, o.batch)(() => {
//                     s((0, E.le)(false)), s((0, v.QV)()), s((0, E.lT)());
//                   });
//               } catch (t) {
//                 (0, o.batch)(() => {
//                   s((0, E.le)(false)), s((0, E.vT)(t || null));
//                 });
//               }
//             });
//             return function (e) {
//               return s.apply(this, arguments);
//             };
//           })();
//     },
//     './app/j/study-modes/redesigned_cards/data/ui/index.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         LQ: () => p,
//         S1: () => d,
//         bD: () => c,
//         by: () => g,
//         hL: () => _,
//         lT: () => j,
//         le: () => h,
//         oe: () => u,
//         vB: () => l,
//         vT: () => m,
//       });
//       var n = t(
//           './node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js'
//         ),
//         a = t('./app/j/study-modes/redesigned_cards/constants.ts'),
//         r = t('./app/j/study-modes/redesigned_cards/data/types.ts'),
//         o = (0, n.createSlice)({
//           name: r.AI,
//           initialState: {
//             answerHistory: {
//               starred: [],
//               unstarred: [],
//             },
//             cardsOrigin: a.ou.MODE,
//             errors: {
//               editStudiableItem: null,
//             },
//             funnelUuid: void 0,
//             hasInteractedWithMode: false,
//             isAutoplayOn: false,
//             isEditing: false,
//             isEligibleToSeeTeacherOnboardingPreviewCard: false,
//             isFlipped: false,
//             isRequestingEdit: false,
//             mcqPreviewVariant: null,
//           },
//           reducers: {
//             init(e, s) {
//               var t,
//                 n,
//                 r,
//                 {payload: o} = s;
//               (e.funnelUuid = o.funnelUUID),
//                 (e.cardsOrigin = null != (t = o.cardsOrigin) ? t : a.ou.MODE),
//                 (e.isEligibleToSeeTeacherOnboardingPreviewCard =
//                   null != (n = o.isEligibleToSeeTeacherOnboardingPreviewCard) &&
//                   n),
//                 (e.mcqPreviewVariant =
//                   null != (r = o.mcqPreviewVariant) ? r : null);
//             },
//             addAnswer(e, s) {
//               var {key: t, answer: n} = s.payload;
//               e.answerHistory[t].push(n);
//             },
//             mergeAnswerHistory(e, s) {
//               e.answerHistory = Object.assign({}, e.answerHistory, s.payload);
//             },
//             toggleAutoplay(e) {
//               e.isAutoplayOn = !e.isAutoplayOn;
//             },
//             toggleCardFlip(e) {
//               e.isFlipped = !e.isFlipped;
//             },
//             resetCardSide(e) {
//               e.isFlipped = false;
//             },
//             setEditStudiableItemErrors(e, s) {
//               e.errors.editStudiableItem = s.payload;
//             },
//             setHasSeenTeacherOnboarding(e) {
//               e.isEligibleToSeeTeacherOnboardingPreviewCard = false;
//             },
//             toggleIsEditing(e) {
//               e.isEditing = !e.isEditing;
//             },
//             setIsRequestingEdit(e, s) {
//               e.isRequestingEdit = s.payload;
//             },
//           },
//         }),
//         i = o.reducer;
//       s.ZP = i;
//       var {
//         init: d,
//         mergeAnswerHistory: l,
//         addAnswer: u,
//         toggleCardFlip: c,
//         resetCardSide: p,
//         setEditStudiableItemErrors: m,
//         setHasSeenTeacherOnboarding: _,
//         setIsRequestingEdit: h,
//         toggleAutoplay: g,
//         toggleIsEditing: j,
//       } = o.actions;
//     },
//     './app/j/study-modes/redesigned_cards/data/ui/selector.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Ts: () => y,
//         W7: () => g,
//         We: () => l,
//         ZV: () => u,
//         Zz: () => m,
//         bq: () => h,
//         eS: () => c,
//         ju: () => j,
//         mW: () => p,
//         yQ: () => d,
//         z5: () => _,
//       });
//       var n = t('./app/j/core/default_store/DefaultStore.ts'),
//         a = t('./node_modules/reselect/lib/index.js'),
//         r = t('./app/j/study-modes/data/settings/selectors/preference.ts'),
//         o = t('./app/j/study-modes/redesigned_cards/data/types.ts'),
//         i = (0, a.createSelector)((0, n.iu)(o.sF), (e) => e.ui),
//         d =
//           ((0, a.createSelector)(i, (e) => e.funnelUuid),
//           (0, a.createSelector)(i, (e) => e.errors.editStudiableItem)),
//         l = (0, a.createSelector)(i, (e) => e.isAutoplayOn),
//         u = (0, a.createSelector)(i, (e) => e.isFlipped),
//         c = (0, a.createSelector)(i, (e) => e.isEditing),
//         p = (0, a.createSelector)(i, (e) => e.isRequestingEdit),
//         m = (0, a.createSelector)(r.mm, (e) => null !== e && e > 0),
//         _ = (0, a.createSelector)(i, (e) => e.answerHistory),
//         h = (0, a.createSelector)(i, (e) => e.cardsOrigin),
//         g = (0, a.createSelector)(
//           i,
//           (e) => e.isEligibleToSeeTeacherOnboardingPreviewCard
//         ),
//         j = (0, a.createSelector)(r.pE, (e) => e.definition && e.term),
//         y = (0, a.createSelector)(i, (e) => e.mcqPreviewVariant);
//     },
//     './app/j/study-modes/redesigned_cards/data/ui/utils.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         C$: () => m,
//         NI: () => u,
//         Vg: () => i,
//         YX: () => l,
//         cW: () => c,
//       });
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//       var n = t('./app/j/config/enums.ts'),
//         a = t('./app/j/studiable-data/types.ts'),
//         r = t('./app/j/studiable-data/utils.ts'),
//         o =
//           (t(
//             './app/j/study-modes/legacy-common/engine/utils/question-element-utils.ts'
//           ),
//           t('./app/j/study-modes/legacy-common/types.ts'),
//           t('./app/j/study-modes/legacy-common/utils/label-utils.ts'));
//       function i(e, s) {
//         if (!s) return null;
//         var t = e.find((e) => e.id === s);
//         return t && (0, r.F_)(t) ? t : null;
//       }
//       function d(e, s) {
//         var t;
//         if (!s) return [];
//         var n = null != (t = e.cardSides) ? t : [],
//           a = [],
//           r = [],
//           i = s.slice(),
//           d = function (e) {
//             var s = i.findIndex((s) => e.sideId === s);
//             s >= 0 ? (a.push(e), i.splice(s, 1)) : r.push(e);
//           };
//         for (var l of n) d(l);
//         var u = function (s) {
//           var t = (0, o.O$)(s, e.id);
//           if (null !== t) {
//             var n = r.findIndex((e) => e.label === t);
//             n >= 0 && (a.push(r[n]), r.splice(n, 1));
//           }
//         };
//         for (var c of i) u(c);
//         return a;
//       }
//       function l(e, s) {
//         var t, n;
//         return s &&
//           null !=
//             (t =
//               null == (n = e.cardSides) ? void 0 : n.find((e) => e.label === s))
//           ? t
//           : null;
//       }
//       function u(e, s) {
//         if (!s) return null;
//         var t = d(s, e.promptSideIds),
//           r = d(s, e.answerSideIds);
//         return t.length < e.promptSideIds.length ||
//           r.length < e.answerSideIds.length
//           ? null
//           : {
//               type: a.N.N_SIDED_CARD_ANSWER,
//               correctness: e.correctness,
//               round: e.round,
//               studiableItemId: e.itemId,
//               studyModeType: n.aKJ.FLASHCARDS,
//               timestamp: e.timestamp,
//               promptSideIds: e.promptSideIds,
//               answerSideIds: e.answerSideIds,
//             };
//       }
//       function c(e) {
//         return {
//           type: a.N.N_SIDED_CARD_ANSWER,
//           correctness: e.correctness,
//           round: e.round,
//           studiableItemId: e.itemId,
//           studyModeType: n.aKJ.FLASHCARDS,
//           timestamp: e.timestamp,
//           promptSideIds: e.promptSideIds,
//           answerSideIds: e.answerSideIds,
//         };
//       }
//       var p,
//         m =
//           ((p = false),
//           function (e, s, t) {
//             p || (e('first_flashcards_embed_interaction'), s(t), (p = true));
//           });
//     },
//     './app/j/study-modes/redesigned_cards/hooks/useAutoplay.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => g,
//       });
//       var n = t('./app/j/core/default_store/DefaultStoreProvider.tsx'),
//         a = t('./node_modules/react/index.js'),
//         r = t('./app/j/studiable-data/utils.ts'),
//         o = t('./app/j/study-modes/data/settings/selectors/preference.ts'),
//         i = t(
//           './app/j/study-modes/legacy-common/engine/utils/question-element-utils.ts'
//         ),
//         d = t('./app/j/study-modes/redesigned_cards/data/engine/selectors.ts'),
//         l = t('./app/j/study-modes/redesigned_cards/data/ui/selector.ts'),
//         u = t('./app/j/config/enums.ts'),
//         c = t('./app/j/study-engine/utils.ts'),
//         p = t('./app/j/study-modes/redesigned_cards/data/engine/actions.ts'),
//         m = t('./app/j/study-modes/redesigned_cards/data/ui/actions.ts'),
//         _ = t('./app/j/study-modes/redesigned_cards/logging/useCardLogger.ts');
//       var h = t('./app/j/audio_playback/thunks.ts');
//       function g(e) {
//         var s,
//           t = (0, n.v9)(d.wG),
//           g = (0, n.v9)(l.ZV),
//           j = (0, n.v9)(o.o3),
//           y = (0, n.v9)(o.zK),
//           S = (0, n.v9)(l.We),
//           f = (0, n.v9)(o.rE),
//           v = S && !f,
//           E = (function (e) {
//             var {logQuestionEvent: s} = (0, _.Z)(),
//               t = (0, n.I0)();
//             return (0, a.useCallback)((n, a) => {
//               if (n)
//                 if (a) {
//                   var r = (0, c.Vq)(u.AaD.SKIP);
//                   s(u.WFi.ANSWER, {
//                     question: n,
//                     answer: r,
//                   }),
//                     e.animate('next'),
//                     t((0, p.tn)(r));
//                 } else
//                   s(u.WFi.REVEAL, {
//                     question: n,
//                   }),
//                     t((0, m.GY)());
//             }, []);
//           })(e),
//           x =
//             ((s = (0, n.I0)()),
//             (0, a.useMemo)(() => {
//               var e = null;
//               return {
//                 stop: () => {
//                   (e = null), s((0, h.p0)());
//                 },
//                 play: (t) => {
//                   var {audioItems: n, onEnd: a} = t;
//                   if (!n) return a();
//                   (e = a),
//                     s(
//                       (0, h.DQ)({
//                         audioItems: n,
//                         onEnd: () => {
//                           e && e();
//                         },
//                       })
//                     );
//                 },
//               };
//             }, [])),
//           b = (0, a.useRef)(v);
//         (0, a.useEffect)(() => {
//           if (((b.current = v), y)) {
//             var e = ((e, s, t) => {
//               if (!e) return null;
//               var n = s ? e.back : e.front,
//                 a = s ? e.metadata.answerSide : e.metadata.promptSide;
//               if (null === a) return null;
//               var o = (0, i.Sg)(n).audio,
//                 d = (0, r.vQ)(o, a, t);
//               return d ? [d] : null;
//             })(t, g, j);
//             return (
//               x.play({
//                 audioItems: e,
//                 onEnd: () => {
//                   b.current && E(t, g);
//                 },
//               }),
//               x.stop
//             );
//           }
//           if (v) {
//             var s = window.setTimeout(() => E(t, g), 3e3);
//             return () => window.clearTimeout(s);
//           }
//         }, [t, g, y, v]);
//       }
//     },
//     './app/j/study-modes/redesigned_cards/hooks/useIsInMiniFlashcardsExperiment.ts':
//       (e, s, t) => {
//         'use strict';
//         t.d(s, {
//           e: () => a,
//         });
//         var n = t('./app/j/hooks/useQMeasure.ts');
//         function a() {
//           return (
//             'experiment' ===
//             (0, n.Z)().getVariationAndEnroll(
//               'MiniFCV2[default,ads,engagement,growth]'
//             )
//           );
//         }
//       },
//     './app/j/study-modes/redesigned_cards/hooks/useProgressText.ts': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         Z: () => r,
//       });
//       var n = t('./app/j/core/default_store/DefaultStoreProvider.tsx'),
//         a = t('./app/j/study-modes/redesigned_cards/data/engine/selectors.ts');
//       function r() {
//         var e = (0, n.v9)(a.yl),
//           s = (0, n.v9)(a.UO);
//         return null === e || null === s ? null : e + 1 + ' / ' + s;
//       }
//     },
//     './app/j/study-modes/redesigned_cards/initCardsMode.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => T,
//       });
//       var n = t('./app/j/core/default_store/DefaultStore.ts'),
//         a = t('./app/j/global/Quizlet.ts'),
//         r = t('./app/j/login/index.ts'),
//         o = t('./node_modules/react-redux/lib/index.js'),
//         i = (0,
//         t(
//           './node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js'
//         ).createSlice)({
//           name: 'cardsAudioMode',
//           initialState: {
//             isAudioPlaying: false,
//           },
//           reducers: {
//             setIsAudioPlaying(e, s) {
//               var {payload: t} = s;
//               e.isAudioPlaying = t;
//             },
//           },
//         }),
//         {setIsAudioPlaying: d} = i.actions,
//         l = i.reducer,
//         u = t('./app/j/study-modes/redesigned_cards/constants.ts'),
//         c = t('./node_modules/redux/lib/redux.js'),
//         p = t('./app/j/study-modes/redesigned_cards/data/ads/index.ts'),
//         m = t('./app/j/study-modes/redesigned_cards/data/engine/index.ts'),
//         _ = t('./app/j/study-modes/redesigned_cards/data/onboarding/index.tsx'),
//         h = t('./app/j/study-modes/redesigned_cards/data/ui/index.ts'),
//         g = (0, c.combineReducers)({
//           ads: p.ZP,
//           engine: m.ZP,
//           ui: h.ZP,
//           onboarding: _.ZP,
//         }),
//         j = t('./app/j/study-modes/data/settings/actions.ts'),
//         y = t('./app/j/study-modes/data/settings/selectors/preference.ts');
//       t('./node_modules/core-js/modules/es.array.reduce.js'),
//         t('./app/j/config/enums.ts'),
//         t('./app/j/config/study-setting-metadata.ts'),
//         t('./app/j/study-modes/data/settings/types.ts');
//       function S(e, s) {
//         return (
//           (t = e),
//           (n = s),
//           Object.keys(n).reduce((e, s) => {
//             if ('locationQuestionTypes' === s) return e;
//             var a = n[s];
//             return null == a || a.length < 1 ? (e[s] = t[s]) : (e[s] = a), e;
//           }, {})
//         );
//         var t, n;
//       }
//       var f = t('./app/j/study-modes/redesigned_cards/data/constants.ts'),
//         v = (e) =>
//           (null == e ? void 0 : e.term) && (null == e ? void 0 : e.definition),
//         E = (e) => (s, t) => {
//           var n = t(),
//             a =
//               e === f.ou.SET_PAGE
//                 ? Object.assign({}, f._b)
//                 : Object.assign({}, f.cg),
//             r = (0, y.Oz)(n),
//             {answerWith: o} = r,
//             i = ((e) => {
//               var {answerWith: s, promptWith: t} = e;
//               if (v(s) || (s.term !== t.term && s.definition !== t.definition))
//                 return e;
//               var n = Object.assign({}, t, {
//                 definition: !s.definition,
//                 term: !s.term,
//               });
//               return Object.assign({}, e, {
//                 promptWith: n,
//               });
//             })(
//               S(
//                 a,
//                 Object.assign(
//                   {},
//                   r,
//                   e === f.ou.SET_PAGE && v(o)
//                     ? {
//                         answerWith: null,
//                         promptWith: null,
//                       }
//                     : null
//                 )
//               )
//             );
//           s((0, j.OZ)(i));
//         },
//         x = t('./app/j/study-modes/redesigned_cards/data/engine/thunks.ts'),
//         b = t('./app/j/study-modes/redesigned_cards/data/types.ts'),
//         A = t('./app/j/study-modes/redesigned_cards/data/ui/actions.ts');
//       function T(e) {
//         a.Z.user || (0, r.default)(),
//           (0, n.bh)().registerReducer('cardsAudioMode', l),
//           (0, o.batch)(() => {
//             var s;
//             (0, n.bh)().dispatch(
//               E(null != (s = e.cardsOrigin) ? s : u.ou.MODE)
//             ),
//               (0, n.bh)().registerReducer(b.sF, g),
//               (0, n.bh)().dispatch((0, A.IR)(e.studiableAnswers)),
//               (0, n.bh)().dispatch((0, h.S1)(e)),
//               (0, n.bh)().dispatch((0, p.S1)(e)),
//               (0, n.bh)().dispatch((0, x.QV)());
//           });
//       }
//     },
//     './app/j/study-modes/redesigned_cards/keyboard/ModeShortcuts.ts': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         O: () => j,
//       });
//       var n = t('./node_modules/keycode-js/dist/keycode.cjs.js'),
//         a = t('./app/j/study-modes/redesigned_cards/constants.ts'),
//         r = t('./app/j/study-modes/redesigned_cards/keyboard/actions/cards.ts'),
//         o = t('./app/j/study-modes/redesigned_cards/data/engine/actions.ts'),
//         i = {
//           thunk: (0, o.lt)(),
//           pageAction: 'flashcards_shuffle',
//           getLabel: (e) => e('modes.cards.keyboard_shortcuts.shuffle'),
//         },
//         d = {
//           thunk: (0, o.Av)(),
//           pageAction: 'flashcards_toggle_audio',
//           getLabel: (e) => e('modes.cards.keyboard_shortcuts.audio'),
//         },
//         l = {
//           thunk: (0, o.Co)(),
//           pageAction: 'flashcards_answer_with_word',
//           getLabel: (e) => e('modes.cards.keyboard_shortcuts.word'),
//         },
//         u = {
//           thunk: (0, o.tz)(),
//           pageAction: 'flashcards_answer_with_definition',
//           getLabel: (e) => e('modes.cards.keyboard_shortcuts.definition'),
//         },
//         c = t('./app/j/config/enums.ts'),
//         p = t('./app/j/study-modes/data/studiable-data/selectors.ts'),
//         m = t('./app/j/study-modes/data/studiable-data/thunks.ts'),
//         _ = t('./app/j/study-modes/redesigned_cards/data/engine/selectors.ts'),
//         h = {
//           thunk: (e, s) => {
//             var t = s(),
//               n = (0, _.wG)(t),
//               a = null == n ? void 0 : n.metadata.studiableItemId,
//               r = (0, p.Cv)(t);
//             a &&
//               e(
//                 r.has(a)
//                   ? (0, m.lr)(a)
//                   : (0, m.Dk)({
//                       itemId: a,
//                       source: c.cip.FLASHCARDS,
//                     })
//               );
//           },
//           pageAction: 'flashcards_toggle_star',
//           getLabel: (e) => e('modes.cards.keyboard_shortcuts.star'),
//         },
//         g = t('./app/j/study-modes/redesigned_cards/keyboard/actions/ui.ts');
//       function j(e) {
//         var s = e === a.ou.SET_PAGE ? [n.PC] : [n.PC, n.R4, n.Hb];
//         return [
//           {
//             action: r.GY,
//             key: {
//               code: s,
//               label: (e) => e('modes.cards.keyboard_shortcuts.space_key'),
//             },
//           },
//           {
//             action: h,
//             key: {
//               code: [n.RI, n.qV],
//               label: 'S',
//             },
//           },
//           {
//             action: g.l,
//             key: {
//               code: [n.OY],
//               label: 'E',
//             },
//           },
//           {
//             action: i,
//             key: {
//               code: [n.Dg],
//               label: 'H',
//             },
//           },
//           {
//             action: d,
//             key: {
//               code: [n.Kx],
//               label: 'A',
//             },
//           },
//           {
//             action: l,
//             key: {
//               code: [n.WR],
//               label: 'D',
//             },
//           },
//           {
//             action: u,
//             key: {
//               code: [n.wW],
//               label: 'T',
//             },
//           },
//         ];
//       }
//     },
//     './app/j/study-modes/redesigned_cards/keyboard/QuizModeShortcuts.ts': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         F: () => i,
//         T: () => o,
//       });
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//       var n = t('./node_modules/keycode-js/dist/keycode.cjs.js'),
//         a = t('./app/j/study-modes/redesigned_cards/keyboard/actions/cards.ts'),
//         r = t('./app/j/study-modes/redesigned_cards/keyboard/ModeShortcuts.ts');
//       function o(e) {
//         return [
//           {
//             action: a.qM,
//             key: {
//               code: [n.IZ, n.fT],
//               label: '2',
//             },
//           },
//           {
//             action: a.Tv,
//             key: {
//               code: [n.Ec, n.Ks],
//               label: '1',
//             },
//           },
//           ...(0, r.O)(e),
//         ];
//       }
//       function i(e) {
//         return {
//           shortcuts: o(e),
//           animate(e, s) {
//             switch (s) {
//               case n.IZ:
//               case n.fT:
//                 e.animate('know');
//                 break;
//               case n.Ec:
//               case n.Ks:
//                 e.animate('dontKnow');
//             }
//           },
//         };
//       }
//     },
//     './app/j/study-modes/redesigned_cards/keyboard/ReviewModeShortcuts.ts': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         X: () => i,
//         e: () => d,
//       });
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//       var n = t('./node_modules/keycode-js/dist/keycode.cjs.js'),
//         a = t('./app/j/study-modes/redesigned_cards/keyboard/actions/cards.ts'),
//         r = t('./app/j/study-modes/redesigned_cards/keyboard/actions/ui.ts'),
//         o = t('./app/j/study-modes/redesigned_cards/keyboard/ModeShortcuts.ts');
//       function i(e) {
//         return [
//           {
//             action: a.Xv,
//             key: {
//               code: [n.ob],
//               label: '←',
//             },
//           },
//           {
//             action: a.OP,
//             key: {
//               code: [n.iB],
//               label: '→',
//             },
//           },
//           {
//             action: r.b,
//             key: {
//               code: [n.R9],
//               label: 'P',
//             },
//           },
//           ...(0, o.O)(e),
//         ];
//       }
//       function d(e) {
//         return {
//           shortcuts: i(e),
//           animate(e, s) {
//             switch (s) {
//               case n.ob:
//                 e.animate('previous');
//                 break;
//               case n.iB:
//                 e.animate('next');
//             }
//           },
//         };
//       }
//     },
//     './app/j/study-modes/redesigned_cards/keyboard/actions/cards.ts': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         GY: () => c,
//         OP: () => d,
//         Tv: () => u,
//         Xv: () => i,
//         qM: () => l,
//       });
//       var n = t('./app/j/config/enums.ts'),
//         a = t('./app/j/study-engine/utils.ts'),
//         r = t('./app/j/study-modes/redesigned_cards/data/engine/actions.ts'),
//         o = t('./app/j/study-modes/redesigned_cards/data/ui/actions.ts'),
//         i = {
//           thunk: (0, r.gl)(),
//           pageAction: 'flashcards_previous_card',
//           getLabel: (e) => e('modes.cards.keyboard_shortcuts.previous'),
//         },
//         d = {
//           thunk: (0, r.tn)((0, a.Vq)(n.AaD.SKIP)),
//           pageAction: 'flashcards_next_card',
//           questionEvent: [n.WFi.ANSWER, n.AaD.SKIP],
//           getLabel: (e) => e('modes.cards.keyboard_shortcuts.next'),
//         },
//         l = {
//           thunk: (0, r.tn)((0, a.Vq)(n.AaD.KNOW)),
//           pageAction: 'flashcards_know_card',
//           questionEvent: [n.WFi.ANSWER, n.AaD.KNOW],
//           getLabel: (e) => e('assistant.reveal_self_assessment.know'),
//         },
//         u = {
//           thunk: (0, r.tn)((0, a.Vq)(n.AaD.DO_NOT_KNOW)),
//           pageAction: 'flashcards_still_learning_card',
//           questionEvent: [n.WFi.ANSWER, n.AaD.DO_NOT_KNOW],
//           getLabel: (e) => e('assistant.reveal_self_assessment.still_learning'),
//         },
//         c = {
//           thunk: (0, o.GY)(),
//           pageAction: 'flashcards_flip_card',
//           questionEvent: [n.WFi.REVEAL],
//           getLabel: (e) => e('modes.cards.keyboard_shortcuts.flip'),
//         };
//     },
//     './app/j/study-modes/redesigned_cards/keyboard/actions/ui.ts': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         b: () => r,
//         l: () => a,
//       });
//       var n = t('./app/j/study-modes/redesigned_cards/data/ui/index.ts'),
//         a = {
//           thunk: (e) => e((0, n.lT)()),
//           pageAction: 'flashcards_edit_term',
//           getLabel: (e) => e('modes.cards.keyboard_shortcuts.edit'),
//         },
//         r = {
//           thunk: (e) => e((0, n.by)()),
//           pageAction: 'flashcards_toggle_auto_play',
//           getLabel: (e) => e('modes.cards.keyboard_shortcuts.play'),
//         };
//     },
//     './app/j/study-modes/redesigned_cards/keyboard/useKeyboardShortcuts.ts': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         Z: () => p,
//       });
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//       var n = t('./app/j/compatibility/logger/useLogger.ts'),
//         a = t('./app/j/core/default_store/DefaultStoreProvider.tsx'),
//         r = t('./app/j/hooks/useEventThrottling.ts'),
//         o = t('./app/j/hooks/useKeyboardListener.ts'),
//         i = t('./node_modules/react/index.js'),
//         d = t('./app/j/study-engine/utils.ts'),
//         l = t('./app/j/study-modes/redesigned_cards/constants.ts'),
//         u = t('./app/j/study-modes/redesigned_cards/data/engine/selectors.ts'),
//         c = t('./app/j/study-modes/redesigned_cards/logging/useCardLogger.ts');
//       function p(e, s, t) {
//         var {logPageAction: p} = (0, n.wL)(),
//           {logQuestionEvent: m} = (0, c.Z)(),
//           _ = (0, a.v9)(u.wG),
//           h = (0, a.I0)(),
//           g = (0, i.useCallback)(
//             (n) => {
//               var a;
//               if (
//                 ((a = t.current),
//                 document.body === document.activeElement ||
//                   (null != a && a.contains(document.activeElement))) &&
//                 !n.metaKey
//               ) {
//                 var r = n.which;
//                 for (var {key: o, action: i} of e.shortcuts)
//                   if (o.code.includes(r)) {
//                     if (
//                       (n.preventDefault(),
//                       i.pageAction &&
//                         (null == p ||
//                           p(i.pageAction, {
//                             key: r,
//                           })),
//                       i.questionEvent && _)
//                     ) {
//                       var [l, u] = i.questionEvent;
//                       m(l, {
//                         question: _,
//                         answer: u ? (0, d.Vq)(u) : void 0,
//                       });
//                     }
//                     h(i.thunk), null == e.animate || e.animate(s, r);
//                     break;
//                   }
//               }
//             },
//             [e, s]
//           ),
//           j = (0, r.Z)(g, l.wD);
//         return (0, o.g)(j);
//       }
//     },
//     './app/j/study-modes/redesigned_cards/keyboard/useShortcutsLabels.ts': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         Z: () => u,
//       });
//       var n = t('./app/j/core/default_store/DefaultStoreProvider.tsx'),
//         a = t('./app/j/i18n/useTranslation.ts'),
//         r = t('./node_modules/react/index.js'),
//         o = t('./app/j/study-modes/data/settings/selectors/preference.ts'),
//         i = t('./app/j/study-modes/redesigned_cards/data/ui/selector.ts'),
//         d = t(
//           './app/j/study-modes/redesigned_cards/keyboard/QuizModeShortcuts.ts'
//         ),
//         l = t(
//           './app/j/study-modes/redesigned_cards/keyboard/ReviewModeShortcuts.ts'
//         );
//       function u() {
//         var {t: e} = (0, a.Z)(),
//           s = (0, n.v9)(o.rE),
//           t = (0, n.v9)(i.bq);
//         return (0, r.useMemo)(() => {
//           var n = s ? (0, d.T)(t) : (0, l.X)(t);
//           return ((e, s) =>
//             s.map((s) => {
//               var t = s.key.label;
//               return [s.action.getLabel(e), 'string' == typeof t ? t : t(e)];
//             }))(e, n);
//         }, [s, e, t]);
//       }
//     },
//     './app/j/study-modes/redesigned_cards/logging/useCardLogger.ts': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         Z: () => m,
//       });
//       var n = t('./app/j/core/default_store/DefaultStoreProvider.tsx'),
//         a = t('./app/j/study-modes/data/logging/thunks.ts'),
//         r = t('./app/j/study-modes/data/studiable-data/selectors.ts'),
//         o = t('./app/j/config/enums.ts'),
//         i = t('./app/j/legacyAssistant/types/QAssistantModeTypes.ts'),
//         d = t(
//           './app/j/study-modes/legacy-common/engine/utils/question-element-utils.ts'
//         ),
//         l = t(
//           './app/j/study-modes/legacy-common/utils/studiablesToTermUtils.ts'
//         ),
//         u = t('./app/j/study-modes/redesigned_cards/data/ui/utils.ts');
//       var c = (e) => {
//         if (e && e.value !== o.AaD.SKIP)
//           return e.value === o.AaD.KNOW ? o.p7P.CORRECT : o.p7P.INCORRECT;
//       };
//       function p(e, s, t) {
//         var n = (0, u.Vg)(e, s.metadata.studiableItemId);
//         return Object.assign(
//           {},
//           t
//             ? (function (e, s) {
//                 var t = (0, d.Sg)(e.back),
//                   n = s && (0, u.YX)(s, e.metadata.answerSide);
//                 return {
//                   answer_has_audio: !!t.audio,
//                   answer_has_image: !!t.image,
//                   answer_has_text: !!t.text,
//                   answer_side: (0, l.Q)(e.metadata.answerSide),
//                   answeredTermId: n && (0, l.K)(null == n ? void 0 : n.sideId),
//                 };
//               })(s, n)
//             : {},
//           (function (e) {
//             var s = (0, d.Sg)(e.front);
//             return {
//               prompt_has_audio: !!s.audio,
//               prompt_has_image: !!s.image,
//               prompt_has_text: !!s.text,
//               prompt_side: (0, l.Q)(e.metadata.answerSide),
//               promptTermId: e.metadata.studiableItemId
//                 ? (0, l.K)(e.metadata.studiableItemId)
//                 : null,
//             };
//           })(s),
//           {
//             answer_option: null == t ? void 0 : t.value,
//             correctness: c(t),
//             answer_type: o.oK4.SELF_ASSESSMENT,
//             participation: o.qhD.INDIVIDUAL,
//             prompt_has_answer_audio: false,
//             prompt_side: (0, l.Q)(s.metadata.promptSide),
//             question_type: (0, i.Q)().revealSelfAssessment,
//             reveal_side: (0, l.Q)(s.metadata.answerSide),
//           }
//         );
//       }
//       function m() {
//         var e = (0, n.I0)(),
//           s = (0, n.v9)(r.r9);
//         return {
//           logQuestionEvent: (t, n) => {
//             var {question: r, answer: o} = n;
//             e(
//               (0, a.lV)({
//                 action: t,
//                 questionEventData: p(s.studiableItems, r, o),
//               })
//             );
//           },
//           logSearchSetPageEngagement: (s) => {
//             e(
//               (0, a.Ny)({
//                 studiableContainerId: s,
//               })
//             );
//           },
//         };
//       }
//     },
//     './app/j/study-modes/redesigned_cards/ui/mini/ProgressText.tsx': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         Z: () => d,
//       });
//       var n = t('./node_modules/@linaria/react/lib/index.js'),
//         a = t('./app/j/assembly/foundations/Spacing.ts'),
//         r =
//           (t('./node_modules/react/index.js'),
//           t('./app/j/study-modes/redesigned_cards/hooks/useProgressText.ts')),
//         o = t('./node_modules/react/jsx-runtime.js'),
//         i = (0, n.z)('section')({
//           name: 'CenteredText',
//           class: 'c1lf7cxm',
//           vars: {
//             'c1lf7cxm-0': [(e) => (e.fixedHeight ? '100%' : 'auto')],
//             'c1lf7cxm-1': [(e) => (e.fixedHeight ? '0' : '' + a.Ki.Xlarge)],
//           },
//         });
//       function d(e) {
//         var {fixedHeight: s = true} = e,
//           t = (0, r.Z)();
//         return t
//           ? (0, o.jsx)(i, {
//               'data-testid': 'progress-header',
//               fixedHeight: s,
//               children: t,
//             })
//           : null;
//       }
//       t(
//         './.linaria-cache/app/j/study-modes/redesigned_cards/ui/mini/ProgressText.linaria.css'
//       );
//     },
//     './app/j/study-modes/redesigned_cards/ui/review/ReviewActions.tsx': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         Z: () => T,
//       });
//       t('./node_modules/core-js/modules/es.array.iterator.js'),
//         t('./node_modules/core-js/modules/web.dom-collections.iterator.js');
//       var n = t('./node_modules/@linaria/react/lib/index.js'),
//         a = t('./app/j/assembly/buttons/index.ts'),
//         r = t('./app/j/assembly/buttons/types.ts'),
//         o = t('./app/j/compatibility/logger/useLogger.ts'),
//         i = t('./app/j/config/enums.ts'),
//         d = t('./app/j/context/UserContext.ts'),
//         l = t('./app/j/core/default_store/DefaultStoreProvider.tsx'),
//         u = t('./app/j/create_set/utils/privoHelper.ts'),
//         c = t('./app/j/i18n/useTranslation.ts'),
//         p = t('./app/j/lazy/SetCreationPrivoModalLazy.ts'),
//         m = t('./node_modules/react/index.js'),
//         _ = t('./app/j/study-modes/data/logging/thunks.ts'),
//         h = t('./app/j/study-modes/data/settings/selectors/preference.ts'),
//         g = t('./app/j/study-modes/data/studiable-data/selectors.ts'),
//         j = t('./app/j/study-modes/data/studiable-data/thunks.ts'),
//         y = t(
//           './app/j/study-modes/legacy-common/utils/studiablesToTermUtils.ts'
//         ),
//         S = t('./app/j/study-modes/redesigned_cards/data/engine/actions.ts'),
//         f = t('./app/j/study-modes/redesigned_cards/data/engine/selectors.ts'),
//         v = t('./app/j/study-modes/redesigned_cards/data/ui/index.ts'),
//         E = t('./node_modules/react/jsx-runtime.js'),
//         x = (0, n.z)('div')({
//           name: 'Wrapper',
//           class: 'wtvpgo3',
//         });
//       function b(e) {
//         var {isHidden: s = false} = e,
//           {t} = (0, c.Z)(),
//           n = (0, l.I0)(),
//           i = (0, o.qL)(),
//           _ = (0, m.useContext)(d.Z),
//           h = (0, l.v9)(f.P),
//           j = (0, l.v9)(g.KH),
//           y = (0, l.v9)(g.XQ),
//           [S, x] = (0, m.useState)(false);
//         if (!(!!h && !y && j.has(h))) return null;
//         return (0, E.jsxs)(E.Fragment, {
//           children: [
//             (0, E.jsx)(a.JZ, {
//               alt: t('global.icon.edit'),
//               icon: 'edit',
//               onClick: () => {
//                 i('flashcards_edit_term'),
//                   (0, u.s)(_) ? x(true) : n((0, v.lT)());
//               },
//               tabIndex: s ? -1 : 0,
//               variant: r.IQ.TERTIARY,
//             }),
//             S
//               ? (0, E.jsx)(p.Z, {
//                   flow: 'FlashcardsReviewAction',
//                   isSecondaryCtaClose: true,
//                   onClose: () => x(false),
//                 })
//               : null,
//           ],
//         });
//       }
//       function A(e) {
//         var {isHidden: s = false} = e,
//           {t} = (0, c.Z)(),
//           n = (0, l.v9)(f.P),
//           d = (0, l.v9)(g.Cv),
//           u = !!n && d.has(n),
//           p = (0, l.v9)(h.zg),
//           m = (0, l.I0)(),
//           v = (0, o.qL)();
//         return (0, E.jsx)(a.JZ, {
//           alt: t('global.icon.star'),
//           icon: u ? 'star-yellow' : 'star',
//           onClick: () => {
//             n &&
//               (u
//                 ? (m((0, j.lr)(n)),
//                   m(
//                     (0, _.pJ)({
//                       action: i.WVJ.DESELECT_TERM,
//                       extraData: {
//                         termId: (0, y.K)(n),
//                       },
//                     })
//                   ),
//                   p && 1 === d.size && m((0, S.PY)()))
//                 : (m(
//                     (0, j.Dk)({
//                       itemId: n,
//                       source: i.cip.FLASHCARDS,
//                     })
//                   ),
//                   m(
//                     (0, _.pJ)({
//                       action: i.WVJ.SELECT_TERM,
//                       extraData: {
//                         termId: (0, y.K)(n),
//                       },
//                     })
//                   )),
//               v('flashcards_toggle_star'));
//           },
//           tabIndex: s ? -1 : 0,
//           variant: r.IQ.TERTIARY,
//         });
//       }
//       function T(e) {
//         return (0, E.jsxs)(x, {
//           children: [
//             (0, E.jsx)(b, Object.assign({}, e)),
//             (0, E.jsx)(A, Object.assign({}, e)),
//           ],
//         });
//       }
//       t(
//         './.linaria-cache/app/j/study-modes/redesigned_cards/ui/review/ReviewActions.linaria.css'
//       );
//     },
//     './app/j/study-modes/redesigned_cards/ui/shared/AnswerControls.tsx': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         Z: () => d,
//       });
//       var n = t('./node_modules/@linaria/react/lib/index.js'),
//         a =
//           (t('./node_modules/react/index.js'),
//           t('./node_modules/react/jsx-runtime.js')),
//         r = (0, n.z)('div')({
//           name: 'Option',
//           class: 'o1rfl3bx',
//         }),
//         o = {
//           'aria-disabled': false,
//           role: 'button',
//           tabIndex: 0,
//         },
//         i = {
//           className: 'a1nb89lp',
//           'aria-disabled': true,
//           role: 'button',
//           tabIndex: -1,
//         };
//       function d(e) {
//         var {ariaLabel: s, children: t, isDisabled: n = false, onClick: d} = e,
//           l = n ? i : o;
//         return (0, a.jsx)(
//           r,
//           Object.assign({}, l, {
//             'aria-label': s,
//             onClick: d,
//             children: t,
//           })
//         );
//       }
//       t(
//         './.linaria-cache/app/j/study-modes/redesigned_cards/ui/shared/AnswerControls.linaria.css'
//       );
//     },
//     './app/j/study-modes/redesigned_cards/ui/shared/Flashcard.tsx': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         Z: () => j,
//       });
//       var n = t('./node_modules/@linaria/react/lib/index.js'),
//         a = t('./node_modules/classnames/index.js'),
//         r = t.n(a),
//         usePrevious = t('./app/j/hooks/usePrevious.tsx'),
//         i = t('./node_modules/polished/dist/polished.cjs.js'),
//         d =
//           (t('./node_modules/react/index.js'),
//           t('./app/j/study-modes/legacy-common/styles/ZIndex.ts')),
//         l = t(
//           './app/j/study-modes/redesigned_cards/ui/shared/FlashcardSide.tsx'
//         ),
//         u = t(
//           './app/j/study-modes/redesigned_cards/ui/shared/QuestionGrid.tsx'
//         ),
//         c = t('./node_modules/react/jsx-runtime.js'),
//         Stage =
//           ((0, i.hO)(1e3),
//           (0, n.z)('div')({
//             name: 'Stage',
//             class: 'sowxuhg',
//           })),
//         Flipper = (0, n.z)(u.w)({
//           name: 'Flipper',
//           class: 'f529fr8',
//           vars: {
//             'f529fr8-0': [(e) => (e.isShowing ? d.pf : d.gX)],
//           },
//         }),
//         _ = 'v862hqe',
//         h = 'h17h0v5c',
//         g = (e, s, t) => {
//           var n = {
//             side: s,
//             isShowing: t,
//           };
//           return {
//             topRight: null == e || null == e.topRight ? void 0 : e.topRight(n),
//             topCenter:
//               null == e || null == e.topCenter ? void 0 : e.topCenter(n),
//             topLeft: null == e || null == e.topLeft ? void 0 : e.topLeft(n),
//             buttons: null == e || null == e.buttons ? void 0 : e.buttons(n),
//           };
//         };
//       function j(e) {
//         var {
//             isFlipped: isFlipped,
//             onClickCard: onClickCard,
//             question: question,
//             elements: elements,
//             overlayElement: overlayElement,
//           } = e,
//           d = (0, usePrevious.Z)(isFlipped),
//           u = void 0 !== d && d !== isFlipped,
//           j = r()({
//             [h]: u && isFlipped,
//             [_]: u && !isFlipped,
//           }),
//           y = r()({
//             [h]: u && !isFlipped,
//             [_]: u && isFlipped,
//           });
//         return (0, c.jsxs)(Stage, {
//           onClick: onClickCard,
//           children: [
//             (0, c.jsx)(Flipper, {
//               'aria-hidden': isFlipped,
//               className: j,
//               'data-testid': 'Card',
//               isShowing: !isFlipped,
//               children: (0, c.jsx)(l.Z, {
//                 elements: g(elements, question.metadata.promptSide, !isFlipped),
//                 overlayElement: overlayElement,
//                 questionElement: question.front,
//               }),
//             }),
//             (0, c.jsx)(Flipper, {
//               'aria-hidden': !isFlipped,
//               className: y,
//               'data-testid': 'Card',
//               isShowing: isFlipped,
//               children: (0, c.jsx)(l.Z, {
//                 elements: g(elements, question.metadata.answerSide, isFlipped),
//                 overlayElement: overlayElement,
//                 questionElement: question.back,
//               }),
//             }),
//           ],
//         });
//       }
//       t(
//         './.linaria-cache/app/j/study-modes/redesigned_cards/ui/shared/Flashcard.linaria.css'
//       );
//     },
//     './app/j/study-modes/redesigned_cards/ui/shared/FlashcardLabel.tsx': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         Z: () => E,
//       });
//       var n = t('./node_modules/@linaria/react/lib/index.js'),
//         a = t('./app/j/assembly/buttons/index.ts'),
//         r = t('./app/j/assembly/buttons/types.ts'),
//         o = t('./app/j/audio_playback/thunks.ts'),
//         i = t('./app/j/audio_playback/utils.ts'),
//         d = t('./app/j/compatibility/logger/useLogger.ts'),
//         l = t('./app/j/core/default_store/DefaultStoreProvider.tsx'),
//         u = t('./app/j/i18n/useTranslation.ts'),
//         c = t('./node_modules/nullthrows/nullthrows.js'),
//         p = t.n(c),
//         m =
//           (t('./node_modules/react/index.js'),
//           t(
//             './app/j/study-modes/legacy-common/engine/utils/question-element-utils.ts'
//           )),
//         _ = t('./app/j/study-modes/legacy-common/utils/label-utils.ts'),
//         h = t('./app/j/study-modes/redesigned_cards/data/engine/selectors.ts'),
//         g = t('./app/j/study-modes/redesigned_cards/data/ui/selector.ts'),
//         j = t('./app/j/utils/filterNull.ts'),
//         y = t('./node_modules/react/jsx-runtime.js'),
//         S = (0, n.z)('div')({
//           name: 'Wrapper',
//           class: 'w18rn30x',
//         }),
//         f = (0, n.z)('div')({
//           name: 'Label',
//           class: 'l3ucz5w',
//         });
//       var v = (e) => {
//         var {side: s} = e,
//           {t} = (0, u.Z)();
//         return (0, y.jsx)(f, {
//           children: (0, _.yW)(t, p()(s)),
//         });
//       };
//       function E(e) {
//         var {side: s, isHidden: t = false} = e,
//           {t: n} = (0, u.Z)(),
//           c = (0, d.qL)(),
//           p = (0, l.I0)(),
//           _ = (function (e) {
//             var s = (0, l.v9)(h.wG),
//               t = (0, l.v9)(g.ju);
//             if (!s) return [];
//             var n,
//               {promptSide: a} = s.metadata,
//               r = (0, m.Sg)(s.front).audio,
//               o = (0, m.Sg)(s.back).audio;
//             return (
//               (n = t ? [o, r] : e === a ? [r] : [o]), (0, i.$g)((0, j.D)(n))
//             );
//           })(s);
//         return (0, y.jsxs)(S, {
//           children: [
//             s
//               ? (0, y.jsx)(v, {
//                   side: s,
//                 })
//               : null,
//             _.length
//               ? (0, y.jsx)(a.JZ, {
//                   alt: n('global.icon.audio'),
//                   icon: 'audio',
//                   onClick: () => {
//                     _ &&
//                       (c('study_card_play_audio'),
//                       p(
//                         (0, o.DQ)({
//                           audioItems: _,
//                         })
//                       ));
//                   },
//                   tabIndex: t ? -1 : 0,
//                   variant: r.IQ.TERTIARY,
//                 })
//               : null,
//           ],
//         });
//       }
//       t(
//         './.linaria-cache/app/j/study-modes/redesigned_cards/ui/shared/FlashcardLabel.linaria.css'
//       );
//     },
//     './app/j/study-modes/redesigned_cards/ui/shared/FlashcardSide.tsx': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         Z: () => x,
//       });
//       var n = t('./node_modules/react/index.js'),
//         a =
//           (t('./node_modules/core-js/modules/es.array.iterator.js'),
//           t('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
//           t('./node_modules/core-js/modules/es.string.trim.js'),
//           t('./node_modules/@linaria/react/lib/index.js')),
//         r = t('./app/j/components/FormattedText.tsx'),
//         o = t('./app/j/context/RequestContext.ts'),
//         i = t('./app/j/lazy/QuestionLocationLazy.ts'),
//         d = t(
//           './app/j/study-modes/legacy-common/engine/utils/question-element-utils.ts'
//         ),
//         l = t(
//           './app/j/study-modes/redesigned_cards/ui/shared/media/ImageMedia.tsx'
//         ),
//         u =
//           (t('./node_modules/core-js/modules/es.object.values.js'),
//           t('./app/j/global/QuizletBase.ts')),
//         c = {
//           [u.I_.MOBILE]: [
//             {
//               lowerThreshold: 460,
//               fontSize: 14,
//             },
//             {
//               lowerThreshold: 332,
//               fontSize: 16,
//             },
//             {
//               lowerThreshold: 275,
//               fontSize: 18,
//             },
//             {
//               lowerThreshold: 194,
//               fontSize: 20,
//             },
//             {
//               lowerThreshold: 179,
//               fontSize: 22,
//             },
//             {
//               lowerThreshold: 128,
//               fontSize: 24,
//             },
//             {
//               lowerThreshold: 112,
//               fontSize: 26,
//             },
//             {
//               lowerThreshold: 82,
//               fontSize: 28,
//             },
//             {
//               lowerThreshold: 66,
//               fontSize: 30,
//             },
//           ],
//           [u.I_.TABLET]: [
//             {
//               lowerThreshold: 885,
//               fontSize: 14,
//             },
//             {
//               lowerThreshold: 598,
//               fontSize: 16,
//             },
//             {
//               lowerThreshold: 547,
//               fontSize: 18,
//             },
//             {
//               lowerThreshold: 434,
//               fontSize: 20,
//             },
//             {
//               lowerThreshold: 338,
//               fontSize: 22,
//             },
//             {
//               lowerThreshold: 308,
//               fontSize: 24,
//             },
//             {
//               lowerThreshold: 234,
//               fontSize: 26,
//             },
//             {
//               lowerThreshold: 230,
//               fontSize: 28,
//             },
//             {
//               lowerThreshold: 204,
//               fontSize: 30,
//             },
//           ],
//           [u.I_.DESKTOP]: [
//             {
//               lowerThreshold: 789,
//               fontSize: 14,
//             },
//             {
//               lowerThreshold: 631,
//               fontSize: 16,
//             },
//             {
//               lowerThreshold: 492,
//               fontSize: 18,
//             },
//             {
//               lowerThreshold: 451,
//               fontSize: 20,
//             },
//             {
//               lowerThreshold: 343,
//               fontSize: 22,
//             },
//             {
//               lowerThreshold: 271,
//               fontSize: 24,
//             },
//             {
//               lowerThreshold: 246,
//               fontSize: 26,
//             },
//             {
//               lowerThreshold: 232,
//               fontSize: 28,
//             },
//             {
//               lowerThreshold: 174,
//               fontSize: 30,
//             },
//           ],
//         },
//         p = {
//           [u.I_.MOBILE]: [
//             {
//               lowerThreshold: 56,
//               fontSize: 14,
//             },
//             {
//               lowerThreshold: 50,
//               fontSize: 16,
//             },
//             {
//               lowerThreshold: 46,
//               fontSize: 18,
//             },
//             {
//               lowerThreshold: 41,
//               fontSize: 20,
//             },
//             {
//               lowerThreshold: 36,
//               fontSize: 22,
//             },
//             {
//               lowerThreshold: 32,
//               fontSize: 24,
//             },
//             {
//               lowerThreshold: 27,
//               fontSize: 28,
//             },
//           ],
//           [u.I_.TABLET]: [
//             {
//               lowerThreshold: 174,
//               fontSize: 14,
//             },
//             {
//               lowerThreshold: 148,
//               fontSize: 16,
//             },
//             {
//               lowerThreshold: 133,
//               fontSize: 18,
//             },
//             {
//               lowerThreshold: 124,
//               fontSize: 20,
//             },
//             {
//               lowerThreshold: 112,
//               fontSize: 22,
//             },
//             {
//               lowerThreshold: 102,
//               fontSize: 24,
//             },
//             {
//               lowerThreshold: 92,
//               fontSize: 28,
//             },
//             {
//               lowerThreshold: 82,
//               fontSize: 30,
//             },
//           ],
//           [u.I_.DESKTOP]: [
//             {
//               lowerThreshold: 368,
//               fontSize: 14,
//             },
//             {
//               lowerThreshold: 286,
//               fontSize: 16,
//             },
//             {
//               lowerThreshold: 220,
//               fontSize: 18,
//             },
//             {
//               lowerThreshold: 170,
//               fontSize: 20,
//             },
//             {
//               lowerThreshold: 158,
//               fontSize: 22,
//             },
//             {
//               lowerThreshold: 132,
//               fontSize: 24,
//             },
//             {
//               lowerThreshold: 112,
//               fontSize: 26,
//             },
//             {
//               lowerThreshold: 102,
//               fontSize: 28,
//             },
//             {
//               lowerThreshold: 82,
//               fontSize: 30,
//             },
//           ],
//         },
//         m = t('./node_modules/react/jsx-runtime.js'),
//         _ = (0, a.z)('div')({
//           name: 'Wrapper',
//           class: 'wdwivj1',
//         }),
//         h = (0, a.z)('div')({
//           name: 'Fade',
//           class: 'f1h9p0hk',
//         }),
//         g = (0, a.z)('div')({
//           name: 'DiagramWrapper',
//           class: 'dzjegfn',
//         }),
//         j = (0, a.z)('div')({
//           name: 'TextWrapper',
//           class: 'ttuvcp0',
//           vars: {
//             'ttuvcp0-0': [(e) => (e.fontSize ? e.fontSize + 'px' : 'inherit')],
//             'ttuvcp0-1': [(e) => (e.isLong ? 'left' : 'center')],
//           },
//         }),
//         y = (0, a.z)('div')({
//           name: 'ImageWrapper',
//           class: 'i1782vbt',
//           vars: {
//             'i1782vbt-1': [(e) => (e.hasLongText ? '25%' : 'unset')],
//           },
//         });
//       function S(e) {
//         var {children: s, containerRef: t} = e,
//           [a, r] = (0, n.useState)(false);
//         return (
//           (0, n.useEffect)(() => {
//             if (t.current) {
//               var e = t.current;
//               e.scrollHeight > e.clientHeight && r(true);
//             }
//           }, [t]),
//           (0, m.jsxs)(m.Fragment, {
//             children: [s, a ? (0, m.jsx)(h, {}) : null],
//           })
//         );
//       }
//       var f = (e) => !(null == e || !e.plainText.trim());
//       function v(e) {
//         var s,
//           t,
//           {questionElement: a, onClick: onClick} = e,
//           h = (0, n.useContext)(o.Z),
//           v = (0, n.useRef)(null),
//           {location: E, text: x, image: b} = (0, d.Sg)(a),
//           A = ((e, s, t) => {
//             if ('undefined' == typeof window) {
//               var n = s ? p[t] : c[t];
//               for (var {lowerThreshold: a, fontSize: r} of Object.values(n))
//                 if (e >= a) return r;
//               return 32;
//             }
//           })(
//             null !=
//               (s = null == x || null == (t = x.plainText) ? void 0 : t.length)
//               ? s
//               : 0,
//             void 0 !== b,
//             h.deviceCategory
//           );
//         if (E)
//           return (0, m.jsx)(g, {
//             children: (0, m.jsx)(i.Z, {
//               image: E.diagramImage,
//               shape: E.shape,
//             }),
//           });
//         var T = f(x) && x.plainText.length > 80;
//         return (0, m.jsxs)(_, {
//           onClick: onClick,
//           children: [
//             f(x) || void 0 === b
//               ? (0, m.jsx)(j, {
//                   fontSize: A,
//                   isLong: T,
//                   ref: v,
//                   children: (0, m.jsx)(S, {
//                     containerRef: v,
//                     children: f(x)
//                       ? (0, m.jsx)(r.Z, {
//                           lang: x.languageCode,
//                           richText: x.richText,
//                           text: x.plainText,
//                           textfit: !A && {
//                             min: 14,
//                             max: 32,
//                           },
//                         })
//                       : (0, m.jsx)(r.Z, {
//                           lang: '',
//                           text: '...',
//                           textfit: {
//                             min: 14,
//                             max: 32,
//                           },
//                         }),
//                   }),
//                 })
//               : null,
//             b
//               ? (0, m.jsx)(y, {
//                   hasLongText: T,
//                   children: (0, m.jsx)(l.Z, {
//                     alt: null == x ? void 0 : x.plainText,
//                     image: b,
//                   }),
//                 })
//               : null,
//           ],
//         });
//       }
//       t(
//         './.linaria-cache/app/j/study-modes/redesigned_cards/ui/shared/media/ScrollableCardElements.linaria.css'
//       );
//       var E = t(
//         './app/j/study-modes/redesigned_cards/ui/shared/QuestionGrid.tsx'
//       );
//       function x(e) {
//         var {questionElement: s, elements: t = {}, overlayElement: n} = e;
//         return (0, m.jsxs)(E.Z, {
//           children: [
//             t.topLeft
//               ? (0, m.jsx)(E.Z.TopLeft, {
//                   children: t.topLeft,
//                 })
//               : null,
//             t.topCenter
//               ? (0, m.jsx)(E.Z.TopCenter, {
//                   children: t.topCenter,
//                 })
//               : null,
//             t.topRight
//               ? (0, m.jsx)(E.Z.TopRight, {
//                   children: t.topRight,
//                 })
//               : null,
//             (0, m.jsxs)(E.Z.Elements, {
//               children: [
//                 (0, m.jsx)(v, {
//                   onClick: () => {},
//                   questionElement: s,
//                 }),
//                 n
//                   ? (0, m.jsx)(E.Z.Overlay, {
//                       children: n,
//                     })
//                   : null,
//               ],
//             }),
//             t.buttons
//               ? (0, m.jsx)(E.Z.Options, {
//                   children: t.buttons,
//                 })
//               : null,
//           ],
//         });
//       }
//     },
//     './app/j/study-modes/redesigned_cards/ui/shared/FlashcardsEditingModal.tsx':
//       (e, s, t) => {
//         'use strict';
//         t.d(s, {
//           Z: () => _,
//         });
//         var n = t('./app/j/core/default_store/DefaultStoreProvider.tsx'),
//           a =
//             (t('./node_modules/core-js/modules/es.array.iterator.js'),
//             t('./node_modules/core-js/modules/es.promise.js'),
//             t('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
//             (0, t('./app/j/hocs/lazilyLoadComponent.tsx').Z)(
//               () =>
//                 Promise.all([
//                   t.e('rich_text_editing'),
//                   t.e('common'),
//                   t.e('edit_studiable_item_modal_lazy'),
//                 ]).then(
//                   t.bind(
//                     t,
//                     './app/j/study-modes/legacy-common/components/EditStudiableItemModal.tsx'
//                   )
//                 ),
//               {
//                 withSpinner: true,
//               }
//             )),
//           r = t('./node_modules/nullthrows/nullthrows.js'),
//           o = t.n(r),
//           i =
//             (t('./node_modules/react/index.js'),
//             t('./app/j/study-modes/data/settings/selectors/display.ts')),
//           d = t('./app/j/study-modes/data/studiable-data/selectors.ts'),
//           l = t(
//             './app/j/study-modes/redesigned_cards/data/engine/selectors.ts'
//           ),
//           u = t('./app/j/study-modes/redesigned_cards/data/ui/index.ts'),
//           c = t('./app/j/study-modes/redesigned_cards/data/ui/actions.ts'),
//           p = t('./app/j/study-modes/redesigned_cards/data/ui/selector.ts'),
//           m = t('./node_modules/react/jsx-runtime.js');
//         function _() {
//           var e = (0, n.v9)(p.eS),
//             s = (0, n.v9)(l.bl),
//             t = (0, n.v9)(p.yQ),
//             r = (0, n.v9)(p.mW),
//             _ = (0, n.v9)(l.wG),
//             h = (0, n.v9)(i.ds),
//             g = (0, n.v9)(d.Uv),
//             j = (0, n.I0)();
//           return _ && e && null !== s
//             ? (0, m.jsx)(a, {
//                 answerSide: o()(_.metadata.answerSide),
//                 cancelEdit: () => j((0, u.lT)()),
//                 canEditRichText: h,
//                 errors: t,
//                 isOpen: true,
//                 isRequestingEdit: r,
//                 promptSide: o()(_.metadata.promptSide),
//                 saveEdit: (e) => j((0, c.XU)(e)),
//                 studiableAccents: g,
//                 studiableItem: s,
//               })
//             : null;
//         }
//       },
//     './app/j/study-modes/redesigned_cards/ui/shared/QuestionGrid.tsx': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         w: () => m,
//       });
//       var n = t('./node_modules/@linaria/react/lib/index.js'),
//         a = (0, n.z)('div')({
//           name: 'Card',
//           class: 'c78g08u',
//         }),
//         r = (0, n.z)(a)({
//           name: 'QuestionGrid',
//           class: 'qvzly0m',
//         }),
//         o = (0, n.z)('div')({
//           name: 'TopLeft',
//           class: 't13sx6bl',
//         }),
//         i = (0, n.z)('div')({
//           name: 'TopCenter',
//           class: 't1nus9b',
//         }),
//         d = (0, n.z)('div')({
//           name: 'TopRight',
//           class: 't1booghs',
//         }),
//         l = (0, n.z)('div')({
//           name: 'Elements',
//           class: 'eh01k7j',
//         }),
//         u = (0, n.z)('div')({
//           name: 'Overlay',
//           class: 'o11g6ed5',
//         }),
//         c = (0, n.z)('div')({
//           name: 'Buttons',
//           class: 'b1n3dd2c',
//         }),
//         p = (0, n.z)('div')({
//           name: 'Wrapper',
//           class: 'w1mab56i',
//         });
//       (r.TopLeft = o),
//         (r.TopCenter = i),
//         (r.TopRight = d),
//         (r.Elements = l),
//         (r.Options = c),
//         (r.Overlay = u),
//         (s.Z = r);
//       var m = p;
//       t(
//         './.linaria-cache/app/j/study-modes/redesigned_cards/ui/shared/QuestionGrid.linaria.css'
//       );
//     },
//     './app/j/study-modes/redesigned_cards/ui/shared/TwoSidedFlashcard.tsx': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         Z: () => l,
//       });
//       var n = t('./node_modules/@linaria/react/lib/index.js'),
//         a =
//           (t('./node_modules/react/index.js'),
//           t(
//             './app/j/study-modes/redesigned_cards/ui/shared/FlashcardSide.tsx'
//           )),
//         r = t(
//           './app/j/study-modes/redesigned_cards/ui/shared/QuestionGrid.tsx'
//         ),
//         o = t('./node_modules/react/jsx-runtime.js'),
//         i = (0, n.z)('div')({
//           name: 'Wrapper',
//           class: 'w475g0b',
//         }),
//         d = (0, n.z)(r.w)({
//           name: 'SideWrapper',
//           class: 's1fwkgww',
//         });
//       function l(e) {
//         var {elements: s = {}, question: t} = e;
//         return (0, o.jsxs)(i, {
//           children: [
//             (0, o.jsx)(d, {
//               children: (0, o.jsx)(a.Z, {
//                 elements: {
//                   topLeft: s.topLeft,
//                   topRight: s.topRight,
//                 },
//                 questionElement: t.back,
//               }),
//             }),
//             (0, o.jsx)(d, {
//               children: (0, o.jsx)(a.Z, {
//                 elements: {
//                   buttons: s.buttons,
//                 },
//                 questionElement: t.front,
//               }),
//             }),
//           ],
//         });
//       }
//       t(
//         './.linaria-cache/app/j/study-modes/redesigned_cards/ui/shared/TwoSidedFlashcard.linaria.css'
//       );
//     },
//     './app/j/study-modes/redesigned_cards/ui/shared/media/ImageMedia.tsx': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         Z: () => l,
//       });
//       var n = t('./node_modules/@linaria/react/lib/index.js'),
//         a = t('./app/j/components/ZoomableImage.tsx'),
//         r = t('./node_modules/react/index.js'),
//         o = t('./app/j/utils/ImageSizeHelper.ts'),
//         i = t('./node_modules/react/jsx-runtime.js'),
//         d = (0, n.z)('img')({
//           name: 'Image',
//           class: 'i1ff6nzg',
//         });
//       function l(e) {
//         var {alt: s, image: t} = e,
//           n = (0, r.useRef)();
//         return (0, i.jsxs)(i.Fragment, {
//           children: [
//             (0, i.jsx)(a.Z, {
//               ref: (e) => {
//                 e && (n.current = e);
//               },
//               zoomUrl: (0, o.eA)(t.url),
//             }),
//             (0, i.jsx)(
//               d,
//               {
//                 alt: s,
//                 onClick: (e) => {
//                   var s;
//                   e.stopPropagation(),
//                     null == (s = n.current) || null == s.show || s.show();
//                 },
//                 src: (0, o.eA)(t.url),
//               },
//               t.url
//             ),
//           ],
//         });
//       }
//       t(
//         './.linaria-cache/app/j/study-modes/redesigned_cards/ui/shared/media/ImageMedia.linaria.css'
//       );
//     },
//     './app/j/study-modes/spell/types.ts': (e, s, t) => {
//       'use strict';
//       var n, a;
//       t.d(s, {
//         f: () => n,
//         k: () => a,
//       }),
//         (function (e) {
//           (e.AD_MODAL = 'ad_modal'),
//             (e.EMPTY = 'empty'),
//             (e.CHECKPOINT = 'checkpoint'),
//             (e.END = 'end'),
//             (e.CORRECTION = 'correction'),
//             (e.ONBOARDING = 'onboarding'),
//             (e.QUESTION = 'question');
//         })(n || (n = {})),
//         (function (e) {
//           (e.CORRECT_ONE_TIME = 'correctOneTime'),
//             (e.CORRECT_TWO_TIMES = 'correctTwoTimes'),
//             (e.CORRECT_ZERO_TIMES = 'correctZeroTimes');
//         })(a || (a = {}));
//     },
//     './app/j/study-modes/test/constants.ts': (e, s, t) => {
//       'use strict';
//       var n;
//       t.d(s, {
//         MB: () => u,
//         NG: () => r,
//         UC: () => d,
//         Yo: () => o,
//         f: () => l,
//         mK: () => i,
//         o6: () => n,
//         wp: () => a,
//       }),
//         (function (e) {
//           (e.TRUE_FALSE = 'trueFalse'),
//             (e.MCQ = 'mcq'),
//             (e.MATCHING = 'matching'),
//             (e.WRITTEN = 'written');
//         })(n || (n = {}));
//       var a = 'testCTA',
//         r = 'test_mode_click_print_results',
//         o = 'test_mode_click_print_in_test',
//         i = 'test_mode_click_print',
//         d = 'testMode',
//         l = 80,
//         u = 300;
//     },
//     './app/j/study-modes/test/selectors/ads.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         X: () => o,
//       });
//       var n = t('./node_modules/reselect/lib/index.js'),
//         a = t('./app/j/study-modes/test/selectors/base.ts'),
//         r = t('./app/j/study-modes/test/types.ts'),
//         o = (0, n.createSelector)(a.e, (e) => e === r.d.AD_MODAL);
//     },
//     './app/j/study-modes/test/selectors/base.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         e: () => o,
//         o: () => r,
//       });
//       var n = t('./node_modules/reselect/lib/index.js'),
//         a = t('./app/j/study-modes/test/constants.ts'),
//         r = (e) => e[a.UC],
//         o = (0, n.createSelector)(r, (e) => (null == e ? void 0 : e.view));
//     },
//     './app/j/study-modes/test/types.ts': (e, s, t) => {
//       'use strict';
//       var n;
//       t.d(s, {
//         d: () => n,
//       }),
//         (function (e) {
//           (e.TEST = 'test'),
//             (e.REVIEW = 'review'),
//             (e.AD_MODAL = 'ad_modal'),
//             (e.PAYWALL = 'paywall'),
//             (e.LOADING = 'loading');
//         })(n || (n = {}));
//     },
//     './app/j/study-modes/write/types.ts': (e, s, t) => {
//       'use strict';
//       var n, a, r;
//       t.d(s, {
//         i9: () => n,
//         ru: () => r,
//         x$: () => a,
//       }),
//         (function (e) {
//           (e.AD_MODAL = 'ad_modal'),
//             (e.LOADING = 'loading'),
//             (e.CHECKPOINT = 'checkpoint'),
//             (e.COPY_ANSWER = 'copy_answer'),
//             (e.END = 'end'),
//             (e.FEEDBACK = 'feedback'),
//             (e.QUESTION = 'question');
//         })(n || (n = {})),
//         (function (e) {
//           (e.SET_CURRENT_VIEW = 'WRITE.SET_CURRENT_VIEW'),
//             (e.SET_IS_SHOWING_INLINE_FEEDBACK =
//               'WRITE.SET_IS_SHOWING_INLINE_FEEDBACK'),
//             (e.SET_LAST_INTERMISSION_VIEW = 'WRITE.SET_LAST_INTERMISSION_VIEW');
//         })(a || (a = {})),
//         (function (e) {
//           (e.CORRECT = 'correct'),
//             (e.INCORRECT = 'incorrect'),
//             (e.OVERALL = 'overall');
//         })(r || (r = {}));
//     },
//     './app/j/syncers/SelectedTermSyncer.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => i,
//       });
//       var n = t('./app/j/models/QModel.ts');
//       class a extends n.Z {}
//       (a.URL_BASE = 'selected-terms'),
//         (a.MODEL_NAME = 'selectedTerm'),
//         (a.UNIQUE_KEYS = ['termId', 'personId']);
//       var r = t('./app/j/syncers/LegacySyncer.ts'),
//         o = Object.assign({}, r.Z);
//       o.init(a);
//       var i = o;
//     },
//     './app/j/syncers/SessionSyncer.ts': (e, s, t) => {
//       'use strict';
//       var n = t('./app/j/models/QSession.ts'),
//         a = t('./app/j/syncers/LegacySyncer.ts'),
//         r = Object.assign({}, a.Z);
//       r.init(n.Z), (s.Z = r);
//     },
//     './app/j/syncers/StudiableAnswerSyncer.ts': (e, s, t) => {
//       'use strict';
//       var n = t('./app/j/models/QStudiableAnswer.ts'),
//         a = t('./app/j/syncers/LegacySyncer.ts'),
//         r = Object.assign({}, a.Z);
//       r.init(n.Z), (s.Z = r);
//     },
//     './app/j/syncers/StudySettingSyncer.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => i,
//       });
//       var n = t('./app/j/models/QModel.ts');
//       class a extends n.Z {}
//       (a.URL_BASE = 'study-settings'),
//         (a.MODEL_NAME = 'studySetting'),
//         (a.UNIQUE_KEYS = [
//           'personId',
//           'studyableType',
//           'studyableId',
//           'settingType',
//         ]);
//       var r = t('./app/j/syncers/LegacySyncer.ts'),
//         o = {};
//       Object.assign(o, r.Z), o.init(a);
//       var i = o;
//     },
//     './app/j/syncers/TermSyncer.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => i,
//       });
//       var n = t('./app/j/models/QModel.ts');
//       class a extends n.Z {}
//       (a.URL_BASE = 'terms'),
//         (a.MODEL_NAME = 'term'),
//         (a.PARTITION_COLUMN = 'setId');
//       var r = t('./app/j/syncers/LegacySyncer.ts'),
//         o = Object.assign({}, r.Z);
//       o.init(a), o.setShouldSyncDelay(true);
//       var i = o;
//     },
//     './app/j/tracking/isFacebookBlocked.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => i,
//       });
//       t('./node_modules/core-js/modules/es.promise.js');
//       var n = t('./app/j/config/enums.ts'),
//         a = t('./app/j/utils/Cookie.ts'),
//         r = t('./app/j/utils/isDomainAccessible.ts');
//       function o(e) {
//         return (
//           null === a.ZP.read(n.VjB.SIGNUP__HIDE_FB_BUTTON) &&
//             a.ZP.write(n.VjB.SIGNUP__HIDE_FB_BUTTON, e, {
//               duration: 0.020833333333333332,
//             }),
//           '1' === e
//         );
//       }
//       function i() {
//         try {
//           var e = a.ZP.read(n.VjB.SIGNUP__HIDE_FB_BUTTON);
//           return null !== e
//             ? Promise.resolve('1' === e)
//             : (0, r.Z)('https://facebook.com')
//                 .then(() => o('0'))
//                 .catch(() => o('1'));
//         } catch (s) {
//           return Promise.resolve(false);
//         }
//       }
//     },
//     './app/j/utils/ProgressArcHelper.ts': (e, s, t) => {
//       'use strict';
//       function n(e, s, t, n) {
//         var a = ((n - 90) * Math.PI) / 180;
//         return {
//           x: e + t * Math.cos(a),
//           y: s + t * Math.sin(a),
//         };
//       }
//       function a(e, s) {
//         return (s * (360 - 2 * e)) / 100;
//       }
//       function r(e, s, t, a, r) {
//         var o = n(e, s, t, r),
//           i = n(e, s, t, a),
//           d = r - a <= 180 ? '0' : '1';
//         return ['M', o.x, o.y, 'A', t, t, 0, d, 0, i.x, i.y].join(' ');
//       }
//       t.d(s, {
//         hm: () => a,
//         x8: () => r,
//       });
//     },
//     './app/j/utils/StudyEventLogger.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => _,
//       });
//       var n = t(
//           './node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js'
//         ),
//         a = t('./app/j/config/enums.ts'),
//         r = t('./app/j/utils/log-event.ts'),
//         o = t('./app/j/utils/PageSessionHelper.ts'),
//         i =
//           (t('./node_modules/core-js/modules/es.json.stringify.js'),
//           t('./app/j/utils/unix-timestamp.ts'));
//       class d {
//         constructor(e) {
//           var {
//             studyPageSessionHelper: s,
//             questionPageSessionHelper: t,
//             uid: n,
//             userId: a,
//           } = e;
//           (this.studyPageSessionHelper = s),
//             (this.questionPageSessionHelper = t),
//             (this.uid = n),
//             (this.userId = a);
//         }
//         getStudySessionId() {
//           return this.studyPageSessionHelper.getPageSessionId();
//         }
//         getQuestionSessionId() {
//           return this.questionPageSessionHelper.getPageSessionId();
//         }
//         logMultipleChoiceOptionEvent(e, s) {
//           var t = Object.assign(
//             {
//               action: e,
//               uid: this.uid,
//               user_id: this.userId || null,
//               client_id: null,
//               client_timestamp: (0, i.vJ)(),
//               platform: a.t4T.WEB,
//               study_session_id: this.studyPageSessionHelper.getPageSessionId(),
//               question_session_id: this.getQuestionSessionId(),
//             },
//             s,
//             {
//               option_texts: JSON.stringify(s.option_texts),
//             }
//           );
//           (0, r.Z)('multiple_choice_option_events', t);
//         }
//       }
//       class l {
//         constructor(e) {
//           var {
//             studyPageSessionHelper: s,
//             questionPageSessionHelper: t,
//             uid: n,
//             userId: a,
//           } = e;
//           (this.studyPageSessionHelper = s),
//             (this.questionPageSessionHelper = t),
//             (this.uid = n),
//             (this.userId = a);
//         }
//         getStudySessionId() {
//           return this.studyPageSessionHelper.getPageSessionId();
//         }
//         getQuestionSessionId() {
//           return this.questionPageSessionHelper.getPageSessionId();
//         }
//         logTextGradingEvent(e, s, t) {
//           void 0 === t && (t = (0, i.vJ)());
//           var n = Object.assign(
//             {
//               action: e,
//               client_id: null,
//               client_timestamp: t,
//               platform: a.t4T.WEB,
//               question_session_id: this.getQuestionSessionId(),
//               study_session_id: this.getStudySessionId(),
//               uid: this.uid,
//               user_id: this.userId || null,
//             },
//             s
//           );
//           (0, r.Z)('text_grading_events', n);
//         }
//       }
//       var u = ['answeredTermId', 'promptTermId', 'questionContent'];
//       class c {
//         constructor(e, s, t, n) {
//           (this.modeType = e),
//             (this.questionPageSessionHelper = new o.Z()),
//             (this.studyPageSessionHelper = s),
//             (this.multipleChoiceOptionLogger = null),
//             (this.textGradingEventLogger = null),
//             (this.uid = t),
//             (this.userId = n);
//         }
//         generateNewQuestionSessionId() {
//           this.questionPageSessionHelper.setPageSessionId(
//             this.questionPageSessionHelper.generatePageSessionId()
//           );
//         }
//         getQuestionSessionId() {
//           return this.questionPageSessionHelper.getPageSessionId();
//         }
//         getStudySessionId() {
//           return this.studyPageSessionHelper.getPageSessionId();
//         }
//         logQuestionEvent(e, s, t, o) {
//           void 0 === t && (t = false);
//           var {answeredTermId: d, promptTermId: l, questionContent: c} = s,
//             p = (0, n.Z)(s, u);
//           e === a.WFi.VIEW_START && this.generateNewQuestionSessionId(),
//             t && this.generateNewQuestionSessionId();
//           var m = Object.assign(
//             {
//               action: e,
//               uid: this.uid,
//               mode_type: this.modeType,
//               client_answered_term_id: d,
//               server_answered_term_id: d,
//               client_prompt_term_id: l,
//               server_prompt_term_id: l,
//               client_timestamp: (0, i.vJ)(),
//               platform: a.t4T.WEB,
//               question_session_id: this.getQuestionSessionId(),
//               study_session_id: this.studyPageSessionHelper.getPageSessionId(),
//               question_content: e === a.WFi.VIEW_START ? c : null,
//             },
//             p
//           );
//           o
//             ? (0, r.K)(o, 'question_events', m)
//             : (0, r.Z)('question_events', m);
//         }
//         getMultipleChoiceOptionLogger() {
//           return (
//             null === this.multipleChoiceOptionLogger &&
//               (this.multipleChoiceOptionLogger = new d({
//                 studyPageSessionHelper: this.studyPageSessionHelper,
//                 questionPageSessionHelper: this.questionPageSessionHelper,
//                 uid: this.uid,
//                 userId: this.userId,
//               })),
//             this.multipleChoiceOptionLogger
//           );
//         }
//         getTextGradingEventLogger() {
//           return (
//             null === this.textGradingEventLogger &&
//               (this.textGradingEventLogger = new l({
//                 questionPageSessionHelper: this.questionPageSessionHelper,
//                 studyPageSessionHelper: this.studyPageSessionHelper,
//                 uid: this.uid,
//                 userId: this.userId,
//               })),
//             this.textGradingEventLogger
//           );
//         }
//       }
//       var p = t('./app/j/utils/SearchEventLogger.ts'),
//         m = ['sessionId', 'termId', 'referer', 'selectedOnly'];
//       class _ {
//         constructor(e) {
//           var {
//             modeType: s,
//             selectedOnly: t,
//             studyableId: n,
//             studyableType: a,
//             embedType: r,
//             enabled: i = true,
//             funnelUUID: d,
//             gameInstanceId: l,
//             gameInstanceUuid: u,
//             gameType: p,
//             uid: m,
//             userId: _,
//           } = e;
//           (this.modeType = s),
//             (this.selectedOnly = t),
//             (this.studyableId = n),
//             (this.studyableType = a),
//             (this.embedType = r),
//             (this.enabled = i),
//             (this.funnelUUID = d),
//             (this.gameInstanceId = l),
//             (this.gameInstanceUuid = u),
//             (this.gameType = p),
//             (this.uid = m),
//             (this.userId = _),
//             (this.studyPageSessionHelper = new o.Z()),
//             (this.questionEventLogger = new c(
//               this.modeType,
//               this.studyPageSessionHelper,
//               m,
//               _
//             )),
//             (this.logStudyEvent = this.logStudyEvent.bind(this));
//         }
//         getStudySessionId() {
//           return this.studyPageSessionHelper.getPageSessionId();
//         }
//         logStudyEvent(e, s, t) {
//           if (this.enabled) {
//             var o = t || {},
//               {sessionId: d, termId: l, referer: u, selectedOnly: c} = o,
//               _ = (0, n.Z)(o, m),
//               h = Object.assign(
//                 {
//                   action: e,
//                   client_session_id: d,
//                   client_studyable_id: this.studyableId,
//                   client_term_id: l,
//                   client_timestamp: (0, i.vJ)(),
//                   embed_type: this.embedType,
//                   funnel_uuid: this.funnelUUID,
//                   game_instance_id: this.gameInstanceId,
//                   game_instance_uuid: this.gameInstanceUuid,
//                   game_type: this.gameType,
//                   mode_type: this.modeType,
//                   platform: a.t4T.WEB,
//                   referrer: u || window.document.referrer,
//                   selected_only: void 0 !== c ? c : this.selectedOnly,
//                   server_session_id: d,
//                   server_studyable_id: this.studyableId,
//                   server_term_id: l,
//                   study_session_id: this.getStudySessionId(),
//                   studyable_type: this.studyableType,
//                   uid: this.uid,
//                   user_id: this.userId || null,
//                 },
//                 _
//               ),
//               {loggers: g, loggerConfig: j} = s;
//             g && g.logEvent
//               ? g.logEvent('study_events', h, {
//                   includeUserDetails: false,
//                 })
//               : j &&
//                 (0, r.K)(j, 'study_events', h, {
//                   includeUserDetails: false,
//                 }),
//               e !== a.WVJ.BEGIN ||
//                 this.embedType ||
//                 p.ZP.logSearchHitStudy(
//                   this.studyableId,
//                   this.studyableType,
//                   this.getStudySessionId(),
//                   this.modeType,
//                   s
//                 );
//           }
//         }
//         getQuestionEventLogger() {
//           return this.questionEventLogger;
//         }
//       }
//     },
//     './app/j/utils/StudySettingEncodingHelper.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Yu: () => p,
//         R1: () => _,
//         S5: () => m,
//         vd: () => j,
//         Tx: () => g,
//         eR: () => h,
//       });
//       var n = t('./node_modules/lodash/flow.js'),
//         a = t.n(n),
//         r =
//           (t('./node_modules/core-js/modules/es.array.reduce.js'),
//           t('./node_modules/core-js/modules/es.array.iterator.js'),
//           t('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
//           t('./app/j/config/enums.ts')),
//         o = t('./app/j/config/study-setting-metadata.ts'),
//         i = t('./node_modules/nullthrows/nullthrows.js'),
//         d = t.n(i),
//         l = t(
//           './app/j/study-modes/legacy-common/utils/studiablesToTermUtils.ts'
//         );
//       r.Std.PROMPT_TERM_SIDES,
//         r.Std.ANSWER_TERM_SIDES,
//         r.Std.MATCH_MODE_SIDES,
//         r.Std.TEST_PROMPT_TERM_SIDES,
//         r.Std.TEST_ANSWER_TERM_SIDES;
//       function u(e) {
//         var s = d()(
//           (function (e, s) {
//             for (var t = Object.keys(e), n = 0; n < t.length; n++)
//               if (e[t[n]] === s) return t[n];
//             return null;
//           })(r.Std, e)
//         );
//         return o.ZP[s] ? s : null;
//       }
//       function c(e) {
//         return Math.pow(2, Number(e));
//       }
//       function p(e) {
//         return e.reduce((e, s) => {
//           return (
//             (t = e),
//             (n = s),
//             void 0 === a && (a = true),
//             Number(a ? t | n : t & ~n)
//           );
//           var t, n, a;
//         }, 0);
//       }
//       function m(e) {
//         return p(e.map(c));
//       }
//       function _(e) {
//         return p(e.map(a()(l.Q, c)));
//       }
//       function h(e, s, t) {
//         return s ? [...t, e] : t.filter((s) => s !== e);
//       }
//       function g(e) {
//         var s = d()(u(e));
//         return o.ZP[s];
//       }
//       function j(e) {
//         return d()(g(e)).defaultValue;
//       }
//     },
//     './app/j/utils/createDynamicSlice.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => o,
//       });
//       var n = t('./node_modules/lodash/omit.js'),
//         a = t.n(n),
//         r = t(
//           './node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js'
//         );
//       function o(e) {
//         var s = (0, r.createSlice)(
//           Object.assign({}, e, {
//             reducers: Object.assign({}, e.reducers, {
//               _hydrate: (s, t) => e.getInitialState(t.payload),
//             }),
//             initialState: {},
//           })
//         );
//         return Object.assign({}, a()(s, 'reducer'), {
//           actions: a()(s.actions, '_hydrate'),
//           getReducer: (t) =>
//             function (n, a) {
//               return (
//                 void 0 === n && (n = e.getInitialState(t)), s.reducer(n, a)
//               );
//             },
//           ssr: {
//             reducer: s.reducer,
//             hydrate: (e, t) => {
//               e.dispatch(s.actions._hydrate(t));
//             },
//           },
//         });
//       }
//     },
//     './app/j/utils/is-element-active.ts': (e, s, t) => {
//       'use strict';
//       function n(e) {
//         return window.document.activeElement === e;
//       }
//       t.d(s, {
//         Z: () => n,
//       });
//     },
//     './app/j/utils/isDomainAccessible.ts': (e, s, t) => {
//       'use strict';
//       t.d(s, {
//         Z: () => n,
//       });
//       t('./node_modules/core-js/modules/es.promise.js');
//       function n(e, s) {
//         return (
//           void 0 === s && (s = 5e3),
//           new Promise((t, n) => {
//             var a = new Image(),
//               r = window.setTimeout(() => {
//                 n(new Error('Domain ' + e + ' timed out'));
//               }, s);
//             (a.onabort = () => {
//               clearTimeout(r), n(new Error('Domain ' + e + ' aborted'));
//             }),
//               (a.onerror = () => {
//                 clearTimeout(r), n(new Error('Domain ' + e + ' errored'));
//               }),
//               (a.onload = () => {
//                 clearTimeout(r), t();
//               }),
//               (a.src = e + '/favicon.ico');
//           })
//         );
//       }
//     },
//     './app/j/utils/metering/MeteringPlusPhasedRolloutExperiment.tsx': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.d(s, {
//         Fi: () => S,
//         Kq: () => y,
//         PK: () => j,
//         XB: () => d,
//         bX: () => l,
//         cV: () => f,
//         eW: () => p,
//         vM: () => m,
//         w_: () => g,
//       });
//       var n = t('./app/j/config/enums.ts'),
//         a = t('./app/j/context/UserContext.ts'),
//         r = t('./app/j/hooks/useQMeasure.ts'),
//         o = t('./node_modules/react/index.js'),
//         i = t('./node_modules/react/jsx-runtime.js');
//       function d(e, s) {
//         return (
//           'control' !==
//           e.getVariationAndEnroll(
//             'MeteredPlusHoldoutExperimentV3[default,subscriptions,ads]'
//           )
//         );
//       }
//       function l() {
//         var e = (0, r.Z)(),
//           s = (0, o.useContext)(a.Z);
//         return d(e, null == s ? void 0 : s.countryCode);
//       }
//       var u = (e) => {
//           var s,
//             t = null;
//           null !== e &&
//             (e.meteringData
//               ? (t = null != (s = e.meteringData) ? s : null)
//               : e.threshold && (t = e));
//           return {
//             learnMeteringMeta: t,
//           };
//         },
//         c = (0, o.createContext)(void 0),
//         p = (e) => {
//           var {children: s, learnMeteringData: t} = e;
//           return (0, i.jsx)(c.Provider, {
//             value: u(t),
//             children: s,
//           });
//         };
//       function m() {
//         var e,
//           s,
//           t = (0, o.useContext)(c);
//         if (void 0 === t)
//           throw new Error(
//             'useGetNumberOfMeteredPlusLearnRounds() can only be used in components with a LearnMeterContextProvider'
//           );
//         return 'control' ===
//           (0, r.Z)().getFeatureFlagOrTestVariantWithoutEnrolling(
//             'MeteredPlusHoldoutExperimentV3[default,subscriptions,ads]'
//           )
//           ? 0
//           : null !=
//             (e = null == (s = t.learnMeteringMeta) ? void 0 : s.threshold)
//           ? e
//           : null;
//       }
//       var _ = (e) => {
//           var s,
//             t = null;
//           null != e &&
//             (e.meteringData
//               ? (t = null != (s = e.meteringData) ? s : null)
//               : e.threshold && (t = e));
//           return {
//             testMeteringMeta: t,
//           };
//         },
//         h = (0, o.createContext)(void 0),
//         g = (e) => {
//           var {children: s, testMeteringData: t} = e;
//           return (0, i.jsx)(h.Provider, {
//             value: _(t),
//             children: s,
//           });
//         };
//       function j() {
//         var e,
//           s,
//           t = (0, o.useContext)(h);
//         if (void 0 === t)
//           throw new Error(
//             'useGetNumberOfMeteredPlusTestRounds() can only be used in components with a TestMeterContextProvider'
//           );
//         return null !=
//           (e = null == (s = t.testMeteringMeta) ? void 0 : s.threshold)
//           ? e
//           : null;
//       }
//       function y(e) {
//         var s = e.getVariationAndEnroll(
//           'MeteredPlusHoldoutExperimentV3[default,subscriptions,ads]'
//         );
//         return null === s || 'monthlyMeteringFreeTrial' === s;
//       }
//       function S(e, s, t) {
//         return !(!s || !t) || (!!t && !!e && e.numEvents >= e.threshold);
//       }
//       function f(e, s) {
//         if (!l() || !('' + n.jrE.TEST_SUBMISSION in e)) return false;
//         var t = e[n.jrE.TEST_SUBMISSION],
//           a = t && t.numEvents >= t.threshold;
//         return !s && a;
//       }
//     },
//     './node_modules/keymaster/keymaster.js': function (e) {
//       !(function (s) {
//         var t,
//           n = {},
//           a = {
//             16: false,
//             18: false,
//             17: false,
//             91: false,
//           },
//           r = [],
//           o = {
//             '⇧': 16,
//             shift: 16,
//             '⌥': 18,
//             alt: 18,
//             option: 18,
//             '⌃': 17,
//             ctrl: 17,
//             control: 17,
//             '⌘': 91,
//             command: 91,
//           },
//           i = {
//             backspace: 8,
//             tab: 9,
//             clear: 12,
//             enter: 13,
//             return: 13,
//             esc: 27,
//             escape: 27,
//             space: 32,
//             left: 37,
//             up: 38,
//             right: 39,
//             down: 40,
//             del: 46,
//             delete: 46,
//             home: 36,
//             end: 35,
//             pageup: 33,
//             pagedown: 34,
//             ',': 188,
//             '.': 190,
//             '/': 191,
//             '`': 192,
//             '-': 189,
//             '=': 187,
//             ';': 186,
//             "'": 222,
//             '[': 219,
//             ']': 221,
//             '\\': 220,
//           },
//           d = {
//             96: 48,
//             97: 49,
//             98: 50,
//             99: 51,
//             100: 52,
//             101: 53,
//             102: 54,
//             103: 55,
//             104: 56,
//             105: 57,
//           };
//         for (
//           code = function (e) {
//             return i[e] || e.toUpperCase().charCodeAt(0);
//           },
//             _downKeys = [],
//             t = 1;
//           t < 20;
//           t++
//         )
//           i['f' + t] = 111 + t;
//         function l(e, s) {
//           for (var t = e.length; t--; ) if (e[t] === s) return t;
//           return -1;
//         }
//         function u(e, s) {
//           if (e.length != s.length) return false;
//           for (var t = 0; t < e.length; t++) if (e[t] !== s[t]) return false;
//           return true;
//         }
//         var c = {
//           16: 'shiftKey',
//           18: 'altKey',
//           17: 'ctrlKey',
//           91: 'metaKey',
//         };
//         function p(e) {
//           for (t in a) a[t] = e[c[t]];
//         }
//         function m(e, s, t) {
//           var a, r;
//           (a = y(e)), void 0 === t && ((t = s), (s = 'all'));
//           for (var o = 0; o < a.length; o++)
//             (r = []),
//               (e = a[o].split('+')).length > 1 &&
//                 ((r = S(e)), (e = [e[e.length - 1]])),
//               (e = e[0]),
//               (e = code(e)) in n || (n[e] = []),
//               n[e].push({
//                 shortcut: a[o],
//                 scope: s,
//                 method: t,
//                 key: a[o],
//                 mods: r,
//               });
//         }
//         for (t in o) m[t] = false;
//         function _(e) {
//           r = e ? [e] : [];
//         }
//         function h() {
//           return r.length ? r[r.length - 1] : 'all';
//         }
//         function g(e) {
//           r.push(e);
//         }
//         function j(e) {
//           var s = h();
//           if (!Array.isArray(s)) return false;
//           var t = s.indexOf(e);
//           t >= 0 &&
//             (s.splice(t, 1), 0 == s.length ? r.pop() : (r[r.length - 1] = s));
//         }
//         function y(e) {
//           var s;
//           return (
//             '' == (s = (e = e.replace(/\s/g, '')).split(','))[s.length - 1] &&
//               (s[s.length - 2] += ','),
//             s
//           );
//         }
//         function S(e) {
//           for (var s = e.slice(0, e.length - 1), t = 0; t < s.length; t++)
//             s[t] = o[s[t]];
//           return s;
//         }
//         function f(e, s, t) {
//           e.addEventListener
//             ? e.addEventListener(s, t, false)
//             : e.attachEvent &&
//               e.attachEvent('on' + s, function () {
//                 t(window.event);
//               });
//         }
//         f(document, 'keydown', function (e) {
//           !(function (e) {
//             var s, t, r, i, u, c;
//             if (
//               ((s = d[e.keyCode] || e.keyCode),
//               -1 == l(_downKeys, s) && _downKeys.push(s),
//               (93 != s && 224 != s) || (s = 91),
//               s in a)
//             )
//               for (r in ((a[s] = true), o)) o[r] == s && (m[r] = true);
//             else if ((p(e), m.filter.call(this, e) && s in n))
//               for (c = h(), i = 0; i < n[s].length; i++)
//                 if (
//                   ((t = n[s][i]),
//                   (Array.isArray(c) && c.indexOf(t.scope) >= 0) ||
//                     t.scope == c ||
//                     'all' == t.scope)
//                 ) {
//                   for (r in ((u = t.mods.length > 0), a))
//                     ((!a[r] && l(t.mods, +r) > -1) ||
//                       (a[r] && -1 == l(t.mods, +r))) &&
//                       (u = false);
//                   ((0 != t.mods.length || a[16] || a[18] || a[17] || a[91]) &&
//                     !u) ||
//                     (false === t.method(e, t) &&
//                       (e.preventDefault
//                         ? e.preventDefault()
//                         : (e.returnValue = false),
//                       e.stopPropagation && e.stopPropagation(),
//                       e.cancelBubble && (e.cancelBubble = true)));
//                 }
//           })(e);
//         }),
//           f(document, 'keyup', function (e) {
//             var s,
//               t = e.keyCode,
//               n = l(_downKeys, t);
//             if (
//               (n >= 0 && _downKeys.splice(n, 1),
//               (93 != t && 224 != t) || (t = 91),
//               t in a)
//             )
//               for (s in ((a[t] = false), o)) o[s] == t && (m[s] = false);
//           }),
//           f(window, 'focus', function () {
//             for (t in a) a[t] = false;
//             for (t in o) m[t] = false;
//           });
//         var v = s.key;
//         (s.key = m),
//           (s.key.setScope = _),
//           (s.key.getScope = h),
//           (s.key.pushScope = g),
//           (s.key.popScope = function (e) {
//             newScope = [];
//             for (var s = 0; s < r.length && r[s] !== e; s++)
//               newScope.push(r[s]);
//             (r = newScope), j(e);
//           }),
//           (s.key.deleteScope = function (e) {
//             var s, t, a;
//             for (s in n)
//               for (t = n[s], a = 0; a < t.length; )
//                 t[a].scope === e ? t.splice(a, 1) : a++;
//           }),
//           (s.key.addOverlappingScope = function (e) {
//             var s = h(),
//               t = [];
//             'all' != s
//               ? (Array.isArray(s) ? (t = s) : t.push(s),
//                 t.indexOf(e) > -1 ||
//                   (t.push(e), Array.isArray(s) ? (r[r.length - 1] = t) : g(t)))
//               : _(e);
//           }),
//           (s.key.removeOverlappingScope = j),
//           (s.key.filter = function (e) {
//             var s,
//               t = (s =
//                 (s = e.target || e.srcElement) instanceof HTMLDocument
//                   ? s.documentElement
//                   : s).tagName,
//               n = s.classList;
//             if (!(n instanceof DOMTokenList))
//               throw (
//                 (console.info('Event', e),
//                 new Error('Browser does not support classList'))
//               );
//             var a = 'INPUT' !== t && 'SELECT' !== t && 'TEXTAREA' !== t,
//               r = n.contains('js-keymaster-allow');
//             return a || r;
//           }),
//           (s.key.isPressed = function (e) {
//             return 'string' == typeof e && (e = code(e)), -1 != l(_downKeys, e);
//           }),
//           (s.key.getPressedKeyCodes = function () {
//             return _downKeys.slice(0);
//           }),
//           (s.key.noConflict = function () {
//             var e = s.key;
//             return (s.key = v), e;
//           }),
//           (s.key.unbind = function (e, s) {
//             var t,
//               a,
//               r,
//               o,
//               i,
//               d = [];
//             for (t = y(e), o = 0; o < t.length; o++) {
//               if (
//                 ((a = t[o].split('+')).length > 1 && (d = S(a)),
//                 (e = a[a.length - 1]),
//                 (e = code(e)),
//                 void 0 === s && (s = h()),
//                 !n[e])
//               )
//                 return;
//               for (r = 0; r < n[e].length; r++)
//                 (i = n[e][r]).scope === s && u(i.mods, d) && (n[e][r] = {});
//             }
//           }),
//           (e.exports = m);
//       })(this);
//     },
//     './node_modules/lodash/_LazyWrapper.js': (e, s, t) => {
//       var n = t('./node_modules/lodash/_baseCreate.js'),
//         a = t('./node_modules/lodash/_baseLodash.js');
//       function r(e) {
//         (this.__wrapped__ = e),
//           (this.__actions__ = []),
//           (this.__dir__ = 1),
//           (this.__filtered__ = false),
//           (this.__iteratees__ = []),
//           (this.__takeCount__ = 4294967295),
//           (this.__views__ = []);
//       }
//       (r.prototype = n(a.prototype)),
//         (r.prototype.constructor = r),
//         (e.exports = r);
//     },
//     './node_modules/lodash/_LodashWrapper.js': (e, s, t) => {
//       var n = t('./node_modules/lodash/_baseCreate.js'),
//         a = t('./node_modules/lodash/_baseLodash.js');
//       function r(e, s) {
//         (this.__wrapped__ = e),
//           (this.__actions__ = []),
//           (this.__chain__ = !!s),
//           (this.__index__ = 0),
//           (this.__values__ = void 0);
//       }
//       (r.prototype = n(a.prototype)),
//         (r.prototype.constructor = r),
//         (e.exports = r);
//     },
//     './node_modules/lodash/_assignMergeValue.js': (e, s, t) => {
//       var n = t('./node_modules/lodash/_baseAssignValue.js'),
//         a = t('./node_modules/lodash/eq.js');
//       e.exports = function (e, s, t) {
//         ((void 0 !== t && !a(e[s], t)) || (void 0 === t && !(s in e))) &&
//           n(e, s, t);
//       };
//     },
//     './node_modules/lodash/_baseLodash.js': (e) => {
//       e.exports = function () {};
//     },
//     './node_modules/lodash/_baseMerge.js': (e, s, t) => {
//       var n = t('./node_modules/lodash/_Stack.js'),
//         a = t('./node_modules/lodash/_assignMergeValue.js'),
//         r = t('./node_modules/lodash/_baseFor.js'),
//         o = t('./node_modules/lodash/_baseMergeDeep.js'),
//         i = t('./node_modules/lodash/isObject.js'),
//         d = t('./node_modules/lodash/keysIn.js'),
//         l = t('./node_modules/lodash/_safeGet.js');
//       e.exports = function e(s, t, u, c, p) {
//         s !== t &&
//           r(
//             t,
//             function (r, d) {
//               if ((p || (p = new n()), i(r))) o(s, t, d, u, e, c, p);
//               else {
//                 var m = c ? c(l(s, d), r, d + '', s, t, p) : void 0;
//                 void 0 === m && (m = r), a(s, d, m);
//               }
//             },
//             d
//           );
//       };
//     },
//     './node_modules/lodash/_baseMergeDeep.js': (e, s, t) => {
//       var n = t('./node_modules/lodash/_assignMergeValue.js'),
//         a = t('./node_modules/lodash/_cloneBuffer.js'),
//         r = t('./node_modules/lodash/_cloneTypedArray.js'),
//         o = t('./node_modules/lodash/_copyArray.js'),
//         i = t('./node_modules/lodash/_initCloneObject.js'),
//         d = t('./node_modules/lodash/isArguments.js'),
//         l = t('./node_modules/lodash/isArray.js'),
//         u = t('./node_modules/lodash/isArrayLikeObject.js'),
//         c = t('./node_modules/lodash/isBuffer.js'),
//         p = t('./node_modules/lodash/isFunction.js'),
//         m = t('./node_modules/lodash/isObject.js'),
//         _ = t('./node_modules/lodash/isPlainObject.js'),
//         h = t('./node_modules/lodash/isTypedArray.js'),
//         g = t('./node_modules/lodash/_safeGet.js'),
//         j = t('./node_modules/lodash/toPlainObject.js');
//       e.exports = function (e, s, t, y, S, f, v) {
//         var E = g(e, t),
//           x = g(s, t),
//           b = v.get(x);
//         if (b) n(e, t, b);
//         else {
//           var A = f ? f(E, x, t + '', e, s, v) : void 0,
//             T = void 0 === A;
//           if (T) {
//             var C = l(x),
//               I = !C && c(x),
//               w = !C && !I && h(x);
//             (A = x),
//               C || I || w
//                 ? l(E)
//                   ? (A = E)
//                   : u(E)
//                   ? (A = o(E))
//                   : I
//                   ? ((T = false), (A = a(x, true)))
//                   : w
//                   ? ((T = false), (A = r(x, true)))
//                   : (A = [])
//                 : _(x) || d(x)
//                 ? ((A = E), d(E) ? (A = j(E)) : (m(E) && !p(E)) || (A = i(x)))
//                 : (T = false);
//           }
//           T && (v.set(x, A), S(A, x, y, f, v), v.delete(x)), n(e, t, A);
//         }
//       };
//     },
//     './node_modules/lodash/_createAssigner.js': (e, s, t) => {
//       var n = t('./node_modules/lodash/_baseRest.js'),
//         a = t('./node_modules/lodash/_isIterateeCall.js');
//       e.exports = function (e) {
//         return n(function (s, t) {
//           var n = -1,
//             r = t.length,
//             o = r > 1 ? t[r - 1] : void 0,
//             i = r > 2 ? t[2] : void 0;
//           for (
//             o = e.length > 3 && 'function' == typeof o ? (r--, o) : void 0,
//               i && a(t[0], t[1], i) && ((o = r < 3 ? void 0 : o), (r = 1)),
//               s = Object(s);
//             ++n < r;

//           ) {
//             var d = t[n];
//             d && e(s, d, n, o);
//           }
//           return s;
//         });
//       };
//     },
//     './node_modules/lodash/_createFlow.js': (e, s, t) => {
//       var n = t('./node_modules/lodash/_LodashWrapper.js'),
//         a = t('./node_modules/lodash/_flatRest.js'),
//         r = t('./node_modules/lodash/_getData.js'),
//         o = t('./node_modules/lodash/_getFuncName.js'),
//         i = t('./node_modules/lodash/isArray.js'),
//         d = t('./node_modules/lodash/_isLaziable.js');
//       e.exports = function (e) {
//         return a(function (s) {
//           var t = s.length,
//             a = t,
//             l = n.prototype.thru;
//           for (e && s.reverse(); a--; ) {
//             var u = s[a];
//             if ('function' != typeof u)
//               throw new TypeError('Expected a function');
//             if (l && !c && 'wrapper' == o(u)) var c = new n([], true);
//           }
//           for (a = c ? a : t; ++a < t; ) {
//             u = s[a];
//             var p = o(u),
//               m = 'wrapper' == p ? r(u) : void 0;
//             c =
//               m && d(m[0]) && 424 == m[1] && !m[4].length && 1 == m[9]
//                 ? c[o(m[0])].apply(c, m[3])
//                 : 1 == u.length && d(u)
//                 ? c[p]()
//                 : c.thru(u);
//           }
//           return function () {
//             var e = arguments,
//               n = e[0];
//             if (c && 1 == e.length && i(n)) return c.plant(n).value();
//             for (var a = 0, r = t ? s[a].apply(this, e) : n; ++a < t; )
//               r = s[a].call(this, r);
//             return r;
//           };
//         });
//       };
//     },
//     './node_modules/lodash/_getData.js': (e, s, t) => {
//       var n = t('./node_modules/lodash/_metaMap.js'),
//         a = t('./node_modules/lodash/noop.js'),
//         r = n
//           ? function (e) {
//               return n.get(e);
//             }
//           : a;
//       e.exports = r;
//     },
//     './node_modules/lodash/_getFuncName.js': (e, s, t) => {
//       var n = t('./node_modules/lodash/_realNames.js'),
//         a = Object.prototype.hasOwnProperty;
//       e.exports = function (e) {
//         for (
//           var s = e.name + '', t = n[s], r = a.call(n, s) ? t.length : 0;
//           r--;

//         ) {
//           var o = t[r],
//             i = o.func;
//           if (null == i || i == e) return o.name;
//         }
//         return s;
//       };
//     },
//     './node_modules/lodash/_isLaziable.js': (e, s, t) => {
//       var n = t('./node_modules/lodash/_LazyWrapper.js'),
//         a = t('./node_modules/lodash/_getData.js'),
//         r = t('./node_modules/lodash/_getFuncName.js'),
//         o = t('./node_modules/lodash/wrapperLodash.js');
//       e.exports = function (e) {
//         var s = r(e),
//           t = o[s];
//         if ('function' != typeof t || !(s in n.prototype)) return false;
//         if (e === t) return true;
//         var i = a(t);
//         return !!i && e === i[0];
//       };
//     },
//     './node_modules/lodash/_metaMap.js': (e, s, t) => {
//       var n = t('./node_modules/lodash/_WeakMap.js'),
//         a = n && new n();
//       e.exports = a;
//     },
//     './node_modules/lodash/_realNames.js': (e) => {
//       e.exports = {};
//     },
//     './node_modules/lodash/_safeGet.js': (e) => {
//       e.exports = function (e, s) {
//         if (
//           ('constructor' !== s || 'function' != typeof e[s]) &&
//           '__proto__' != s
//         )
//           return e[s];
//       };
//     },
//     './node_modules/lodash/_wrapperClone.js': (e, s, t) => {
//       var n = t('./node_modules/lodash/_LazyWrapper.js'),
//         a = t('./node_modules/lodash/_LodashWrapper.js'),
//         r = t('./node_modules/lodash/_copyArray.js');
//       e.exports = function (e) {
//         if (e instanceof n) return e.clone();
//         var s = new a(e.__wrapped__, e.__chain__);
//         return (
//           (s.__actions__ = r(e.__actions__)),
//           (s.__index__ = e.__index__),
//           (s.__values__ = e.__values__),
//           s
//         );
//       };
//     },
//     './node_modules/lodash/flow.js': (e, s, t) => {
//       var n = t('./node_modules/lodash/_createFlow.js')();
//       e.exports = n;
//     },
//     './node_modules/lodash/merge.js': (e, s, t) => {
//       var n = t('./node_modules/lodash/_baseMerge.js'),
//         a = t('./node_modules/lodash/_createAssigner.js')(function (e, s, t) {
//           n(e, s, t);
//         });
//       e.exports = a;
//     },
//     './node_modules/lodash/toPlainObject.js': (e, s, t) => {
//       var n = t('./node_modules/lodash/_copyObject.js'),
//         a = t('./node_modules/lodash/keysIn.js');
//       e.exports = function (e) {
//         return n(e, a(e));
//       };
//     },
//     './node_modules/lodash/wrapperLodash.js': (e, s, t) => {
//       var n = t('./node_modules/lodash/_LazyWrapper.js'),
//         a = t('./node_modules/lodash/_LodashWrapper.js'),
//         r = t('./node_modules/lodash/_baseLodash.js'),
//         o = t('./node_modules/lodash/isArray.js'),
//         i = t('./node_modules/lodash/isObjectLike.js'),
//         d = t('./node_modules/lodash/_wrapperClone.js'),
//         l = Object.prototype.hasOwnProperty;
//       function u(e) {
//         if (i(e) && !o(e) && !(e instanceof n)) {
//           if (e instanceof a) return e;
//           if (l.call(e, '__wrapped__')) return d(e);
//         }
//         return new a(e);
//       }
//       (u.prototype = r.prototype),
//         (u.prototype.constructor = u),
//         (e.exports = u);
//     },
//     './.linaria-cache/app/j/ads/components/flashcards/CardsInterstitialAd.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/ads/components/flashcards/FlashcardAd.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/ads/components/studyModes/AdModal.linaria.css': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.r(s);
//     },
//     './.linaria-cache/app/j/ads/components/studyModes/AdTimeLeft.linaria.css': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.r(s);
//     },
//     './.linaria-cache/app/j/ads/components/studyModes/StudyBreakAd.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/assembly/AssemblyChip.linaria.css': (e, s, t) => {
//       'use strict';
//       t.r(s);
//     },
//     './.linaria-cache/app/j/components/ModeLayout.linaria.css': (e, s, t) => {
//       'use strict';
//       t.r(s);
//     },
//     './.linaria-cache/app/j/components/NewModeControls.linaria.css': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.r(s);
//     },
//     './.linaria-cache/app/j/components/NextStep.linaria.css': (e, s, t) => {
//       'use strict';
//       t.r(s);
//     },
//     './.linaria-cache/app/j/components/ProgressMeter.linaria.css': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.r(s);
//     },
//     './.linaria-cache/app/j/live_game/teacher/checkpoint/components/ProgressBar.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/signup/components/AuthPromptOptions.linaria.css': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.r(s);
//     },
//     './.linaria-cache/app/j/signup/components/AuthPromptStyling.linaria.css': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.r(s);
//     },
//     './.linaria-cache/app/j/study-modes/cards/components/CardsFooter.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/cards/components/CardsHeader.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/cards/components/CardsSummaryNextSteps.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/cards/components/CardsSummaryResults.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/cards/components/CardsSummarySignup.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/cards/components/CardsToolbarKeyboardShortcutsList.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/cards/utils/nextStep.linaria.css': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       t.r(s);
//     },
//     './.linaria-cache/app/j/study-modes/common/components/StudyModesLayout.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/legacy-common/components/ProgressBar.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/legacy-common/components/StudyCardLayout.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/animations/CardAnimation.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/animations/SlideIn.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/animations/SlideOut.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/animations/Zigzag.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/components/BaseCardViewWrapper.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/components/CardsFlipAndShimmyAnimation.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/components/CardsFooterBase.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/components/CardsInteractionAlertMessage.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/components/CardsOnboardingMessage.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/components/CardsSummaryView.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/components/CardsViewController.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/components/OnboardingMessages.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/components/footer/BaseFooter.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/components/footer/FlashcardsAdsTimeLeftButton.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/components/footer/NavButtons.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/components/footer/ReviewFooterV2.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/ui/mini/ProgressText.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/ui/quiz/FullscreenQuizView.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/ui/quiz/QuizNavigationControls.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/ui/review/FullscreenReviewView.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/ui/review/ReviewActions.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/ui/review/ReviewNavigationControls.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/ui/shared/AnswerControls.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/ui/shared/Flashcard.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/ui/shared/FlashcardLabel.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/ui/shared/QuestionGrid.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/ui/shared/TwoSidedFlashcard.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/ui/shared/media/ImageMedia.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './.linaria-cache/app/j/study-modes/redesigned_cards/ui/shared/media/ScrollableCardElements.linaria.css':
//       (e, s, t) => {
//         'use strict';
//         t.r(s);
//       },
//     './node_modules/react-transition-group/cjs/CSSTransition.js': (e, s, t) => {
//       'use strict';
//       (s.__esModule = true), (s.default = void 0);
//       i(t('./node_modules/prop-types/index.js'));
//       var n = i(
//           t(
//             './node_modules/react-transition-group/node_modules/dom-helpers/cjs/addClass.js'
//           )
//         ),
//         a = i(
//           t(
//             './node_modules/react-transition-group/node_modules/dom-helpers/cjs/removeClass.js'
//           )
//         ),
//         r = i(t('./node_modules/react/index.js')),
//         o = i(t('./node_modules/react-transition-group/cjs/Transition.js'));
//       t('./node_modules/react-transition-group/cjs/utils/PropTypes.js');
//       function i(e) {
//         return e && e.__esModule
//           ? e
//           : {
//               default: e,
//             };
//       }
//       function d() {
//         return (
//           (d =
//             Object.assign ||
//             function (e) {
//               for (var s = 1; s < arguments.length; s++) {
//                 var t = arguments[s];
//                 for (var n in t)
//                   Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
//               }
//               return e;
//             }),
//           d.apply(this, arguments)
//         );
//       }
//       var l = function (e, s) {
//           return (
//             e &&
//             s &&
//             s.split(' ').forEach(function (s) {
//               return (0, a.default)(e, s);
//             })
//           );
//         },
//         u = (function (e) {
//           var s, t;
//           function a() {
//             for (
//               var s, t = arguments.length, n = new Array(t), a = 0;
//               a < t;
//               a++
//             )
//               n[a] = arguments[a];
//             return (
//               ((s = e.call.apply(e, [this].concat(n)) || this).appliedClasses =
//                 {
//                   appear: {},
//                   enter: {},
//                   exit: {},
//                 }),
//               (s.onEnter = function (e, t) {
//                 var n = s.resolveArguments(e, t),
//                   a = n[0],
//                   r = n[1];
//                 s.removeClasses(a, 'exit'),
//                   s.addClass(a, r ? 'appear' : 'enter', 'base'),
//                   s.props.onEnter && s.props.onEnter(e, t);
//               }),
//               (s.onEntering = function (e, t) {
//                 var n = s.resolveArguments(e, t),
//                   a = n[0],
//                   r = n[1] ? 'appear' : 'enter';
//                 s.addClass(a, r, 'active'),
//                   s.props.onEntering && s.props.onEntering(e, t);
//               }),
//               (s.onEntered = function (e, t) {
//                 var n = s.resolveArguments(e, t),
//                   a = n[0],
//                   r = n[1] ? 'appear' : 'enter';
//                 s.removeClasses(a, r),
//                   s.addClass(a, r, 'done'),
//                   s.props.onEntered && s.props.onEntered(e, t);
//               }),
//               (s.onExit = function (e) {
//                 var t = s.resolveArguments(e)[0];
//                 s.removeClasses(t, 'appear'),
//                   s.removeClasses(t, 'enter'),
//                   s.addClass(t, 'exit', 'base'),
//                   s.props.onExit && s.props.onExit(e);
//               }),
//               (s.onExiting = function (e) {
//                 var t = s.resolveArguments(e)[0];
//                 s.addClass(t, 'exit', 'active'),
//                   s.props.onExiting && s.props.onExiting(e);
//               }),
//               (s.onExited = function (e) {
//                 var t = s.resolveArguments(e)[0];
//                 s.removeClasses(t, 'exit'),
//                   s.addClass(t, 'exit', 'done'),
//                   s.props.onExited && s.props.onExited(e);
//               }),
//               (s.resolveArguments = function (e, t) {
//                 return s.props.nodeRef ? [s.props.nodeRef.current, e] : [e, t];
//               }),
//               (s.getClassNames = function (e) {
//                 var t = s.props.classNames,
//                   n = 'string' == typeof t,
//                   a = n ? '' + (n && t ? t + '-' : '') + e : t[e];
//                 return {
//                   baseClassName: a,
//                   activeClassName: n ? a + '-active' : t[e + 'Active'],
//                   doneClassName: n ? a + '-done' : t[e + 'Done'],
//                 };
//               }),
//               s
//             );
//           }
//           (t = e),
//             ((s = a).prototype = Object.create(t.prototype)),
//             (s.prototype.constructor = s),
//             (s.__proto__ = t);
//           var i = a.prototype;
//           return (
//             (i.addClass = function (e, s, t) {
//               var a = this.getClassNames(s)[t + 'ClassName'],
//                 r = this.getClassNames('enter').doneClassName;
//               'appear' === s && 'done' === t && r && (a += ' ' + r),
//                 'active' === t && e && e.scrollTop,
//                 a &&
//                   ((this.appliedClasses[s][t] = a),
//                   (function (e, s) {
//                     e &&
//                       s &&
//                       s.split(' ').forEach(function (s) {
//                         return (0, n.default)(e, s);
//                       });
//                   })(e, a));
//             }),
//             (i.removeClasses = function (e, s) {
//               var t = this.appliedClasses[s],
//                 n = t.base,
//                 a = t.active,
//                 r = t.done;
//               (this.appliedClasses[s] = {}),
//                 n && l(e, n),
//                 a && l(e, a),
//                 r && l(e, r);
//             }),
//             (i.render = function () {
//               var e = this.props,
//                 s =
//                   (e.classNames,
//                   (function (e, s) {
//                     if (null == e) return {};
//                     var t,
//                       n,
//                       a = {},
//                       r = Object.keys(e);
//                     for (n = 0; n < r.length; n++)
//                       (t = r[n]), s.indexOf(t) >= 0 || (a[t] = e[t]);
//                     return a;
//                   })(e, ['classNames']));
//               return r.default.createElement(
//                 o.default,
//                 d({}, s, {
//                   onEnter: this.onEnter,
//                   onEntered: this.onEntered,
//                   onEntering: this.onEntering,
//                   onExit: this.onExit,
//                   onExiting: this.onExiting,
//                   onExited: this.onExited,
//                 })
//               );
//             }),
//             a
//           );
//         })(r.default.Component);
//       (u.defaultProps = {
//         classNames: '',
//       }),
//         (u.propTypes = {});
//       var c = u;
//       (s.default = c), (e.exports = s.default);
//     },
//     './node_modules/react-transition-group/cjs/ReplaceTransition.js': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       (s.__esModule = true), (s.default = void 0);
//       o(t('./node_modules/prop-types/index.js'));
//       var n = o(t('./node_modules/react/index.js')),
//         a = o(t('./node_modules/react-dom/index.js')),
//         r = o(
//           t('./node_modules/react-transition-group/cjs/TransitionGroup.js')
//         );
//       function o(e) {
//         return e && e.__esModule
//           ? e
//           : {
//               default: e,
//             };
//       }
//       var i = (function (e) {
//         var s, t;
//         function o() {
//           for (var s, t = arguments.length, n = new Array(t), a = 0; a < t; a++)
//             n[a] = arguments[a];
//           return (
//             ((s = e.call.apply(e, [this].concat(n)) || this).handleEnter =
//               function () {
//                 for (
//                   var e = arguments.length, t = new Array(e), n = 0;
//                   n < e;
//                   n++
//                 )
//                   t[n] = arguments[n];
//                 return s.handleLifecycle('onEnter', 0, t);
//               }),
//             (s.handleEntering = function () {
//               for (
//                 var e = arguments.length, t = new Array(e), n = 0;
//                 n < e;
//                 n++
//               )
//                 t[n] = arguments[n];
//               return s.handleLifecycle('onEntering', 0, t);
//             }),
//             (s.handleEntered = function () {
//               for (
//                 var e = arguments.length, t = new Array(e), n = 0;
//                 n < e;
//                 n++
//               )
//                 t[n] = arguments[n];
//               return s.handleLifecycle('onEntered', 0, t);
//             }),
//             (s.handleExit = function () {
//               for (
//                 var e = arguments.length, t = new Array(e), n = 0;
//                 n < e;
//                 n++
//               )
//                 t[n] = arguments[n];
//               return s.handleLifecycle('onExit', 1, t);
//             }),
//             (s.handleExiting = function () {
//               for (
//                 var e = arguments.length, t = new Array(e), n = 0;
//                 n < e;
//                 n++
//               )
//                 t[n] = arguments[n];
//               return s.handleLifecycle('onExiting', 1, t);
//             }),
//             (s.handleExited = function () {
//               for (
//                 var e = arguments.length, t = new Array(e), n = 0;
//                 n < e;
//                 n++
//               )
//                 t[n] = arguments[n];
//               return s.handleLifecycle('onExited', 1, t);
//             }),
//             s
//           );
//         }
//         (t = e),
//           ((s = o).prototype = Object.create(t.prototype)),
//           (s.prototype.constructor = s),
//           (s.__proto__ = t);
//         var i = o.prototype;
//         return (
//           (i.handleLifecycle = function (e, s, t) {
//             var r,
//               o = this.props.children,
//               i = n.default.Children.toArray(o)[s];
//             if ((i.props[e] && (r = i.props)[e].apply(r, t), this.props[e])) {
//               var d = i.props.nodeRef ? void 0 : a.default.findDOMNode(this);
//               this.props[e](d);
//             }
//           }),
//           (i.render = function () {
//             var e = this.props,
//               s = e.children,
//               t = e.in,
//               a = (function (e, s) {
//                 if (null == e) return {};
//                 var t,
//                   n,
//                   a = {},
//                   r = Object.keys(e);
//                 for (n = 0; n < r.length; n++)
//                   (t = r[n]), s.indexOf(t) >= 0 || (a[t] = e[t]);
//                 return a;
//               })(e, ['children', 'in']),
//               o = n.default.Children.toArray(s),
//               i = o[0],
//               d = o[1];
//             return (
//               delete a.onEnter,
//               delete a.onEntering,
//               delete a.onEntered,
//               delete a.onExit,
//               delete a.onExiting,
//               delete a.onExited,
//               n.default.createElement(
//                 r.default,
//                 a,
//                 t
//                   ? n.default.cloneElement(i, {
//                       key: 'first',
//                       onEnter: this.handleEnter,
//                       onEntering: this.handleEntering,
//                       onEntered: this.handleEntered,
//                     })
//                   : n.default.cloneElement(d, {
//                       key: 'second',
//                       onEnter: this.handleExit,
//                       onEntering: this.handleExiting,
//                       onEntered: this.handleExited,
//                     })
//               )
//             );
//           }),
//           o
//         );
//       })(n.default.Component);
//       i.propTypes = {};
//       var d = i;
//       (s.default = d), (e.exports = s.default);
//     },
//     './node_modules/react-transition-group/cjs/SwitchTransition.js': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       (s.__esModule = true), (s.default = s.modes = void 0);
//       var n,
//         a,
//         r = d(t('./node_modules/react/index.js')),
//         o =
//           (d(t('./node_modules/prop-types/index.js')),
//           t('./node_modules/react-transition-group/cjs/Transition.js')),
//         i = d(
//           t(
//             './node_modules/react-transition-group/cjs/TransitionGroupContext.js'
//           )
//         );
//       function d(e) {
//         return e && e.__esModule
//           ? e
//           : {
//               default: e,
//             };
//       }
//       var l = {
//         out: 'out-in',
//         in: 'in-out',
//       };
//       s.modes = l;
//       var u = function (e, s, t) {
//           return function () {
//             var n;
//             e.props[s] && (n = e.props)[s].apply(n, arguments), t();
//           };
//         },
//         c =
//           (((n = {})[l.out] = function (e) {
//             var s = e.current,
//               t = e.changeState;
//             return r.default.cloneElement(s, {
//               in: false,
//               onExited: u(s, 'onExited', function () {
//                 t(o.ENTERING, null);
//               }),
//             });
//           }),
//           (n[l.in] = function (e) {
//             var s = e.current,
//               t = e.changeState,
//               n = e.children;
//             return [
//               s,
//               r.default.cloneElement(n, {
//                 in: true,
//                 onEntered: u(n, 'onEntered', function () {
//                   t(o.ENTERING);
//                 }),
//               }),
//             ];
//           }),
//           n),
//         p =
//           (((a = {})[l.out] = function (e) {
//             var s = e.children,
//               t = e.changeState;
//             return r.default.cloneElement(s, {
//               in: true,
//               onEntered: u(s, 'onEntered', function () {
//                 t(
//                   o.ENTERED,
//                   r.default.cloneElement(s, {
//                     in: true,
//                   })
//                 );
//               }),
//             });
//           }),
//           (a[l.in] = function (e) {
//             var s = e.current,
//               t = e.children,
//               n = e.changeState;
//             return [
//               r.default.cloneElement(s, {
//                 in: false,
//                 onExited: u(s, 'onExited', function () {
//                   n(
//                     o.ENTERED,
//                     r.default.cloneElement(t, {
//                       in: true,
//                     })
//                   );
//                 }),
//               }),
//               r.default.cloneElement(t, {
//                 in: true,
//               }),
//             ];
//           }),
//           a),
//         m = (function (e) {
//           var s, t;
//           function n() {
//             for (
//               var s, t = arguments.length, n = new Array(t), a = 0;
//               a < t;
//               a++
//             )
//               n[a] = arguments[a];
//             return (
//               ((s = e.call.apply(e, [this].concat(n)) || this).state = {
//                 status: o.ENTERED,
//                 current: null,
//               }),
//               (s.appeared = false),
//               (s.changeState = function (e, t) {
//                 void 0 === t && (t = s.state.current),
//                   s.setState({
//                     status: e,
//                     current: t,
//                   });
//               }),
//               s
//             );
//           }
//           (t = e),
//             ((s = n).prototype = Object.create(t.prototype)),
//             (s.prototype.constructor = s),
//             (s.__proto__ = t);
//           var a = n.prototype;
//           return (
//             (a.componentDidMount = function () {
//               this.appeared = true;
//             }),
//             (n.getDerivedStateFromProps = function (e, s) {
//               return null == e.children
//                 ? {
//                     current: null,
//                   }
//                 : s.status === o.ENTERING && e.mode === l.in
//                 ? {
//                     status: o.ENTERING,
//                   }
//                 : !s.current ||
//                   ((t = s.current),
//                   (n = e.children),
//                   t === n ||
//                     (r.default.isValidElement(t) &&
//                       r.default.isValidElement(n) &&
//                       null != t.key &&
//                       t.key === n.key))
//                 ? {
//                     current: r.default.cloneElement(e.children, {
//                       in: true,
//                     }),
//                   }
//                 : {
//                     status: o.EXITING,
//                   };
//               var t, n;
//             }),
//             (a.render = function () {
//               var e,
//                 s = this.props,
//                 t = s.children,
//                 n = s.mode,
//                 a = this.state,
//                 d = a.status,
//                 l = a.current,
//                 u = {
//                   children: t,
//                   current: l,
//                   changeState: this.changeState,
//                   status: d,
//                 };
//               switch (d) {
//                 case o.ENTERING:
//                   e = p[n](u);
//                   break;
//                 case o.EXITING:
//                   e = c[n](u);
//                   break;
//                 case o.ENTERED:
//                   e = l;
//               }
//               return r.default.createElement(
//                 i.default.Provider,
//                 {
//                   value: {
//                     isMounting: !this.appeared,
//                   },
//                 },
//                 e
//               );
//             }),
//             n
//           );
//         })(r.default.Component);
//       (m.propTypes = {}),
//         (m.defaultProps = {
//           mode: l.out,
//         });
//       var _ = m;
//       s.default = _;
//     },
//     './node_modules/react-transition-group/cjs/Transition.js': (e, s, t) => {
//       'use strict';
//       (s.__esModule = true),
//         (s.default =
//           s.EXITING =
//           s.ENTERED =
//           s.ENTERING =
//           s.EXITED =
//           s.UNMOUNTED =
//             void 0);
//       i(t('./node_modules/prop-types/index.js'));
//       var n = i(t('./node_modules/react/index.js')),
//         a = i(t('./node_modules/react-dom/index.js')),
//         r = i(t('./node_modules/react-transition-group/cjs/config.js')),
//         o =
//           (t('./node_modules/react-transition-group/cjs/utils/PropTypes.js'),
//           i(
//             t(
//               './node_modules/react-transition-group/cjs/TransitionGroupContext.js'
//             )
//           ));
//       function i(e) {
//         return e && e.__esModule
//           ? e
//           : {
//               default: e,
//             };
//       }
//       var d = 'unmounted';
//       s.UNMOUNTED = d;
//       var l = 'exited';
//       s.EXITED = l;
//       var u = 'entering';
//       s.ENTERING = u;
//       var c = 'entered';
//       s.ENTERED = c;
//       var p = 'exiting';
//       s.EXITING = p;
//       var m = (function (e) {
//         var s, t;
//         function i(s, t) {
//           var n;
//           n = e.call(this, s, t) || this;
//           var a,
//             r = t && !t.isMounting ? s.enter : s.appear;
//           return (
//             (n.appearStatus = null),
//             s.in
//               ? r
//                 ? ((a = l), (n.appearStatus = u))
//                 : (a = c)
//               : (a = s.unmountOnExit || s.mountOnEnter ? d : l),
//             (n.state = {
//               status: a,
//             }),
//             (n.nextCallback = null),
//             n
//           );
//         }
//         (t = e),
//           ((s = i).prototype = Object.create(t.prototype)),
//           (s.prototype.constructor = s),
//           (s.__proto__ = t),
//           (i.getDerivedStateFromProps = function (e, s) {
//             return e.in && s.status === d
//               ? {
//                   status: l,
//                 }
//               : null;
//           });
//         var m = i.prototype;
//         return (
//           (m.componentDidMount = function () {
//             this.updateStatus(true, this.appearStatus);
//           }),
//           (m.componentDidUpdate = function (e) {
//             var s = null;
//             if (e !== this.props) {
//               var t = this.state.status;
//               this.props.in
//                 ? t !== u && t !== c && (s = u)
//                 : (t !== u && t !== c) || (s = p);
//             }
//             this.updateStatus(false, s);
//           }),
//           (m.componentWillUnmount = function () {
//             this.cancelNextCallback();
//           }),
//           (m.getTimeouts = function () {
//             var e,
//               s,
//               t,
//               n = this.props.timeout;
//             return (
//               (e = s = t = n),
//               null != n &&
//                 'number' != typeof n &&
//                 ((e = n.exit),
//                 (s = n.enter),
//                 (t = void 0 !== n.appear ? n.appear : s)),
//               {
//                 exit: e,
//                 enter: s,
//                 appear: t,
//               }
//             );
//           }),
//           (m.updateStatus = function (e, s) {
//             void 0 === e && (e = false),
//               null !== s
//                 ? (this.cancelNextCallback(),
//                   s === u ? this.performEnter(e) : this.performExit())
//                 : this.props.unmountOnExit &&
//                   this.state.status === l &&
//                   this.setState({
//                     status: d,
//                   });
//           }),
//           (m.performEnter = function (e) {
//             var s = this,
//               t = this.props.enter,
//               n = this.context ? this.context.isMounting : e,
//               o = this.props.nodeRef ? [n] : [a.default.findDOMNode(this), n],
//               i = o[0],
//               d = o[1],
//               l = this.getTimeouts(),
//               p = n ? l.appear : l.enter;
//             (!e && !t) || r.default.disabled
//               ? this.safeSetState(
//                   {
//                     status: c,
//                   },
//                   function () {
//                     s.props.onEntered(i);
//                   }
//                 )
//               : (this.props.onEnter(i, d),
//                 this.safeSetState(
//                   {
//                     status: u,
//                   },
//                   function () {
//                     s.props.onEntering(i, d),
//                       s.onTransitionEnd(p, function () {
//                         s.safeSetState(
//                           {
//                             status: c,
//                           },
//                           function () {
//                             s.props.onEntered(i, d);
//                           }
//                         );
//                       });
//                   }
//                 ));
//           }),
//           (m.performExit = function () {
//             var e = this,
//               s = this.props.exit,
//               t = this.getTimeouts(),
//               n = this.props.nodeRef ? void 0 : a.default.findDOMNode(this);
//             s && !r.default.disabled
//               ? (this.props.onExit(n),
//                 this.safeSetState(
//                   {
//                     status: p,
//                   },
//                   function () {
//                     e.props.onExiting(n),
//                       e.onTransitionEnd(t.exit, function () {
//                         e.safeSetState(
//                           {
//                             status: l,
//                           },
//                           function () {
//                             e.props.onExited(n);
//                           }
//                         );
//                       });
//                   }
//                 ))
//               : this.safeSetState(
//                   {
//                     status: l,
//                   },
//                   function () {
//                     e.props.onExited(n);
//                   }
//                 );
//           }),
//           (m.cancelNextCallback = function () {
//             null !== this.nextCallback &&
//               (this.nextCallback.cancel(), (this.nextCallback = null));
//           }),
//           (m.safeSetState = function (e, s) {
//             (s = this.setNextCallback(s)), this.setState(e, s);
//           }),
//           (m.setNextCallback = function (e) {
//             var s = this,
//               t = true;
//             return (
//               (this.nextCallback = function (n) {
//                 t && ((t = false), (s.nextCallback = null), e(n));
//               }),
//               (this.nextCallback.cancel = function () {
//                 t = false;
//               }),
//               this.nextCallback
//             );
//           }),
//           (m.onTransitionEnd = function (e, s) {
//             this.setNextCallback(s);
//             var t = this.props.nodeRef
//                 ? this.props.nodeRef.current
//                 : a.default.findDOMNode(this),
//               n = null == e && !this.props.addEndListener;
//             if (t && !n) {
//               if (this.props.addEndListener) {
//                 var r = this.props.nodeRef
//                     ? [this.nextCallback]
//                     : [t, this.nextCallback],
//                   o = r[0],
//                   i = r[1];
//                 this.props.addEndListener(o, i);
//               }
//               null != e && setTimeout(this.nextCallback, e);
//             } else setTimeout(this.nextCallback, 0);
//           }),
//           (m.render = function () {
//             var e = this.state.status;
//             if (e === d) return null;
//             var s = this.props,
//               t = s.children,
//               a =
//                 (s.in,
//                 s.mountOnEnter,
//                 s.unmountOnExit,
//                 s.appear,
//                 s.enter,
//                 s.exit,
//                 s.timeout,
//                 s.addEndListener,
//                 s.onEnter,
//                 s.onEntering,
//                 s.onEntered,
//                 s.onExit,
//                 s.onExiting,
//                 s.onExited,
//                 s.nodeRef,
//                 (function (e, s) {
//                   if (null == e) return {};
//                   var t,
//                     n,
//                     a = {},
//                     r = Object.keys(e);
//                   for (n = 0; n < r.length; n++)
//                     (t = r[n]), s.indexOf(t) >= 0 || (a[t] = e[t]);
//                   return a;
//                 })(s, [
//                   'children',
//                   'in',
//                   'mountOnEnter',
//                   'unmountOnExit',
//                   'appear',
//                   'enter',
//                   'exit',
//                   'timeout',
//                   'addEndListener',
//                   'onEnter',
//                   'onEntering',
//                   'onEntered',
//                   'onExit',
//                   'onExiting',
//                   'onExited',
//                   'nodeRef',
//                 ]));
//             return n.default.createElement(
//               o.default.Provider,
//               {
//                 value: null,
//               },
//               'function' == typeof t
//                 ? t(e, a)
//                 : n.default.cloneElement(n.default.Children.only(t), a)
//             );
//           }),
//           i
//         );
//       })(n.default.Component);
//       function _() {}
//       (m.contextType = o.default),
//         (m.propTypes = {}),
//         (m.defaultProps = {
//           in: false,
//           mountOnEnter: false,
//           unmountOnExit: false,
//           appear: false,
//           enter: true,
//           exit: true,
//           onEnter: _,
//           onEntering: _,
//           onEntered: _,
//           onExit: _,
//           onExiting: _,
//           onExited: _,
//         }),
//         (m.UNMOUNTED = d),
//         (m.EXITED = l),
//         (m.ENTERING = u),
//         (m.ENTERED = c),
//         (m.EXITING = p);
//       var h = m;
//       s.default = h;
//     },
//     './node_modules/react-transition-group/cjs/TransitionGroup.js': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       (s.__esModule = true), (s.default = void 0);
//       o(t('./node_modules/prop-types/index.js'));
//       var n = o(t('./node_modules/react/index.js')),
//         a = o(
//           t(
//             './node_modules/react-transition-group/cjs/TransitionGroupContext.js'
//           )
//         ),
//         r = t(
//           './node_modules/react-transition-group/cjs/utils/ChildMapping.js'
//         );
//       function o(e) {
//         return e && e.__esModule
//           ? e
//           : {
//               default: e,
//             };
//       }
//       function i() {
//         return (
//           (i =
//             Object.assign ||
//             function (e) {
//               for (var s = 1; s < arguments.length; s++) {
//                 var t = arguments[s];
//                 for (var n in t)
//                   Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
//               }
//               return e;
//             }),
//           i.apply(this, arguments)
//         );
//       }
//       var d =
//           Object.values ||
//           function (e) {
//             return Object.keys(e).map(function (s) {
//               return e[s];
//             });
//           },
//         l = (function (e) {
//           var s, t;
//           function o(s, t) {
//             var n,
//               a = (n = e.call(this, s, t) || this).handleExited.bind(
//                 (function (e) {
//                   if (void 0 === e)
//                     throw new ReferenceError(
//                       "this hasn't been initialised - super() hasn't been called"
//                     );
//                   return e;
//                 })(n)
//               );
//             return (
//               (n.state = {
//                 contextValue: {
//                   isMounting: true,
//                 },
//                 handleExited: a,
//                 firstRender: true,
//               }),
//               n
//             );
//           }
//           (t = e),
//             ((s = o).prototype = Object.create(t.prototype)),
//             (s.prototype.constructor = s),
//             (s.__proto__ = t);
//           var l = o.prototype;
//           return (
//             (l.componentDidMount = function () {
//               (this.mounted = true),
//                 this.setState({
//                   contextValue: {
//                     isMounting: false,
//                   },
//                 });
//             }),
//             (l.componentWillUnmount = function () {
//               this.mounted = false;
//             }),
//             (o.getDerivedStateFromProps = function (e, s) {
//               var t = s.children,
//                 n = s.handleExited;
//               return {
//                 children: s.firstRender
//                   ? (0, r.getInitialChildMapping)(e, n)
//                   : (0, r.getNextChildMapping)(e, t, n),
//                 firstRender: false,
//               };
//             }),
//             (l.handleExited = function (e, s) {
//               var t = (0, r.getChildMapping)(this.props.children);
//               e.key in t ||
//                 (e.props.onExited && e.props.onExited(s),
//                 this.mounted &&
//                   this.setState(function (s) {
//                     var t = i({}, s.children);
//                     return (
//                       delete t[e.key],
//                       {
//                         children: t,
//                       }
//                     );
//                   }));
//             }),
//             (l.render = function () {
//               var e = this.props,
//                 s = e.component,
//                 t = e.childFactory,
//                 r = (function (e, s) {
//                   if (null == e) return {};
//                   var t,
//                     n,
//                     a = {},
//                     r = Object.keys(e);
//                   for (n = 0; n < r.length; n++)
//                     (t = r[n]), s.indexOf(t) >= 0 || (a[t] = e[t]);
//                   return a;
//                 })(e, ['component', 'childFactory']),
//                 o = this.state.contextValue,
//                 i = d(this.state.children).map(t);
//               return (
//                 delete r.appear,
//                 delete r.enter,
//                 delete r.exit,
//                 null === s
//                   ? n.default.createElement(
//                       a.default.Provider,
//                       {
//                         value: o,
//                       },
//                       i
//                     )
//                   : n.default.createElement(
//                       a.default.Provider,
//                       {
//                         value: o,
//                       },
//                       n.default.createElement(s, r, i)
//                     )
//               );
//             }),
//             o
//           );
//         })(n.default.Component);
//       (l.propTypes = {}),
//         (l.defaultProps = {
//           component: 'div',
//           childFactory: function (e) {
//             return e;
//           },
//         });
//       var u = l;
//       (s.default = u), (e.exports = s.default);
//     },
//     './node_modules/react-transition-group/cjs/TransitionGroupContext.js': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       var n;
//       (s.__esModule = true), (s.default = void 0);
//       var a = (
//         (n = t('./node_modules/react/index.js')) && n.__esModule
//           ? n
//           : {
//               default: n,
//             }
//       ).default.createContext(null);
//       (s.default = a), (e.exports = s.default);
//     },
//     './node_modules/react-transition-group/cjs/config.js': (e, s) => {
//       'use strict';
//       (s.__esModule = true), (s.default = void 0);
//       (s.default = {
//         disabled: false,
//       }),
//         (e.exports = s.default);
//     },
//     './node_modules/react-transition-group/cjs/index.js': (e, s, t) => {
//       'use strict';
//       s.TL = s.Kv = void 0;
//       var n = r(
//         t('./node_modules/react-transition-group/cjs/CSSTransition.js')
//       );
//       (s.Kv = n.default),
//         r(t('./node_modules/react-transition-group/cjs/ReplaceTransition.js'))
//           .default;
//       var a = r(
//         t('./node_modules/react-transition-group/cjs/SwitchTransition.js')
//       );
//       function r(e) {
//         return e && e.__esModule
//           ? e
//           : {
//               default: e,
//             };
//       }
//       (s.TL = a.default),
//         r(t('./node_modules/react-transition-group/cjs/TransitionGroup.js'))
//           .default,
//         r(t('./node_modules/react-transition-group/cjs/Transition.js')).default,
//         r(t('./node_modules/react-transition-group/cjs/config.js')).default;
//     },
//     './node_modules/react-transition-group/cjs/utils/ChildMapping.js': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       (s.__esModule = true),
//         (s.getChildMapping = a),
//         (s.mergeChildMappings = r),
//         (s.getInitialChildMapping = function (e, s) {
//           return a(e.children, function (t) {
//             return (0, n.cloneElement)(t, {
//               onExited: s.bind(null, t),
//               in: true,
//               appear: o(t, 'appear', e),
//               enter: o(t, 'enter', e),
//               exit: o(t, 'exit', e),
//             });
//           });
//         }),
//         (s.getNextChildMapping = function (e, s, t) {
//           var i = a(e.children),
//             d = r(s, i);
//           return (
//             Object.keys(d).forEach(function (a) {
//               var r = d[a];
//               if ((0, n.isValidElement)(r)) {
//                 var l = a in s,
//                   u = a in i,
//                   c = s[a],
//                   p = (0, n.isValidElement)(c) && !c.props.in;
//                 !u || (l && !p)
//                   ? u || !l || p
//                     ? u &&
//                       l &&
//                       (0, n.isValidElement)(c) &&
//                       (d[a] = (0, n.cloneElement)(r, {
//                         onExited: t.bind(null, r),
//                         in: c.props.in,
//                         exit: o(r, 'exit', e),
//                         enter: o(r, 'enter', e),
//                       }))
//                     : (d[a] = (0, n.cloneElement)(r, {
//                         in: false,
//                       }))
//                   : (d[a] = (0, n.cloneElement)(r, {
//                       onExited: t.bind(null, r),
//                       in: true,
//                       exit: o(r, 'exit', e),
//                       enter: o(r, 'enter', e),
//                     }));
//               }
//             }),
//             d
//           );
//         });
//       var n = t('./node_modules/react/index.js');
//       function a(e, s) {
//         var t = Object.create(null);
//         return (
//           e &&
//             n.Children.map(e, function (e) {
//               return e;
//             }).forEach(function (e) {
//               t[e.key] = (function (e) {
//                 return s && (0, n.isValidElement)(e) ? s(e) : e;
//               })(e);
//             }),
//           t
//         );
//       }
//       function r(e, s) {
//         function t(t) {
//           return t in s ? s[t] : e[t];
//         }
//         (e = e || {}), (s = s || {});
//         var n,
//           a = Object.create(null),
//           r = [];
//         for (var o in e)
//           o in s ? r.length && ((a[o] = r), (r = [])) : r.push(o);
//         var i = {};
//         for (var d in s) {
//           if (a[d])
//             for (n = 0; n < a[d].length; n++) {
//               var l = a[d][n];
//               i[a[d][n]] = t(l);
//             }
//           i[d] = t(d);
//         }
//         for (n = 0; n < r.length; n++) i[r[n]] = t(r[n]);
//         return i;
//       }
//       function o(e, s, t) {
//         return null != t[s] ? t[s] : e.props[s];
//       }
//     },
//     './node_modules/react-transition-group/cjs/utils/PropTypes.js': (
//       e,
//       s,
//       t
//     ) => {
//       'use strict';
//       (s.__esModule = true), (s.classNamesShape = s.timeoutsShape = void 0);
//       var n;
//       (n = t('./node_modules/prop-types/index.js')) && n.__esModule;
//       s.timeoutsShape = null;
//       s.classNamesShape = null;
//     },
//     './node_modules/react-transition-group/node_modules/dom-helpers/cjs/addClass.js':
//       (e, s, t) => {
//         'use strict';
//         var n = t(
//           './node_modules/@babel/runtime/helpers/interopRequireDefault.js'
//         );
//         (s.__esModule = true),
//           (s.default = function (e, s) {
//             e.classList
//               ? e.classList.add(s)
//               : (0, a.default)(e, s) ||
//                 ('string' == typeof e.className
//                   ? (e.className = e.className + ' ' + s)
//                   : e.setAttribute(
//                       'class',
//                       ((e.className && e.className.baseVal) || '') + ' ' + s
//                     ));
//           });
//         var a = n(
//           t(
//             './node_modules/react-transition-group/node_modules/dom-helpers/cjs/hasClass.js'
//           )
//         );
//         e.exports = s.default;
//       },
//     './node_modules/react-transition-group/node_modules/dom-helpers/cjs/hasClass.js':
//       (e, s) => {
//         'use strict';
//         (s.__esModule = true),
//           (s.default = function (e, s) {
//             return e.classList
//               ? !!s && e.classList.contains(s)
//               : -1 !==
//                   (' ' + (e.className.baseVal || e.className) + ' ').indexOf(
//                     ' ' + s + ' '
//                   );
//           }),
//           (e.exports = s.default);
//       },
//     './node_modules/react-transition-group/node_modules/dom-helpers/cjs/removeClass.js':
//       (e, s) => {
//         'use strict';
//         function t(e, s) {
//           return e
//             .replace(new RegExp('(^|\\s)' + s + '(?:\\s|$)', 'g'), '$1')
//             .replace(/\s+/g, ' ')
//             .replace(/^\s*|\s*$/g, '');
//         }
//         (s.__esModule = true),
//           (s.default = function (e, s) {
//             e.classList
//               ? e.classList.remove(s)
//               : 'string' == typeof e.className
//               ? (e.className = t(e.className, s))
//               : e.setAttribute(
//                   'class',
//                   t((e.className && e.className.baseVal) || '', s)
//                 );
//           }),
//           (e.exports = s.default);
//       },
//   },
//   (e) => {
//     e.O(
//       0,
//       [
//         'react',
//         'immutable',
//         'redux',
//         'quizlet_shared_kotlin',
//         'rich_text_rendering',
//         'pinyin_converter',
//         'grader',
//         'study_modes_core',
//         'kotlin_serialization',
//         'kotlin_coroutines',
//         'kotlin_data_layer',
//         'progress',
//         'flashcards_engine',
//         'common',
//       ],
//       () => {
//         return (s = './app/j/study-modes/cards/cards.entry.tsx'), e((e.s = s));
//         var s;
//       }
//     );
//     e.O();
//   },
// ]);
