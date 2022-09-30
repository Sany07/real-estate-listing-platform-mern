import React from 'react';
import { useParams } from 'react-router-dom';

const SingleListing = () => {
    const { id } = useParams();
    return (
        <>
            {/* Listing */}
            <section id="listing" className="py-4">
                <div className="container">
                <a href="listings.html" className="btn btn-light mb-4">Back To Listings</a>
                <div className="row">
                    <div className="col-md-9">
                    {/* Home Main Image */}
                    <img src="assets/img/homes/home-1.jpg" alt="" className="img-main img-fluid mb-3" />
                    {/* Thumbnails */}
                    <div className="row mb-5 thumbs">
                        <div className="col-md-2">
                        <a href="assets/img/homes/home-inside-1.jpg" data-lightbox="home-images">
                            <img src="assets/img/homes/home-inside-1.jpg" alt="" className="img-fluid" />
                        </a>
                        </div>
                        <div className="col-md-2">
                        <a href="assets/img/homes/home-inside-2.jpg" data-lightbox="home-images">
                            <img src="assets/img/homes/home-inside-2.jpg" alt="" className="img-fluid" />
                        </a>
                        </div>
                        <div className="col-md-2">
                        <a href="assets/img/homes/home-inside-3.jpg" data-lightbox="home-images">
                            <img src="assets/img/homes/home-inside-3.jpg" alt="" className="img-fluid" />
                        </a>
                        </div>
                        <div className="col-md-2">
                        <a href="assets/img/homes/home-inside-4.jpg" data-lightbox="home-images">
                            <img src="assets/img/homes/home-inside-4.jpg" alt="" className="img-fluid" />
                        </a>
                        </div>
                        <div className="col-md-2">
                        <a href="assets/img/homes/home-inside-5.jpg" data-lightbox="home-images">
                            <img src="assets/img/homes/home-inside-5.jpg" alt="" className="img-fluid" />
                        </a>
                        </div>
                        <div className="col-md-2">
                        <a href="assets/img/homes/home-inside-6.jpg" data-lightbox="home-images">
                            <img src="assets/img/homes/home-inside-6.jpg" alt="" className="img-fluid" />
                        </a>
                        </div>
                    </div>
                    {/* Fields */}
                    <div className="row mb-5 fields">
                        <div className="col-md-6">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item text-secondary">
                            <i className="fas fa-money-bill-alt" /> Asking Price:
                            <span className="float-right">$490,000</span>
                            </li>
                            <li className="list-group-item text-secondary">
                            <i className="fas fa-bed" /> Bedrooms:
                            <span className="float-right">3</span>
                            </li>
                            <li className="list-group-item text-secondary">
                            <i className="fas fa-bath" /> Bathrooms:
                            <span className="float-right">2</span>
                            </li>
                            <li className="list-group-item text-secondary">
                            <i className="fas fa-car" /> Garage:
                            <span className="float-right">2
                            </span>
                            </li>
                        </ul>
                        </div>
                        <div className="col-md-6">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item text-secondary">
                            <i className="fas fa-th-large" /> Square Feet:
                            <span className="float-right">3200</span>
                            </li>
                            <li className="list-group-item text-secondary">
                            <i className="fas fa-square" /> Lot Size:
                            <span className="float-right">2.5 Acres
                            </span>
                            </li>
                            <li className="list-group-item text-secondary">
                            <i className="fas fa-calendar" /> Listing Date:
                            <span className="float-right">8/30/2018</span>
                            </li>
                            <li className="list-group-item text-secondary">
                            <i className="fas fa-bed" /> Realtor:
                            <span className="float-right">Kyle Brown
                            </span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    {/* Description */}
                    <div className="row mb-5">
                        <div className="col-md-12">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia recusandae esse reiciendis officia omnis non rerum dicta
                        cupiditate nostrum molestias deserunt aut minus inventore animi atque, consequuntur ad fugit. Possimus culpa
                        blanditiis repellendus ipsa similique ullam, natus error dolor harum.
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card mb-3">
                        <img className="card-img-top" src="assets/img/realtors/kyle.jpg" alt="Seller of the month" />
                        <div className="card-body">
                        <h5 className="card-title">Property Realtor</h5>
                        <h6 className="text-secondary">Kyle Brown</h6>
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