import fetch from "isomorphic-unfetch";
import { Layout } from "../components/Layout";

const Analytics = ({ analytics }) => (
  <Layout>
    <ul>
      {analytics.map(entry => (
        <li key={entry.date}>
          {entry.name} - {entry.date}
        </li>
      ))}
    </ul>
  </Layout>
);

Analytics.getInitialProps = async function() {
  const res = await fetch(`http://localhost:5005/analytics`);
  const analytics = await res.json();
  return { analytics };
};

export default Analytics;
