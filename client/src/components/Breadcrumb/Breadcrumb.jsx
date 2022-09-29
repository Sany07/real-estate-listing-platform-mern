import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({title}) => {
    return (
        <>
         {/* Breadcrumb */}
            <section id="bc" className="mt-3">
            <div className="container">
                <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                    <Link to="/">
                        <i className="fas fa-home" />Home</Link>
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