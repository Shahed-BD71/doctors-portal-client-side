import React from 'react';

const ServicesDetails = ({service}) => {
          return (
            <div className="col-md-4 text-center">
              <img className='w-25' src={service.img} alt=''></img>
              <h5 className="mt-3 mb-3">{service.name}</h5>
              <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, architecto.</p>
            </div>
          );
};

export default ServicesDetails;