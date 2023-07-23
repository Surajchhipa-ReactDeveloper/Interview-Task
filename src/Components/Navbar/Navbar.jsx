import React, { useState } from "react";
import "./Navbar.css";
import { Icon } from "../../Constant/IconPath";
import { Link, NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
  const Location = useLocation();
  const [openNavbar, setOpenNavbar] = useState(true);
  const CloseLink = () => {
    setOpenNavbar(true);
  };
  return (
    <>
      <div className="Navbar_Main_Container">
        <div className="Navbar_Left_Side_Container">
          <NavLink to="/">
            <img src={Icon.Main_LOgo2} alt="" className="Main_Logo" />
          </NavLink>
        </div>
        <div className="Navbar_Right_Side_Container">
          <div
            className={`Navbar_Right_Side_Item ${
              openNavbar ? "Navbar_Right_Side_Item" : "Mobile_Navbar"
            }`}
          >
            <ul>
              <li>
                <Link
                  to="/"
                  onClick={CloseLink}
                  style={{
                    borderBottom:
                      Location.pathname === "/" ? "4px solid #EF0178" : "",
                  }}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={CloseLink}
                  style={{
                    borderBottom:
                      Location.pathname === "/about" ? "4px solid #EF0178" : "",
                  }}
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  onClick={CloseLink}
                  style={{
                    borderBottom:
                      Location.pathname === "/service"
                        ? "4px solid #EF0178"
                        : "",
                  }}
                >
                  SERVICE
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={CloseLink}
                  style={{
                    borderBottom:
                      Location.pathname === "/contact"
                        ? "4px solid #EF0178"
                        : "",
                  }}
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
          <div className="Menu_Bar">
            <div
              className="Open_Bar"
              onClick={() => {
                setOpenNavbar(!openNavbar);
              }}
            >
              {openNavbar ? (
                <img
                  src={Icon.OpenNavBar}
                  className="Hamburger_Menu"
                  alt="Menu_Bar"
                />
              ) : (
                <img
                  src={Icon.closeNavBar}
                  className="Hamburger_Menu"
                  alt="Menu_Bar"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
