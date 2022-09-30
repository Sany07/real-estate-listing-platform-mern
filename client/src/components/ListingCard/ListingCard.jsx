import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
moment().format();
const ListingCard = ({listing}) => {

  const link = `/listings/${listing._id}`
    return (
        <>
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="card listing-preview">
        <img className="card-img-top" src={listing.image } alt="" />
        <div className="card-img-overlay">
          <h2>
            <span className="badge badge-secondary text-white">${listing.price }</span>
          </h2>
        </div>
        <div className="card-body">
          <div className="listing-heading text-center">
            <h4 className="text-primary">{listing.title}</h4>
            <p>
              <i className="fas fa-map-marker text-secondary" /> {listing.address}</p>
          </div>
          <hr />
          <div className="row py-2 text-secondary">
            <div className="col-6">
              <i className="fas fa-th-large" /> Sqft: {listing.squareFeet}</div>
            <div className="col-6">
              <i className="fas fa-car" /> Garage: {listing.garage}</div>
          </div>
          <div className="row py-2 text-secondary">
            <div className="col-6">
              <i className="fas fa-bed" /> Bedrooms: {listing.bedrooms}</div>
            <div className="col-6">
              <i className="fas fa-bath" /> Bathrooms: {listing.bathrooms}</div>
          </div>
          <hr />
          <div className="row py-2 text-secondary">
            <div className="col-12">
              <i className="fas fa-user" /> {listing.realtor}</div>
          </div>
          <div className="row text-secondary pb-2">
            <div className="col-6">
              <i className="fas fa-clock" /> { moment(listing.createdAt).fromNow() }</div>
          </div>
          <hr />
          <Link to={link} className="btn btn-primary btn-block">More Info</Link>
        </div>
            </div>
        </div>  
        </>
    );
};

export default ListingCard;