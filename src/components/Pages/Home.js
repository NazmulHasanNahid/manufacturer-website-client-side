import React from 'react';
import Banner from './Banner';
import FeatureTools from './FeatureTools';
import Reviews from './Reviews';
import Summary from './Summary';

const Home = () => {
     return (
          <div className=''>
              <Banner/>
              <FeatureTools/>
              <Reviews/>
              <Summary/>
          </div>
     );
};

export default Home;