import PropTypes from 'prop-types';
import React from 'react';

import Layout from '~/layouts/Information';

import Head from '~/components/Head';
import List from '~/components/List';

import api from '~/services/api';
import { objectLocaleString } from '~/utils';

const CountrieInformationPage = ({ country }) => (
  <Layout>
    <Head
      title={`Covid Agora - ${country.country}`}
      description="Acompanhe as estatísticas de cada país"
    />
    <List
      local={country.country}
      flag="/static/images/world/flag.png"
      lastUpdate={country.updated_at}
      info={country}
    />
  </Layout>
);

CountrieInformationPage.getInitialProps = async ({ query: { country } }) => {
  const { data } = await api.get(`/${country}`).then(r => r.data);

  return { country: objectLocaleString(data) };
};
CountrieInformationPage.propTypes = {
  country: PropTypes.shape({
    country: PropTypes.string,
    updated_at: PropTypes.string,
  }).isRequired,
};

export default CountrieInformationPage;
