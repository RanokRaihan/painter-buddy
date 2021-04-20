import React, { useState } from 'react';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const [admin, SetAdmin] = useState({
        admin: ''
    })
    const [message, setMessage] = useState('')
    const handleBlur = (e) => {
        const newAdmin = {
            admin: e.target.value
        }
        SetAdmin(newAdmin);
        console.log(admin);
        setMessage('')
    }
    const handleMakeAdmin = () => {
        if (admin.admin === '') {
            setMessage('Enter admin email')
        }
        else {

            fetch('https://peaceful-anchorage-19075.herokuapp.com/makeAdmin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(admin),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    setMessage('admin added successfuly')
                })
                .catch((error) => {
                    console.error('Error:', error);
                    setMessage('problem to make admin')
                });
        }
    }
    return (
        <div className='make-admin-container' >
            <h1 className='text-title my-5'>Make Admin</h1>
            <label htmlFor="email">Email</label>
            <input onBlur={handleBlur} type="email" name='email' placeholder='Enter Email' />
            <button onClick={handleMakeAdmin} className="btn btn-primary my-5">Submit</button>
            <p>{message}</p>
        </div>
    );
};

export default MakeAdmin;