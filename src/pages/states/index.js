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
} from '~/styles/pages/states';

const States = () => {
  const [search, setSearchValue] = useState('');
  const [states, setStates] = useState([]);

  const leanStates = useMemo(() => {
    return states.filter(({ state }) =>
      state.toLowerCase().includes((search || '').toLowerCase()),
    );
  }, [search, states]);

  const handleInput = useCallback(({ target: { value } }) => {
    setSearchValue(value);
  }, []);

  const getData = useCallback(async () => {
    try {
      const {
        data: { data },
      } = await api.get('');

      setStates(data.sort((a, b) => a.state.localeCompare(b.state)));
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
        title="Covid Agora | Estados"
        description="Verifique as estatísticas do estado onde você mora, e fique por dentro da situação na palma da sua mão."
      />

      <Layout loading={!states.length}>
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

          {leanStates.length ? (
            <Content>
              {leanStates.map(state => (
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

export default States;
