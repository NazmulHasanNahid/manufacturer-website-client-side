import React from 'react';

const ShowReview = ({review}) => {
     
     return (
      <div className="card-container g-3 col-sm-12 col-md-6 col-lg-3">
      <div class="card item-cart bg-base-200  ">
       
        <div class="card-body">
          <h2 class="card-title">{review.name}</h2>
          <p>
            <small>{review.review.slice(0,200)}</small>
          </p>
        </div>
      </div>
    </div>
     );
};

export default ShowReview;