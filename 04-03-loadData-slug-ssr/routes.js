const routes = require("next-routes");

module.exports = routes()
  .add("home", "/", "/index")
  .add("search", "/search/:keyword")
  .add("product", "/product/:productName");
