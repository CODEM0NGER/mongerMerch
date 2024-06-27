import { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9000/api/orders').then((res) => setOrders(res.data));
    }, []);

    return (
        <main className="main" id="ordersMain">
            <div className="container">
                <h2 className="text-center">Your Orders</h2>
                <ul className="list-group">
                    {orders.map(order => (
                        <li key={order.order_id} className="list-group-item">
                            <h3>Order ID: {order.order_id}</h3>
                            <p>Date: {new Date(order.date_created).toLocaleDateString()}</p>
                            <p>Status: {order.status}</p>
                            <p>Total: ${order.total}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default Orders;
