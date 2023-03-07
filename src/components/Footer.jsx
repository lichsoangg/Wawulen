import React from "react";
import Logo from "../images/logo.jpg";
import {FaLinkedin, FaFacebook} from "react-icons/fa";
import {AiOutlineTwitter, AiFillInstagram} from "react-icons/ai";
import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div
        className="container footer__container {
"
      >
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus placeat eligendi
            assumenda hic ad, aliquam praesentium voluptas ea officiis commodi
          </p>
          <div className="footer__socials">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer noopener">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer noopener">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer noopener">
              <AiOutlineTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener">
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article className="footer__permalinks">
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article className="footer_insight">
          <h4>Insight</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/s">FAQs</Link>
        </article>
        <article className="footer_insight">
          <h4>Get In Touch</h4>
          <Link to="/s">Contact Us</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2023 by Lich Soang...</small>
      </div>
    </footer>
  );
};

export default Footer;
