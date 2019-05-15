import React from "react";
import { Link } from "react-router-dom";

export const Product = () => (
  <React.Fragment>
    <h1>Pants</h1>
    <p>Not one leg! Not three legs! But two whole legs!!</p>
    <Link to="/">Return Home</Link>
  </React.Fragment>
);
