import React from "react";
import "./about.scss";
import Banner from "../../components/Banner";
import BannerImg from "../../images/avtbanner.jpg";
import StoryImg from "../../images/avt7.jpg";
import VisionImg from "../../images/avt2.jpg";
import MissionImg from "../../images/avt3.jpg";

const About = () => {
  return (
    <>
      <Banner title="About Us" image={BannerImg}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit expedita facilis animi ut
        iusto dolorum ex error.
      </Banner>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-img">
            <img src={StoryImg} alt="Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, placeat ad. Expedita
              fugiat amet hic provident modi dolore earum error fugit illo soluta nostrum,
              molestiae, ipsa quidem consequuntur quam impedit!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, placeat ad. Expedita
              fugiat amet hic provident modi dolore earum error fugit illo soluta nostrum,
              molestiae, ipsa quidem consequuntur quam impedit!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, sed alias saepe numquam
              voluptas ea.
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, placeat ad. Expedita
              fugiat amet hic provident modi dolore earum error fugit illo soluta nostrum,
              molestiae, ipsa quidem consequuntur quam impedit!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, placeat ad. Expedita
              fugiat amet hic provident modi dolore earum error fugit illo soluta nostrum,
              molestiae, ipsa quidem consequuntur quam impedit!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, sed alias saepe numquam
              voluptas ea.
            </p>
          </div>
          <div className="about__section-img">
            <img src={VisionImg} alt="Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-img">
            <img src={MissionImg} alt="Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, placeat ad. Expedita
              fugiat amet hic provident modi dolore earum error fugit illo soluta nostrum,
              molestiae, ipsa quidem consequuntur quam impedit!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, placeat ad. Expedita
              fugiat amet hic provident modi dolore earum error fugit illo soluta nostrum,
              molestiae, ipsa quidem consequuntur quam impedit!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, sed alias saepe numquam
              voluptas ea.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
