import { useState, useEffect } from "react";

const Loader = ({ pagePromise, render, loadingRender }) => {
  const [data, setData] = useState({ isLoading: true });

  useEffect(() => {
    async function loadData() {
      const data = await pagePromise;
      setData({ isLoading: false, ...data });
    }
    loadData();
  }, []);

  if (data.isLoading) {
    return loadingRender();
  } else {
    return render(data);
  }
};

export const PromiseAwareLoader = ({ pagePromise, render, loadingRender }) => {
  // If we have data, just return whatever we're trying to render
  if (typeof pagePromise.then !== "function") {
    return render(pagePromise);
  }
  // we have a Promise, let's wait for it to complete before rendring
  return (
    <Loader
      pagePromise={pagePromise}
      render={render}
      loadingRender={loadingRender}
    />
  );
};
