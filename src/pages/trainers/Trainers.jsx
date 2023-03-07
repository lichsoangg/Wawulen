import React from "react";
import "./trainers.scss";
import Banner from "../../components/Banner";
import TrainerImg from "../../../public/trainerbn.jpg";
import {trainers} from "../../data";
import Trainer from "../../components/Trainer";
import {BsInstagram, BsFacebook, BsTwitter} from "react-icons/bs";
const Trainers = () => {
  return (
    <>
      <Banner title="Our Trainers" image={TrainerImg}>
        Planet Fitness members get unlimited, free fitness training with PE@PF. Gym trainers,
        personalized exercise plans, equipment training and more. Join now!
      </Banner>
      <section className="trainers">
        <div className=" container trainers__container">
          {trainers.map(({id, image, name, job, socials}) => {
            return (
              <Trainer
                key={id}
                name={name}
                job={job}
                image={image}
                socials={[
                  {
                    icon: <BsInstagram />,
                    link: socials[1],
                  },
                  {
                    icon: <BsFacebook />,
                    link: socials[0],
                  },
                  {
                    icon: <BsTwitter />,
                    link: socials[2],
                  },
                ]}
              ></Trainer>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Trainers;
