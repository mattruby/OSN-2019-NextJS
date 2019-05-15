import Link from "next/link";

const About = ({ firstName }) => (
  <div>
    <p style={{ color: "red" }}>What's my name again? {firstName}</p>
    <Link href="/">
      <a>Home Page</a>
    </Link>
  </div>
);

About.getInitialProps = () =>
  new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({ firstName: "Matt" });
    }, 8000);
  });

export default About;
