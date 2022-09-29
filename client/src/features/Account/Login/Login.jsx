import React from 'react';

const Login = () => {
    return (
        <>
            <section id="login" className="bg-light py-5">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h4>
                            <i className="fas fa-sign-in-alt" /> Login</h4>
                        </div>
                        <div className="card-body">
                            <form action="index.html">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password2">Password</label>
                                <input type="password" name="password" className="form-control" required />
                            </div>
                            <input type="submit" defaultValue="Login" className="btn btn-secondary btn-block" />
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

        </>
    );
};

export default Login;