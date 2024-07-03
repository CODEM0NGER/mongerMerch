import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    // Initialize state for products
    const [products, setProducts] = useState([]);

    // Fetch products from the API
    useEffect(() => {
        axios.get('http://localhost:9000/api/products').then(res => {
            const products = res.data;
            const count = products.length;
            setProducts(products);
        });
    },);

    return (
        <main className="main" id="main">
            <div className="container">
                <section className="section banner-row">
                    <img src="/images/mongerbanner.png" alt="banner image" className="img-fluid image banner-img rounded" />
                </section>

                <section className="section">
                    <h2 className="text-center text-capitalize">welcome to our store!</h2>
                </section>

                <section className="section all-products-section">
                    <h2 className="text-center text-capitalize">all products</h2>
                    <div className="row">
                        {products.map(product => ( 
                            <div key={product.product_id} className="col-md-4">
                                <div className="card mb-4 shadow-sm">
                                    <img src={`/${product.image_url}`} alt={product.name} className="card-img-top" onError={() => console.error('Image not found:', `/images/${product.image_url}`)} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">${product.price}</p>
                                        <a href={`/products/${product.product_id}`} className="btn btn-primary">View Product</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Home;
