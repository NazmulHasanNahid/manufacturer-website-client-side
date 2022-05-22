import React from 'react';
import { useCreateUserWithEmailAndPassword,  useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import auth from './firebase.init';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [ createUserWithEmailAndPassword, user, loading, error, ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    
    const onSubmit = async data => {
        await  createUserWithEmailAndPassword(data.email , data.password)
        await updateProfile({displayName:data.name})
        
    };
    if(user){
        console.log(user);
    }
    
       let signinErrorMsg;
       if(loading || gLoading){
          return <Loading/>
       }
       if(error || gError || updateError){
           signinErrorMsg= <small><p className='text-red-500  my-3' >{error?.message || gError?.message }</p></small>
       }

     return (
          <div className='flex h-screen justify-center items-center'>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)} >

                <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Name</span>
                   
                </label>
                <input type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs" {...register("name",  {
                                required:{
                                    value:true ,
                                    message:'Name is required'

                                }
                               })} />
                <label class="label">
                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                
                   
                </label>
                </div>
                <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Email</span>
                   
                </label>
                <input type="Email" placeholder="Your Email" class="input input-bordered w-full max-w-xs" {...register("email",  {
                                required:{
                                    value:true ,
                                    message:'Email is required'

                                },
                                pattern: {
                                    value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message:'provive e valid email'
                                }
                               })} />
                <label class="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                 {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                   
                </label>
                </div>
                <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Password</span>
                   
                </label>
                <input type="password" placeholder="password" class="input input-bordered w-full max-w-xs" {...register("password",  {
                                required:{
                                    value:true ,
                                    message:'password is required'

                                },
                                minLength: {
                                    value:6,
                                    message:'Must be 6character or longer'
                                }
                               })} />
                <label class="label">
                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                 {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                   
                </label>
                </div>

                    
                    
                   
                    {signinErrorMsg}
                    <input className='btn  w-full max-w-xs mt-5'  type="submit" value="Sign Up" />
                    <p><small>Already Have an account? <Link className='text-primary' to="/login">Please Login</Link> </small></p>
                </form>
                <div className="divider">OR</div>
                <button onClick={()=> signInWithGoogle()} className="btn btn-outline">Continue With Google</button>
            </div>
        </div>
        </div>
     );
};

export default SignUp;