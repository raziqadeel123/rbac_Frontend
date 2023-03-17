import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="columns mt-6 " style={{minHeight : "100vh"}}>
        <div className="column is-2">
          <Sidebar />
        </div>
        <div className="column mt-2 has-background-light">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
