import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
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
      <html lang="pt-BR">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

          <meta name="theme-color" content="#006daa" />
          <meta name="author" content="SweetCode Team" />

          <meta
            name="google-site-verification"
            content="oHUSQuGp0QY-4Jsq-xLa1C2tLsLeDLLOtW37SMTuJI8"
          />

          <link rel="icon" href="/icon.png" />

          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
            rel="stylesheet"
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

          <script
            data-ad-client="ca-pub-2725246876757935"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />

          {styleElements}
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </html>
    );
  }
}
