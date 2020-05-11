/* eslint-disable */

import NextHead from 'next/head';
import React, { Component } from 'react';

const URL_REGEX = /^(https|http):\/\/+/;

class HeadComponent extends Component {
  render() {
    const {
      title = 'Covid Agora',
      description = 'Dados mundial, nacional e regional do coronavírus na palma da sua mão. Dados oficiais e atualizados em tempo real, garantindo a veracidade e a qualidade do serviço, entregando a melhor experiência ao usuário.',
      image,
      children,
    } = this.props;

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
        <meta itemProp="image" content="/icon.png" />

        <meta name="og:locale" content="pt_BR" />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Covid Agora" />
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
  }
}

export default HeadComponent;
