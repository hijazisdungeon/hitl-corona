import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import Link from '~/components/Link';
import Spinner from '~/components/Spinner';

import { Header, Content } from './styles';

const InformationLayout = ({ children, loading }) => {
  const router = useRouter();

  const paths = router.pathname.split(/\//).filter(p => !!p);
  const redirectPath = paths.slice(0, paths.length - 1).join('/');

  return (
    <>
      <Header>
        <button type="button" onClick={() => router.push(`/${redirectPath}`)}>
          <FiArrowLeft size="4rem" color="#fff" />
        </button>

        <Link href="/aboutus" target="_blank">
          <img src="/static/images/sweet_logo.png" alt="SweetCode Logo" />

          <span>
            <strong>SweetCode</strong>
          </span>
        </Link>
      </Header>
      <Content>{loading ? <Spinner /> : children}</Content>
    </>
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
