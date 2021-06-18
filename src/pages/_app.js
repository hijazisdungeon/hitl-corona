import App from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from '~/components/Theme';
import { GlobalStyle } from '~/styles/GlobalStyle';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <ThemeProvider>
          <GlobalStyle />

          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
