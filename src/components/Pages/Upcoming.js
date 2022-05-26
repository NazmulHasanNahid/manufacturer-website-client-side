import React from "react";
import i1 from '../../aset/img/i1.jpg'
import i2 from '../../aset/img/i2.jpg'
import i3 from '../../aset/img/i3.jpg'
import i4 from '../../aset/img/i4.jpg'
import i5 from '../../aset/img/i5.jpg'


const Upcoming = () => {
  return (
    <div className="my-10">
      <h3 className="text-center sm:text-1xl font-bold  text-3xl">Meet Our Engineears <br /> __________</h3>
      <div class="hero  my-10">
        <div class="hero-content flex-col lg:flex-row grid sm:grid-cols-1 lg:grid-cols-5 gap-10" >
          <div class="avatar ">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={i1} alt="loading.." />
            </div>
          </div>
          <div class="avatar ">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={i2} alt="loading.." />
            </div>
          </div>
          <div>
            <div class="avatar ">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={i3} alt="loading.." />
              </div>
            </div>
          </div>
          <div>
            <div class="avatar ">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={i4} alt="loading.." />
              </div>
            </div>
            
          </div>
          <div>
            <div class="avatar ">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={i5} alt="loading.." />
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
