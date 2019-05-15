import Link from "next/link";

export const Layout = ({ children }) => (
  <React.Fragment>
    <div>Cool header + menu</div>
    <hr />
    {children}
    <Link href="/">
      <a>Return Home</a>
    </Link>
    <hr />
    <div>Cool footer + menu</div>
  </React.Fragment>
);
