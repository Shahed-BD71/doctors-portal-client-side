import React from 'react';

const TestimonialDetails = (props) => {
     const { quote, name, from, img } = props.testimonial;
     return (
       <div className="card shadow rounded m-2">
         <div className="card-body m-4">
           <p className="card-text text-center">{quote}</p>
         </div>
         <div className="card-footer pb-4 d-flex ">
           <img className="mx-3" src={img} alt="" width="60" />
           <div className=''>
             <h6 className="text-primary">{name}</h6>
             <p className="m-0">{from}</p>
           </div>
         </div>
       </div>
     );
};

export default TestimonialDetails;