import React from 'react';
import Chair from "../../../images/headerChair.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './AppointmentHeader.css'

const AppointmentHeader = ({handleDateChange}) => {
          return (
            <main
              style={{ height: "600px" }}
              className="row d-flex bg-image align-items-center"
            >
              <div className="col-md-4 m offset-md-1">
                <h1 className="ms-5 pb-3" style={{ color: "#3A4256" }}>
                  Appointment
                </h1>
                <Calendar className='mb-5' onChange={handleDateChange} value={new Date()} />
              </div>
              <div className="col-md-6">
                <img src={Chair} className="img-fluid" alt="" />
              </div>
            </main>
          );
};

export default AppointmentHeader;