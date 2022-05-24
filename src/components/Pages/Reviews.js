import React, { useEffect, useState } from 'react';
import ShowReview from './ShowReview';

const Reviews = () => {
     const [reviews , setReviews] = useState([])
     useEffect(()=>{
          fetch('http://localhost:5000/reviews')
            .then(res => res.json())
             .then(data => setReviews(data))
     },[])
     return (
          <div className='px-20'>
               <h2 className='text-center text-3xl my-6 font-bold'>Client Reviews</h2>
          <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5 my-5'>
               
            
             {
                   reviews.slice(0,6).map(review => <ShowReview key={review._id} review={review}></ShowReview> )
              }
            
          </div>
          </div>
     );
};

export default Reviews;