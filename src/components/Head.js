import NextHead from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

const URL_REGEX = /^(https|http):\/\/+/;

const HeadComponent = ({
  title = 'Covid Agora',
  icon,
  description,
  image,
  noDefaultTags,
  children,
}) => {
  const imageParsed = URL_REGEX.test(image)
    ? image
    : `https://covidagora.site/${image}`;

  return (
    <NextHead>
      <title>{title}</title>

      <link
        rel="icon"
        href={URL_REGEX.test(icon) ? icon : `https://covidagora.site/${icon}`}
      />

      {!noDefaultTags && (
        <>
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta name="description" content={description} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />

          {image && (
            <>
              <meta property="og:image" content={imageParsed} />
              <meta property="og:image:secure_url" content={imageParsed} />

              <meta name="twitter:image" content={imageParsed} />
              <meta name="twitter:image:src" content={imageParsed} />

              <meta name="image" content={imageParsed} />
            </>
          )}
        </>
      )}

      {children}
    </NextHead>
  );
};

HeadComponent.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  noDefaultTags: PropTypes.bool,
  children: PropTypes.node,
};

HeadComponent.defaultProps = {
  description:
    'Dados mundial, nacional e regional do coronavírus na palma da sua mão. Dados oficiais e atualizados em tempo real, garantindo a veracidade e a qualidade do serviço, entregando a melhor experiência ao usuário.',
  icon: 'icon.png',
  image: false,
  noDefaultTags: false,
  children: null,
};

export default HeadComponent;
