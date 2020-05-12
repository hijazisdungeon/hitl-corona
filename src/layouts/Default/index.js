import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Spinner from '~/components/Spinner';

import { loadAnalytics } from '~/utils';

import { Main } from './styles';

const DefaulLayout = ({ children, loading }) => {
  useEffect(() => {
    loadAnalytics();
  }, []);

  return (
    <>
      {!loading && <Header />}

      <Main>{loading ? <Spinner /> : children}</Main>
      <Footer />
    </>
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
