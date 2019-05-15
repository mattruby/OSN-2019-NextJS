import { Link } from "../routes";
import fetch from "isomorphic-unfetch";
import { Layout } from "../components/Layout";

const Search = ({ searchResults, keyword }) => (
  <Layout>
    <h1>Search results for: {keyword}</h1>
    <ul>
      {searchResults.map(product => (
        <li key={product.id}>
          <Link
            route="product"
            params={{
              productName: product.name.replace(/ /g, "_"),
              id: product.id
            }}
          >
            <a>{product.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <Link route="home">
      <a>Return Home</a>
    </Link>
  </Layout>
);

Search.getInitialProps = async function({ query }) {
  const res = await fetch(`http://localhost:5005/products/?q=${query.keyword}`);
  const searchResults = await res.json();
  return { searchResults, keyword: query.keyword };
};

export default Search;
