import PropTypes from 'prop-types';
import React from 'react';

import Layout from '~/layouts/Information';

import Head from '~/components/Head';
import List from '~/components/List';

import api from '~/services/api';
import { objectLocaleString } from '~/utils';

const CountrieInformationPage = ({ country }) => (
  <>
    <Head
      title={`Covid Agora | ${country.country}`}
      description="Veja como anda o coronavírus no páis onde algum de seus familiares mora ou está."
    />

    <Layout>
      <List
        local={country.country}
        flag="/static/images/world/flag.png"
        lastUpdate={country.updated_at}
        info={country}
      />
    </Layout>
  </>
);

CountrieInformationPage.getInitialProps = async ({
  query: { country },
  res,
}) => {
  const back = () => {
    res.writeHead(302, { Location: '/countries' });
    res.end();
  };

  try {
    const { data } = await api.get(`/${country}`).then(r => r.data);

    if (data.error || !Object.keys(data).length) return back();

    return { country: objectLocaleString(data) };
  } catch (e) {
    back();
  }
};

CountrieInformationPage.propTypes = {
  country: PropTypes.shape({
    country: PropTypes.string,
    updated_at: PropTypes.string,
  }).isRequired,
};

export default CountrieInformationPage;
