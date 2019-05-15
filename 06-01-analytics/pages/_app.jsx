import React from "react";
import fetch from "isomorphic-unfetch";
import App, { Container } from "next/app";

const postAnalytics = data => {
  fetch("http://localhost:5005/analytics", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // call analytics or logging or whatever else!
    postAnalytics({ name: Component.name, date: Date.now() });

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
