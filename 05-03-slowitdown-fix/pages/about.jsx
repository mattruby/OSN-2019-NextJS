import Link from "next/link";
import { PromiseAwareLoader } from "../components/PromiseAwareLoader";

const About = ({ pagePromise }) => (
  <PromiseAwareLoader
    pagePromise={pagePromise}
    loadingRender={() => <h1>Loading...</h1>}
    render={data => (
      <div>
        <p style={{ color: "red" }}>What's my name again? {data.firstName}</p>
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </div>
    )}
  />
);

About.getInitialPromise = async () =>
  new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({ firstName: "Matt" });
    }, 4000);
  });

export default About;
