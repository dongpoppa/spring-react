import React from "react";
import Sidebar from "../../components/Admin/Sidebar";
import Topbar from "../../components/Admin/TopBar";
import Footer from "../../components/Admin/Footer";


export default ({ children }) => {
  return (
    <div>
      <div id="main-wrapper">
        <Topbar />
        <Sidebar />
        <div className="page-wrapper">
        { children }
          <Footer />
        </div>
      </div>
    </div>
  );
};
