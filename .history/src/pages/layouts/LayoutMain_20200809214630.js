import React from "react";
import Header from "../../components/Main/Header";
import Footer from "../../components/Main/Footer";

export default ({ children }) => {
  return (
    <div>
   
      <div className="super_container">
        <Header />
        <div className="super_container_inner">
          <div className="super_overlay" />
          { children }
          <Footer />
        </div>
      </div>
    </div>
  );
};
