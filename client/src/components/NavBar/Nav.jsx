import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userLoggedOut } from '../../features/Account/authSlice';

const Nav = () => {

    const { email } = useSelector((state) => state.auth) || {};
  
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // handle logout
    const handleLogout = () => {
      dispatch(userLoggedOut());
      toast.success("Logout Successfull",{toastId: 1})
      navigate('login')
    };

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
                    <a to="#">
                    <i className="fab fa-twitter" />
                    </a>
                    <a to="#">
                    <i className="fab fa-facebook" />
                    </a>
                    <a to="#">
                    <i className="fab fa-linkedin" />
                    </a>
                    <a to="#">
                    <i className="fab fa-instagram" />
                    </a>
                    <a to="#">
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
            <Link to="/" className="navbar-brand" href="index.html">
                <img src="assets/img/logo.png" className="logo" alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav">
                <li className="nav-item mr-3">
                <NavLink to="/" className="nav-link" end
                >Home</NavLink>
                </li>
                <li className="nav-item mr-3">
                    <NavLink to="about" className="nav-link">About</NavLink>
                </li>
                <li className="nav-item mr-3">
                    <NavLink to="listings" className="nav-link">Featured Listings</NavLink>
                </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                {
                    email ? <>
                    <li className="nav-item mr-3">
                        <NavLink className="nav-link">
                        <i className="fas fa-user-plus" /> {email}</NavLink>
                    </li>
                    <li className="nav-item mr-3">
                        <NavLink className="nav-link" >
                        <i className="fas fa-user-plus" /> Dashboard</NavLink>
                    </li>
                    <li className="nav-item mr-3"  onClick={handleLogout}>
                        <NavLink className="nav-link">
                        <i className="fas fa-sign-in-alt" /> Logout</NavLink>
                    </li>
                    </>
                    :
                    <>
                        <li className="nav-item mr-3">
                            <NavLink className="nav-link" to="register">
                            <i className="fas fa-user-plus" /> Register</NavLink>
                        </li>
                        <li className="nav-item mr-3">
                            <NavLink className="nav-link" to="login">
                            <i className="fas fa-sign-in-alt" /> Login</NavLink>
                        </li>
                    </>
                }
                </ul>
            </div>
            </div>
        </nav>
                
        </>
    );
};

export default Nav; 

