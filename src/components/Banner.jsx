import React from "react";

const Banner = ({title, image, children}) => {
  return (
    <header className="banner">
      <div className="banner__container">
        <div className="banner__container-bg">
          <img src={image} alt="banner background" />
        </div>
        <div className="banner__content">
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
      </div>
    </header>
  );
};

export default Banner;
