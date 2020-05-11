import PropTypes from 'prop-types';
import React, { useState, useCallback } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import Layout from '~/layouts/Information';

import Head from '~/components/Head';
import Link from '~/components/Link';

import api from '~/services/api';

import {
  Container,
  SearchContainer,
  Input,
  Content,
} from '~/styles/pages/countries';

const CountriesPage = ({ countries: allCountries }) => {
  const [countries, setCountries] = useState(allCountries);

  const handleInput = useCallback(
    ({ target: { value } }) => {
      const filteredCountries = allCountries.filter(({ country }) => {
        return country.toLowerCase().includes((value || '').toLowerCase());
      });

      setCountries(filteredCountries);
    },
    [countries],
  );

  return (
    <Layout
      loading={!countries}
      head={
        <Head
          title="Covid Agora | Países"
          description="Fique por dentro das estatisticas de cada país."
        />
      }
    >
      <Container>
        <SearchContainer>
          <Input
            type="text"
            placeholder="Pesquise o país..."
            onChange={handleInput}
          />

          <span>
            <AiOutlineSearch size="2.5rem" />
          </span>
        </SearchContainer>

        {countries && countries.length ? (
          <Content>
            {countries.map(country => (
              <Link
                key={country.country}
                href="/countries/[country]"
                as={`/countries/${country.country}`}
              >
                <span>{country.country}</span>

                <img src="/static/images/world/flag.png" alt="World" />
              </Link>
            ))}
          </Content>
        ) : (
          <h1
            style={{
              color: '#000',
              marginTop: '30px',
            }}
          >
            Nenhum país encontrado!
          </h1>
        )}
      </Container>
    </Layout>
  );
};

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
