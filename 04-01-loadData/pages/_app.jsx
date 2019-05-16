import React from "react";
import App, { Container } from "next/app";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    /** ctx
     * @param {String} pathname path of the URL
     * @param {Object} query GET params parsed as an object
     * @param {String} asPath full path as shown in browser
     * @param {Object} req HTTP request (server only)
     * @param {Object} res HTTP response (server only)
     * @param {Object} error Render error if any
     */

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
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
