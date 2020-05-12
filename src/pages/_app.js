import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import themes from '~/config/themes';

import GlobalStyle from '~/styles/global';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={themes.light}>
        <GlobalStyle />

        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
