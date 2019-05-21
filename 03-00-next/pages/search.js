import Link from "next/link";

const Search = () => (
  <div>
    <h1>Search results for: keyword</h1>
    <ul>
      <li>
        <Link href={`/product`}>
          <a>Product name</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Search;
