import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../Auth/firebase.init";

const ToolsDetail = () => {
  const { id } = useParams();
  const [user, loading, error] = useAuthState(auth);
  const { register, handleSubmit } = useForm();

  const [tools, setTools] = useState({});
  const { name, description, image, instock, perproduct, minimumorder } = tools;
  useEffect(() => {
    const url = `http://localhost:5000/tools/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, [id]);
  

  const onSubmit = (data, e) => {
    const url = `http://localhost:5000/order`;
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
        toast("Category added");
      });
    
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 flex  items-center my-5">
    
      <div class="card lg:card-side bg-base-100   shadow-xl">
        <figure>
          <img width="400px" src={image}  alt="loading"/>
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <div class="card-actions ">
            <div class="p-2 text-white bg-slate-700">Instock : {instock}</div>
            <div class="p-2 text-white bg-slate-700">
              Perproduct : {perproduct}
            </div>
            <div class="p-2 text-white bg-slate-700">
              Minimum Order : {minimumorder}
            </div>
          </div>
          <div class="card-actions justify-start">
          </div>
        </div>
      </div>
      
    
    <div>
    <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Fill Up The Form</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                
                
                <input type="text" readOnly placeholder="Your Name" value={user?.displayName} className="input  input-bordered w-full max-w-xs"  {...register("name", { required: true })}/>
                
                </div>
                <div className="form-control w-full max-w-xs">
                <input type="email" readOnly placeholder="Your Email" value={user?.email} className="input my-3 input-bordered w-full max-w-xs"  {...register("email", { required: true })} />
                
                </div>
                <div className="form-control w-full max-w-xs">
                <input type="number"   className="input my-3 input-bordered w-full max-w-xs" placeholder="Phone number"  {...register("phonenumber", { required: true })} />
                
                </div>
                <div className="form-control my-3 w-full max-w-xs">
              
                <input type="text"  placeholder="Adress" className="input input-bordered w-full max-w-xs"  {...register("address", { required: true })}/>
                
                </div>
                <div className="form-control my-3 w-full max-w-xs">
                
                <input type="number" placeholder="Quanttity" className="input input-bordered w-full max-w-xs"  {...register("qunatity", { required: true })}/>
                
                </div>

                    
                    
                    
                    <input className='btn  w-full max-w-xs'  type="submit" value="Order" />
                </form>
                
                
            </div>
        </div>
    </div>
    </div>
  );
};

export default ToolsDetail;
