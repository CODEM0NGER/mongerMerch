import react from 'react'
import { Link } from "react-router-dom"; // Link component for navigation
import { BsCart } from 'react-icons/bs'; // Cart icon from react-icons

import logo from '../../src/mongergold.png'; // Logo Image

const Header = () => {
    return (
        <header className="header" id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                    <h1 className="branding text-capitalize text-center text-md-start">
                        <Link to="/" style={{ textDecoration: 'none', color: '#ffffff', fontSize: '20px' }}>
                            <img src={logo} style={{ width: '32px' }} alt="Store Logo" />
                            GAMEM0NGER Merch Store
                            <span className="small fs-6">
                                (MAKE LIFE, PLAY GAMES....)
                            </span>
                        </Link>
                    </h1>
                    </div>
                    <div className="col-md-4">
                        <nav className="top-nav">
                            <ul className="nav justify-content-center justify-content-md-end">
                                <li className="nav-item me-2">
                                    <Link 
                                        to="/hats" 
                                        style={{ textDecoration: 'none', textTransform: 'capitalize' }}
                                    >Hats</Link>
                                </li>
                                <li className="nav-item me-2">
                                    <Link 
                                        to='/mugs' 
                                        style={{ textDecoration: 'none', textTransform: 'capitalize' }}
                                    >Mugs</Link>
                                </li>
                                <li className="nav-item me-2">
                                    <Link 
                                        to='/pants' 
                                        style={{ textDecoration: 'none', textTransform: 'capitalize' }}
                                    >Pants</Link>
                                </li>
                                <li className="nav-item me-2">
                                    <Link 
                                        to='/shirts' 
                                        style={{ textDecoration: 'none', textTransform: 'capitalize' }}
                                    >Shirts</Link>
                                </li>
                                <li className="nav-item me-2">
                                    <Link 
                                        to='/stickers' 
                                        style={{ textDecoration: 'none', textTransform: 'capitalize' }}
                                    >Stickers</Link>
                                </li>
                                <li className="nav-item me-2">
                                    <Link
                                        to="/CartItems">
                                    <BsCart />
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-3">
                        <Link to='/Login'
                            className="text-end signin"
                            style={{ textDecoration: 'none', color: '#ffffff', fontSize: '14px', marginRight: '20px', textTransform: 'capitalize' }}
                        >Join the Monger family or Sign In!</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;


