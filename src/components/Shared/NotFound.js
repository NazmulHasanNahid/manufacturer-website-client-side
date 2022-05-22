import React from "react";

const NotFound = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-8xl text-red-300 font-bold">404</h2>
          <p>Sorry This Page Doesn't Exist !!</p>

        </div>
      </div>
    </div>
  );
};

export default NotFound;
