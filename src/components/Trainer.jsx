import React from "react";
import Card from "../components/UI/Card";
import {trainers} from "../data";
const Trainer = ({image, name, job, socials}) => {
  return (
    <Card className="trainer">
      <div className="trainer__img">
        <img src={image} alt="" />
        <h3>{name}</h3>
        <p> {job}</p>
        <div className="trainer__socials">
          {socials.map(({icon, link}, index) => {
            return (
              <a href={link} key={index} target="_blank" rel="noreference noopener">
                {icon} 
              </a>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default Trainer;
