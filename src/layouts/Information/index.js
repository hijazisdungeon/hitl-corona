import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import themes from '~/config/themes';

import Link from '~/components/Link';
import Spinner from '~/components/Spinner';

import GlobalStyle from '~/styles/global';

import { Header, Content } from './styles';

const InformationLayout = ({ children, loading }) => {
  const router = useRouter();
  const theme = useSelector(state => state.config.theme);

  const paths = router.pathname.split(/\//).filter(p => !!p);
  const redirectPath = paths.slice(0, paths.length - 1).join('/');

  return (
    <ThemeProvider theme={theme === 'light' ? themes.light : themes.dark}>
      <Header>
        <button type="button" onClick={() => router.push(`/${redirectPath}`)}>
          <FiArrowLeft size="4rem" color="#fff" />
        </button>

        <Link href="/aboutus" target="_blank">
          <img src="/icon.png" alt="Covid Agora Logo" />

          <span>
            <strong>Covid Agora</strong>
          </span>
        </Link>
      </Header>

      <Content>{loading ? <Spinner /> : children}</Content>
      <GlobalStyle />
    </ThemeProvider>
  );
};

InformationLayout.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
};

InformationLayout.defaultProps = {
  loading: false,
};

export default InformationLayout;
