import PropTypes from 'prop-types';
import React from 'react';

import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Spinner from '~/components/Spinner';

import { Main } from './styles';

const DefaulLayout = ({ children, loading }) => (
  <>
    {!loading && <Header />}

    <Main>{loading ? <Spinner /> : children}</Main>

    <Footer />
  </>
);

DefaulLayout.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
};

DefaulLayout.defaultProps = {
  loading: false,
};

export default DefaulLayout;
