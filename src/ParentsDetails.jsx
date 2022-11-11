import React from 'react';
import { NavLink } from 'react-router-dom';

// images
import parents from "../src/img/figure/parents.jpg";
import logo from "../src/img/logo.png"
import admin from "../src/img/figure/admin.jpg";
import logo1 from "../src/img/logo1.png";
import student11 from "../src/img/figure/student11.png";
import student12 from "../src/img/figure/student12.png";
import student13 from "../src/img/figure/student13.png";


const ParentsDetails =() => {
  return (
    <>
        {/* <!-- Preloader Start Here --> */}
    {/* <div id="preloader"></div> */}
    {/* <!-- Preloader End Here --> */}
    <div id="wrapper" class="wrapper bg-ash">
         {/* <!-- Header Menu Area Start Here --> */}
        <div class="navbar navbar-expand-md header-menu-one bg-light">
            <div class="nav-bar-header-one">
                <div class="header-logo">
                    <NavLink to="/admin_dashboard">
                        <img src={logo} alt="logo" />
                    </NavLink>
                </div>
                  <div class="toggle-button sidebar-toggle">
                    <button type="button" class="item-link">
                        <span class="btn-icon-wrap">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                </div>
            </div>
            <div class="d-md-none mobile-nav-bar">
               <button class="navbar-toggler pulse-animation" type="button" data-toggle="collapse" data-target="#mobile-navbar" aria-expanded="false">
                    <i class="fa fa-arrow-alt-circle-down"></i>
                </button>
                <button type="button" class="navbar-toggler sidebar-toggle-mobile">
                    <i class="fa fa-bars"></i>
                </button>
            </div>
            <div class="header-main-menu collapse navbar-collapse" id="mobile-navbar">
                <ul class="navbar-nav">
                    <li class="navbar-item header-search-bar">
                        <div class="input-group stylish-input-group">
                            <span class="input-group-addon">
                                <button type="submit">
                                    <span class="flaticon-search" aria-hidden="true"></span>
                                </button>
                            </span>
                            <input type="text" class="form-control" placeholder="Find Something . . ." />
                        </div>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="navbar-item dropdown header-admin">
                        <NavLink class="navbar-nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown"
                            aria-expanded="false">
                            <div class="admin-title">
                                <h5 class="item-title">Stevne Zone</h5>
                                <span>Admin</span>
                            </div>
                            <div class="admin-img">
                                <img src={admin} alt="Admin" />
                            </div>
                        </NavLink>
                        <div class="dropdown-menu dropdown-menu-right">
                            <div class="item-header">
                                <h6 class="item-title">Steven Zone</h6>
                            </div>
                            <div class="item-content">
                                <ul class="settings-list">
                                    <li><NavLink to="#"><i class="flaticon-user"></i>My Profile</NavLink></li>
                                    <li><NavLink to="#"><i class="flaticon-list"></i>Task</NavLink></li>
                                    <li><NavLink to="#"><i class="flaticon-chat-comment-oval-speech-bubble-with-text-lines"></i>Message</NavLink></li>
                                    <li><NavLink to="#"><i class="flaticon-gear-loading"></i>Account Settings</NavLink></li>
                                    <li><NavLink to="login.html"><i class="flaticon-turn-off"></i>Log Out</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="navbar-item dropdown header-message">
                        <NavLink class="navbar-nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa fa-envelope"></i>
                            <div class="item-title d-md-none text-16 mg-l-10">Message</div>
                            <span>5</span>
                        </NavLink>

                        <div class="dropdown-menu dropdown-menu-right">
                            <div class="item-header">
                                <h6 class="item-title">05 Message</h6>
                            </div>
                            <div class="item-content">
                                <div class="media">
                                    <div class="item-img bg-skyblue author-online">
                                        <img src={student11} alt="img" />
                                    </div>
                                    <div class="media-body space-sm">
                                        <div class="item-title">
                                            <NavLink to="#">
                                                <span class="item-name">Maria Zaman</span> 
                                                <span class="item-time">18:30</span> 
                                            </NavLink>  
                                        </div>
                                        <p>What is the reason of buy this item. 
                                        Is it usefull for me.....</p>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="item-img bg-yellow author-online">
                                        <img src={student12} alt="img" />
                                    </div>
                                    <div class="media-body space-sm">
                                        <div class="item-title">
                                            <NavLink to="#">
                                                <span class="item-name">Benny Roy</span> 
                                                <span class="item-time">10:35</span> 
                                            </NavLink>  
                                        </div>
                                        <p>What is the reason of buy this item. 
                                        Is it usefull for me.....</p>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="item-img bg-pink">
                                        <img src={student13} alt="img" /> 
                                    </div>
                                    <div class="media-body space-sm">
                                        <div class="item-title">
                                            <NavLink to="#">
                                                <span class="item-name">Steven</span> 
                                                <span class="item-time">02:35</span> 
                                            </NavLink>  
                                        </div>
                                        <p>What is the reason of buy this item. 
                                        Is it usefull for me.....</p>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="item-img bg-violet-blue">
                                        <img src={student11} alt="img" />
                                    </div>
                                    <div class="media-body space-sm">
                                        <div class="item-title">
                                            <NavLink to="#">
                                                <span class="item-name">Joshep Joe</span> 
                                                <span class="item-time">12:35</span> 
                                            </NavLink>  
                                        </div>
                                        <p>What is the reason of buy this item. 
                                        Is it usefull for me.....</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="navbar-item dropdown header-notification">
                        <NavLink class="navbar-nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa fa-bell"></i>
                            <div class="item-title d-md-none text-16 mg-l-10">Notification</div>
                            <span>8</span>
                        </NavLink>

                        <div class="dropdown-menu dropdown-menu-right">
                            <div class="item-header">
                                <h6 class="item-title">03 Notifiacations</h6>
                            </div>
                            <div class="item-content">
                                <div class="media">
                                    <div class="item-icon bg-skyblue">
                                        <i class="fa fa-check"></i>
                                    </div>
                                    <div class="media-body space-sm">
                                        <div class="post-title">Complete Today Task</div>
                                        <span>1 Mins ago</span>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="item-icon bg-orange">
                                        <i class="fa fa-calendar-alt"></i>
                                    </div>
                                    <div class="media-body space-sm">
                                        <div class="post-title">Director Metting</div>
                                        <span>20 Mins ago</span>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="item-icon bg-violet-blue">
                                        <i class="fa fa-cogs"></i>
                                    </div>
                                    <div class="media-body space-sm">
                                        <div class="post-title">Update Password</div>
                                        <span>45 Mins ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                     <li class="navbar-item dropdown header-language">
                        <NavLink class="navbar-nav-link dropdown-toggle" to="#" role="button" 
                        data-toggle="dropdown" aria-expanded="false"><i class="fa fa-globe-americas"></i>EN</NavLink>
                        <div class="dropdown-menu dropdown-menu-right">
                            <NavLink class="dropdown-item" to="#">English</NavLink>
                            <NavLink class="dropdown-item" to="#">Spanish</NavLink>
                            <NavLink class="dropdown-item" to="#">Franchis</NavLink>
                            <NavLink class="dropdown-item" to="#">Chiness</NavLink>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        {/* <!-- Header Menu Area End Here --> */}
        {/* <!-- Page Area Start Here --> */}
        <div class="dashboard-page-one">
            {/* <!-- Sidebar Area Start Here --> */}
           <div class="sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color">
               <div class="mobile-sidebar-header d-md-none">
                    <div class="header-logo">
                        <NavLink to="/admin_dashboard"><img src={logo1} alt="logo" /></NavLink>
                    </div>
               </div>
                <div class="sidebar-menu-content">
                    <ul class="nav nav-sidebar-menu sidebar-toggle-view">
                        <li class="nav-item sidebar-nav-item">
                            <NavLink to="/students" class="nav-link"><i class="flaticon-dashboard"></i><span>Dashboard</span></NavLink>
                            <ul class="nav sub-group-menu">
                                <li class="nav-item">
                                    <NavLink to="/admin_dashboard" class="nav-link"><i class="fa fa-angle-right"></i>Admin</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/students" class="nav-link"><i class="fa fa-angle-right"></i>Students</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/parents" class="nav-link"><i class="fa fa-angle-right"></i>Parents</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/teachers" class="nav-link"><i class="fa fa-angle-right"></i>Teachers</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item sidebar-nav-item">
                            <NavLink to="/allstudent" class="nav-link"><i class="flaticon-classmates"></i><span>Students</span></NavLink>
                            <ul class="nav sub-group-menu">
                                <li class="nav-item">
                                    <NavLink to="/allstudent" class="nav-link"><i class="fa fa-angle-right"></i>All Students</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/studentdetails" class="nav-link"><i class="fa fa-angle-right"></i>Student Details</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/admitform" class="nav-link"><i class="fa fa-angle-right"></i>Admission Form</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/studentpromotion" class="nav-link"><i class="fa fa-angle-right"></i>Student Promotion</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item sidebar-nav-item">
                            <NavLink to="/allteacher" class="nav-link"><i class="flaticon-multiple-users-silhouette"></i><span>Teachers</span></NavLink>
                            <ul class="nav sub-group-menu">
                                <li class="nav-item">
                                    <NavLink to="/allteacher" class="nav-link"><i class="fa fa-angle-right"></i>All Teachers</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/teacherdetails" class="nav-link"><i class="fa fa-angle-right"></i>Teacher Details</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/addteacher" class="nav-link"><i class="fa fa-angle-right"></i>Add Teacher</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/teacherpayment" class="nav-link"><i class="fa fa-angle-right"></i>Payment</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item sidebar-nav-item">
                            <NavLink to="/allparents" class="nav-link"><i class="flaticon-couple"></i><span>Parents</span></NavLink>
                            <ul class="nav sub-group-menu sub-group-active">
                                <li class="nav-item">
                                    <NavLink to="/allparents" class="nav-link"><i class="fa fa-angle-right"></i>All Parents</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/parentsdetails" class="nav-link menu-active"><i class="fa fa-angle-right"></i>Parents Details</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/addparents" class="nav-link"><i class="fa fa-angle-right"></i>Add Parent</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item sidebar-nav-item">
                            <NavLink to="/all_book" class="nav-link"><i class="flaticon-books"></i><span>Library</span></NavLink>
                            <ul class="nav sub-group-menu">
                                <li class="nav-item">
                                    <NavLink to="/all_book" class="nav-link"><i class="fa fa-angle-right"></i>All Book</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/add_book" class="nav-link"><i class="fa fa-angle-right"></i>Add New Book</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item sidebar-nav-item">
                            <NavLink to="/all_fees" class="nav-link"><i class="flaticon-technological"></i><span>Acconunt</span></NavLink>
                            <ul class="nav sub-group-menu">
                                <li class="nav-item">
                                    <NavLink to="/all_fees" class="nav-link"><i class="fa fa-angle-right"></i>All Fees Collection</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/all_expense" class="nav-link"><i class="fa fa-angle-right"></i>Expenses</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/add_expense" class="nav-link"><i class="fa fa-angle-right"></i>Add Expenses</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item sidebar-nav-item">
                            <NavLink to="/all_classes" class="nav-link"><i class="flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler"></i><span>Class</span></NavLink>
                            <ul class="nav sub-group-menu">
                                <li class="nav-item">
                                    <NavLink to="/all_classes" class="nav-link"><i class="fa fa-angle-right"></i>All Classes</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/add_class" class="nav-link"><i class="fa fa-angle-right"></i>Add New Class</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/all_subject" class="nav-link"><i class="flaticon-open-book"></i><span>Subject</span></NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/class_routine" class="nav-link"><i class="flaticon-calendar"></i><span>Class Routine</span></NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/student_attendence" class="nav-link"><i class="flaticon-checklist"></i><span>Attendence</span></NavLink>
                        </li>
                        <li class="nav-item sidebar-nav-item">
                            <NavLink to="#" class="nav-link"><i class="flaticon-shopping-list"></i><span>Exam</span></NavLink>
                            <ul class="nav sub-group-menu">
                                <li class="nav-item">
                                    <NavLink to="/exam_schedule" class="nav-link"><i class="fa fa-angle-right"></i>Exam Schedule</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/exam_grade" class="nav-link"><i class="fa fa-angle-right"></i>Exam Grades</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/transport" class="nav-link"><i class="flaticon-bus-side-view"></i><span>Transport</span></NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/hostel" class="nav-link"><i class="flaticon-bed"></i><span>Hostel</span></NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/notice_board" class="nav-link"><i class="flaticon-script"></i><span>Notice</span></NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/messaging" class="nav-link"><i class="flaticon-chat"></i><span>Messeage</span></NavLink>
                        </li>
                         <li class="nav-item sidebar-nav-item">
                            <NavLink to="#" class="nav-link"><i class="flaticon-menu-1"></i><span>UI Elements</span></NavLink>
                            <ul class="nav sub-group-menu">
                                <li class="nav-item">
                                    <NavLink to="notification-alart.html" class="nav-link"><i class="fa fa-angle-right"></i>Alart</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="button.html" class="nav-link"><i class="fa fa-angle-right"></i>Button</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="grid.html" class="nav-link"><i class="fa fa-angle-right"></i>Grid</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="modal.html" class="nav-link"><i class="fa fa-angle-right"></i>Modal</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="progress-bar.html" class="nav-link"><i class="fa fa-angle-right"></i>Progress Bar</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="ui-tab.html" class="nav-link"><i class="fa fa-angle-right"></i>Tab</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="ui-widget.html" class="nav-link"><i
                                            class="fa fa-angle-right"></i>Widget</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/map" class="nav-link"><i class="flaticon-planet-earth"></i><span>Map</span></NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/account" class="nav-link"><i class="flaticon-settings"></i><span>Account</span></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <!-- Sidebar Area End Here --> */}
            <div class="dashboard-content-one">
                {/* <!-- Breadcubs Area Start Here --> */}
                <div class="breadcrumbs-area">
                    <h3>Parents</h3>
                    <ul>
                        <li>
                            <NavLink to="/admin_dashboard">Home</NavLink>
                        </li>
                        <li>Parents Details</li>
                    </ul>
                </div>
                {/* <!-- Breadcubs Area End Here --> */}
                {/* <!-- Student Details Area Start Here --> */}
                <div class="card height-auto">
                    <div class="card-body">
                        <div class="heading-layout1">
                            <div class="item-title">
                                <h3>About Me</h3>
                            </div>
                           <div class="dropdown">
                                <NavLink class="dropdown-toggle" to="#" role="button" 
                                data-toggle="dropdown" aria-expanded="false">...</NavLink>
        
                                <div class="dropdown-menu dropdown-menu-right">
                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-times text-orange-red"></i>Close</NavLink>
                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                </div>
                            </div>
                        </div>
                        <div class="single-info-details">
                            <div class="item-img">
                                <img src={parents} alt="student" />
                            </div>
                            <div class="item-content">
                                <div class="header-inline item-header">
                                    <h3 class="text-dark-medium font-medium">Steven Jones</h3>
                                    <div class="header-elements">
                                        <ul>
                                            <li><NavLink to="#"><i class="fa fa-edit"></i></NavLink></li>
                                            <li><NavLink to="#"><i class="fa fa-print"></i></NavLink></li>
                                            <li><NavLink to="#"><i class="fa fa-download"></i></NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <p>Aliquam erat volutpat. Curabiene natis massa sedde lacu stiquen sodale 
                                word moun taiery.Aliquam erat volutpaturabiene natis massa sedde  sodale 
                                word moun taiery.</p>
                                <div class="info-table table-responsive">
                                    <table class="table text-nowrap">
                                        <tbody>
                                            <tr>
                                                <td>Name:</td>
                                                <td class="font-medium text-dark-medium">Steven Jones</td>
                                            </tr>
                                            <tr>
                                                <td>Gender:</td>
                                                <td class="font-medium text-dark-medium">Male</td>
                                            </tr>
                                            <tr>
                                                <td>Occupation:</td>
                                                <td class="font-medium text-dark-medium">Business</td>
                                            </tr>
                                            <tr>
                                                <td>ID:</td>
                                                <td class="font-medium text-dark-medium">#15059</td>
                                            </tr>
                                            <tr>
                                                <td>Address:</td>
                                                <td class="font-medium text-dark-medium">House #10, Road #6, Australia</td>
                                            </tr>
                                            <tr>
                                                <td>Religion:</td>
                                                <td class="font-medium text-dark-medium">Islam</td>
                                            </tr>
                                            <tr>
                                                <td>Phone:</td>
                                                <td class="font-medium text-dark-medium">+ 88 98568888418</td>
                                            </tr>
                                            <tr>
                                                <td>E-mail:</td>
                                                <td class="font-medium text-dark-medium">jessiarose@gmail.com</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Student Details Area End Here --> */}
                <footer class="footer-wrap-layout1">
                    <div class="copyright">© Copyrights <NavLink to="#">akkhor</NavLink> 2019. All rights reserved. Designed by <NavLink to="#">PsdBosS</NavLink></div>
                </footer>
            </div>
        </div>
        {/* <!-- Page Area End Here --> */}
    </div>
    </>
  );
};

export default ParentsDetails;