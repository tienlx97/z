/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import {Html, Head, Main, NextScript} from 'next/document';

const css =
  '@import url(https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap);';

const MyDocument = () => {
  //  @todo specify language in HTML?
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />

        {/* <link
          rel="preload"
          href="https://mimikyu.vercel.app/fonts/HiraginoSansProW3.otf"
          as="font"
          type="font/OpenType"
          crossOrigin="anonymous"
        /> */}

        <link
          rel="preload"
          href="https://mimikyu.vercel.app/fonts/HiraginoSansProW3.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{css}</style>
        <meta name="theme-color" content="#23272f" />
      </Head>
      <body className="font-sans antialiased text-lg bg-wash dark:bg-wash-dark text-secondary dark:text-secondary-dark leading-base">
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function () {
                  function setTheme(newTheme) {
                    window.__theme = newTheme;
                    if (newTheme === 'dark') {
                      document.documentElement.classList.add('dark');
                    } else if (newTheme === 'light') {
                      document.documentElement.classList.remove('dark');
                    }
                  }

                  var preferredTheme;
                  try {
                    preferredTheme = localStorage.getItem('theme');
                  } catch (err) { }

                  window.__setPreferredTheme = function(newTheme) {
                    preferredTheme = newTheme;
                    setTheme(newTheme);
                    try {
                      localStorage.setItem('theme', newTheme);
                    } catch (err) { }
                  };

                  var initialTheme = preferredTheme;
                  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

                  if (!initialTheme) {
                    initialTheme = darkQuery.matches ? 'dark' : 'light';
                  }
                  setTheme(initialTheme);

                  darkQuery.addEventListener('change', function (e) {
                    if (!preferredTheme) {
                      setTheme(e.matches ? 'dark' : 'light');
                    }
                  });
                })();
              `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
