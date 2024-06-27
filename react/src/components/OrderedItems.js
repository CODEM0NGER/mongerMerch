import { useState, useEffect } from 'react';
import axios from 'axios';

const OrderedItems = ({ orderId }) => {
    const [orderedItems, setOrderedItems] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9000/api/orderItems/${orderId}`).then((res) => setOrderedItems(res.data));
    }, [orderId]);

    return (
        <main className="main" id="orderedItemsMain">
            <div className="container">
                <h2 className="text-center">Items in Order {orderId}</h2>
                <ul className="list-group">
                    {orderedItems.map(item => (
                        <li key={item.id} className="list-group-item">
                            <h3>{item.product_name}</h3>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: ${item.price}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default OrderedItems;
