import React from 'react';

import data from '~/data/newsTests';

import Layout from '~/layouts/Information';

import Head from '~/components/Head';

import { Container, NewsContainer, NewsItems } from '~/styles/pages/tests';

const TestsPage = () => {
  return (
    <>
      <Head
        title="Covid Agora | Notícias"
        description="Acompanhe como anda a real situação do coronavírus no mundo."
        image="static/images/world/flag.png"
      />
      <Layout>
        <Container>
          <NewsContainer>
            <NewsItems>
              <img src={data.articles.image} alt="logo" />
              <h1 style={{ color: '#000' }}>
                {data.articles.title}

                <p>{data.articles.description}</p>
                <p>{data.articles.autor}</p>
              </h1>

              <a href="##" rel="noopener noreferrer">
                Leia mais...
              </a>
            </NewsItems>
            <NewsItems>
              <img src={data.articles.image} alt="logo" />
              <h1 style={{ color: '#000' }}>
                {data.articles.title}

                <p>{data.articles.description}</p>
                <p>{data.articles.autor}</p>
              </h1>

              <a href="##" rel="noopener noreferrer">
                Leia mais...
              </a>
            </NewsItems>
          </NewsContainer>
        </Container>
      </Layout>
    </>
  );
};

export default TestsPage;
