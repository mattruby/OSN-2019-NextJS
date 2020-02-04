import Link from "next/link";

export default () => (
  <div>
    <h1>Welcome to my awesome homepage</h1>
    <p>We sell many interesting products.</p>
    <Link href="/search" prefetch>
      <a>Search</a>
    </Link>
  </div>
);
