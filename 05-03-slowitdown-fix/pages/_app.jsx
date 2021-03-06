import React from "react";
import App, { Container } from "next/app";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if (Component.getInitialPromise) {
      const pagePromise = Component.getInitialPromise(ctx);
      if (ctx.req) {
        // Server side await
        pageProps.pagePromise = await pagePromise;
      } else {
        // Client side keeps on movin
        pageProps.pagePromise = pagePromise;
      }
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
