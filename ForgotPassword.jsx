import React from 'react';
import brandLogo from '../assets/img/SE-logo.webp';

const ForgotPassword = () => {
    return (
        <>

            <section className="seLogin-wrapper forget-bg">
                <div className="main-wrapper login-body">
                    <div className="login-wrapper">
                        <div className="container">
                            <img className="img-fluid logo-dark mb-2" src={brandLogo} alt="Logo" />
                            <div className="loginbox">
                                <div className="login-right">
                                    <div className="login-right-wrap mt-3 mb-3 text-center">
                                        <h1>Forgot Password</h1>
                                        <p className="account-subtitle">Please enter the email address you'd like your password information sent to.</p>
                                        <form action=" ">
                                            <div className="form-group text-field mt-5">
                                                <input type="text" className="form-control" required />
                                                <label className="form-control-label">Email Address</label>
                                            </div>
                                            <button className="btn btn-md btn-block login-index-btn mt-5 " type="submit">Submit</button>
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

export default ForgotPassword
