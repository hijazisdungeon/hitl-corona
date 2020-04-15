import PropTypes from 'prop-types';
import React from 'react';

import Layout from '~/layouts/Information';

import List from '~/components/List';
import Head from '~/components/Head';

import api from '~/services/api';
import { objectLocaleString } from '~/utils';

const BrazilPage = ({ info }) => (
  <Layout>
    <Head
      title="Covid Agora - Dados do Brasil"
      description="Fique atualizado sobre o número total de casos no Brasil."
    />

    <List
      local="Brazil"
      flag="/static/images/br_flag.jpg"
      lastUpdate={info.updated_at}
      info={info}
    />
  </Layout>
);

BrazilPage.getInitialProps = async ({ res }) => {
  const { data } = await api.get('brazil').then(r => r.data);

  if (data.error) {
    res.writeHead(301, { Location: '/brazil' });
    return res.end();
  }
  const info = objectLocaleString(data);

  return { info };
};

BrazilPage.propTypes = {
  info: PropTypes.shape({
    info: PropTypes.string,
    updated_at: PropTypes.string,
  }).isRequired,
};

export default BrazilPage;
