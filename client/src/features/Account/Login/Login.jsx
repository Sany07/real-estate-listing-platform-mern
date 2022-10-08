import React from 'react';
import { useForm } from 'react-hook-form';
import { FallingLines } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import Spinner from '../../../components/Spinner/Spinner';
import { useSigninUserMutation } from '../authApi';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors }  } = useForm();

    const [signinUser,{data,isLoading,isSuccess,isError,error}] = useSigninUserMutation()


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
                            <form onSubmit={handleSubmit((data) => {
                                console.log({data});
                                signinUser(data);

                            })}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input {...register("email")} type="text"  className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password2">Password</label>
                                <input type="password" {...register("password")}  className="form-control" required />
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
                            <input type="submit" value="Login" className="btn btn-secondary btn-block " />
                        
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

export default Login;