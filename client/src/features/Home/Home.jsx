import React from 'react';
import Search from '../../components/SearchSection/Search';

const Home = () => {
    return (
        <>
            <Search/>
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