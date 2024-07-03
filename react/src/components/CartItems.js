import { useState, useEffect } from 'react';
import axios from 'axios';
//initalize 
const CartItems = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9000/api/cartItems')
            .then((res) => setCartItems(res.data))
            .catch((error) => console.error('Error fetching cart items:', error));
    }, []);

    return (
        <main className="main" id="cartItemsMain">
            <div className="container">
                <h2 className="text-center">Your Cart</h2>
                {cartItems.length === 0 ? (
                    <p className="text-center">No items in the cart.</p>
                ) : (
                    <ul className="list-group">
                        {cartItems.map(item => (
                            <li key={item.id} className="list-group-item">
                                <h3>{item.product_name}</h3>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: ${item.price}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </main>
    );
};

export default CartItems;
