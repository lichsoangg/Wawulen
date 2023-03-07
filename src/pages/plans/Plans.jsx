import React from "react";
import "./plans.scss";
import Card from "../../components/UI/Card";
import {plans} from "../../data";
import Banner from "../../components/Banner";
import PlansImg from "../../../public/plans.jpg";
const Plans = () => {
  return (
    <>
      <Banner title="Membership Plans" image={PlansImg}></Banner>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({id, name, desc, price, features}) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}/month</h1>
                <h4>Features</h4>
                {features.map(({feature, available, index}) => {
                  return (
                    <p key={index} className={!available ? "disable" : ""}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn btn-lg">Choose Plan</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
