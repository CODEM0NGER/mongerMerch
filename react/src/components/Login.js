import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <p>Please fill out the form below to log in:</p>
            <form>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" required />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" id="lastName" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <p className="mt-3">
                Don't have an account? <Link to='/createAccount' style={{textDecoration: 'none', textTransform: 'capitalize'}}>Create one Here</Link>.
            </p>
        </div>
    );
};

export default Login;
