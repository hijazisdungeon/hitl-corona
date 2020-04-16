import PropTypes from 'prop-types';
import React from 'react';

import Layout from '~/layouts/Information';

import Head from '~/components/Head';
import List from '~/components/List';

import api from '~/services/api';
import { objectLocaleString } from '~/utils';

const WorldPage = ({ info }) => (
  <Layout loading={!info}>
    <Head
      title="Covid Agora - Mundo"
      description="Acompanhe como anda a real situação do coronavírus no mundo."
    />

    <List
      local="World"
      flag="/static/images/world.png"
      lastUpdate={info && info.updated_at}
      info={info}
    />
  </Layout>
);

WorldPage.getInitialProps = async () => {
  const { data } = await api.get('countries').then(r => r.data);

  return {
    info: objectLocaleString({
      confirmed: data.reduce((a, b) => a + b.confirmed, 0),
      cases: data.reduce((a, b) => a + b.cases, 0),
      deaths: data.reduce((a, b) => a + b.deaths, 0),
      recovered: data.reduce((a, b) => a + b.recovered, 0),
    }),
  };
};

WorldPage.propTypes = {
  info: PropTypes.shape({
    info: PropTypes.string,
    updated_at: PropTypes.string,
  }).isRequired,
};

export default WorldPage;
