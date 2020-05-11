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
      title="Covid Agora | Mundo"
      description="Acompanhe como anda a real situação do coronavírus no mundo."
      image="static/images/world/flag.png"
    />

    <List
      local="World"
      flag="/static/images/world/flag.png"
      lastUpdate={info && info.updated_at}
      info={info}
    />
  </Layout>
);

WorldPage.getInitialProps = async () => {
  const { data } = await api.get('countries').then(r => r.data);

  return {
    info: {
      ...objectLocaleString({
        cases: data.reduce((a, b) => a + b.cases, 0),
        confirmed: data.reduce((a, b) => a + b.confirmed, 0),
        deaths: data.reduce((a, b) => a + b.deaths, 0),
        recovered: data.reduce((a, b) => a + b.recovered, 0),
      }),
      updated_at: data
        .map(c => Date.parse(c.updated_at))
        .sort((a, b) => a - b)[0],
    },
  };
};

WorldPage.propTypes = {
  info: PropTypes.shape({
    cases: PropTypes.string,
    confirmed: PropTypes.string,
    deaths: PropTypes.string,
    recovered: PropTypes.string,
    updated_at: PropTypes.string,
  }).isRequired,
};

export default WorldPage;
