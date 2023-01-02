import React from 'react';

import { Head, Html, Main, NextScript } from 'next/document';

import { api } from '../utils/google';

const _document = (): JSX.Element => (
  <Html lang="es-ES">
    <Head>
      <script async src={api} />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default _document;
