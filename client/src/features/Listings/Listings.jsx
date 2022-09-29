import React from 'react';
import Banner from '../../components/Banner/Banner';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

const Listings = () => {
    return (
        <>
            <Banner title={"Browse Our Properties"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, pariatur!"} />
            <Breadcrumb title={"Browse Listings"}/>
            <section id="listings" className="py-4">
  <div className="container">
    <div className="row">
      {/* Listing 1 */}
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
              <h4 className="text-primary">45 Drivewood Circle</h4>
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
      {/* Listing 2 */}
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card listing-preview">
          <img className="card-img-top" src="assets/img/homes/home-2.jpg" alt="" />
          <div className="card-img-overlay">
            <h2>
              <span className="badge badge-secondary text-white">$550,000</span>
            </h2>
          </div>
          <div className="card-body">
            <div className="listing-heading text-center">
              <h4 className="text-primary">18 Jefferson Lane</h4>
              <p>
                <i className="fas fa-map-marker text-secondary" /> Woburn MA, 01801</p>
            </div>
            <hr />
            <div className="row py-2 text-secondary">
              <div className="col-6">
                <i className="fas fa-th-large" /> Sqft: 3200</div>
              <div className="col-6">
                <i className="fas fa-car" /> Garage: 1</div>
            </div>
            <div className="row py-2 text-secondary">
              <div className="col-6">
                <i className="fas fa-bed" /> Bedrooms: 4</div>
              <div className="col-6">
                <i className="fas fa-bath" /> Bathrooms: 2.5</div>
            </div>
            <hr />
            <div className="row py-2 text-secondary">
              <div className="col-6">
                <i className="fas fa-user" /> Mark Hudson</div>
            </div>
            <div className="row text-secondary pb-2">
              <div className="col-6">
                <i className="fas fa-clock" /> 5 days ago</div>
            </div>
            <hr />
            <a href="listing.html" className="btn btn-primary btn-block">More Info</a>
          </div>
        </div>
      </div>
      {/* Listing 3 */}
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card listing-preview">
          <img className="card-img-top" src="assets/img/homes/home-3.jpg" alt="" />
          <div className="card-img-overlay">
            <h2>
              <span className="badge badge-secondary text-white">$580,000</span>
            </h2>
          </div>
          <div className="card-body">
            <div className="listing-heading text-center">
              <h4 className="text-primary">187 Woodrow Street</h4>
              <p>
                <i className="fas fa-map-marker text-secondary" /> Salem MA, 01915</p>
            </div>
            <hr />
            <div className="row py-2 text-secondary">
              <div className="col-6">
                <i className="fas fa-th-large" /> Sqft: 3107</div>
              <div className="col-6">
                <i className="fas fa-car" /> Garage: 0</div>
            </div>
            <div className="row py-2 text-secondary">
              <div className="col-6">
                <i className="fas fa-bed" /> Bedrooms: 4</div>
              <div className="col-6">
                <i className="fas fa-bath" /> Bathrooms: 3</div>
            </div>
            <hr />
            <div className="row py-2 text-secondary">
              <div className="col-6">
                <i className="fas fa-user" /> Mark Hudson</div>
            </div>
            <div className="row text-secondary pb-2">
              <div className="col-6">
                <i className="fas fa-clock" /> 5 days ago</div>
            </div>
            <hr />
            <a href="listing.html" className="btn btn-primary btn-block">More Info</a>
          </div>
        </div>
      </div>
      {/* Listing 4 */}
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card listing-preview">
          <img className="card-img-top" src="assets/img/homes/home-4.jpg" alt="" />
          <div className="card-img-overlay">
            <h2>
              <span className="badge badge-secondary text-white">$380,000</span>
            </h2>
          </div>
          <div className="card-body">
            <div className="listing-heading text-center">
              <h4 className="text-primary">28 Gifford Street</h4>
              <p>
                <i className="fas fa-map-marker text-secondary" /> Bedford NH, 03103</p>
            </div>
            <hr />
            <div className="row py-2 text-secondary">
              <div className="col-6">
                <i className="fas fa-th-large" /> Sqft: 2927</div>
              <div className="col-6">
                <i className="fas fa-car" /> Garage: 2</div>
            </div>
            <div className="row py-2 text-secondary">
              <div className="col-6">
                <i className="fas fa-bed" /> Bedrooms: 4</div>
              <div className="col-6">
                <i className="fas fa-bath" /> Bathrooms: 2</div>
            </div>
            <hr />
            <div className="row py-2 text-secondary">
              <div className="col-6">
                <i className="fas fa-user" /> Jenny Johnson</div>
            </div>
            <div className="row text-secondary pb-2">
              <div className="col-6">
                <i className="fas fa-clock" /> 5 days ago</div>
            </div>
            <hr />
            <a href="listing.html" className="btn btn-primary btn-block">More Info</a>
          </div>
        </div>
      </div>
      {/* Listing 5 */}
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card listing-preview">
          <img className="card-img-top" src="assets/img/homes/home-5.jpg" alt="" />
          <div className="card-img-overlay">
            <h2>
              <span className="badge badge-secondary text-white">$230,000</span>
            </h2>
          </div>
          <div className="card-body">
            <div className="listing-heading text-center">
              <h4 className="text-primary">12 United Road</h4>
              <p>
                <i className="fas fa-map-marker text-secondary" /> South Hampton NH, 03827</p>
            </div>
            <hr />
            <div className="row py-2 text-secondary">
              <div className="col-6">
                <i className="fas fa-th-large" /> Sqft: 2207</div>
              <div className="col-6">
                <i className="fas fa-car" /> Garage: 1</div>
            </div>
            <div className="row py-2 text-secondary">
              <div className="col-6">
                <i className="fas fa-bed" /> Bedrooms: 3</div>
              <div className="col-6">
                <i className="fas fa-bath" /> Bathrooms: 1.5</div>
            </div>
            <hr />
            <div className="row py-2 text-secondary">
              <div className="col-6">
                <i className="fas fa-user" /> Kyle Brown</div>
            </div>
            <div className="row text-secondary pb-2">
              <div className="col-6">
                <i className="fas fa-clock" /> 5 days ago</div>
            </div>
            <hr />
            <a href="listing.html" className="btn btn-primary btn-block">More Info</a>
          </div>
        </div>
      </div>
      {/* Listing 6 */}
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card listing-preview">
          <img className="card-img-top" src="assets/img/homes/home-6.jpg" alt="" />
          <div className="card-img-overlay">
            <h2>
              <span className="badge badge-secondary text-white">$780,000</span>
            </h2>
          </div>
          <div className="card-body">
            <div className="listing-heading text-center">
              <h4 className="text-primary">33 Essex Circle</h4>
              <p>
                <i className="fas fa-map-marker text-secondary" /> Lexington MA, 01731</p>
            </div>
            <hr />
            <div className="row py-2 text-secondary">
              <div className="col-6">
                <i className="fas fa-th-large" /> Sqft: 4145</div>
              <div className="col-6">
                <i className="fas fa-car" /> Garage: 1</div>
            </div>
            <div className="row py-2 text-secondary">
              <div className="col-6">
                <i className="fas fa-bed" /> Bedrooms: 5</div>
              <div className="col-6">
                <i className="fas fa-bath" /> Bathrooms: 3.5</div>
            </div>
            <hr />
            <div className="row py-2 text-secondary">
              <div className="col-6">
                <i className="fas fa-user" /> Kyle Brown</div>
            </div>
            <div className="row text-secondary pb-2">
              <div className="col-6">
                <i className="fas fa-clock" /> 5 days ago</div>
            </div>
            <hr />
            <a href="listing.html" className="btn btn-primary btn-block">More Info</a>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <ul className="pagination">
          <li className="page-item disabled">
            <a className="page-link" href="#">«</a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">1</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">2</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">3</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">»</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
            </section>
        </>
    );
};

export default Listings;