import { useRouter } from 'next/router';
import { useEffect, useState, useCallback } from 'react';

import { Head } from '~/components/Head';
import { List } from '~/components/List';
import { InformationLayout } from '~/layouts/Information';
import { api } from '~/services/api';
import { objectLocaleString } from '~/utils';

const State = () => {
  const {
    back,
    query: { uf },
  } = useRouter();
  const [state, setStateValue] = useState(null);

  const getState = useCallback(async () => {
    try {
      const stateData = await api.get(`brazil/uf/${uf}`).then(({ data }) => {
        if (data.error) {
          throw new Error('Ocorreu um erro ao obter os dados.');
        }

        return objectLocaleString({
          ...data,
          cases: data.suspects,
          confirmed: data.cases,
        });
      });

      setStateValue(stateData);
    } catch (error) {
      if (typeof uf === 'string') {
        back();
      }
    }
  }, [uf, back]);

  useEffect(() => {
    getState();
  }, [getState]);

  return (
    <>
      <Head
        title={`Covid Agora | ${state?.state || 'Carregando...'}`}
        description="Veja como anda o coronavírus em seu estado, e avise a seus familiares."
      >
        <meta name="robots" content="noindex" />
      </Head>

      <InformationLayout loading={!state}>
        {state && (
          <List
            local={`${state.state} - ${state.uf}`}
            flag={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${state.uf}.png`}
            lastUpdate={state.datetime}
            info={state}
          />
        )}
      </InformationLayout>
    </>
  );
};

export default State;
