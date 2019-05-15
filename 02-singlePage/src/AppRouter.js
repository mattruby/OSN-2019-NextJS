import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home } from "./Home";
import { Product } from "./Product";

function AppRouter() {
  return (
    <Router>
      <div>Cool header + menu</div>
      <hr />
      <Route path="/" component={Home} exact />
      <Route path="/product/" component={Product} />
      <hr />
      <div>Cool footer + menu</div>
    </Router>
  );
}

export default AppRouter;
