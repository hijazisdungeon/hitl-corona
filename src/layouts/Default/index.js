import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import themes from '~/config/themes';

import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Spinner from '~/components/Spinner';

import GlobalStyle from '~/styles/global';

import { Main } from './styles';

const DefaulLayout = ({ children, loading }) => {
  const theme = useSelector(state => state.config.theme);

  return (
    <ThemeProvider theme={theme === 'light' ? themes.light : themes.dark}>
      {!loading && <Header />}

      <Main>{loading ? <Spinner /> : children}</Main>
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
};

DefaulLayout.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
};

DefaulLayout.defaultProps = {
  loading: false,
};

export default DefaulLayout;
