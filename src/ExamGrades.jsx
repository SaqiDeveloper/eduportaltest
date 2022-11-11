import React from 'react';
import { NavLink } from 'react-router-dom';

// css links
import "../src/css/normalize.css";
import "../src/css/main.css";
import "../src/fonts/flaticon.css";
import "../src/css/bootstrap.min.css";
import "../src/css/animate.min.css";
import "../src/css/style.css";

// images
import logo from "../src/img/logo.png"
import admin from "../src/img/figure/admin.jpg";
import logo1 from "../src/img/logo1.png";
import student11 from "../src/img/figure/student11.png";
import student12 from "../src/img/figure/student12.png";
import student13 from "../src/img/figure/student13.png";



const ExamGrades = () => {
  return (
    <>
            {/* <!-- Preloader Start Here --> */}
    {/* <!-- <div id="preloader"></div> --> */}
    {/* <!-- Preloader End Here --> */}
    <div id="wrapper" className="wrapper bg-ash">
        {/* <!-- Header Menu Area Start Here --> */}
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
                                    <li><NavLink to="login.html"><i className="flaticon-turn-off"></i>Log Out</NavLink></li>
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
        {/* <!-- Header Menu Area End Here --> */}
        {/* <!-- Page Area Start Here --> */}
        <div className="dashboard-page-one">
            {/* <!-- Sidebar Area Start Here --> */}
            <div className="sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color">
               <div className="mobile-sidebar-header d-md-none">
                    <div className="header-logo">
                        <NavLink to="/admin_dashboard"><img src={logo1} alt="logo" /></NavLink>
                    </div>
               </div>
                <div className="sidebar-menu-content">
                    <ul className="nav nav-sidebar-menu sidebar-toggle-view">
                        <li className="nav-item sidebar-nav-item">
                            <NavLink to="/students" className="nav-link"><i className="flaticon-dashboard"></i><span>Dashboard</span></NavLink>
                            <ul className="nav sub-group-menu">
                                <li className="nav-item">
                                    <NavLink to="/Admin" className="nav-link"><i className="fa fa-angle-right"></i>Admin</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/students" className="nav-link"><i
                                            className="fa fa-angle-right"></i>Students</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/parents" className="nav-link"><i className="fa fa-angle-right"></i>Parents</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/teachers" className="nav-link"><i
                                            className="fa fa-angle-right"></i>Teachers</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item sidebar-nav-item">
                            <NavLink to="/allstudent" className="nav-link"><i className="flaticon-classmates"></i><span>Students</span></NavLink>
                            <ul className="nav sub-group-menu">
                                <li className="nav-item">
                                    <NavLink to="/allstudent" className="nav-link"><i className="fa fa-angle-right"></i>All
                                        Students</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/studentdetails" className="nav-link"><i
                                            className="fa fa-angle-right"></i>Student Details</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/admitform" className="nav-link"><i
                                            className="fa fa-angle-right"></i>Admission Form</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/studentpromotion" className="nav-link"><i
                                            className="fa fa-angle-right"></i>Student Promotion</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item sidebar-nav-item">
                            <NavLink to="/allteacher" className="nav-link"><i
                                    className="flaticon-multiple-users-silhouette"></i><span>Teachers</span></NavLink>
                            <ul className="nav sub-group-menu">
                                <li className="nav-item">
                                    <NavLink to="/allteacher" className="nav-link"><i className="fa fa-angle-right"></i>All
                                        Teachers</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/teacherdetails" className="nav-link"><i
                                            className="fa fa-angle-right"></i>Teacher Details</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/addteacher" className="nav-link"><i className="fa fa-angle-right"></i>Add
                                        Teacher</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/teacherpayment" className="nav-link"><i
                                            className="fa fa-angle-right"></i>Payment</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item sidebar-nav-item">
                            <NavLink to="/allparents" className="nav-link"><i className="flaticon-couple"></i><span>Parents</span></NavLink>
                            <ul className="nav sub-group-menu">
                                <li className="nav-item">
                                    <NavLink to="/allparents" className="nav-link"><i className="fa fa-angle-right"></i>All
                                        Parents</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/parentsdetails" className="nav-link"><i
                                            className="fa fa-angle-right"></i>Parents Details</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/addparents" className="nav-link"><i className="fa fa-angle-right"></i>Add
                                        Parent</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item sidebar-nav-item">
                            <NavLink to="/all_book" className="nav-link"><i className="flaticon-books"></i><span>Library</span></NavLink>
                            <ul className="nav sub-group-menu">
                                <li className="nav-item">
                                    <NavLink to="/all_book" className="nav-link"><i className="fa fa-angle-right"></i>All
                                        Book</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/add_book" className="nav-link"><i className="fa fa-angle-right"></i>Add New
                                        Book</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item sidebar-nav-item">
                            <NavLink to="/all_fees" className="nav-link"><i className="flaticon-technological"></i><span>Acconunt</span></NavLink>
                            <ul className="nav sub-group-menu">
                                <li className="nav-item">
                                    <NavLink to="/all_fees" className="nav-link"><i className="fa fa-angle-right"></i>All Fees
                                        Collection</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/all_expense" className="nav-link"><i
                                            className="fa fa-angle-right"></i>Expenses</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/add_expense" className="nav-link"><i className="fa fa-angle-right"></i>Add
                                        Expenses</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item sidebar-nav-item">
                            <NavLink to="/all_classes" className="nav-link"><i
                                    className="flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler"></i><span>Class</span></NavLink>
                            <ul className="nav sub-group-menu">
                                <li className="nav-item">
                                    <NavLink to="/all_classes" className="nav-link"><i className="fa fa-angle-right"></i>All
                                        classNamees</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/add_class" className="nav-link"><i className="fa fa-angle-right"></i>Add New
                                        className</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/all_subject" className="nav-link"><i
                                    className="flaticon-open-book"></i><span>Subject</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/class_routine" className="nav-link"><i className="flaticon-calendar"></i><span>Class Routine</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/student_attendence" className="nav-link"><i
                                    className="flaticon-checklist"></i><span>Attendence</span></NavLink>
                        </li>
                        <li className="nav-item sidebar-nav-item">
                            <NavLink to="/exam_schedule" className="nav-link"><i className="flaticon-shopping-list"></i><span>Exam</span></NavLink>
                            <ul className="nav sub-group-menu sub-group-active">
                                <li className="nav-item">
                                    <NavLink to="/exam_schedule" className="nav-link"><i className="fa fa-angle-right"></i>Exam
                                        Schedule</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/exam_grade" className="nav-link menu-active"><i className="fa fa-angle-right"></i>Exam
                                        Grades</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/transport" className="nav-link"><i
                                    className="flaticon-bus-side-view"></i><span>Transport</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/hostel" className="nav-link"><i className="flaticon-bed"></i><span>Hostel</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/notice" className="nav-link"><i
                                    className="flaticon-script"></i><span>Notice</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/messaging" className="nav-link"><i
                                    className="flaticon-chat"></i><span>Messeage</span></NavLink>
                        </li>
                        <li className="nav-item sidebar-nav-item">
                            <NavLink to="#" className="nav-link"><i className="flaticon-menu-1"></i><span>UI Elements</span></NavLink>
                            <ul className="nav sub-group-menu">
                                <li className="nav-item">
                                    <NavLink to="notification-alart.html" className="nav-link"><i className="fa fa-angle-right"></i>Alart</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="button.html" className="nav-link"><i className="fa fa-angle-right"></i>Button</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="grid.html" className="nav-link"><i className="fa fa-angle-right"></i>Grid</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="modal.html" className="nav-link"><i className="fa fa-angle-right"></i>Modal</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="progress-bar.html" className="nav-link"><i className="fa fa-angle-right"></i>Progress Bar</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="ui-tab.html" className="nav-link"><i className="fa fa-angle-right"></i>Tab</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="ui-widget.html" className="nav-link"><i
                                            className="fa fa-angle-right"></i>Widget</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/map" className="nav-link"><i
                                    className="flaticon-planet-earth"></i><span>Map</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/account" className="nav-link"><i
                                    className="flaticon-settings"></i><span>Account</span></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <!-- Sidebar Area End Here --> */}
            <div className="dashboard-content-one">
                {/* <!-- Breadcubs Area Start Here --> */}
                <div className="breadcrumbs-area">
                    <h3>Examination</h3>
                    <ul>
                        <li>
                            <NavLink to="index.html">Home</NavLink>
                        </li>
                        <li>Exam Grade</li>
                    </ul>
                </div>
                {/* <!-- Breadcubs Area End Here --> */}
                <div className="row">
                    {/* <!-- Exam Grade Add Area Start Here --> */}
                    <div className="col-4-xxxl col-12">
                        <div className="card height-auto">
                            <div className="card-body">
                                <div className="heading-layout1">
                                    <div className="item-title">
                                        <h3>Add New Grade</h3>
                                    </div>
                                    <div className="dropdown">
                                        <NavLink className="dropdown-toggle" to="#" role="button" data-toggle="dropdown"
                                            aria-expanded="false">...</NavLink>

                                        <div className="dropdown-menu dropdown-menu-right">
                                            <NavLink className="dropdown-item" to="#"><i
                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                            <NavLink className="dropdown-item" to="#"><i
                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                            <NavLink className="dropdown-item" to="#"><i
                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                        </div>
                                    </div>
                                </div>
                                <form className="new-added-form">
                                    <div className="row">
                                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                                            <label>Grade Name</label>
                                            <input type="text" placeholder="" className="form-control" />
                                        </div>
                                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                                            <label>Grade Point</label>
                                            <select className="select2">
                                                <option value="">Please Select</option>
                                                <option value="1">4.00</option>
                                                <option value="2">3.65</option>
                                                <option value="3">3.50</option>
                                                <option value="3">3.00</option>
                                                <option value="3">2.50</option>
                                            </select>
                                        </div>
                                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                                            <label>Percentage From</label>
                                            <input type="text" placeholder="" className="form-control" />
                                        </div>
                                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                                            <label>Percentage Upto</label>
                                            <input type="text" placeholder="" className="form-control" />
                                        </div>
                                        <div className="col-12 form-group">
                                            <label>Comments</label>
                                            <textarea className="textarea form-control" name="message" id="form-message"
                                                cols="10" rows="4"></textarea>
                                        </div>
                                        <div className="col-12 form-group mg-t-8">
                                            <button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                                            <button type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Exam Grade Add Area End Here --> */}
                    {/* <!-- Exam Grade List Area Start Here --> */}
                    <div className="col-8-xxxl col-12">
                        <div className="card height-auto">
                            <div className="card-body">
                                <div className="heading-layout1">
                                    <div className="item-title">
                                        <h3>Exam Grade Lists</h3>
                                    </div>
                                    <div className="dropdown">
                                        <NavLink className="dropdown-toggle" to="#" role="button" data-toggle="dropdown"
                                            aria-expanded="false">...</NavLink>

                                        <div className="dropdown-menu dropdown-menu-right">
                                            <NavLink className="dropdown-item" to="#"><i
                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                            <NavLink className="dropdown-item" to="#"><i
                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                            <NavLink className="dropdown-item" to="#"><i
                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                        </div>
                                    </div>
                                </div>
                                <form className="mg-b-20">
                                    <div className="row gutters-8">
                                        <div className="col-lg-5 col-sm-4 col-12 form-group">
                                            <input type="text" placeholder="Search by Grade ..." className="form-control" />
                                        </div>
                                        <div className="col-lg-5 col-sm-5 col-12 form-group">
                                            <input type="text" placeholder="Search by Point ..." className="form-control" />
                                        </div>
                                        <div className="col-lg-2 col-sm-3 col-12 form-group">
                                            <button type="submit"
                                                className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="table-responsive">
                                    <table className="table display data-table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input checkAll" />
                                                        <label className="form-check-label">Grade Name</label>
                                                    </div>
                                                </th>
                                                <th>Grade Point</th>
                                                <th>Percent From</th>
                                                <th>Percent Upto</th>
                                                <th>Comment</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">A+</label>
                                                    </div>
                                                </td>
                                                <td>3.50</td>
                                                <td>95.00</td>
                                                <td>100.00</td>
                                                <td>Good Result</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">B+</label>
                                                    </div>
                                                </td>
                                                <td>4.00</td>
                                                <td>95.00</td>
                                                <td>100.00</td>
                                                <td>Good Result</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">C+</label>
                                                    </div>
                                                </td>
                                                <td>3.50</td>
                                                <td>95.00</td>
                                                <td>100.00</td>
                                                <td>Good Result</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">D+</label>
                                                    </div>
                                                </td>
                                                <td>3.50</td>
                                                <td>95.00</td>
                                                <td>100.00</td>
                                                <td>Good Result</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">A+</label>
                                                    </div>
                                                </td>
                                                <td>3.50</td>
                                                <td>95.00</td>
                                                <td>100.00</td>
                                                <td>Good Result</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">B+</label>
                                                    </div>
                                                </td>
                                                <td>4.00</td>
                                                <td>95.00</td>
                                                <td>100.00</td>
                                                <td>Good Result</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">C+</label>
                                                    </div>
                                                </td>
                                                <td>3.50</td>
                                                <td>95.00</td>
                                                <td>100.00</td>
                                                <td>Good Result</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">D+</label>
                                                    </div>
                                                </td>
                                                <td>3.50</td>
                                                <td>95.00</td>
                                                <td>100.00</td>
                                                <td>Good Result</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">A+</label>
                                                    </div>
                                                </td>
                                                <td>3.50</td>
                                                <td>95.00</td>
                                                <td>100.00</td>
                                                <td>Good Result</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">B+</label>
                                                    </div>
                                                </td>
                                                <td>4.00</td>
                                                <td>95.00</td>
                                                <td>100.00</td>
                                                <td>Good Result</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">C+</label>
                                                    </div>
                                                </td>
                                                <td>3.50</td>
                                                <td>95.00</td>
                                                <td>100.00</td>
                                                <td>Good Result</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">D+</label>
                                                    </div>
                                                </td>
                                                <td>3.50</td>
                                                <td>95.00</td>
                                                <td>100.00</td>
                                                <td>Good Result</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">A+</label>
                                                    </div>
                                                </td>
                                                <td>3.50</td>
                                                <td>95.00</td>
                                                <td>100.00</td>
                                                <td>Good Result</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">B+</label>
                                                    </div>
                                                </td>
                                                <td>4.00</td>
                                                <td>95.00</td>
                                                <td>100.00</td>
                                                <td>Good Result</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">C+</label>
                                                    </div>
                                                </td>
                                                <td>3.50</td>
                                                <td>95.00</td>
                                                <td>100.00</td>
                                                <td>Good Result</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">D+</label>
                                                    </div>
                                                </td>
                                                <td>3.50</td>
                                                <td>95.00</td>
                                                <td>100.00</td>
                                                <td>Good Result</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Exam Grade List Area End Here --> */}
                </div>
                {/* <!-- All Subjects Area End Here --> */}
                <footer className="footer-wrap-layout1">
                    <div className="copyright">© Copyrights <NavLink to="#">akkhor</NavLink> 2019. All rights reserved. Designed by
                        <NavLink to="#">PsdBosS</NavLink></div>
                </footer>
            </div>
        </div>
        {/* <!-- Page Area End Here --> */}
    </div>
    </>
  );
};

export default ExamGrades;