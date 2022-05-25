import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../Auth/firebase.init';
import LoadProfile from './LoadProfile';

const Myprofile = () => {
     const [user] = useAuthState(auth)
     const { register, handleSubmit } = useForm();
     const onSubmit = (data, e) => {
       const url = `http://localhost:5000/profile`;
       fetch(url, {
         method: "POST",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(data),
       })
         .then((res) => res.json())
         .then((result) => {
           e.target.reset();
           toast('toast added')
          
         });
     };






     return (
          <div>
               <div >
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">My Profile</h2>
          <LoadProfile/>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
                
              </label>
              <input
                type="text"
                placeholder="Type here"
                {...register("name", { required: true })}
                className="input input-bordered  w-full max-w-xs"
                value={user?.displayName}
                readOnly
              />
            </div>
            
            <div className="form-control  w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                value={user?.email}
                placeholder="Type here"
                {...register("email")}
                readOnly
                className="input input-bordered input-lg w-full max-w-xs"
              />
            </div>
            <div className="form-control  w-full max-w-xs">
              <label className="label">
                <span className="label-text">Education</span>
              </label>
              <textarea
                type="text"
                placeholder="Type here"
                {...register("education")}
                className="input input-bordered input-lg w-full max-w-xs"
              />
            </div>
            <div className="flex justify-center">

            <button type="submit" className="btn btn-wide mt-3">Update </button>
            </div>
          </form>
         
        </div>
      </div>
      
    </div>
          </div>
     );
};

export default Myprofile;