import React, { useContext, useState } from 'react';
import { userContext } from '../../../App';
import './AddReview.css'

const AddReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [message, setMessage] = useState('')
    const [reviewData, setReviewData] = useState({
        name: loggedInUser.userName,
        picture: loggedInUser.picture,
        review: "",
        company: "",
        rating: ""
    })
    function checkProperties(obj) {
        for (var key in obj) {
            if (obj[key] === null || obj[key] === "")
                return false;
        }
        return true;
    }
    const handleBlur = e => {
        const newInfo = { ...reviewData };
        newInfo[e.target.name] = e.target.value;
        setReviewData(newInfo);
        console.log(reviewData);
        setMessage('');
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (checkProperties(reviewData)) {

            fetch('https://peaceful-anchorage-19075.herokuapp.com/addReview', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reviewData),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    setMessage('Review added successfuly')
                })
                .catch((error) => {
                    console.error('Error:', error);
                    setMessage()
                });
        }
        else {
            setMessage('fill up the form first')

        }
    }

    return (
        <div>
            <h1 className='text-title my-5'>Write a Review</h1>
            <div className="review-form-container">
                <form onSubmit={handleSubmit}>
                    <input onBlur={handleBlur} className='disabled' type="text" name='name' value={loggedInUser.userName} disabled />
                    <input onBlur={handleBlur} type="text" placeholder='company' name='company' />
                    <textarea onBlur={handleBlur} type="text" className="text-area" name='review' placeholder='Write Review'  ></textarea>

                    <select onChange={handleBlur} name="rating" id="">
                        <option disabled selected>Enter rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button type='submit' className="btn btn-primary my-5">Submit Review</button>
                </form>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default AddReview;