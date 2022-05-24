import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
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
                   reviews.map(review => <ShowReview key={review._id} review={review}></ShowReview> )
              }
            
          </div>
          </div>
     );
};

export default Reviews;