import React from "react";
import { Link } from "react-router-dom";
const Sidebar = (props) => {
  return (
    <aside className="left-sidebar" data-sidebarbg="skin5">
      {/* Sidebar scroll*/}
      <div className="scroll-sidebar">
        {/* Sidebar navigation*/}
        <nav className="sidebar-nav">
          <ul id="sidebarnav" className="p-t-30">
            <div>
              <li className="sidebar-item">
                <Link
                  to="/admin"
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-view-dashboard" />
                  <span className="hide-menu">Dashboard</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  to="/home"
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-view-dashboard" />
                  <span className="hide-menu">Home page</span>
                </Link>
              </li>
              {/* <li className="sidebar-item">
                {" "}
                <Link
                  to="/admin/insert"
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  href="/admin/all-user"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-face" />
                  <span className="hide-menu">All user</span>
                </Link>
              </li>
             */}

              {/* <li className="sidebar-item">
                {" "}
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-face" />
                  <span className="hide-menu">Employee</span>
                </a>
                <ul aria-expanded="false" className="collapse  first-level">
                  <li className="sidebar-item">
                    {" "}
                    <a
                      className="sidebar-link "
                      href="/admin/employee"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-border-inside" />
                      <span className="hide-menu">All employee</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    {" "}
                    <a
                      className="sidebar-link "
                      href="/admin/add-employee"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-library-plus" />
                      <span className="hide-menu">Add employee</span>
                    </a>
                  </li>
                </ul>
              </li>
              */}
               <i className="mdi mdi-delete" />
              <li className="sidebar-item">
              <Link
                      to="/admin/allgame"
                      className="sidebar-link "
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-border-inside" />
                      <span className="hide-menu">All game</span>
                    </Link>
              </li>
              <li className="sidebar-item">
              <Link
                      to="/admin/allgame"
                      className="sidebar-link "
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-border-inside" />
                      <span className="hide-menu">All game</span>
                    </Link>
              </li>
              <li className="sidebar-item">
              <Link
                      to="/admin/insert"
                      className="sidebar-link "
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-library-plus" />
                      <span className="hide-menu">Add game</span>
                    </Link>
              </li>
{/* 
              <li className="sidebar-item">
                {" "}
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-cube" />
                  <span className="hide-menu">Game</span>
                </a>
                <ul aria-expanded="false" className="collapse  first-level">
                  <li className="sidebar-item">
                    {" "}
                  
                  </li>
                  <li className="sidebar-item">
                    {" "}
                    <Link
                      to="/admin/insert"
                      className="sidebar-link "
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-library-plus" />
                      <span className="hide-menu">Add game</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    {" "}
                    <a
                      className="sidebar-link "
                      href="/admin/all-deleted-game"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-delete" />
                      <span className="hide-menu">Deleted game</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                {" "}
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-receipt" />
                  <span className="hide-menu">Order</span>
                </a>
                <ul aria-expanded="false" className="collapse  first-level">
                  <li className="sidebar-item">
                    {" "}
                    <a
                      className="sidebar-link"
                      href="/admin/all-order"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-library-plus" />
                      <span className="hide-menu">All order</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    {" "}
                    <a
                      className="sidebar-link"
                      href="/admin/to-pay-order"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-checkbox-marked-circle-outline" />
                      <span className="hide-menu">To pay order</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    {" "}
                    <a
                      className="sidebar-link "
                      href="/admin/to-delivery-order"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dropbox" />
                      <span className="hide-menu">To delivery order</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    {" "}
                    <a
                      className="sidebar-link "
                      href="/admin/on-delivery-order"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-telegram" />
                      <span className="hide-menu">On delivery order</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    {" "}
                    <a
                      className="sidebar-link "
                      href="/admin/received-order"
                      aria-expanded="false"
                    >
                      <i className="mdi zmdi-money" />
                      <span className="hide-menu">Received order</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    {" "}
                    <a
                      className="sidebar-link "
                      href="/admin/to-return-order"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-backburger" />
                      <span className="hide-menu">Return refund order</span>
                    </a>
                  </li>
                </ul>
              </li>
            */}
           
            </div>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
