import React from "react";
import "./contact.scss";
import ContactImg from "../../images/avt6.jpg";
import Banner from "../../components/Banner";
import {MdEmail} from "react-icons/md";
import {SiMessenger} from "react-icons/si";
import {AiFillInstagram} from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <Banner title="Get In Touch" image={ContactImg}>
        We've answered our most common queries in the FAQs. · If you have a query regarding a
        payment, or wish to change your billing date, you can call us on 0300 303 .
      </Banner>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="lichsoang3008@gmail.com" target="_blank" rel="noreference noopener">
              <MdEmail />
            </a>
            <a
              href="https://www.facebook.com/lich.soang/"
              target="_blank"
              rel="noreference noopener"
            >
              <SiMessenger />
            </a>
            <a
              href="https://www.instagram.com/i._soangg/"
              target="_blank"
              rel="noreference noopener"
            >
              <AiFillInstagram/>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
