import React from "react";

const NotFound = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-8xl text-red-300 font-bold text-center">404</h2>
          <p className="text-center">Sorry This Page Doesn't Exist !!</p>

        </div>
      </div>
    </div>
  );
};

export default NotFound;
