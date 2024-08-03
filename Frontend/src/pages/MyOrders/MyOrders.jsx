// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../Context/StoreContext.jsx';
import axios from 'axios';
import { assets } from '../../assets/assets';
import './MyOrders.css';

const MyOrders = () => {
    const [data, setData] = useState([]);
    const { url, token } = useContext(StoreContext);

    const fetchOrders = async () => {
        try {
            const response = await axios.post(url + "/api/order/userorders", {}, { headers: { Authorization: `Bearer ${token}` } });
            setData(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token]);

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className="container">
                {data.map((order, index) => (
                    <div key={index} className='my-orders-order'>
                        <img src={assets.parcel_icon} alt="" />
                        <p>{order.items.map((item, index) => (
                            index === order.items.length - 1 ? 
                            `${item.name} x ${item.quantity}` : 
                            `${item.name} x ${item.quantity}, `
                        ))}</p>
                        <p>${order.amount}.00</p>
                        <p>Items: {order.items.length}</p>
                        <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                        <button onClick={fetchOrders}>Track Order</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrders;
