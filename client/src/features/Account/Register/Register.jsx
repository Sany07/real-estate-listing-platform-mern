import React from 'react';
import { useForm } from 'react-hook-form';
import { FallingLines } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { useSignupUserMutation } from '../authApi';

const Register = () => {
  const { register, handleSubmit, reset, formState: { errors }  } = useForm();

  const [signupUser,{data,isLoading,isSuccess,isError,error}] = useSignupUserMutation()

  if(isSuccess){     
    toast.success(data.message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    toastId: "success1",
  })}
  else if(error){
    console.log(error.data.message);
    toast.error(error.data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: "success1",
    })
  }
  

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
          <form onSubmit={handleSubmit((data) => {
                                console.log({data});
                                signupUser(data);

                            })}>
              <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input type="text" {...register("first_name")} className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input type="text" {...register("last_name")} className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" {...register("username")} className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" {...register("email")} className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" {...register("password")} className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input type="password" {...register("password2")} className="form-control" required />
              </div>
              {
                            isLoading ?
                            <div className="text-center btn btn-secondary btn-block">
                                <FallingLines
                                color="white"
                                width="20"
                                visible={true}
                                ariaLabel='falling-lines-loading'
                            />
                            </div>
                            : 
                            <input type="submit" value="Register" className="btn btn-secondary btn-block " />
                        
                            }
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