import { useState } from "react";
import Router from "next/router";
import { Layout } from "../components/Layout";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Layout>
      <h1>Welcome to my awesome homepage</h1>
      <p>We sell many interesting cool products. Please buy one today!</p>
      <form
        onSubmit={e => {
          e.preventDefault();
          Router.push({ pathname: "/search", query: { keyword: searchTerm } });
        }}
      >
        <input
          name="keyword"
          placeholder="Enter keyword"
          value={searchTerm}
          onChange={e => {
            setSearchTerm(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
};

export default Home;
