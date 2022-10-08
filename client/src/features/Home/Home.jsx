import React from 'react';
import ListingCard from '../../components/ListingCard/ListingCard';
import Search from '../../components/SearchSection/Search';
import Spinner from '../../components/Spinner/Spinner';
import { useGetAllListingsQuery } from '../Listings/listingSlice';

const Home = () => {
    const {
        data: listings,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetAllListingsQuery('getListings')

    return (
        <>
            <Search/>
            <div className="container">
                <h3 className="text-center mb-3">Latest Listings</h3>
                <div className="row">
                { isLoading ? <Spinner/> :

                    listings?.listings.map((listing, id ) => {
                        return (console.log(id),
                        id <3?
                        <ListingCard key={listing.id} listing={listing}/>:''
                        )
                    })
                }
                    </div>
                </div>
            <section id="services" className="py-5 bg-secondary text-white">
                <div className="container">
                <div className="row text-center">
                <div className="col-md-4">
                    <i className="fas fa-comment fa-4x mr-4" />
                    <hr />
                    <h3>Consulting Services</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis nam! Repudiandae, provident iste consequatur
                    hic dignissimos ratione ea quae.</p>
                </div>
                <div className="col-md-4">
                    <i className="fas fa-home fa-4x mr-4" />
                    <hr />
                    <h3>Propery Management</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis nam! Repudiandae, provident iste consequatur
                    hic dignissimos ratione ea quae.</p>
                </div>
                <div className="col-md-4">
                    <i className="fas fa-suitcase fa-4x mr-4" />
                    <hr />
                    <h3>Renting &amp; Selling</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis nam! Repudiandae, provident iste consequatur
                    hic dignissimos ratione ea quae.</p>
                </div>
                </div>
                </div>
            </section>
        </>
    );
};

export default Home;