// import React, { useState } from 'react'
import ReactStars from 'react-stars'

import './styles/ratingCard.css';


export const RatingCard = (props) => {

   const {review, rating}=props;

  return (
      <div className='card rating-card'>
        <div className="card-body review">
          <p className="card-text">{review}</p>
        </div>
        <div className="card-body rating">
          <ReactStars
            count={5}
            value={rating}
            size={35}
            color2={'#90FF03'}
            edit={false} />
        </div>
      </div>
  )
}


