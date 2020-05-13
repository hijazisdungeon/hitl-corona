import NextHead from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

const BASE_URL = base => {
  return !/^(https|http):\/\/+/.test(base)
    ? `https://covidagora.site/${base}`
    : base;
};

const HeadComponent = ({
  title = 'Covid Agora',
  description,
  image,
  url,
  children,
}) => (
  <NextHead>
    <title>{title}</title>

    <meta
      name="google-site-verification"
      content="oHUSQuGp0QY-4Jsq-xLa1C2tLsLeDLLOtW37SMTuJI8"
    />
    <meta
      name="keywords"
      content="covid, covid19, covid-19, coronavirus, brazil, world, mundo, states, estados, cases, deaths, real-time, information, news, react, nextjs, google, github"
    />

    <link itemProp="url" href="https://covidagora.site/" />
    <meta itemProp="name" content={title} />
    <meta itemProp="description" content={description} />

    <meta property="og:locale" content="pt_BR" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Covid Agora" />
    <meta property="og:url" content={BASE_URL(url)} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={BASE_URL(image)} />
    <meta property="og:image:secure_url" content={BASE_URL(image)} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={BASE_URL(image)} />
    <meta name="twitter:image:src" content={BASE_URL(image)} />

    <meta name="description" content={description} />
    <meta name="image" content={BASE_URL(image)} />

    <link rel="icon" href="/icon.png" />
    <link rel="shortcut icon" href="/icon.png" />

    {children}
  </NextHead>
);

HeadComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  children: PropTypes.node,
};

HeadComponent.defaultProps = {
  description:
    'Dados mundial, nacional e regional do coronavírus na palma da sua mão. Dados oficiais e atualizados em tempo real, garantindo a veracidade e a qualidade do serviço, entregando a melhor experiência ao usuário.',
  image: 'icon.png',
  url: '',
  children: null,
};

export default HeadComponent;
