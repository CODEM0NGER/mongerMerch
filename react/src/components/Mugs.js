import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
const Mugs = () => {
    // Initialize state for products and featured product
    const [mugs, setMugs] = useState([]);
    
    // Fetch products from the API
    useEffect(()=> {

        axios.get('http://localhost:9000/api/products').then(res => {
            // console.log(res.data)
            let mugsArr = []

            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].category == 'Mug') {
                    mugsArr.push(res.data[i])
                }
            }

            setMugs(mugsArr)
        })
    }, [])
    
    
    console.log(mugs)

    const cards = mugs.map(mug => {
        return <Card 
                key={mug.product_id}
                id={mug.product_id}
                name={mug.name}
                imgUrl={mug.image_url}
                price={mug.price}
                path={'mug'}
            />
    })



    return (
        <main className="main" id="main">
            <div className="container">
                <h2 className="text-capitalize text-center">mugs</h2>
                <div className="row row-cols-1 row-cols-md-3">
                    {cards}
                </div>
            </div>
        </main>
    );
};

export default Mugs;
