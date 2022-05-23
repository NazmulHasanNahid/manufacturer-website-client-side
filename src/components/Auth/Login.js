import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import auth from '../Auth/firebase.init';
import { sendPasswordResetEmail,  } from "firebase/auth";
import {useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth'
import Loading from '../Shared/Loading'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
     const { register, formState: { errors }, handleSubmit , getValues } = useForm();
     const [ signInWithEmailAndPassword,user,loading,error, ] = useSignInWithEmailAndPassword(auth);
     const navigate = useNavigate()
     const location = useLocation();
     let from = location.state?.from?.pathname || "/"; 
     let signinErrorMsg;
        
        const handleResetPassword = async () =>{
            const email = getValues("email");
            console.log('get values',email);
            if(email){
    
              await sendPasswordResetEmail(email)
              toast('Check Email Email')
            }else{
              toast.error('Please Enter Your Email Address')
            }
          }


        
        if(loading || gLoading){
           return <Loading/>
        }
        if(user || gUser){
          navigate(from,{replace:true})
        }
        if(error || gError){
            signinErrorMsg= <small><p className='text-red-500  my-3' >{error?.message || gError?.message }</p></small>
        }
        

        const onSubmit = data => {
            signInWithEmailAndPassword(data.email ,data.password)
           
            console.log('function',data.email);
        };
         
     return (
          <div>
                <div className='flex h-screen justify-center items-center'>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} >

                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email</span>
                   
                </label>
                <input type="Email"  placeholder="Your Email" className="input input-bordered w-full max-w-xs" {...register("email",  {
                                required:{
                                    value:true ,
                                    message:'Email is required'

                                },
                                pattern: {
                                    value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message:'provive e valid email'
                                }
                               })} />
                <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                 {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                   
                </label>
                </div>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Password</span>
                   
                </label>
                <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs" {...register("password",  {
                                required:{
                                    value:true ,
                                    message:'password is required'

                                },
                                minLength: {
                                    value:6,
                                    message:'Must be 6character or longer'
                                }
                               })} />
                <label className="label">
                 {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                 {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                   
                </label>
                </div>

                    
                    
                   
                    {signinErrorMsg}
                    <input className='btn  w-full max-w-xs'  type="submit" value="Login" />
                    <p><small>Don't Have an Account ?<Link className='text-primary' to="/signup">Create New Account</Link> </small></p>
                </form>
                <div className="divider">OR</div>
                    <p><small>Forgot Password?<button onClick={ handleResetPassword }  class="btn btn-xs btn-link">Reset Password</button></small></p>
                <button onClick={()=> signInWithGoogle()} className="btn btn-outline">Continue With Google</button>
            </div>
        </div>
        </div>
          </div>
     );
};

export default Login;