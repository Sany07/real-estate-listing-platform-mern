import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

const About = () => {
    return (
        <>
            <div>
  {/* Breadcrumb */}
  <Breadcrumb title={"About"}/>
  <section id="about" className="py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h2>We Search For The Perfect Home</h2>
          <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, pariatur!</p>
          <img src="assets/img/about.jpg" alt="" />
          <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis esse officia repudiandae ad saepe ex, amet
            neque quod accusamus rem quia magnam magni dolorum facilis ullam minima perferendis? Exercitationem at quaerat
            commodi id libero eveniet harum perferendis laborum molestias quia.</p>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img className="card-img-top" src="assets/img/realtors/kyle.jpg" alt="Seller of the month" />
            <div className="card-body">
              <h5 className="card-title">Seller Of The Month</h5>
              <h6 className="text-secondary">Kyle Brown</h6>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nesciunt amet, illo itaque similique repellat.
                content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Work */}
  <section id="work" className="bg-dark text-white text-center">
    <h2 className="display-4">We Work For You</h2>
    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem velit aperiam, unde aliquid at similique!</h4>
    <hr />
    <a href="listings.html" className="btn btn-secondary text-white btn-lg">View Our Featured Listings</a>
  </section>
  {/* Team */}
  <section id="team" className="py-5">
    <div className="container">
      <h2 className="text-center">Our Team</h2>
      <div className="row text-center">
        <div className="col-md-4">
          <img src="assets/img/realtors/kyle.jpg" alt="" className="rounded-circle mb-3" />
          <h4>Kyle Brown</h4>
          <p className="text-success">
            <i className="fas fa-award text-success mb-3" /> Realtor</p>
          <hr />
          <p>
            <i className="fas fa-phone" /> (555)-555-5555</p>
          <p>
            <i className="fas fa-envelope-open" /> kyle@btrealestate.co</p>
        </div>
        <div className="col-md-4">
          <img src="assets/img/realtors/mark.jpg" alt="" className="rounded-circle mb-3" />
          <h4>Mark Hudson</h4>
          <p className="text-success">Realtor</p>
          <hr />
          <p>
            <i className="fas fa-phone" /> (444)-444-4444</p>
          <p>
            <i className="fas fa-envelope-open" /> mark@btrealestate.co</p>
        </div>
        <div className="col-md-4">
          <img src="assets/img/realtors/jenny.jpg" alt="" className="rounded-circle mb-3" />
          <h4>Jenny Johnson</h4>
          <p className="text-success">Realtor</p>
          <hr />
          <p>
            <i className="fas fa-phone" /> (333)-333-3333</p>
          <p>
            <i className="fas fa-envelope-open" /> jenny@btrealestate.co</p>
        </div>
      </div>
    </div>
  </section>
</div>

        </>
    );
};

export default About;