import React from "react";
import App, { Container } from "next/app";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if (Component.getInitialPromise) {
      if (ctx.req) {
        pageProps.pagePromise = await Component.getInitialPromise(ctx);
      } else {
        pageProps.pagePromise = Component.getInitialPromise(ctx);
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
