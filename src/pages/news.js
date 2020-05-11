import React from 'react';

import Layout from '~/layouts/Information';

import Head from '~/components/Head';
import News from '~/components/News';

const NewsPage = () => (
  <>
    <Head
      title="Últimas Noticias COVID-19"
      description="Não caia em fake News fique atualizado sobre as noticias do covid"
    />

    <Layout>
      <News />
    </Layout>
  </>
);

export default NewsPage;
