import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const ShowFeatureTools = ({ tool }) => {
 
  const { name, description, image, instock, perproduct, minimumorder, _id } =
    tool;
  return (
    <div className="card-container g-3 col-sm-12 col-md-6 col-lg-3">
      <div className="card item-cart bg-base-100 ">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            <small>{description.slice(0, 90)}</small>
          </p>
          <div>
            <h5>
              {" "}
              Price : <span className="font-bold">{perproduct}$</span>
            </h5>
            <div className="d-flex justify-content-between">
              <p>
                <small>
                  Stock :{" "}
                  <span className="text-orange-500 font-bold">{instock}p</span>
                </small>
              </p>
              <p>
                <small>
                  Minimum Order :{" "}
                  <span className="text-orange-500 font-bold">
                    {" "}
                    {minimumorder}p
                  </span>
                </small>
              </p>
            </div>
          </div>
          <div className="card-actions d-flex justify-content-center mt-3">
            <Link to={`toolsdetail/${_id}`}>
              <button className="btn">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowFeatureTools;
