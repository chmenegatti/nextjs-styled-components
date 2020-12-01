import React from 'react';
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>

          <meta
            name="description"
            content="Portifólio e Currículo Cesar Menegatti Fullstack JavaScript Developer (NodeJS, React, ReactNative, NextJS, Postgres, CSS, HTML, Styled Components)"
          />
          <meta
            name="keywords"
            content="webdeveloper, webmaster, javascript, fullstack, portifolio, curriculo, react, nextjs, node, react native, postgress, css, html, docker"
          />

          <meta name="robots" content="" />
          <meta name="revisit-after" content="1 day" />
          <meta name="language" content="Portuguese" />
          <meta name="generator" content="N/A" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
