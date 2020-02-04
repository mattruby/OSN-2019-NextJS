import fetch from "isomorphic-unfetch";

const Product = ({ product }) => (
  <div>
    <h1>{product.name || "No product found. Please pass id param."}</h1>
  </div>
);

Product.getInitialProps = async function({ query }) {
  const res = await fetch(`http://localhost:5005/products/${query.id}`);
  const product = await res.json();
  return { product };
};

export default Product;
