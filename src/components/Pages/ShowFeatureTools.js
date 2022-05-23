import React from "react";

const ShowFeatureTools = ({ tool }) => {
  console.log(tool);
  const { name, description, image, instock, perproduct, minimumorder, _id } =
    tool;
  return (
     <div class="card w-50 bg-base-100 shadow-xl ">
     <figure><img src={image} width="300px" alt="Shoes" /></figure>
     <div class="card-body">
     <div class="card-actions ">
         <div class="p-2 text-white bg-slate-700">Instock : {instock}</div> 
         <div class="p-2 text-white bg-slate-700">Perproduct : {perproduct}</div>
         <div class="p-2 text-white bg-slate-700">Minimum Order :  {minimumorder}</div>
       </div>
       <h2 class="card-title">
        {name}
        
       </h2>
       <p>{description.slice(0,90)}</p>
       <button class="btn">Book Now</button>

     </div>
   </div>
  );
};

export default ShowFeatureTools;
