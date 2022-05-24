import React from 'react';
import bannerImg from '../../aset/img/bannerImg.jpg'

const Banner = () => {
     return (
          <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" alt='loading'  />
              <div>
                  <h1 className="text-3xl font-bold ">We are the Quality Hand tools Manufacturer</h1>
                  <p className="py-6">We offers Engineering Excellence for the world’s most demanding industries. Our Tools range includes Industrial Tools, Precision Tools, Cutting Tools, Air Tools and Lubrication tools etc. As a Leader in Tools Manufacturing Industry, we always focus on Quality and customer satisfaction Which makes us different from other Tools Manufacturing Companies.


Cutting Tools
</p>
                  
              </div>
          </div>
      </div>
     );
};

export default Banner;