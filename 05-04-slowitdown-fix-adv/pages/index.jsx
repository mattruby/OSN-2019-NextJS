import Link from "next/link";

const Index = () => (
  <div>
    <p>Name loader</p>
    <Link href="/about?timeout=3000">
      <a>Slow: 3 seconds</a>
    </Link>
    <br />
    <br />
    <Link href="/about?timeout=50">
      <a>FAST: 50ms</a>
    </Link>
    <br />
    <br />
    <Link href="/about?timeout=250">
      <a>Almost FAST: 250ms</a>
    </Link>
  </div>
);

export default Index;
