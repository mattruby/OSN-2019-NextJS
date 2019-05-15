import fetch from "isomorphic-unfetch";
import { Layout } from "../components/Layout";

const Product = ({ product }) => (
  <Layout>
    <h1>{product.name}</h1>
    <p>{product.description}</p>
  </Layout>
);

Product.getInitialProps = async function({ query }) {
  const res = await fetch(`http://localhost:5005/products/${query.id}`);
  const product = await res.json();
  return { product };
};

export default Product;
