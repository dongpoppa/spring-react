import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <header className="header">
        <div className="header_overlay" />
        <div className="header_content d-flex flex-row align-items-center justify-content-start">
          <div className="logo">
            <a href="#">
              <div className="d-flex flex-row align-items-center justify-content-start">
                <div>
                  <img
                    src="/../../../../static/user/images/logo_1.png"
                    alt=""
                  />
                </div>
                <div>Little Closet</div>
              </div>
            </a>
          </div>
          <div className="hamburger">
            <i className="fa fa-bars" aria-hidden="true" />
          </div>
          <nav className="main_nav">
            <ul className="d-flex flex-row align-items-start justify-content-start">
            <li>
                <Link to="/home">Home</Link>
              </li>
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
                <a href="#">Contact</a>
              </li>

              <li>
                <Link to="/admin">Admin</Link>
              </li>
            </ul>
          </nav>
          <div className="header_right d-flex flex-row align-items-center justify-content-start ml-auto">
            <div className="header_search">
              <form action="#" id="header_search_form">
                <input
                  type="text"
                  className="search_input"
                  placeholder="Search Item"
                  required="required"
                />
                <button className="header_search_button">
                  <img
                    src="/../../../../static/user/images/search.png"
                    alt=""
                  />
                </button>
              </form>
            </div>
            {/* User */}
            <div className="user">
              <a href="#">
                <div>
                  <img
                    src="/../../../../static/user/images/user.svg"
                    alt="https://www.flaticon.com/authors/freepik"
                  />
                   <div>1</div>
                </div>
              </a>
            </div>
            {/* Cart */}
            <div className="cart">
            <Link to="/admin">
                <div>
                  <img
                    className="svg"
                    src="/../../../../static/user/images/cart.svg"
                    alt="https://www.flaticon.com/authors/freepik"
                  />
                 
                </div>
                </Link>
            </div>
            {/* Phone */}
            <div className="header_phone d-flex flex-row align-items-center justify-content-start">
              <div>
                <div>
                  <img
                    src="/../../../../static/user/images/phone.svg"
                    alt="https://www.flaticon.com/authors/freepik"
                  />
                </div>
              </div>
              <div>+1 912-252-7350</div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
