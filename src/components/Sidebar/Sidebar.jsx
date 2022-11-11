import React from 'react';
import { NavLink } from 'react-router-dom';


// css links

import "../../css/normalize.css";
import "../../css/main.css";
import "../../fonts/flaticon.css";
import "../../css/bootstrap.min.css";
import "../../css/animate.min.css";
import "../../css/style.css";

// images
import logo1 from "../../img/logo1.png";


const Sidebar = () => {
    
        return(
            <>
            {/* Sidebar Area Start Here */}
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
                              <NavLink to="allstudent" className="nav-link"><i className="fa fa-angle-right"></i>All
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
                              <NavLink to="/all_class" className="nav-link"><i className="fa fa-angle-right"></i>All
                                  Classes</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink to="/add_class" className="nav-link"><i className="fa fa-angle-right"></i>Add New
                                  Class</NavLink>
                          </li>
                      </ul>
                  </li>
                  <li className="nav-item">
                      <NavLink to="/add_subject" className="nav-link"><i
                          className="flaticon-open-book"></i><span>Subject</span></NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink to="/class_routine" className="nav-link"><i className="flaticon-calendar"></i><span>Class
                          Routine</span></NavLink>
                  </li>


                  <li className="nav-item sidebar-nav-item">
                      <NavLink to="/mark_attend" className="nav-link"><i className="flaticon-checklist"></i><span>Attendence</span></NavLink>
                      
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
                      <NavLink to="/student_attendance" className="nav-link"><i
                          className="flaticon-checklist"></i><span>Attendence</span></NavLink>
                  </li>
                  <li className="nav-item sidebar-nav-item">
                      <NavLink to="/exam_schedule" className="nav-link"><i className="flaticon-shopping-list"></i><span>Exam</span></NavLink>
                      <ul className="nav sub-group-menu">
                          <li className="nav-item">
                              <NavLink to="/exam_schedule" className="nav-link"><i className="fa fa-angle-right"></i>Exam
                                  Schedule</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink to="/exam_grade" className="nav-link"><i className="fa fa-angle-right"></i>Exam
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
                      <NavLink to="/message" className="nav-link"><i
                          className="flaticon-chat"></i><span>Messeage</span></NavLink>
                  </li>
                  <li className="nav-item sidebar-nav-item">
                      <NavLink to="#" className="nav-link"><i className="flaticon-menu-1"></i><span>UI Elements</span></NavLink>
                      <ul className="nav sub-group-menu">
                          <li className="nav-item">
                              <NavLink to="/notification_alart" className="nav-link"><i className="fa fa-angle-right"></i>Alart</NavLink>
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
                  <li className="nav-item">
                      <NavLink to="/pai_chart" className="nav-link"><i
                          className="flaticon-planet-earth"></i><span>PaiChart</span></NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink to="/attend_rep" className="nav-link"><i
                          className="flaticon-planet-earth"></i><span>Attendance Report</span></NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink to="/markclass_attend" className="nav-link"><i
                          className="flaticon-planet-earth"></i><span>Mark ClassWise Attendance </span></NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink to="/attend_report_list" className="nav-link"><i
                          className="flaticon-planet-earth"></i><span>Attendance Report List </span></NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink to="/attend_sheet" className="nav-link"><i
                          className="flaticon-planet-earth"></i><span>Attendance Sheet </span></NavLink>
                  </li>

                  <li className="nav-item">
                      <NavLink to="/datewise_class_attend_rep" className="nav-link"><i
                          className="flaticon-planet-earth"></i><span>DateWise Attendance Report </span></NavLink>
                  </li>

              </ul>
          </div>
      </div>

      {/*Sidebar Area End Here */}
   
    </>


   );
};

export default Sidebar;