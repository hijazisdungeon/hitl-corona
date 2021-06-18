import Head from 'next/head';
import { FiArrowLeft } from 'react-icons/fi';

import { DefaulLayout } from '~/layouts/Default';
import { Container, Content, BackButton } from '~/styles/pages/construction';

const Construction = () => (
  <>
    <Head>
      <title>Covid Agora | Em Construção</title>
    </Head>

    <DefaulLayout>
      <Container>
        <Content>
          <h1>EM BREVE !</h1>
          <h2>
            Aplicativo em desenvolvimento pela equipe{' '}
            <span style={{ color: '#000' }}>Hitechline</span>.
          </h2>

          <BackButton href="/">
            <FiArrowLeft size="2.5rem" /> Voltar para o Início
          </BackButton>
        </Content>
      </Container>
    </DefaulLayout>
  </>
);

export default Construction;
