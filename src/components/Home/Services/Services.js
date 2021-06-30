import React from 'react';
import Fluoride from '../../../images/Fluoride Treatment.png'
import Cavity from '../../../images/Cavity Filling.png'
import Whitening from "../../../images/Teath Whitening.png";
import ServicesDetails from '../ServiceDetails/ServicesDetails';

const servicesData = [
  {
    name: "Fluoride Treatment",
    description: "",
    img: Fluoride,
  },
  {
    name: "Cavity Filling",
    description: "",
    img: Cavity,
  },
  {
    name: "Teath Whitening",
    description: "",
    img: Whitening
  },
];

const Services = () => {
          return (
            <section className="mt-5">
              <div className="text-center">
                <h6 style={{ color: "#1CC7C1", fontWeight: "700" }}>
                  OUR SERVICES
                </h6>
                <h2 style={{ color: "#3A4256" }}>Services We Provide</h2>
              </div>
              <div className="d-flex mt-5 pt-5 justify-content-center">
                <div className="w-75 row">
                  {servicesData.map((service) => (
                    <ServicesDetails service={service} key={service.name}></ServicesDetails>
                  ))}
                </div>
              </div>
            </section>
          );
};

export default Services;