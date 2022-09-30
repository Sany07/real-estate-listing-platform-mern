import React from 'react';
import Banner from '../../components/Banner/Banner';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ListingCard from '../../components/ListingCard/ListingCard';
import Spinner from '../../components/Spinner/Spinner';
import { useGetAllListingsQuery } from './listingSlice';



const Listings = () => {
    
    const {
        data: listings,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetAllListingsQuery('getListings')
    if(isLoading){
      return (
          <Spinner/>
        )

  }else{
        console.log(listings);
    }
    return (
        <>
        
        <Banner title={'Browse Our Properties'} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, pariatur!"}/>
            <Breadcrumb title={"Listings"}/>
            <section id="listings" className="py-4">
            <div className="container">
    <div className="row">
      {/* Listing 1 */}
      {listings.map(listing => <ListingCard key={listing.id} listing={listing}/>)}
   
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