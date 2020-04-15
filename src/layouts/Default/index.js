import PropTypes from 'prop-types';
import React from 'react';

import Header from '~/components/Header';

import { Main } from './styles';

const DefaulLayout = ({ children }) => (
  <>
    <Header />

    <Main>{children}</Main>
  </>
);

DefaulLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaulLayout;
