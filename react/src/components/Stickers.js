import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
const Stickers = () => {
    // Initialize state for stickers
    const [stickers, setStickers] = useState([]);
    
    // Fetch stickers from the API
    useEffect(()=> {

        axios.get('http://localhost:9000/api/products').then(res => {
            // console.log(res.data)
            let stickersArr = []

            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].category == 'Sticker') {
                    stickersArr.push(res.data[i])
                }
            }

            setStickers(stickersArr)
        })
    }, [])
    
    
    console.log(stickers)

    const cards = stickers.map(sticker => {
        return <Card 
                key={sticker.product_id}
                id={sticker.product_id}
                name={sticker.name}
                imgUrl={sticker.image_url}
                price={sticker.price}
                path={'sticker'}
            />
    })



    return (
        <main className="main" id="main">
            <div className="container">
                <h2 className="text-capitalize text-center">stickers</h2>
                <div className="row row-cols-1 row-cols-md-3">
                    {cards}
                </div>
            </div>
        </main>
    );
};

export default Stickers;