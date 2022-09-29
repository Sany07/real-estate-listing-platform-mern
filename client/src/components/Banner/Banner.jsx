import React from 'react';

const Banner = ({title,description}) => {
    return (
        <>
        <section id="showcase-inner" className="py-5 text-white">
        <div className="container">
            <div className="row text-center">
            <div className="col-md-12">
                <h1 className="display-4">{title}</h1>
                <p className="lead">{description}</p>
            </div>
            </div>
        </div>
        </section>
        </>
    );
};

export default Banner;