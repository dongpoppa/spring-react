import React from "react";
import Header from "../../components/Main/Header";
import Footer from "../../components/Main/Footer";

export default ({ children }) => {
  return (
    <div>
      {/* <div className="menu">
        {/* Search */}
        <div className="menu_search">
          <form action="#" id="menu_search_form" className="menu_search_form">
            <input
              type="text"
              className="search_input"
              placeholder="Search Item"
              required="required"
            />
            <button className="menu_search_button">
              <img alt=""  src={`${process.env.PUBLIC_URL}/static/user/images/search.png`} 
              /> 
            </button>
          </form>
        </div>
        {/* Navigation */}
        <div className="menu_nav">
          <ul>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Kids</a>
            </li>
            <li>
              <a href="#">Home Deco</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        {/* Contact Info */}
        <div className="menu_contact">
          <div className="menu_phone d-flex flex-row align-items-center justify-content-start">
            <div>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/static/user/images/phone.svg`} 
                  alt="https://www.flaticon.com/authors/freepik"
                />
              </div>
            </div>
            <div>+1 912-252-7350</div>
          </div>
          <div className="menu_social">
            <ul className="menu_social_list d-flex flex-row align-items-start justify-content-start">
              <li>
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-youtube-play" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      */}
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
