import React from 'react';

const CreateAccount = ({ formData, handleChange, handleSubmit }) => {
    return (
        <main className="main" id="createAcctMain">
            <div className="container">
                <h2 className="text-capitalize text-danger">Create an Account</h2>
                <form className="create-account" onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input 
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="password">Password: (Must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character, & 8 characters) </label>
                    </div>
                    <div className="mb-3 button-div">
                        <button type="submit" className="btn btn-danger">Submit</button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default CreateAccount;
