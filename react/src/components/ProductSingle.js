import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductSingle = () => {
    const [product, setProduct] = useState({});
    const params = useParams();

    // Adjust URL to match your API endpoint structure
    const url = `http://localhost:9000/api/products/${params.id}`;

    useEffect(() => {
        axios.get(url).then((res) => setProduct(res.data));
    }, [url]);

    // console.log(product);

    return (
        <main className="main" id="productSingleMain">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="text-capitalize text-danger">{product.name}</h2>
                        <img
                            src={`/${product.image_url}`}
                            alt={product.name}
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-md-6">
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
