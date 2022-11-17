import React from 'react';
import { NavLink } from 'react-router-dom';
import brandLogo from '../assets/img/SE-logo.webp';

const ResetPassword = () => {
    return (
        <>
            <section className="seLogin-wrapper ConfirmPassword">
                <div className="main-wrapper login-body">
                    <div className="login-wrapper">
                        <div className="container">
                            <img className="img-fluid logo-dark mb-2" src={brandLogo} alt="Logo" />
                            <div className="loginbox">
                                <div className="login-right">
                                    <div className="login-right-wrap">
                                        <h1>Set your Password</h1>
                                        <p className="account-subtitle">Your email address has been verified successfully. Please set your password for logging into your account.</p>

                                        <form action=" ">
                                            <div className="form-group text-field mt-5">
                                                <input type="Password" className="form-control" required />
                                                <label className="form-control-label">Password</label>
                                            </div>
                                            <div className="form-group text-field">
                                                <input type="Password" className="form-control" required />
                                                <label className="form-control-label">Confirm Password</label>
                                            </div>

                                            <button className="btn btn-md btn-block login-index-btn mt-5 " type="submit">Submit</button>

                                            <div className="text-center dont-have">
                                                {/* <!-- <b>Error Message...</b><br/> --> */}
                                                Go back to<NavLink to="https://thesearcheducation.com/"> thesearcheducation.com</NavLink></div>
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

export default ResetPassword
