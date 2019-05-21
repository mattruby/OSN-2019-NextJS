import Link from "next/link";

const Product = ({ product }) => (
  <div>
    <h1>Product name</h1>
    <p>Product description</p>
    <Link href="/">
      <a>Home</a>
    </Link>
  </div>
);

export default Product;
