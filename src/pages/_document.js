import Document, { Head, Main, Html, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage(Component => props => {
      return sheet.collectStyles(<Component {...props} />);
    });

    const styleElements = sheet.getStyleElement();
    return { ...page, styleElements };
  }

  render() {
    const { styleElements } = this.props;

    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />

          <meta name="theme-color" content="#006daa" />
          <meta name="author" content="Hitechline Team" />

          <link rel="icon" href="/favicon.png" />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/normalize.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/styles.css"
          />

          {/* Google */}
          <script
            data-ad-client="ca-pub-2725246876757935"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-166173584-1"
          />
          <script
            dangerouslySetInnerHTML={{
              __html:
                "window.dataLayer=window.dataLayer || []; function gtag(){dataLayer.push(arguments);}gtag('js', new Date()); gtag('config', 'UA-166173584-1');",
            }}
          />

          {/* Cookie Consent */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css"
          />
          <script
            data-cfasync="false"
            src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"
          />
          <script
            dangerouslySetInnerHTML={{
              __html:
                "window.cookieconsent.initialise({palette:{popup:{background: '#0353a4', text: '#ffffff',}, button:{background: '#ffffff', text: '#0353a4'}}, theme: 'classic', content:{message: 'This website uses cookies to ensure you get the best experience on our website. Learn more', dismiss: 'Accept', link: 'Learn More', href: 'https://covidagora.site/privacy-policy'}});",
            }}
          />

          {styleElements}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
