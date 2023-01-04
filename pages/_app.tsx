import React from 'react';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'bastianparedes/styles/global.css';
import 'bastianparedes/styles/normalize.css';

const _App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link href="/favicon.ico" rel="icon" />
        <title>Bastián Paredes</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default _App;
