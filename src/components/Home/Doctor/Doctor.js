import React from "react";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './Doctor.css'
import DoctorDetails from "../DoctorDetails/DoctorDetails";

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);
  console.log(doctors)
  
  useEffect(() => {
    fetch(`http://localhost:5000/doctors`)
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <section className="doctor mt-5">
      <div className="container">
          <h4 className="text-center text-primary text-decoration-none mb-5">
            Our Doctors
          </h4>
        <div className="row">
          {doctors.map((doctor) => (
            <DoctorDetails doctor={doctor} key={doctor._id}></DoctorDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctor;
