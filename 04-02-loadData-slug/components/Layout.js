export const Layout = ({ children }) => (
  <React.Fragment>
    <div>Cool header + menu</div>
    <hr />
    {children}
    <hr />
    <div>Cool footer + menu</div>
  </React.Fragment>
);
