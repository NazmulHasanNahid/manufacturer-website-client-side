import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
     const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    const url = `http://localhost:5000/review`;
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
        toast('Your Review Added')
      });
  };
     return (
          <div>
               <div >
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Add Your Review</h2>
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
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                {...register("rating")}
                className="input input-bordered input-lg w-full max-w-xs"
              />
            </div>
            <div className="form-control  w-full max-w-xs">
              <label className="label">
                <span className="label-text">Review</span>
              </label>
              <textarea
                type="text"
                placeholder="Type here"
                {...register("review")}
                className="input input-bordered input-lg w-full max-w-xs"
              />
            </div>
            <div className="flex justify-center">

            <button type="submit" className="btn btn-wide mt-3">Add Review</button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
          </div>
     );
};

export default AddReview;