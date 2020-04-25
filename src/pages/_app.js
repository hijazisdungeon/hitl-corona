import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
// import { REHYDRATE } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '~/styles/pages/global';
import colors from '~/utils/colors';

// import { store, persistor } from '~/store';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider>
        <PersistGate>
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
