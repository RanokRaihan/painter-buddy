import React, { useState } from 'react';
import axios from 'axios';
import './AddService.css'

const AddService = () => {
    const [newService, setNewService] = useState({});
    const [imageURL, setImageURL] = useState('')
    const [message, setMessage] = useState('');
    const [uploadnig, setUploading] = useState(false);


    const handleBlur = e => {
        const newInfo = { ...newService };
        newInfo[e.target.name] = e.target.value;
        setNewService(newInfo);
        console.log(newService);
        setMessage('')
    }
    const handleImageUpload = event => {
        setUploading(true);
        // console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '980e01a9db052c64c4ad9206ed943c46');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                // console.log(res);
                const newInfo = { ...newService };
                newInfo.imageURL = res.data.data.display_url;
                setNewService(newInfo);
                // console.log(newService);
                setImageURL(res.data.data.display_url);
                setUploading(false);

                // console.log(imageURL);
            })
            .catch(error => {
                console.log(error);
            });
    }
    const handleSubmit = event => {
        event.preventDefault();
        const { serviceTitle, price, description } = newService;

        if (serviceTitle === '' || price === '' || description === '') {
            setMessage('Fill up the form first')
        }
        else {
            fetch('https://peaceful-anchorage-19075.herokuapp.com/addAService', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newService),

            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setMessage('Service added successfully')
                })
                .catch(error => {
                    console.error(error)
                })
        }


    }


    return (
        <div>
            <h1 className='text-title my-5'>Add a Service</h1>
            <div className="add-service-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="service-name">Service Title</label>
                        <input onBlur={handleBlur} type="text " name='serviceTitle' placeholder='Enter Title' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="service-name">Price</label>
                        <input onBlur={handleBlur} type="number" placeholder='Enter Price' name='price' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="service-description">Service Description</label>
                        <textarea onBlur={handleBlur} type="text" name="description" className="text-area" ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="service-image">Upload Image</label>
                        <input onChange={handleImageUpload} type="file" />
                    </div>
                    {
                        uploadnig && <h2 className='text-title'>uploading...</h2>
                    }
                    <button className="btn btn-primary my-5">Add Service</button>
                </form>
                <p>{message}</p>
            </div>
        </div >
    );
};

export default AddService;