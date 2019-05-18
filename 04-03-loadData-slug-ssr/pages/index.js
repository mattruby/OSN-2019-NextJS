import { useState } from "react";
import { Router } from "../routes";
import { Layout } from "../components/Layout";

export default () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Layout>
      <h1>Welcome to my awesome homepage</h1>
      <p>We sell many interesting cool products. Please buy one today!</p>
      <form
        action="/search"
        method="get"
        onSubmit={e => {
          e.preventDefault();
          Router.pushRoute("search", { keyword: searchTerm });
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
