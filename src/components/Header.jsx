import React from "react";
import Image from "../images/gym.png";
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className=" container header__container">
        <div className="header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores saepe quasi autem
            illum.
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="header-right">
          <div className="header-circle"></div>
          <div className="header-image">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
