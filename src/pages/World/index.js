import PropTypes from 'prop-types';
import React from 'react';

import Layout from '~/layouts/Information';

import List from '~/components/List';
import Head from '~/components/Head';

import api from '~/services/api';
import { objectLocaleString } from '~/utils';

const WorldPage = ({ info }) => (
  <Layout>
    <Head title="Covid Agora | Mundo" description="Dados mundiais" />
    <List
      local="World"
      flag="/static/images/world.png"
      lastUpdate={info.updated_at}
      info={info}
    />
  </Layout>
);
WorldPage.getInitialProps = async ({ res }) => {
  const { data } = await api.get('countries').then(r => r.data);

  if (data.error) {
    res.writeHead(301, { Location: '/' });
  }
  const info = objectLocaleString({
    confirmed: data.reduce((a, b) => a + b.confirmed, 0),
    cases: data.reduce((a, b) => a + b.cases, 0),
    deaths: data.reduce((a, b) => a + b.deaths, 0),
    recovered: data.reduce((a, b) => a + b.recovered, 0),
  });
  return { info };
};

WorldPage.propTypes = {
  info: PropTypes.shape({
    info: PropTypes.string,
    updated_at: PropTypes.string,
  }).isRequired,
};
export default WorldPage;
