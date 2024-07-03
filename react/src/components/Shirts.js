import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
const Shirts = () => {
    // Initialize state for shirts
    const [shirts, setShirts] = useState([]);
    
    // Fetch shirts from the API
    useEffect(()=> {

        axios.get('http://localhost:9000/api/products').then(res => {
            // console.log(res.data)
            let shirtsArr = []

            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].category == 'Shirt') {
                    shirtsArr.push(res.data[i])
                }
            }

            setShirts(shirtsArr)
        })
    }, [])
    
    
    console.log(shirts)

    const cards = shirts.map(shirt => {
        return <Card 
                key={shirt.product_id}
                id={shirt.product_id}
                name={shirt.name}
                imgUrl={shirt.image_url}
                price={shirt.price}
                path={'shirt'}
            />
    })



    return (
        <main className="main" id="main">
            <div className="container">
                <h2 className="text-capitalize text-center">shirts</h2>
                <div className="row row-cols-1 row-cols-md-3">
                    {cards}
                </div>
            </div>
        </main>
    );
};

export default Shirts;