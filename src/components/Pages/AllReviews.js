import React from 'react';
import {  useQuery } from 'react-query'
import Loading from '../Shared/Loading';
import ShowAllReviews from './ShowAllReviews';


const AllReviews = () => {
     const { isLoading, error, data:reviews } = useQuery('repoData', () =>
     fetch('https://gentle-earth-60406.herokuapp.com/reviews').then(res =>
       res.json()
     )
   ) 
   if(isLoading){
        return <Loading/>
   }
 
     return (
          <div>
  <h2 className='text-center text-2xl font-bold my-20'>All Reviews <br /> _____</h2>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-5 px-20'>
               {
                    reviews.map(review => <ShowAllReviews key={review._id} review={review}></ShowAllReviews>)
               }
          </div>
          </div>
     );
};

export default AllReviews;