import React from 'react';

const Breadcrumb = ({title}) => {
    return (
        <>
         {/* Breadcrumb */}
            <section id="bc" className="mt-3">
            <div className="container">
                <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                    <a href="index.html">
                        <i className="fas fa-home" /> Home</a>
                    </li>
                    <li className="breadcrumb-item active">{title}</li>
                </ol>
                </nav>
            </div>
            </section>
   
        </>
    );
};

export default Breadcrumb;