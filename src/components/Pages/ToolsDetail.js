import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ToolsDetail = () => {
  const { id } = useParams();
  const [tools, setTools] = useState({});
  const { name, description, image, instock, perproduct, minimumorder } = tools;
  useEffect(() => {
    const url = `http://localhost:5000/tools/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, [id]);
  return (
    <div className="flex h-screen justify-center items-center px-20">
      <div class="card lg:card-side bg-base-100 flex justify-center items-center px-20 shadow-xl">
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
          <button class="btn">Buy Now </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsDetail;
