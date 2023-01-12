import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyles from '../styles/GlobalStyles';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
  <div>
    <GlobalStyles />
    <Component {...pageProps} />
  </div>
);

export default App;
