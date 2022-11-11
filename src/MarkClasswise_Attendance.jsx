import React from 'react';
import { NavLink } from 'react-router-dom';
import "../src/Attendance_Report.css";


// images
import logo1 from "../src/img/logo1.png";
import student11 from "../src/img/figure/student11.png";
import student12 from "../src/img/figure/student12.png";
import student13 from "../src/img/figure/student13.png";
import logo from "../src/img/logo.png"
import admin from "../src/img/figure/admin.jpg";


const Attendance_Report = () => {

    return (
        <>
            <div id="wrapper" className="wrapper bg-ash">
                {/* <!-- Header Menu Area Start Here --> */}
                <div className="navbar navbar-expand-md header-menu-one bg-light">
                    <div className="nav-bar-header-one">
                        <div className="header-logo">
                            <NavLink to="index.html">
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
                                <NavLink to="index.html"><img src={logo1} alt="logo" /></NavLink>
                            </div>
                        </div>
                        <div className="sidebar-menu-content">
                            <ul className="nav nav-sidebar-menu sidebar-toggle-view">
                                <li className="nav-item sidebar-nav-item">
                                    <NavLink to="#" className="nav-link"><i className="flaticon-dashboard"></i><span>Dashboard</span></NavLink>
                                    <ul className="nav sub-group-menu">
                                        <li className="nav-item">
                                            <NavLink to="index.html" className="nav-link"><i className="fa fa-angle-right"></i>Admin</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="index3.html" className="nav-link"><i className="fa fa-angle-right"></i>Students</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="index4.html" className="nav-link"><i className="fa fa-angle-right"></i>Parents</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="index5.html" className="nav-link"><i className="fa fa-angle-right"></i>Teachers</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item sidebar-nav-item">
                                    <NavLink to="#" className="nav-link"><i className="flaticon-classmates"></i><span>Students</span></NavLink>
                                    <ul className="nav sub-group-menu">
                                        <li className="nav-item">
                                            <NavLink to="all-student.html" className="nav-link"><i className="fa fa-angle-right"></i>All Students</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="student-details.html" className="nav-link"><i className="fa fa-angle-right"></i>Student Details</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="admit-form.html" className="nav-link"><i className="fa fa-angle-right"></i>Admission Form</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="student-promotion.html" className="nav-link"><i className="fa fa-angle-right"></i>Student Promotion</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item sidebar-nav-item">
                                    <NavLink to="/allteacher" className="nav-link"><i className="flaticon-multiple-users-silhouette"></i><span>Teachers</span></NavLink>
                                    <ul className="nav sub-group-menu">
                                        <li className="nav-item">
                                            <NavLink to="/allteacher" className="nav-link"><i className="fa fa-angle-right"></i>All Teachers</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/teacherdetails" className="nav-link"><i className="fa fa-angle-right"></i>Teacher Details</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/addteacher" className="nav-link"><i className="fa fa-angle-right"></i>Add Teacher</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/teacherpayment" className="nav-link"><i className="fa fa-angle-right"></i>Payment</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item sidebar-nav-item">
                                    <NavLink to="/allparents" className="nav-link"><i className="flaticon-couple"></i><span>Parents</span></NavLink>
                                    <ul className="nav sub-group-menu">
                                        <li className="nav-item">
                                            <NavLink to="/allparents" className="nav-link"><i className="fa fa-angle-right"></i>All Parents</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/parentsdetails" className="nav-link"><i className="fa fa-angle-right"></i>Parents Details</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/addparents" className="nav-link"><i className="fa fa-angle-right"></i>Add Parent</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item sidebar-nav-item">
                                    <NavLink to="/all_book" className="nav-link"><i className="flaticon-books"></i><span>Library</span></NavLink>
                                    <ul className="nav sub-group-menu">
                                        <li className="nav-item">
                                            <NavLink to="/all_book" className="nav-link"><i className="fa fa-angle-right"></i>All Book</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/add_book" className="nav-link"><i className="fa fa-angle-right"></i>Add New Book</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item sidebar-nav-item">
                                    <NavLink to="/all_fees" className="nav-link"><i className="flaticon-technological"></i><span>Acconunt</span></NavLink>
                                    <ul className="nav sub-group-menu">
                                        <li className="nav-item">
                                            <NavLink to="/all_fees" className="nav-link"><i className="fa fa-angle-right"></i>All Fees Collection</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/all_expense" className="nav-link"><i className="fa fa-angle-right"></i>Expenses</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/add_expense" className="nav-link"><i className="fa fa-angle-right"></i>Add Expenses</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item sidebar-nav-item">
                                    <NavLink to="/all_class" className="nav-link"><i className="flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler"></i><span>Class</span></NavLink>
                                    <ul className="nav sub-group-menu">
                                        <li className="nav-item">
                                            <NavLink to="/all_class" className="nav-link"><i className="fa fa-angle-right"></i>All classes</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/add_class" className="nav-link"><i className="fa fa-angle-right"></i>Add New class</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/all_subject" className="nav-link"><i className="flaticon-open-book"></i><span>Subject</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/className_routine" className="nav-link"><i className="flaticon-calendar"></i><span>Class Routine</span></NavLink>
                                </li>

                                <li className="nav-item sidebar-nav-item">
                                    <NavLink to="/mark_attend" className="nav-link">
                                        <i className="flaticon-checklist"></i><span>Attendence</span></NavLink>
                                    <ul className="nav sub-group-menu">
                                        <li className="nav-item">
                                            <NavLink to="/mark_attend" className="nav-link"><i className="fa fa-angle-right"></i>Mark Attendance</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/attend_rep" className="nav-link"><i
                                                className="fa fa-angle-right"></i>Attendance Reports</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/send_sms" className="nav-link"><i
                                                className="fa fa-angle-right"></i>Send SMS Report</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/student_attendence" className="nav-link menu-active"><i className="flaticon-checklist"></i><span>Attendance Report</span></NavLink>
                                </li>
                                <li className="nav-item sidebar-nav-item">
                                    <NavLink to="/exam_schedule" className="nav-link"><i className="flaticon-shopping-list"></i><span>Exam</span></NavLink>
                                    <ul className="nav sub-group-menu">
                                        <li className="nav-item">
                                            <NavLink to="/exam_schedule" className="nav-link"><i className="fa fa-angle-right"></i>Exam Schedule</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/exam_grade" className="nav-link"><i className="fa fa-angle-right"></i>Exam Grades</NavLink>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/transport" className="nav-link"><i className="flaticon-bus-side-view"></i><span>Transport</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/hostel" className="nav-link"><i className="flaticon-bed"></i><span>Hostel</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/notice" className="nav-link"><i className="flaticon-script"></i><span>Notice</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/messaging" className="nav-link"><i className="flaticon-chat"></i><span>Messeage</span></NavLink>
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
                                    <NavLink to="/map" className="nav-link"><i className="flaticon-planet-earth"></i><span>Map</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/account" className="nav-link"><i className="flaticon-settings"></i><span>Account</span></NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>  {/*Sidebar Area End Here*/}

                    <div className="dashboard-content-one">
                        {/* <!-- Breadcubs Area Start Here --> */}
                        <div className="breadcrumbs-area">
                            <ul>
                                <li>
                                    <NavLink to="index.html">Home</NavLink>
                                </li>
                                <li>Attendence Reports</li>
                                <li>Mark Class Wise Students Attendence</li>
                            </ul>
                        </div>
                        {/* <!-- Breadcubs Area End Here --> */}
                        <div className="row">
                            {/* <!-- Student Attendence Search Area Start Here --> */}

                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="heading-layout1">
                                            <div className="item-title">

                                            </div>
                                            <div className="dropdown">
                                                <NavLink className="btn btn-primary" title="Print Students List" to="/attend_report_list">
                                                    Attendance Reports
                                                </NavLink>

                                                <div className="clearfix"></div>

                                            </div>
                                        </div>

                                        <section className="add_sub_agent" id="table_sub_agent" />
                                        <div className="container">
                                            <div className="box_visa_form">
                                                <div className="table-responsive">

                                                    <table className="table table-striped table-bordered">
                                                        <thead>
                                                            <tr>

                                                                <td width="10%">S.No</td>
                                                                <td width="40%">Class/Section</td>
                                                                <td width="30%">Action </td>

                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>

                                                                <td>01</td>

                                                                <td>Prep</td>

                                                                <td>
                                                                    <NavLink className="btn btn-danger" title="Print Students List" to="">
                                                                        Mark Students Attendance
                                                                    </NavLink>

                                                                </td>

                                                            </tr>
                                                            <tr>

                                                                <td>02</td>

                                                                <td>Play Group</td>

                                                                <td>
                                                                    <NavLink className="btn btn-danger" title="Print Students List" to="mark_attend.php?s=<?php echo session_id().session_id().session_id();?>&class_id=<?php echo $cls?>&section=<?php echo $section?>&date=<?php echo $date;?>&session=<?php echo $_SESSION['current_session'];?>">

                                                                        Mark Students Attendance
                                                                    </NavLink>

                                                                </td>

                                                            </tr>
                                                        </tbody>
                                                    </table>


                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>





                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                </div> {/*page area end*/}

            </div> {/*maindiv */}
        </>
    );

};

export default Attendance_Report;