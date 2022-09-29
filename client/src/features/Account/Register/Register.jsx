import React from 'react';

const Register = () => {
    return (
        <>
         <section id="register" className="bg-light py-5">
  <div className="container">
    <div className="row">
      <div className="col-md-6 mx-auto">
        <div className="card">
          <div className="card-header bg-primary text-white">
            <h4>
              <i className="fas fa-user-plus" /> Register</h4>
          </div>
          <div className="card-body">
            <form action="index.html">
              <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input type="text" name="first_name" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input type="text" name="last_name" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="password2">Password</label>
                <input type="password" name="password" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Confirm Password</label>
                <input type="password" name="password2" className="form-control" required />
              </div>
              <input type="submit" defaultValue="Register" className="btn btn-secondary btn-block" />
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

export default Register;