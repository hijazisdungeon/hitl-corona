import PropTypes from 'prop-types';
import React from 'react';

import Layout from '~/layouts/Information';

import Head from '~/components/Head';
import Link from '~/components/Link';

import api from '~/services/api';

import { Container } from './styles';

const StatesPage = ({ states = [] }) => (
  <>
    <Head
      title="Covid Agora - Selecionar Estado"
      description="Verifique as estatísticas do estado onde você mora, e fique por dentro da situação na palma da sua mão."
    />

    <Layout loading={!states.length}>
      <Container>
        {states.map(state => (
          <Link key={state.state} href={`/states/${state.uf}`}>
            <span>{state.state}</span>
            <img
              src={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${state.uf}.png`}
              alt="State Flag"
            />
          </Link>
        ))}
      </Container>
    </Layout>
  </>
);

StatesPage.getInitialProps = async () => {
  const { data } = await api.get('').then(r => r.data);

  const states = data.sort((a, b) => a.state.localeCompare(b.state));

  return { states };
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
