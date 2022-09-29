import React from 'react';

const Nav = () => {
    return (
        <>
        {/* Top Bar */}
        <section id="top-bar" className="p-3">
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                <i className="fas fa-phone" /> (617)-555-5555
                </div>
                <div className="col-md-4">
                <i className="fas fa-envelope-open" /> contact@btrealestate.co
                </div>
                <div className="col-md-4">
                <div className="social text-right">
                    <a href="#">
                    <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                    <i className="fab fa-facebook" />
                    </a>
                    <a href="#">
                    <i className="fab fa-linkedin" />
                    </a>
                    <a href="#">
                    <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                    <i className="fab fa-pinterest" />
                    </a>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
            <div className="container">
            <a className="navbar-brand" href="index.html">
                <img src="assets/img/logo.png" className="logo" alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav">
                <li className="nav-item active mr-3">
                    <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item mr-3">
                    <a className="nav-link" href="about.html">About</a>
                </li>
                <li className="nav-item mr-3">
                    <a className="nav-link" href="listings.html">Featured Listings</a>
                </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-3">
                    <a className="nav-link" href="register.html">
                    <i className="fas fa-user-plus" /> Register</a>
                </li>
                <li className="nav-item mr-3">
                    <a className="nav-link" href="login.html">
                    <i className="fas fa-sign-in-alt" />
                    Login</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
                
        </>
    );
};

export default Nav; 

