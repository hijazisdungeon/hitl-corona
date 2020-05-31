import PropTypes from 'prop-types';
import React from 'react';

import Layout from '~/layouts/Information';

import Head from '~/components/Head';

import { newsApi } from '~/services/api';

const TestsPage = ({ news }) => (
  <>
    <Head
      title="Covid Agora | Notícias"
      description="Acompanhe como anda a real situação do coronavírus no mundo."
      image="static/images/world/flag.png"
    />

    <Layout />
  </>
);

TestsPage.getInitialProps = async () => {
  const { data } = await newsApi.get('');

  return { news: data };
};

TestsPage.propTypes = {
  news: PropTypes.shape({
    articles: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default TestsPage;
