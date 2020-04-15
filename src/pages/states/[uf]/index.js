import PropTypes from 'prop-types';
import React from 'react';

import Layout from '~/layouts/Information';

import List from '~/components/List';

import api from '~/services/api';
import { objectLocaleString } from '~/utils';

const StatesInformationPage = ({ state }) => (
  <Layout>
    {/* <StateInformationMeta state={state.state} uf={state.uf} /> */}

    <List
      local={`${state.state} - ${state.uf}`}
      flag={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${state.uf}.png`}
      lastUpdate={state.datetime}
      info={state}
    />
  </Layout>
);

StatesInformationPage.getInitialProps = async ({ query: { uf }, res }) => {
  const data = await api.get(`brazil/uf/${uf}`).then(r => r.data);

  if (data.error) {
    res.writeHead(301, { Location: '/states' });
    return res.end();
  }

  const state = objectLocaleString({
    ...data,
    cases: data.suspects,
    confirmed: data.cases,
  });

  return { state };
};

StatesInformationPage.propTypes = {
  state: PropTypes.shape({
    state: PropTypes.string.isRequired,
    uf: PropTypes.string.isRequired,
    datetime: PropTypes.instanceOf(Date),
  }).isRequired,
};

export default StatesInformationPage;
