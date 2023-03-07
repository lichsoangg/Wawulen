import React from "react";
import "./notfound.scss";
import {Link} from "react-router-dom";
const NotFound = () => {
  return (
    <section className="notfound">
      <div className="container notfound__container">
        <h2>Page Not Found</h2>
        <Link to="/" className="btn">
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
