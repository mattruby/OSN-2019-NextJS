import fetch from "isomorphic-unfetch";

const Product = ({ product }) => (
  <div>
    <h1>{product.name}</h1>
  </div>
);

Product.getInitialProps = async function() {
  const res = await fetch(`http://localhost:5005/products/1`);
  const product = await res.json();
  return { product };
};

export default Product;
