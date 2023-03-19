import Header from "../Header";
export const Layout = ({ children }) => {
  return (
    <div className="p-0 m-0">
      {/* <Header /> */}
      <main className="">{children}</main>
    </div>
  );
};
