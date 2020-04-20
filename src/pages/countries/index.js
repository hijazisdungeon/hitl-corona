import PropTypes from 'prop-types';
import React from 'react';

import Layout from '~/layouts/Information';

import Head from '~/components/Head';
import Link from '~/components/Link';

import api from '~/services/api';

import { Container } from '~/styles/pages/states';

const CountriesPage = ({ countries }) => (
  <>
    <Head
      title="Covid Agora - Países"
      description="Fique por dentro das estatisticas de cada país"
    />
    <Layout loading={!countries}>
      <Container>
        {countries &&
          countries.map(country => (
            <Link
              key={country.country}
              href="/countries/[country]"
              as={`/countries/${country.country}`}
            >
              <span>{country.country}</span>
            </Link>
          ))}
      </Container>
    </Layout>
  </>
);

CountriesPage.getInitialProps = async () => {
  const { data } = await api.get('countries').then(r => r.data);

  return { countries: data.sort((a, b) => a.country.localeCompare(b.country)) };
};

CountriesPage.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      country: PropTypes.string,
    }),
  ).isRequired,
};

export default CountriesPage;
