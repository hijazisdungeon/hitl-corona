import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { Main } from './styles';

import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import { Spinner } from '~/components/Spinner';
import { loadAnalytics } from '~/utils';

export const DefaulLayout = ({ children, loading }) => {
  useEffect(() => {
    loadAnalytics();
  }, []);

  return (
    <>
      {!loading && <Header />}

      <Main>{loading ? <Spinner /> : children}</Main>

      {!loading && <Footer />}
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
