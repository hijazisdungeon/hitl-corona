import App from 'next/app';
import PropTypes from 'prop-types';
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import themes from '~/config/themes';
import { store, persistor } from '~/store';

import FloatingButton from '~/components/FloatingButton';

import GlobalStyle from '~/styles/global';

const AppWrapper = ({ children }) => {
  const { theme } = useSelector(state => state.config);

  const colors = theme === 'light' ? themes.light : themes.dark;

  return (
    <ThemeProvider theme={colors}>
      <FloatingButton />
      <GlobalStyle />

      {children}
    </ThemeProvider>
  );
};

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppWrapper>
            <Component {...pageProps} />
          </AppWrapper>
        </PersistGate>
      </Provider>
    );
  }
}

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyApp;
