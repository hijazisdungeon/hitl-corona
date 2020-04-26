import PropTypes from 'prop-types';
import React from 'react';

import Header from '~/components/Header';
import Spinner from '~/components/Spinner';
import FloatingButton from '~/components/FloatingButton';

import { Main } from './styles';

const DefaulLayout = ({ children, loading }) => (
  <>
    <
    {!loading && <Header />}
    <FloatingButton />
    <Main>{loading ? <Spinner /> : children}</Main>
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
