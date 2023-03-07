import React from "react";
import {useState} from "react";
import "./navbar.css";
import Logo from "../images/logo.jpg";
import {Link, NavLink} from "react-router-dom";
import {links} from "../data";
import {GoThreeBars} from "react-icons/go";
import {MdOutlineClose} from "react-icons/Md";
const Navbar = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav__links ${isShowMenu ? "shownav" : "hidenav"}`}>
          {links.map(({name, path}, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  onClick={() => setIsShowMenu((prev) => !prev)}
                  className={({isActive}) => (isActive ? "active" : "")}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button className="nav__btn" onClick={() => setIsShowMenu((prev) => !prev)}>
          {isShowMenu ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
