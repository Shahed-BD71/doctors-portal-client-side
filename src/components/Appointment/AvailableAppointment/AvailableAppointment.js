import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
const bookingData = [
  {
    id: 1,
    subject: "Teeth Orthodontics",
    visitingHour: "8:00 AM - 9:00 AM",
    space: 17,
  },
  {
    id: 2,
    subject: "Cosmetic Dentistry",
    visitingHour: "10:05 AM – 11:30 AM",
    space: 18,
  },
  {
    id: 3,
    subject: "Teeth Cleaning",
    visitingHour: "5:00 AM – 6:30 PM",
    space: 11,
  },
  {
    id: 4,
    subject: "Cavity Protection",
    visitingHour: "7:00 PM – 8:30 PM",
    space: 14,
  },
  {
    id: 5,
    subject: "Teeth Orthodontics",
    visitingHour: "9:00 PM - 10:00 PM",
    space: 10,
  },
  {
    id: 6,
    subject: "Teeth Orthodontics",
    visitingHour: "10:30 PM - 11:30 PM",
    space: 12,
  }
];

const AvailableAppointment = ({date, visitingHour}) => {
          return (
            <section className='mt-5 container'>
              <h2 className="text-center text-brand">Available Appointments on {date.toDateString()} </h2>
              <div className="row">
                {
                  bookingData.map((booking) => (<BookingCard booking={booking} date={date} key={booking.id}></BookingCard>))
                }
              </div>
            </section>
          );
};

export default AvailableAppointment;