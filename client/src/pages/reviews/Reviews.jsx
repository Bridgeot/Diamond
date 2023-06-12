import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './reviews.css'

const Reviews = () => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchReviews();
  }, [])

  const fetchReviews = async () => {
    const res = await axios.get('http://localhost:3001/reviews');

    console.log(res);
    setReviews(res.data.reviews);
    console.log(res);
  };

  return (
    <div className='reviews'>
      <div className='reviews-heading'>
        <h2 className='gradient-color'>Leave a Review</h2>
      </div>

      <div>
        <h2>Reviews:</h2>
        {reviews && 
          reviews.map((review) => {
            return (
              <div key={review._id}>
                <h3>{review.title}</h3>
              </div>
            );
          })}
      </div>
    </div>
  )
}

export default Reviews
