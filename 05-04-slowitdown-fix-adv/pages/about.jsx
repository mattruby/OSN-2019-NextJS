import Link from "next/link";
import { PromiseAwareLoader } from "../components/PromiseAwareLoader";
// import { PromiseAwareLoader } from "../components/PromiseAwareLoaderAdv";

const About = ({ pagePromise }) => (
  <PromiseAwareLoader
    pagePromise={pagePromise}
    loadingRender={() => <h1>Loading...</h1>}
    render={data => (
      <div>
        <p>What's my name again? {data.firstName}</p>
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </div>
    )}
  />
);

About.getInitialPromise = ({ query = { timeout: 4000 } }) =>
  new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({ firstName: "Matt" });
    }, query.timeout);
  });

export default About;
