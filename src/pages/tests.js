import PropTypes from 'prop-types';
import React from 'react';

// import data from '~/data/newsTests';

import Layout from '~/layouts/Information';

import Head from '~/components/Head';

import { newsApi } from '~/services/api';

import { Container, NewsContainer, NewsItems } from '~/styles/pages/tests';

const TestsPage = ({ news }) => {
  console.log(news);
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
              <img src={news.articles.urlToImage} alt="logo" />
              <h1 style={{ color: '#000' }}>
                {news.articles.content}

                <p>{news.articles.description}</p>
                <p>{news.articles.autor}</p>
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

TestsPage.getInitialProps = async () => {
  const { data } = await newsApi.get('');

  return { news: data };
};

TestsPage.propTypes = {
  news: PropTypes.shape({
    articles: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default TestsPage;
