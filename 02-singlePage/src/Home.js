import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
  <React.Fragment>
    <h1>Welcome to my awesome homepage</h1>
    <p>We sell many interesting cool products. Please buy one today!</p>
    <Link to="/product/?id=1234">Cool Product</Link>
  </React.Fragment>
);
