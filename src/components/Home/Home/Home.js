import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services'
import FeaturedService from '../FeaturedService/FeaturedService'
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';
import BLogs from '../Blogs/BLogs';
import Doctor from '../Doctor/Doctor';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer'

const Home = () => {
          return (
            <div className="">
              <Header></Header>
              <Services></Services>
              <FeaturedService></FeaturedService>
              <MakeAppointment></MakeAppointment>
              <Testimonial></Testimonial>
              <BLogs></BLogs>
              <Doctor></Doctor>
              <Contact></Contact>
              <Footer></Footer>
            </div>
          );
};

export default Home;