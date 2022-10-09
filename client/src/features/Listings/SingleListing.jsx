import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import { useGetListingByIdQuery } from './listingSlice';
import moment from 'moment';
moment().format();

const SingleListing = () => {
    const { id } = useParams();
    const {
        data,
        isLoading,
        // isSuccess,
        // isError,
        // error
    } = useGetListingByIdQuery(id)
    if(isLoading){
        return (
            <Spinner/>
          )

    }else{
        console.log();
    }

    const listing = data.listing
    return (
        <>
            {/* Listing */}
            <section id="listing" className="py-4">
                <div className="container">
                <Link to='/listings' className="btn btn-light mb-4">Back To Listings</Link>
                <div className="row">
                    <div className="col-md-9">
                    {/* Home Main Image */}
                    <img src={listing.image} alt={listing.title} className="img-main img-fluid mb-3" />
                    {/* Thumbnails */}
                    <div className="row mb-5 thumbs">
                        {
                            listing.image1?
                        <div className="col-md-2">
                        <a href={listing.image1} data-lightbox="home-images">
                            <img src={listing.image1} alt="" className="img-fluid" />
                        </a>
                        </div>
                            :''
                        }

                                                {
                            listing.image2?
                        <div className="col-md-2">
                        <a href={listing.image2} data-lightbox="home-images">
                            <img src={listing.image2} alt="" className="img-fluid" />
                        </a>
                        </div>
                            :''
                        }
                        {
                            listing.image3?
                        <div className="col-md-2">
                        <a href={listing.image3} data-lightbox="home-images">
                            <img src={listing.image3} alt="" className="img-fluid" />
                        </a>
                        </div>
                            :''
                        }
                                                {
                            listing.image4?
                        <div className="col-md-2">
                        <a href={listing.image4} data-lightbox="home-images">
                            <img src={listing.image4} alt="" className="img-fluid" />
                        </a>
                        </div>
                            :''
                        }
                    </div>
                    {/* Fields */}
                    <div className="row mb-5 fields">
                        <div className="col-md-6">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item text-secondary">
                            <i className="fas fa-money-bill-alt" /> Asking Price:
                            <span className="float-right">${listing.price}</span>
                            </li>
                            <li className="list-group-item text-secondary">
                            <i className="fas fa-bed" /> Bedrooms:
                            <span className="float-right">{listing.bedrooms}</span>
                            </li>
                            <li className="list-group-item text-secondary">
                            <i className="fas fa-bath" /> Bathrooms:
                            <span className="float-right">{listing.bathrooms}</span>
                            </li>
                            <li className="list-group-item text-secondary">
                            <i className="fas fa-car" /> Garage:
                            <span className="float-right">{listing.garage}
                            </span>
                            </li>
                        </ul>
                        </div>
                        <div className="col-md-6">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item text-secondary">
                            <i className="fas fa-th-large" /> Square Feet:
                            <span className="float-right">{listing.squareFeet}</span>
                            </li>
                            <li className="list-group-item text-secondary">
                            <i className="fas fa-square" /> Lot Size:
                            <span className="float-right">{listing.lotSize} Acres
                            </span>
                            </li>
                            <li className="list-group-item text-secondary">
                            <i className="fas fa-calendar" /> Listing Date:
                            <span className="float-right"> { moment(listing.createdAt).fromNow() } </span>
                            </li>
                            <li className="list-group-item text-secondary">
                            <i className="fas fa-bed" /> Realtor:
                            <span className="float-right">{listing.realtor}
                            </span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    {/* Description */}
                    <div className="row mb-5">
                        <div className="col-md-12">
                            {listing.discription}
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card mb-3">
                        {/* <img className="card-img-top" src="assets/img/realtors/kyle.jpg" alt="Seller of the month" /> */}
                        <div className="card-body">
                        <h5 className="card-title">Property Realtor</h5>
                        <h6 className="text-secondary">{listing.realtor}</h6>
                        </div>
                    </div>
                    <button className="btn-primary btn-block btn-lg" data-toggle="modal" data-target="#inquiryModal">Make An Inquiry</button>
                    </div>
                </div>
                </div>
            </section>
            {/* Inquiry Modal */}
            <div className="modal fade" id="inquiryModal" role="dialog">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="inquiryModalLabel">Make An Inquiry</h5>
                    <button type="button" className="close" data-dismiss="modal">
                        <span>×</span>
                    </button>
                    </div>
                    <div className="modal-body">
                    <form>
                        <div className="form-group">
                        <label htmlFor="property_name" className="col-form-label">Property:</label>
                        <input type="text" name="listing" className="form-control" defaultValue="45 Drivewood Cirlce" disabled />
                        </div>
                        <div className="form-group">
                        <label htmlFor="name" className="col-form-label">Name:</label>
                        <input type="text" name="name" className="form-control" required />
                        </div>
                        <div className="form-group">
                        <label htmlFor="email" className="col-form-label">Email:</label>
                        <input type="email" name="email" className="form-control" required />
                        </div>
                        <div className="form-group">
                        <label htmlFor="phone" className="col-form-label">Phone:</label>
                        <input type="text" name="phone" className="form-control" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="message" className="col-form-label">Message:</label>
                        <textarea name="message" className="form-control" defaultValue={""} />
                        </div>
                        <hr />
                        <input type="submit" defaultValue="Send" className="btn btn-block btn-secondary" />
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default SingleListing;