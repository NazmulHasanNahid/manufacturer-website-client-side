import React from "react";

const MyPortfolio = () => {
  return (
  
    <div className="hero min-h-screen  bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="">
          <div className="card   bg-base-100 shadow-xl ">
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl">Nazmul Hasan Nahid</h2>
              <p>Email: nhnahid.work@gmail.com</p> <hr />
              <h4 className="font-bold">Educational Background </h4>
              <p>HSC CANDIDATE 2022</p>
              <li> Lalmai Govt college</li>
              <li>Lalmai , Comilla</li>
              <p>SSC PASSED 2020</p>
              <li> Jorpukuria High School</li>
              <li>Barura , Cumilla</li>
              <hr />
            </div>
          </div>
        </div>
        <div>
          <div className="">
            <div className="card   bg-base-100 shadow-xl ">
              <div className="card-body">
                <h2 className="card-title font-bold text-1xl">MY SKILLS</h2> <hr />
                <li>
                  
                  <span className="font-bold">Expertise</span> : HTML5, CSS,
                  JavaScript (ES6), React.js, React Query , React Hook Form , React Slick , React Toastify , React Icons, Bootstrap,React Bootsrap , Tailwind, R Daisy Ui ,
                  Express JS, Node JS, MongoDB.
                </li>
                <li>
                  
                  <span className="font-bold">Tools And Software</span> : VS
                  code , Firebase , Yarn , Npm,Git , Github , Netlify , Heroku
                  ,Figma , Dev tools.
                </li>
               
                <hr />
                <li className=" font-bold">Language</li>
                <li>Bangla , English</li>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="card   bg-base-100 shadow-xl ">
              <div className="card-body">
                <h2 className="card-title font-bold text-1xl">Some Projects Overview</h2> <hr />
                <li>
                  
                  <span className="font-bold">Expertise</span> : HTML5, CSS,
                  JavaScript (ES6), React.js, React Query , React Hook Form , React Slick , React Toastify , React Icons, Bootstrap,React Bootsrap , Tailwind, R Daisy Ui ,
                  Express JS, Node JS, MongoDB.
                </li>
                <li>
                  
                  <span className="font-bold">Tools And Software</span> : VS
                  code , Firebase , Yarn , Npm,Git , Github , Netlify , Heroku
                  ,Figma , Dev tools.
                </li>
               
                <hr />
                <li className=" font-bold">Language</li>
                <li>Bangla , English</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default MyPortfolio;
