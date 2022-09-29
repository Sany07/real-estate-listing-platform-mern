import React from 'react';

const ListingCard = (listing) => {
    return (
        <>
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="card listing-preview">
        <img className="card-img-top" src="assets/img/homes/home-1.jpg" alt="" />
        <div className="card-img-overlay">
          <h2>
            <span className="badge badge-secondary text-white">$490,000</span>
          </h2>
        </div>
        <div className="card-body">
          <div className="listing-heading text-center">
            <h4 className="text-primary">{listing.title}</h4>
            <p>
              <i className="fas fa-map-marker text-secondary" /> Norwood MA, 02062</p>
          </div>
          <hr />
          <div className="row py-2 text-secondary">
            <div className="col-6">
              <i className="fas fa-th-large" /> Sqft: 3200</div>
            <div className="col-6">
              <i className="fas fa-car" /> Garage: 2</div>
          </div>
          <div className="row py-2 text-secondary">
            <div className="col-6">
              <i className="fas fa-bed" /> Bedrooms: 3</div>
            <div className="col-6">
              <i className="fas fa-bath" /> Bathrooms: 2</div>
          </div>
          <hr />
          <div className="row py-2 text-secondary">
            <div className="col-12">
              <i className="fas fa-user" /> Kyle Brown</div>
          </div>
          <div className="row text-secondary pb-2">
            <div className="col-6">
              <i className="fas fa-clock" /> 2 days ago</div>
          </div>
          <hr />
          <a href="listing.html" className="btn btn-primary btn-block">More Info</a>
        </div>
            </div>
        </div>  
        </>
    );
};

export default ListingCard;