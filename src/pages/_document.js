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
