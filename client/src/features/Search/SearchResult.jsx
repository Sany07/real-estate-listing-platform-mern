import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ListingCard from '../../components/ListingCard/ListingCard';
import Spinner from '../../components/Spinner/Spinner';
import { useSearchListingQuery } from '../Listings/listingSlice';

const SearchResult = () => {
  const [searchParams] = useSearchParams();
    const garage = searchParams.get('garage');
    const bedrooms = searchParams.get('bedrooms');
    console.log(garage);
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useSearchListingQuery({bedrooms,garage})

    if(isLoading){
      return (
          <Spinner/>
        )

  }else{
        console.log('error');
    }
    console.log(data.listing);
    const listings = data.listing

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


export default SearchResult;