import React from 'react';

import Layout from '~/layouts/Information';

import Head from '~/components/Head';

const TestsPage = () => {
  return (
    <>
      <Head
        title="Covid Agora | Mundo"
        description="Acompanhe como anda a real situação do coronavírus no mundo."
        image="static/images/world/flag.png"
      />
      <Layout />
      <h1>Teste</h1>
    </>
  );
};
export default TestsPage;
