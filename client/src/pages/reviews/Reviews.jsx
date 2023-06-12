import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './reviews.css'

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [createForm, setCreateForm ] = useState({
    title: '',
    body: '',
  });

  useEffect(() => {
    fetchReviews();
  }, [])

  const fetchReviews = async () => {
    const res = await axios.get('http://localhost:3001/reviews/');

    console.log(res);
    setReviews(res.data.reviews);
    console.log(res);
  };

  const updateCreateForm = (e) => {
    const { name, value } = e.target;

    setCreateForm({
      ...createForm,
      [name]: value,
    });

    console.log({ name, value });
  };

  const createReview = async (e) => {
    e.preventDefault();

    const res = await axios.post('http://localhost:3001/reviews/', createForm);

    setReviews([...reviews, res.data.review]);

    setCreateForm({ title: '', body: '' });
  };

  const deleteReview = async (_id) => {
    const res = await axios.delete(`http;//localhost:3001/reviews/${_id}`);
    
    const newReviews = [...reviews].filter(review => {
      return review._id !== _id;
    });

    setReviews(newReviews);
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
                <button onclick={() => deleteReview(review._id)}>Delete</button>
              </div>
            );
          })}
      </div>

      <div>
        <h2>Add a Review</h2>
        <form onSubmit={createReview}>
          <input 
            onChange={updateCreateForm} 
            value={createForm.title} 
            name='title' 
            type='text' 
          />
          <textarea 
            onChange={updateCreateForm} 
            value={createForm.body} 
            name='body' 
            cols='30' rows='10' 
          />
          <button type='submit'>Submit Review</button>
        </form>
      </div>
    </div>
  )
}

export default Reviews
