import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddTools = () => {
     const { register, handleSubmit } = useForm();
     const onSubmit = (data, e) => {
       const url = `https://gentle-earth-60406.herokuapp.com/tools`;
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
           toast('Your Tools Added')
         });
   
     };
     return (
         
              
      <div className="card w-96  bg-base-100 shadow-xl ">
        <div className="card-body p-30">
          <h2 className="text-center text-2xl font-bold">Add New products</h2>
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
              />
            </div>
            
            <div className="form-control  w-full max-w-xs">
              <label className="label">
                <span className="label-text">Img Url</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                {...register("image")}
                className="input input-bordered input-lg w-full max-w-xs"
              />
            </div>
            <div className="form-control  w-full max-w-xs">
              <label className="label">
                <span className="label-text">per-product Price</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                {...register("perproduct")}
                className="input input-bordered input-lg w-full max-w-xs"
              />
            </div>
            <div className="form-control  w-full max-w-xs">
              <label className="label">
                <span className="label-text">instock</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                {...register("instock")}
                className="input input-bordered input-lg w-full max-w-xs"
              />
            </div>
            <div className="form-control  w-full max-w-xs">
              <label className="label">
                <span className="label-text">Minimum Order</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                {...register("minimumorder")}
                className="input input-bordered input-lg w-full max-w-xs"
              />
            </div>
            <div className="form-control  w-full max-w-xs">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                type="text"
                placeholder="Type here"
                {...register("description")}
                className="input input-bordered input-lg w-full max-w-xs"
              />
            </div>
            <div className="flex justify-center">

            <button type="submit" className="btn btn-wide mt-3">Add Products</button>
            </div>
          </form>
        </div>
      </div>
      
    
        
     );
};

export default AddTools;