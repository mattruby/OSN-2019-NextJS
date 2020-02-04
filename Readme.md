# Practical Single Page Applications with Server Side Rendering Using Next.js

## Open Source North 2019

This is a collection of simple code progressions.

## Code Progression

1. Hello World Next.js
   1. 03-00-next
      1. Introduce pages
      2. Introduce `Link`
      3. Introduce `dev`
      4. Introduce `build` & `start`
      5. Demo turning JS off
2. Loading Data
   1. 04-00-loadData
      1. Introduce `getInitialProps`
      2. Introduce `query`
   2. 04-01-loadData
      1. Introduce `Router.push`
      2. Introduce `_app.jsx`
         1. Introduce `ctx`
   3. 04-02-loadData-slug
      1. Introduce `Link as`
      2. Demo shortcomings
   4. 04-03-loadData-slug-ssr
      1. Introduce `next-routes`
         1. Introduce imperative file name based routing
      2. Add `product.id` as a slug
3. Issues with loading data
   1. 05-01-slowitdown
      1. Demo shortcomings of `getInitialProps`
      2. Explain the desired UX
   2. 05-02-slowitdown-app
      1. Explain exactly what's going on in `_app.jsx`
      2. Discuss potential alternatives
   3. 05-03-slowitdown-fix
      1. Explain one potantial fix to the load problem
      2. Walk through the simple implementation
      3. Demo the simple fix
      4. Switch to the more advanced fix
      5. Demo different promise resolution times
4. Using and abusing `_app.jsx` for fun and profit
   1. Demo Anaytics

00-demoServer is a simple demo json api will provide product and analytics. `yarn start` will give you a blank analytics endpoint and 100 sample products.
