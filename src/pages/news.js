import PropTypes from 'prop-types';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { Head } from '~/components/Head';
import { InformationLayout } from '~/layouts/Information';
import { newsApi } from '~/services/api';
import { Container, ArticlesContainer, ArticleItem } from '~/styles/pages/news';

const NewsPage = ({ articles = [] }) => (
  <>
    <Head
      title="Covid Agora | Notícias"
      description="Acompanhe como anda a real situação do coronavírus no mundo."
      image="static/images/world/flag.png"
    />

    <InformationLayout loading={!articles || !articles.length}>
      <Container>
        <ArticlesContainer>
          {articles &&
            articles.length &&
            articles.map(article => (
              <ArticleItem key={article.url}>
                <img
                  src={
                    article.urlToImage ||
                    'https://cdn.discordapp.com/attachments/607000026257948683/718927311579250789/default-image.jpg'
                  }
                  alt="Article"
                />

                <h1>{article.title}</h1>
                <p>{article.description}</p>

                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'flex-end',
                  }}
                >
                  <a
                    href={article.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    LEIA COMPLETO <FiArrowRight size="1.6rem" />
                  </a>
                </div>
              </ArticleItem>
            ))}
        </ArticlesContainer>
      </Container>
    </InformationLayout>
  </>
);

NewsPage.getInitialProps = async () => {
  try {
    const { articles } = await newsApi.get('').then(r => r.data);
    return { articles };
  } catch (e) {
    return { articles: [] };
  }
};

NewsPage.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default NewsPage;
