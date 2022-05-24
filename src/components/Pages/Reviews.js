import React, { useEffect, useState } from 'react';
import {  useQuery } from 'react-query'
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';

import ShowReview from './ShowReview';

const Reviews = () => {
     const { isLoading, error, data:reviews } = useQuery('repoData', () =>
     fetch('http://localhost:5000/reviews').then(res =>
       res.json()
     )
   ) 
   if(isLoading){
        return <Loading/>
   }
 
     
     return (
          <div className='px-20'>
               <h2 className='text-center text-3xl my-6 font-bold'>Client Reviews</h2>
          <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5 my-5'>
               
            
             {
                   reviews.slice(0,6).map(review => <ShowReview key={review._id} review={review}></ShowReview> )
              }
            
          </div>
          <Link to="/allreviews">
          <button className='btn btn-xs'>All Reviews</button>
          </Link>
          </div>
     );
};

export default Reviews;