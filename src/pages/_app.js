import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import { store, persistor } from '~/store';

import colors from '~/utils/colors';

import GlobalStyle from '~/styles/pages/global';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={colors}>
            <Component {...pageProps} />
            <GlobalStyle />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}
export default MyApp;
