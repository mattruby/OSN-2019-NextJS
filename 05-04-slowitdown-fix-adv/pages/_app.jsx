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
        pageProps.pagePromise = pagePromise;
        // this is to give the client a little time to load the page content before showing the load state
        await new Promise(resolve => {
          const timer = setTimeout(resolve, 200);
          pagePromise.then(data => {
            clearTimeout(timer);
            pageProps.pagePromise = data;
            resolve();
          });
        });
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
