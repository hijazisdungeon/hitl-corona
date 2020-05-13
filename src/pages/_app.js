import App from 'next/app';
import React from 'react';

import Theme from '~/components/Theme';

import GlobalStyle from '~/styles/global';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Theme>
        <GlobalStyle />

        <Component {...pageProps} />
      </Theme>
    );
  }
}

export default MyApp;
