import { useState, useCallback, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { Head } from '~/components/Head';
import { InformationLayout } from '~/layouts/Information';
import { newsApi } from '~/services/api';
import { Container, ArticlesContainer, ArticleItem } from '~/styles/pages/news';

const News = () => {
  const [articles, setArticles] = useState([]);

  const getNews = useCallback(async () => {
    try {
      const {
        data: { articles: articlesData },
      } = await newsApi.get('');

      setArticles(articlesData);
    } catch (error) {
      // Do nothing
    }
  }, []);

  useEffect(() => {
    getNews();
  }, [getNews]);

  return (
    <>
      <Head
        title="Covid Agora | Notícias"
        description="Acompanhe como anda a real situação do coronavírus no mundo."
        image="static/images/world/flag.png"
      />

      <InformationLayout loading={!articles.length}>
        <Container>
          <ArticlesContainer>
            {articles.map(article => (
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
};

export default News;
