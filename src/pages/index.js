import React from 'react';
import { FiArrowRight, FiArrowDown } from 'react-icons/fi';

import Layout from '~/layouts/Default';

import Head from '~/components/Head';
import Link from '~/components/Link';
import Slider from '~/components/Slider';

import {
  Container,
  Content,
  Section,
  RowContainer,
  RowItem,
  Button,
} from '~/styles/pages/index';

const HomePage = () => (
  <>
    <Head title="Covid Agora | Coronavírus em tempo real" image="icon.png">
      <meta name="robots" content="noodp" />
    </Head>

    <Layout>
      <Container>
        <Content>
          <Slider
            images={[
              '/static/images/home/slider_1.jpg',
              '/static/images/home/slider_2.jpg',
              '/static/images/home/slider_3.jpg',
            ]}
          />

          <div>
            <h1>
              Covid <span>Agora</span>
            </h1>
            <p>Veja como anda o coronavírus no brasil e no mundo.</p>

            <span>
              <Link href="#info">
                <FiArrowDown size={40} color="#fff" />
              </Link>
            </span>
          </div>
        </Content>

        <Section id="info">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#23272a"
              fillOpacity="1"
              d="M0,160L12.6,133.3C25.3,107,51,53,76,64C101.1,75,126,149,152,154.7C176.8,160,202,96,227,85.3C252.6,75,278,117,303,128C328.4,139,354,117,379,117.3C404.2,117,429,139,455,133.3C480,128,505,96,531,96C555.8,96,581,128,606,122.7C631.6,117,657,75,682,90.7C707.4,107,733,181,758,208C783.2,235,808,213,834,202.7C858.9,192,884,192,909,170.7C934.7,149,960,107,985,106.7C1010.5,107,1036,149,1061,138.7C1086.3,128,1112,64,1137,42.7C1162.1,21,1187,43,1213,69.3C1237.9,96,1263,128,1288,128C1313.7,128,1339,96,1364,96C1389.5,96,1415,128,1427,144L1440,160L1440,320L1427.4,320C1414.7,320,1389,320,1364,320C1338.9,320,1314,320,1288,320C1263.2,320,1238,320,1213,320C1187.4,320,1162,320,1137,320C1111.6,320,1086,320,1061,320C1035.8,320,1011,320,985,320C960,320,935,320,909,320C884.2,320,859,320,834,320C808.4,320,783,320,758,320C732.6,320,707,320,682,320C656.8,320,632,320,606,320C581.1,320,556,320,531,320C505.3,320,480,320,455,320C429.5,320,404,320,379,320C353.7,320,328,320,303,320C277.9,320,253,320,227,320C202.1,320,177,320,152,320C126.3,320,101,320,76,320C50.5,320,25,320,13,320L0,320Z"
            />
          </svg>

          <h1>Principais informações do coronavírus!</h1>

          <RowContainer>
            <RowItem>
              <div>
                <img
                  src="/static/images/home/icons/state_city.png"
                  alt="State Icon"
                />

                <h3>No seu estado</h3>
                <p>
                  Acompanhe e fique por dentro do coronavírus ai no seu estado!
                </p>
              </div>

              <Button href="/states">
                <FiArrowRight size="3.5rem" />
              </Button>
            </RowItem>

            <RowItem>
              <div>
                <img
                  src="/static/images/home/icons/world.png"
                  alt="World Icon"
                />

                <h3>No mundo</h3>
                <p>
                  Acompanhe e fique por dentro de como anda o coronavirus no
                  mundo!
                </p>
              </div>

              <Button href="/countries">
                <FiArrowRight size="3.5rem" />
              </Button>
            </RowItem>

            <RowItem>
              <div>
                <img src="/static/images/home/icons/news.png" alt="News Icon" />

                <h3>Principais notícias</h3>
                <p>
                  Acompanhe e fique por dentro das principais notícias do
                  coronavirus!
                </p>
              </div>

              <Button href="/#">
                <FiArrowRight size="3.5rem" />
              </Button>
            </RowItem>
          </RowContainer>
        </Section>
      </Container>
    </Layout>
  </>
);

export default HomePage;
