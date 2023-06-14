import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './reviews.css'

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [createReviewForm, setCreateReviewForm] = useState({
    title: '',
    rating: '',
    body: '',
  });

  useEffect(() => {
    fetchReviews();
  }, []);
  
  const fetchReviews = async () => {
    const res = await axios.get('http://localhost:3001/reviews');

    setReviews(res.data.reviews);
  };

  const updateCreateReviewForm = (e) => {
    const { name, value } = e.target;

    setCreateReviewForm({
      ...createReviewForm,
      [name]: value,
    });
  };

  const createReview = async (e) => {
    e.preventDefault();

    const res = await axios.post('http://localhost:3001/reviews', createReviewForm);

    setReviews([...reviews, res.data.review]);

    setCreateReviewForm({ title: '', rating: '', body: '' });
  };

  const deleteReview = async (_id) => {
    const res = await axios.delete(`http://localhost:3001/reviews/${_id}`);

    const newReviews = [...reviews].filter((review) => {
      return review._id !== _id;
    });

    setReviews(newReviews);
  };

  return (
    <div className='reviews'>
      <div className='reviews-heading'>
        <h2 className='gradient-color'>Leave a Review</h2>
      </div>

      <div className='reviews-content-container'>
        <div className='reviews-content'>
          <h2>Reviews:</h2>
          {reviews && 
            reviews.map((review) => {
              return (
                <div className='reviews-content-info' key={review._id}>
                  <h3>{review.title}</h3>
                  <p>{review.rating}</p>
                  <p>{review.body}</p>
                  <div className='reviews-content-info-btn'>
                    <button onClick={() => deleteReview(review._id)}>
                      Delete Note
                    </button>
                  </div>
                </div>
              );
            })}
        </div>

        <div className='reviews-content'>
          <h2>Create Review:</h2>
          <form className='reviews-content-form' onSubmit={createReview}>
            <input onChange={updateCreateReviewForm} name='title' value={createReviewForm.title} type='text' />
            <select onChange={updateCreateReviewForm} name='rating' value={createReviewForm.rating} >
              <option value='' selected>Enter a rating</option>
              <option value='&#9733;&#9733;&#9733;&#9733;&#9733;'>5 Star</option>
              <option value='&#9733;&#9733;&#9733;&#9733;'>4 Star</option>
              <option value='&#9733;&#9733;&#9733;'>3 Star</option>
              <option value='&#9733;&#9733;'>2 Star</option>
              <option value='&#9733;'>1 Star</option>
            </select>
            <textarea onChange={updateCreateReviewForm} name='body' value={createReviewForm.body} type='text' cols='30' rows='10'></textarea>
            <button type='submit'>Add Review</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Reviews
