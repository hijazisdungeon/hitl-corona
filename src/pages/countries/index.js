import { useEffect, useState, useCallback, useMemo } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import Head from '~/components/Head';
import Link from '~/components/Link';
import Layout from '~/layouts/Information';
import api from '~/services/api';
import {
  Container,
  SearchContainer,
  Input,
  Content,
} from '~/styles/pages/countries';

const Countries = () => {
  const [search, setSearchValue] = useState('');
  const [countries, setCountries] = useState([]);

  const leanCountries = useMemo(() => {
    return countries.filter(({ country }) =>
      country.toLowerCase().includes((search || '').toLowerCase()),
    );
  }, [search, countries]);

  const handleInput = useCallback(({ target: { value } }) => {
    setSearchValue(value);
  }, []);

  const getData = useCallback(async () => {
    try {
      const {
        data: { data },
      } = await api.get('countries');

      setCountries(data.sort((a, b) => a.country.localeCompare(b.country)));
    } catch (error) {
      // Do nothing
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <Head
        title="Covid Agora | Países"
        description="Fique por dentro das estatisticas de cada país."
      />

      <Layout loading={!countries.length}>
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

          {leanCountries.length ? (
            <Content>
              {leanCountries.map(country => (
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
    </>
  );
};

export default Countries;
