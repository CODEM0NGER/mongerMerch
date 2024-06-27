import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import ProductSingle from "./components/ProductSingle"
import Error404 from './components/Error404'
import CreateAccount from './components/CreateAccount'
import CartItems from './components/CartItems'
import OrderedItems from './components/OrderedItems'
import Hats from './components/Hats'
import Mugs from './components/Mugs'
import Pants from './components/Pants'
import Shirts from './components/Shirts'
import Stickers from './components/Stickers'

const App = () => {

    /* Initialize state */

    const [ cartItems, setCartItems ] = useState([])
    const [ hats, setHats ] = useState([])
    const [ mugs, setMugs ] = useState([])
    const [ orderItems, setOrderItems ] = useState([])
    const [ orders, setOrders ] = useState([])
    const [ pants, setPants ] = useState([])
    const [ products, setProducts ] = useState([])    
    const [ shirts, setShirts ] = useState([])
    const [ stickers, setStickers ] = useState([])
    const [ users, setUsers ] = useState([])
    const [ formData, setFormData ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: ''
    })

    /* Fetch calls */


    useEffect(() => {
        axios.get('http://localhost:9000/api/CartItems').then(res => setCartItems(res.data))
    }, [])
    
    useEffect(() => {
        axios.get('http://localhost:9000/api/Hats').then(res => setHats(res.data))
    }, [])
    
    useEffect(() => {
        axios.get('http://localhost:9000/api/Mugs').then(res => setMugs(res.data))
    }, [])
    
    useEffect(() => {
        axios.get('http://localhost:9000/api/OrderItems').then(res => setOrderItems(res.data))
    }, [])
    
    useEffect(() => {
        axios.get('http://localhost:9000/api/Orders').then(res => setOrders(res.data))
    }, [])
    
    useEffect(() => {
        axios.get('http://localhost:9000/api/Pants').then(res => setPants(res.data))
    }, [])
    
    useEffect(() => {
        axios.get('http://localhost:9000/api/Products').then(res => setProducts(res.data))
    }, [])
    
    useEffect(() => {
        axios.get('http://localhost:9000/api/Shirts').then(res => setShirts(res.data))
    }, [])
    
    useEffect(() => {
        axios.get('http://localhost:9000/api/Stickers').then(res => setStickers(res.data))
    }, [])
    
    useEffect(() => {
        axios.get('http://localhost:9000/api/Users').then(res => setUsers(res.data))
    }, [])
    
    /* Form functionality */


    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = () => {
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        if (regex.test(formData.password) === false) {
            alert('Password does not meet the requirements.\nMust contain:\n-one uppercase letter\n-one lowercase letter\n-one number\n-one special character\n-at least 8 characters')
        } else {
            axios.post('http://localhost:9000/api/user/create', formData)
        }
    }

    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-10">
                    <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/hats' element={<Hats />} />
                            <Route path='/mugs' element={<Mugs />} />
                            <Route path='/pants' element={<Pants />} />
                            <Route path='/shirts' element={<Shirts />} />
                            <Route path='/stickers' element={<Stickers />} />
                            <Route path='/createAccount' element={<CreateAccount />} />
                            <Route path='/products/:id' element={<ProductSingle />} />
                            <Route path='/cartItems' element={<CartItems />} />
                            <Route path='/orderedItems' element={<OrderedItems />} />
                            <Route path="*" element={<Error404 />} />
                        </Routes>
                    </div>
                    <div className="col-2">
                        {/* Add additional sidebar components if needed */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App
