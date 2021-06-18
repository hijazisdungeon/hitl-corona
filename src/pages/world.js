import { useState, useCallback, useEffect } from 'react';

import { Head } from '~/components/Head';
import { List } from '~/components/List';
import { InformationLayout } from '~/layouts/Information';
import { api } from '~/services/api';
import { objectLocaleString } from '~/utils';

const World = () => {
  const [info, setInfo] = useState(null);

  const getInfo = useCallback(async () => {
    try {
      const {
        data: { data },
      } = await api.get('countries');

      setInfo({
        ...objectLocaleString({
          cases: data.reduce((a, b) => a + b.cases, 0),
          confirmed: data.reduce((a, b) => a + b.confirmed, 0),
          deaths: data.reduce((a, b) => a + b.deaths, 0),
          recovered: data.reduce((a, b) => a + b.recovered, 0),
        }),
        updated_at: data
          .map(c => Date.parse(c.updated_at))
          .sort((a, b) => a - b)[0],
      });
    } catch (error) {
      // Do nothing
    }
  }, []);

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  return (
    <>
      <Head
        title="Covid Agora | Mundo"
        description="Acompanhe como anda a real situação do coronavírus no mundo."
        image="static/images/world/flag.png"
      />

      <InformationLayout loading={!info}>
        {info && (
          <List
            local="World"
            flag="/static/images/world/flag.png"
            lastUpdate={info.updated_at}
            info={info}
          />
        )}
      </InformationLayout>
    </>
  );
};

export default World;
