import React from 'react';
import Banner from './Banner';
import Category from './Category';
import FeatureTools from './FeatureTools';
import Reviews from './Reviews';
import Summary from './Summary';
import './Banner.css'

const Home = () => {
     return (
          <div className='max-w-7xl mx-auto'>
              <Banner/>
              <Category/>
              <FeatureTools/>
              <Summary/>
              <Reviews/>
              
          </div>
     );
};

export default Home;