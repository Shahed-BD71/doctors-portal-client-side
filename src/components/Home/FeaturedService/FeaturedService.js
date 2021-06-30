import React from 'react';
import Featured from '../../../images/FeaturedService.png'

const FeaturedService = () => {
          return (
            <section className="features-service pb-0 pb-md-5 my-5">
              <div className="container mb-5">
                <div className="row mb-5">
                  <div className="col-md-5">
                    <img className="img-fluid" src={Featured} alt=""></img>
                  </div>
                  <div className="col-md-7 align-self-center">
                    <h2 style={{ color: "#203047"}}>Exceptional Dental <br></br> Care, on Your Terms</h2>
                    <p className="text-secondary my-5 me-5 pe-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur culpa voluptate mollitia? Adipisci repudiandae dolor, accusantium itaque unde vero. Est fugiat unde odio distinctio non autem, facilis aut fuga, quos minus labore tenetur ducimus placeat nemo necessitatibus excepturi quaerat consequatur, cum rerum! Recusandae laborum amet incidunt labore eos cumque laboriosam!
                    </p>
                    <button className="btn btn-primary">Learn More</button>
                  </div>
                </div>
              </div>
            </section>
          );
};

export default FeaturedService;