import React, { useEffect, useState } from 'react';
import './OrderList.css';

const OrderList = () => {
    const loadData = () => {
        fetch(`https://peaceful-anchorage-19075.herokuapp.com/allOrder`)
            .then(res => res.json())
            .then(data => {
                setOrderList(data)
                // console.log(data);
            })
    }

    const [orderList, setOrderList] = useState([]);
    useEffect(() => {
        loadData()
    }, [])

    const handleStatus = (statusTobeUpdated, id) => {
        console.log({ statusTobeUpdated });
        const status = {
            status: statusTobeUpdated
        };
        console.log(status);
        fetch(`https://peaceful-anchorage-19075.herokuapp.com/updateStatus/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(status),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);

            })
            .catch((error) => {
                console.error('Error:', error);
            });


    }
    return (
        <div className='order-list-container'>
            <div className="refresh-row">
                <h1 className="text-title my-5">Order List</h1>
                <button onClick={loadData} className="btn btn-primary">Refresh</button>
            </div>
            <div className="table-content">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Paid with</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderList.map(order => {
                                const optionContainer = [
                                    <option value="pending">Pending</option>,
                                    <option value="on going">On going</option>,
                                    <option value="done">Done</option>
                                ];
                                if (order.status === 'pending') {
                                    optionContainer[0] = <option selected value="pending">Pending</option>
                                }
                                if (order.status === 'on going') {
                                    optionContainer[1] = <option selected value="on going">on going</option>
                                }
                                if (order.status === 'done') {
                                    optionContainer[2] = <option selected value="done">Done</option>
                                }

                                return (

                                    <tr key={order._id}>
                                        <td>{order.name}</td>
                                        <td>{order.email}</td>
                                        <td>{order.serviceTitle}</td>
                                        <td>{order.paidWith || 'visa Card'}</td>
                                        <td>

                                            <select onChange={(e) => handleStatus(e.target.value, order._id)} className='status-select' name="" id="">
                                                {optionContainer}
                                            </select>

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

export default OrderList;