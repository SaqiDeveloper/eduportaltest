import React from 'react';
import { NavLink } from 'react-router-dom';

// css links
import "../src/css/normalize.css";
import "../src/css/main.css";
import "../src/css/bootstrap.min.css";
import "../src/css/animate.min.css";
import "../src/css/style.css";

import logo from "../src/img/logo2.png";



const Home = () => {

    return (
        <>
  {/* <div id="preloader"></div> */}
    {/* Preloader End Here*/} 
        
    {/*Login Page Start Here*/}
    
    <div className="login-page-wrap">
        <div className="login-page-content">
            <div className="login-box">
                <div className="item-logo">
                    <img src={logo} alt="logo" />
                </div>
                <form action="/admin_dashboard" className="login-form">
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" placeholder="Enter usrename" className="form-control" />
                        <i className="fa fa-envelope"></i>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" placeholder="Enter password" className="form-control" />
                        <i className="fa fa-lock"></i>
                    </div>
                    <div className="form-group d-flex align-items-center justify-content-between">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="remember-me" />
                            <label for="remember-me" className="form-check-label">Remember Me</label>
                        </div>
                        <NavLink to="#" className="forgot-btn">Forgot Password?</NavLink>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="login-btn">Login</button>
                    </div>
                </form>
                <div className="login-social">
                    <p>or sign in with</p>
                    <ul>
                        <li><NavLink to="#" className="bg-fb"><i className="fa fa-facebook"></i></NavLink></li>
                        <li><NavLink to="#" className="bg-twitter"><i className="fa fa-twitter"></i></NavLink></li>
                        <li><NavLink to="#" className="bg-gplus"><i className="fa fa-google-plus"></i></NavLink></li>
                        <li><NavLink to="#" className="bg-git"><i className="fa fa-github"></i></NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="sign-up">Don't have an account ? <NavLink to="#">Signup now!</NavLink></div>
        </div>
    </div>
        </>
    );
};

export default Home;