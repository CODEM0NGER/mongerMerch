import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from './Card'; // Import your Card component here

const ProductSingle = () => {
    const [product, setProduct] = useState([]); // State to hold the product data
    const { id } = useParams(); // Extracting id parameter from URL

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:9000/api/products/${id}`); // Fetching product data based on id
                setProduct(response.data); // Setting the fetched product data to state
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct(); // Calling the fetch function
    }, [id]); // Dependency on id, so it refetches when id changes

    // Check if product is still loading
    if (!product) {
        return <div>Loading...</div>;
    }

    // Once product data is fetched, render the product details using Card component
    return (
        <main className="main" id="productSingleMain">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Card
                            id={product.product_id}
                            name={product.name}
                            imgUrl={`${product.image_url}`}
                            price={product.price}
                            path={'Single Product'}
                        />
                    </div>
                    <div className="col-md-6">
                        <h2 className="text-capitalize text-danger">{product.name}</h2>
                        <img
                            src={`images/${product.image_url}`}
                            alt={product.name}
                            className="img-fluid"
                        />
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                {product.description}
                            </li>
                            <li className="list-group-item text-capitalize">
                                Category: {product.category}
                            </li>
                            <li className="list-group-item">${product.price} USD</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProductSingle;
