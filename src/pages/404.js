import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import Layout from '~/layouts/Default';

import Head from '~/components/Head';

import { Container, Content, BackButton } from '~/styles/pages/404';

const NotFoundPage = () => (
  <Layout head={<Head title="Covid Agora | Nada Encontrado" />}>
    <Container>
      <Content>
        <h1>404</h1>
        <h3>Página não Encontrada</h3>

        <BackButton href="/">
          <FiArrowLeft size="2.5rem" /> Voltar para o Início
        </BackButton>
      </Content>
    </Container>
  </Layout>
);

export default NotFoundPage;
