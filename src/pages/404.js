import Head from 'next/head';
import { FiArrowLeft } from 'react-icons/fi';

import { DefaulLayout } from '~/layouts/Default';
import { Container, Content, BackButton } from '~/styles/pages/404';

const NotFound = () => (
  <>
    <Head>
      <title>Covid Agora | Nada Encontrado</title>
    </Head>

    <DefaulLayout>
      <Container>
        <Content>
          <h1>404</h1>
          <h3>Página não Encontrada</h3>

          <BackButton href="/">
            <FiArrowLeft size="2.5rem" /> Voltar para o Início
          </BackButton>
        </Content>
      </Container>
    </DefaulLayout>
  </>
);

export default NotFound;
