import React from 'react';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';
import AppointmentShortList from '../AppointmentsShortListed/AppointmentsShortListed';

const AppointmentsByDate = ({appointments}) => {
  console.log(appointments)
          return (
            <div>
              <h2 className="text-brand text-center">Appointment List</h2>
              {
                appointments.length ? (
                <AppointmentShortList
                  appointments={appointments}
                ></AppointmentShortList>
                ) : (
                <div className="p-5">
                  <h4 className="lead text-center">
                    No Appointments for this Date
                  </h4>
                </div>
              )
             }
            </div>
          );
};

export default AppointmentsByDate;