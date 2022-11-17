import React from 'react';
import { NavLink } from 'react-router-dom';
import brandLogo from '../assets/img/SE-logo.webp';
// import Contacts from './Contacts';


const Login = () => {
    return (
        <>
            <section className="seLogin-wrapper">
                <div className="main-wrapper login-body">
                    <div className="login-wrapper">
                        <div className="container">
                            <img className="img-fluid logo-dark mb-2" src={brandLogo} alt="Logo" />
                            <div className="loginbox">
                                <div className="login-right">
                                    <div className="login-right-wrap">
                                        <h1>Login</h1>
                                        <p className="account-subtitle">Access to our dashboard</p>
                                        <form action=" ">

                                            <div className="form-group text-field">
                                                <input type="text" className="form-control" required />
                                                <label className="form-control-label"> Email Address</label>
                                            </div>
                                            <div className="form-group text-field">
                                                <input type="Password" className="form-control" required />
                                                <label className="form-control-label">Password</label>
                                            </div>

                                            <div className="form-group remember-index">
                                                <div className="row">
                                                    <div className="col-12 col-md-6 p-0">
                                                        <div className="custom-control">
                                                            <input type="checkbox" id="indexUser" name="indexUser" />
                                                            <span for="indexUser"> Remember me</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-6 text-end">
                                                        <NavLink className="forgot-link" to="/Login ">Forgot Password?</NavLink>
                                                    </div>
                                                </div>
                                            </div>

                                            <NavLink to="/Contacts" className="btn btn-md btn-block login-index-btn mt-4 " type="submit">Login</NavLink>

                                            <div className="text-center dont-have">
                                                {/* <!-- <b>Error Message...</b><br/> --> */}
                                                Don't have an account yet? <NavLink to="/">Register</NavLink>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
