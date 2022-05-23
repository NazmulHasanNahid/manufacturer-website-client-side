import React from 'react';

const ShowReview = ({review}) => {
     
     return (
          <div class="card lg:w-100 mt-3  bg-primary text-primary-content">
          <div class="card-body">
            <h2 class="card-title">Task : {review.name}</h2>
            <p>Description : {review.review}</p>
            
          </div>
        </div>
     );
};

export default ShowReview;