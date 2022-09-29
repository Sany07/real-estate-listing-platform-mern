import React from 'react';

const Banner = ({title,description}) => {
    return (
        <>
            <section id="showcase-inner" classname="py-5 text-white">
            <div classname="container">
                <div classname="row text-center">
                <div classname="col-md-12">
                    <h1 classname="display-4">{title}</h1>
                    <p classname="lead">{description}</p>
                </div>
                </div>
            </div>
            </section>

        </>
    );
};

export default Banner;