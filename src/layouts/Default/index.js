import PropTypes from 'prop-types';
import React from 'react';

import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Spinner from '~/components/Spinner';

import { Main } from './styles';

const DefaulLayout = ({ children, head, loading }) => (
  <>
    {head}
    {!loading && <Header />}

    <Main>{loading ? <Spinner /> : children}</Main>

    <Footer />
  </>
);

DefaulLayout.propTypes = {
  children: PropTypes.node.isRequired,
  head: PropTypes.element,
  loading: PropTypes.bool,
};

DefaulLayout.defaultProps = {
  head: null,
  loading: false,
};

export default DefaulLayout;
