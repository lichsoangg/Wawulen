import React from "react";
import "./home.scss";
import Header from "../../components/Header";
import Programs from "../../components/Programs";
import Values from "../../components/Values";
import FAQs from "../../components/FAQs";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
    </>
  );
};

export default Home;
