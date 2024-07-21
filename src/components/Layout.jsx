import { Outlet } from "react-router-dom";
import Nav from "./nav-component";

const Layout = ({ user, setUser }) => {
  return (
    <>
      <Nav user={user} setUser={setUser} />
      <Outlet />
    </>
  );
};

export default Layout;
