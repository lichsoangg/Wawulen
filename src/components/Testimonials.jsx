import React, {useState, useEffect} from "react";
import SectionHead from "./SectionHead";
import {ImQuotesLeft} from "react-icons/im";
import Card from "./UI/Card";
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from "react-icons/io";
import {testimonials} from "../data";
const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const {name, quote, avt, job} = testimonials[index];
  const nextTestimonial = () => {
    setIndex((prev) => prev + 1);
    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };
  const prevTestimonial = () => {
    setIndex((prev) => prev - 1);
    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };
  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionHead
          className="testimonial__head"
          icon={<ImQuotesLeft />}
          title="Testimonials"
        ></SectionHead>
        <Card className="testimonial">
          <div className="testimonial__avt">
            <img src={avt} alt="" />
          </div>
          <p className="testimonial__quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial__title">{job}</small>
        </Card>
        <div className="testimonials__btn-container">
          <button className="testimonial__btn" onClick={prevTestimonial}>
            <IoIosArrowDropleftCircle />
          </button>
          <button className="testimonial__btn" onClick={nextTestimonial}>
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
