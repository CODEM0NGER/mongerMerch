import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
const Hats = () => {
    // Initialize state for hats
    const [hats, setHats] = useState([]);
    
    // Fetch hats from the API
    useEffect(()=> {

        axios.get('http://localhost:9000/api/products').then(res => {
            // console.log(res.data)
            let hatsArr = []

            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].category == 'Hat') {
                    hatsArr.push(res.data[i])
                }
            }

            setHats(hatsArr)
        })
    }, [])
    
    
    console.log(hats)

    const cards = hats.map(hat => {
        return <Card 
                key={hat.product_id}
                id={hat.product_id}
                name={hat.name}
                imgUrl={hat.image_url}
                price={hat.price}
                path={'hat'}
            />
    })



    return (
        <main className="main" id="main">
            <div className="container">
                <h2 className="text-capitalize text-center">hats</h2>
                <div className="row row-cols-1 row-cols-md-3">
                    {cards}
                </div>
            </div>
        </main>
    );
};

export default Hats;
