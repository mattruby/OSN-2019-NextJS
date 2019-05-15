module.exports = function() {
  const faker = require("faker");
  const products = Array.from(Array(100).keys()).map(i => ({
    id: i,
    color: faker.commerce.color(),
    department: faker.commerce.department(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    adjective: faker.commerce.productAdjective(),
    material: faker.commerce.productMaterial(),
    product: faker.commerce.product(),
    description: faker.lorem.paragraph()
    // variants: [
    //   Array.from(Array(4).keys()).map(j => ({
    //     id: j,
    //     color: faker.commerce.color()
    //   }))
    // ]
  }));
  return {
    products,
    analytics: []
  };
};
