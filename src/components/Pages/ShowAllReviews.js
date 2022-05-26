import React from 'react';
import ReactStars from 'react-rating-stars-component';

const ShowAllReviews = ({review}) => {
     return (
          <div className="card-container g-3 col-sm-12 col-md-6 col-lg-3">
      <div className="card item-cart bg-base-200  ">
       
        <div className="card-body">
          <h2 className="card-title">{review.name}</h2>
          <p>{review.review}</p>
          <ReactStars count={review?.rating} activeColor="#ffd700" />
        </div>
      </div>
    </div>
     );
};

export default ShowAllReviews;