import React from "react";
import img from "../../../images/doctor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const DoctorDetails = ({doctor}) => {
  console.log(doctor)
  return (
    <div className="col-md-4 text-center">
      {doctor.image ? (
        <img
          style={{ height: "200px" }}
          src={`data:image/png;base64,${doctor.image.img}`}
          alt=""
        />
      ) : (
        <img
          className="img-fluid mb-3"
          src={`https://doctorsportal.herokuapp.com/${doctor.img}`}
          alt=""
        />
      )}
      <h3 className="text-brand">{doctor.name}</h3>
      <h5>{doctor.specialist}</h5>
      <h6>{doctor.degree}</h6>
      <p>
        {" "}
        <FontAwesomeIcon className="text-primary" icon={faEnvelope} />{" "}
        {doctor.email}
      </p>
    </div>
  );
};

export default DoctorDetails;
