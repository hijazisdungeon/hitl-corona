import NextHead from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

const URL_REGEX = /^(https|http):\/\/+/;

const HeadComponent = ({
  title = 'Covid Agora',
  description,
  image,
  children,
}) => {
  const imageParsed = URL_REGEX.test(image)
    ? image
    : `https://covidagora.site/${image}`;

  return (
    <NextHead>
      <title>{title}</title>

      <meta
        name="google-site-verification"
        content="oHUSQuGp0QY-4Jsq-xLa1C2tLsLeDLLOtW37SMTuJI8"
      />
      <meta
        name="keywords"
        content="covid, covid19, coronavirus, brazil, world"
      />

      <link itemProp="url" href="https://covidagora.site/" />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />

      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={imageParsed} />
      <meta name="og:image:secure_url" content={imageParsed} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={imageParsed} />
      <meta name="twitter:image:src" content={imageParsed} />

      <meta name="description" content={description} />
      <meta name="image" content={imageParsed} />

      <link rel="icon" href="/icon.png" />
      <link rel="shortcut icon" href="/icon.png" />

      {children}
    </NextHead>
  );
};

HeadComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node,
};

HeadComponent.defaultProps = {
  description:
    'Dados mundial, nacional e regional do coronavírus na palma da sua mão. Dados oficiais e atualizados em tempo real, garantindo a veracidade e a qualidade do serviço, entregando a melhor experiência ao usuário.',
  image: 'icon.png',
  children: null,
};

export default HeadComponent;
