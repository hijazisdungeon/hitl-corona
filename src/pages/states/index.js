import PropTypes from 'prop-types';
import React, { useState, useCallback } from 'react';
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
} from '~/styles/pages/states';

const StatesPage = ({ states: allStates }) => {
  const [states, setStates] = useState(allStates);

  const handleInput = useCallback(
    ({ target: { value } }) => {
      const filteredCountries = allStates.filter(({ state }) => {
        return state.toLowerCase().includes((value || '').toLowerCase());
      });

      setStates(filteredCountries);
    },
    [allStates],
  );

  return (
    <>
      <Head
        title="Covid Agora | Estados"
        description="Verifique as estatísticas do estado onde você mora, e fique por dentro da situação na palma da sua mão."
      />

      <Layout loading={!states}>
        <Container>
          <SearchContainer>
            <Input
              type="text"
              placeholder="Pesquise o estado..."
              onChange={handleInput}
            />

            <span>
              <AiOutlineSearch size="2.5rem" />
            </span>
          </SearchContainer>

          {states && states.length ? (
            <Content>
              {states.map(state => (
                <Link
                  key={state.state}
                  href="/states/[uf]"
                  as={`/states/${state.uf}`}
                >
                  <span>{state.state}</span>

                  <img
                    src={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${state.uf}.png`}
                    alt="State Flag"
                  />
                </Link>
              ))}
            </Content>
          ) : (
            <h1 style={{ color: '#000', marginTop: '30px' }}>
              Nenhum estado encontrado!
            </h1>
          )}
        </Container>
      </Layout>
    </>
  );
};

StatesPage.getInitialProps = async () => {
  const { data } = await api.get('').then(r => r.data);

  return { states: data.sort((a, b) => a.state.localeCompare(b.state)) };
};

StatesPage.propTypes = {
  states: PropTypes.arrayOf(
    PropTypes.shape({
      state: PropTypes.string,
      uf: PropTypes.string,
    }),
  ).isRequired,
};

export default StatesPage;
