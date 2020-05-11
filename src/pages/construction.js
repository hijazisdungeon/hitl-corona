import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import Layout from '~/layouts/Default';

import Head from '~/components/Head';

import { Container, Content, BackButton } from '~/styles/pages/construction';

const ConstructionPage = () => (
  <Layout head={<Head title="Covid Agora | Em Construção" noDefaultTags />}>
    <Container>
      <Content>
        <h1>EM BREVE !</h1>
        <h2>
          Aplicativo em desenvolvimento pela equipe{' '}
          <span style={{ color: '#000' }}>SweetCode</span>.
        </h2>

        <BackButton href="/">
          <FiArrowLeft size="2.5rem" /> Voltar para o Início
        </BackButton>
      </Content>
    </Container>
  </Layout>
);

export default ConstructionPage;
