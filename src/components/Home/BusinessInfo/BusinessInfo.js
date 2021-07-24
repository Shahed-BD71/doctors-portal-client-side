import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";


const infosData = [
  {
    title: "Opening Hours",
    description: "We are open 7 days",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit Our Location",
    description: "Brooklyn, NY 10003 USA",
    icon: faMapMarker,
    background: "dark",
  },
  {
    title: "Call us now",
    description: "+15697854124",
    icon: faPhone,
    background: "primary",
  },
];

const BusinessInfo = () => {
          return (
            <section className="mb-5">
              <div className="row justify-content-center mx-5">
                {infosData.map((info) => (
                  <InfoCard info={info} key={info.title}></InfoCard>
                ))}
              </div>
            </section>
          );
};

export default BusinessInfo;