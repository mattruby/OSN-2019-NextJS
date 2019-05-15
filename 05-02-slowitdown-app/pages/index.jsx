import Link from "next/link";

const Index = () => (
  <div>
    <p>Name loader</p>
    <Link href="/about">
      <a>I dare you to load this page</a>
    </Link>
  </div>
);

export default Index;
