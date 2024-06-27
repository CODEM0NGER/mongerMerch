import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
const Pants = () => {
    // Initialize state for products and featured product
    const [pants, setPants] = useState([]);
    
    // Fetch products from the API
    useEffect(()=> {

        axios.get('http://localhost:9000/api/products').then(res => {
            // console.log(res.data)
            let pantsArr = []

            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].category == 'Pants') {
                    pantsArr.push(res.data[i])
                }
            }

            setPants(pantsArr)
        })
    }, [])
    
    
    console.log(pants)

    const cards = pants.map(pant => {
        return <Card 
                key={pant.product_id}
                id={pant.product_id}
                name={pant.name}
                imgUrl={pant.image_url}
                price={pant.price}
                path={'pant'}
            />
    })



    return (
        <main className="main" id="main">
            <div className="container">
                <h2 className="text-capitalize text-center">pants</h2>
                <div className="row row-cols-1 row-cols-md-3">
                    {cards}
                </div>
            </div>
        </main>
    );
};

export default Pants;