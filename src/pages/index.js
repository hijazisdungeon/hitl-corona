import React from 'react';
import { FiArrowRight, FiArrowDown } from 'react-icons/fi';

import Layout from '~/layouts/Default';

import Head from '~/components/Head';
import Link from '~/components/Link';

import {
  Container,
  Content,
  Section,
  RowContainer,
  RowItem,
  Button,
} from '~/styles/pages/index';

const HomePage = () => (
  <Layout>
    <Head title="Covid Agora - Início" image="/static/images/icon.png">
      <meta
        name="keywords"
        content="covid, covid19, coronavirus, brazil, world"
      />
    </Head>

    <Container>
      <Content>
        <h1>
          Corona<span>vírus</span>
        </h1>
        <p>Veja como anda o coronavírus no brasil e no mundo.</p>

        <span>
          <Link href="#info">
            <FiArrowDown size={40} color="#fff" />
          </Link>
        </span>
      </Content>

      <Section id="info">
        <RowContainer>
          <RowItem>
            <img src="/static/images/brazil_states.png" alt="Badge" />

            <span>
              <p>
                Acompanhe e fique por dentro do coronavírus ai no seu estado!
              </p>
            </span>

            <p className="subject">Coronavírus no seu estado!</p>

            <Button href="/states">
              <FiArrowRight size="3.5rem" />
            </Button>
          </RowItem>

          <RowItem>
            <img src="/static/images/world.png" alt="Badge" />

            <span>
              <p>
                Acompanhe e fique por dentro de como anda o coronavirus no
                mundo!
              </p>
            </span>

            <p className="subject">Coronavírus no brazil e no mundo!</p>

            <Button href="/countries">
              <FiArrowRight size="3.5rem" />
            </Button>
          </RowItem>
        </RowContainer>
      </Section>
    </Container>
  </Layout>
);

export default HomePage;
