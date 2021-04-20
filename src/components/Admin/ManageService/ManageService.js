import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [services, setServices] = useState([])


    useEffect(() => {
        fetch('https://peaceful-anchorage-19075.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data);
            })
    }, [])
    const handleDelete = (id) => {
        fetch(`https://peaceful-anchorage-19075.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(res => console.log(res))

    }


    return (
        <div>
            <h1 className="text-title my-5">Manage All Service</h1>
            <div className="table-content">
                <table>
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services.map(service => {

                                return (
                                    <tr key={service._id}>
                                        <td>{service.serviceTitle}</td>
                                        <td>{service.description}</td>
                                        <td>${service.price}</td>
                                        <td>
                                            <button onClick={(e) => {
                                                e.target.parentNode.parentNode.style.display = 'none'
                                                handleDelete(service._id)
                                            }} className="btn btn-primary">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageService;