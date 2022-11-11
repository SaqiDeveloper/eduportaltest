import React from "react";

import { NavLink } from 'react-router-dom';

// css links

// import "../src/css/normalize.css";
// import "../src/css/main.css";
// import "../src/fonts/flaticon.css";
// import "../src/css/bootstrap.min.css";
// import "../src/css/animate.min.css";
// import "../src/css/style.css";

// images
import logo from "../../img/logo.png";
import admin from "../../img/figure/admin.jpg";
import student11 from "../../img/figure/student11.png";
import student12 from "../../img/figure/student12.png";
import student13 from "../../img/figure/student13.png";



const Header = () => {

    return(
        <>

       {/* Header Menu Area Start Here */}

       <div className="navbar navbar-expand-md header-menu-one bg-light">
       <div className="nav-bar-header-one">

           <div className="header-logo">
               <NavLink to="/admin_dashboard">
                   <img src={logo} alt="logo" />
               </NavLink>
           </div>
           <div className="toggle-button sidebar-toggle">
               <button type="button" className="item-link">
                   <span className="btn-icon-wrap">
                       <span></span>
                       <span></span>
                       <span></span>
                   </span>
               </button>
           </div>
       </div>
       <div className="d-md-none mobile-nav-bar">
           <button className="navbar-toggler pulse-animation" type="button" data-toggle="collapse" data-target="#mobile-navbar" aria-expanded="false">
               <i className="fa fa-arrow-alt-circle-down"></i>
           </button>
           <button type="button" className="navbar-toggler sidebar-toggle-mobile">
               <i className="fa fa-bars"></i>
           </button>
       </div>
       <div className="header-main-menu collapse navbar-collapse" id="mobile-navbar">
           <ul className="navbar-nav">
               <li className="navbar-item header-search-bar">
                   <div className="input-group stylish-input-group">
                       <span className="input-group-addon">
                           <button type="submit">
                               <span className="flaticon-search" aria-hidden="true"></span>
                           </button>
                       </span>
                       <input type="text" className="form-control" placeholder="Find Something . . ." />
                   </div>
               </li>
           </ul>
           <ul className="navbar-nav">
               <li className="navbar-item dropdown header-admin">
                   <NavLink className="navbar-nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown"
                       aria-expanded="false">
                       <div className="admin-title">
                           <h5 className="item-title">Stevne Zone</h5>
                           <span>Admin</span>
                       </div>
                       <div className="admin-img">
                           <img src={admin} alt="Admin" />
                       </div>
                   </NavLink>
                   <div className="dropdown-menu dropdown-menu-right">
                       <div className="item-header">
                           <h6 className="item-title">Steven Zone</h6>
                       </div>
                       <div className="item-content">
                           <ul className="settings-list">
                               <li><NavLink to="#"><i className="flaticon-user"></i>My Profile</NavLink></li>
                               <li><NavLink to="#"><i className="flaticon-list"></i>Task</NavLink></li>
                               <li><NavLink to="#"><i className="flaticon-chat-comment-oval-speech-bubble-with-text-lines"></i>Message</NavLink></li>
                               <li><NavLink to="#"><i className="flaticon-gear-loading"></i>Account Settings</NavLink></li>
                               <li><NavLink to="/login"><i className="flaticon-turn-off"></i>Log Out</NavLink></li>
                           </ul>
                       </div>
                   </div>
               </li>
               <li className="navbar-item dropdown header-message">
                   <NavLink className="navbar-nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown"
                       aria-expanded="false">
                       <i className="fa fa-envelope"></i>
                       <div className="item-title d-md-none text-16 mg-l-10">Message</div>
                       <span>5</span>
                   </NavLink>

                   <div className="dropdown-menu dropdown-menu-right">
                       <div className="item-header">
                           <h6 className="item-title">05 Message</h6>
                       </div>
                       <div className="item-content">
                           <div className="media">
                               <div className="item-img bg-skyblue author-online">
                                   <img src={student11} alt="img" />
                               </div>
                               <div className="media-body space-sm">
                                   <div className="item-title">
                                       <NavLink to="#">
                                           <span className="item-name">Maria Zaman</span>
                                           <span className="item-time">18:30</span>
                                       </NavLink>
                                   </div>
                                   <p>What is the reason of buy this item.
                                       Is it usefull for me.....</p>
                               </div>
                           </div>
                           <div className="media">
                               <div className="item-img bg-yellow author-online">
                                   <img src={student12} alt="img" />
                               </div>
                               <div className="media-body space-sm">
                                   <div className="item-title">
                                       <NavLink to="#">
                                           <span className="item-name">Benny Roy</span>
                                           <span className="item-time">10:35</span>
                                       </NavLink>
                                   </div>
                                   <p>What is the reason of buy this item.
                                       Is it usefull for me.....</p>
                               </div>
                           </div>
                           <div className="media">
                               <div className="item-img bg-pink">
                                   <img src={student13} alt="img" />
                               </div>
                               <div className="media-body space-sm">
                                   <div className="item-title">
                                       <NavLink to="#">
                                           <span className="item-name">Steven</span>
                                           <span className="item-time">02:35</span>
                                       </NavLink>
                                   </div>
                                   <p>What is the reason of buy this item.
                                       Is it usefull for me.....</p>
                               </div>
                           </div>
                           <div className="media">
                               <div className="item-img bg-violet-blue">
                                   <img src={student11} alt="img" />
                               </div>
                               <div className="media-body space-sm">
                                   <div className="item-title">
                                       <NavLink to="#">
                                           <span className="item-name">Joshep Joe</span>
                                           <span className="item-time">12:35</span>
                                       </NavLink>
                                   </div>
                                   <p>What is the reason of buy this item.
                                       Is it usefull for me.....</p>
                               </div>
                           </div>
                       </div>
                   </div>
               </li>
               <li className="navbar-item dropdown header-notification">
                   <NavLink className="navbar-nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown"
                       aria-expanded="false">
                       <i className="fa fa-bell"></i>
                       <div className="item-title d-md-none text-16 mg-l-10">Notification</div>
                       <span>8</span>
                   </NavLink>

                   <div className="dropdown-menu dropdown-menu-right">
                       <div className="item-header">
                           <h6 className="item-title">03 Notifiacations</h6>
                       </div>
                       <div className="item-content">
                           <div className="media">
                               <div className="item-icon bg-skyblue">
                                   <i className="fa fa-check"></i>
                               </div>
                               <div className="media-body space-sm">
                                   <div className="post-title">Complete Today Task</div>
                                   <span>1 Mins ago</span>
                               </div>
                           </div>
                           <div className="media">
                               <div className="item-icon bg-orange">
                                   <i className="fa fa-calendar-alt"></i>
                               </div>
                               <div className="media-body space-sm">
                                   <div className="post-title">Director Metting</div>
                                   <span>20 Mins ago</span>
                               </div>
                           </div>
                           <div className="media">
                               <div className="item-icon bg-violet-blue">
                                   <i className="fa fa-cogs"></i>
                               </div>
                               <div className="media-body space-sm">
                                   <div className="post-title">Update Password</div>
                                   <span>45 Mins ago</span>
                               </div>
                           </div>
                       </div>
                   </div>
               </li>
               <li className="navbar-item dropdown header-language">
                   <NavLink className="navbar-nav-link dropdown-toggle" to="#" role="button"
                       data-toggle="dropdown" aria-expanded="false"><i className="fa fa-globe"></i>EN</NavLink>
                   <div className="dropdown-menu dropdown-menu-right">
                       <NavLink className="dropdown-item" to="#">English</NavLink>
                       <NavLink className="dropdown-item" to="#">Spanish</NavLink>
                       <NavLink className="dropdown-item" to="#">Franchis</NavLink>
                       <NavLink className="dropdown-item" to="#">Chiness</NavLink>
                   </div>
               </li>
           </ul>
       </div>
   </div>
   {/* Header Menu Area End Here  */}

   </>

);
    
};


export default Header;