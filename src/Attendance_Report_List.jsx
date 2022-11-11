import React from 'react';
import { NavLink } from 'react-router-dom';
import "../src/Attendance_Report_List.css";

import Sidebar from '../src/components/Sidebar/Sidebar.jsx';
import Header from '../src/components/Header/Header.jsx';

const Attendance_Report_List = () => {

    return (
        <>
            <div id="wrapper" className="wrapper bg-ash">
              <Header/>

                {/* <!-- Page Area Start Here --> */}
                <div className="dashboard-page-one">
                  
                  <Sidebar/>

                    <div className="dashboard-content-one">
                        {/* <!-- Breadcubs Area Start Here --> */}
                        <div className="breadcrumbs-area">
                            <ul>
                                <li>
                                    <NavLink to="index.html">Home</NavLink>
                                </li>
                                <li>Attendence Reports</li>
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
                                                <h3></h3>
                                            </div>
                                            <div className="dropdown">
                                                <NavLink to="watch_video.php?videourl=<?php echo $video[0]['video_url'];?>" target="_blank" className="demo btn btn-success"><i className="fa fa-play"></i>&nbsp;&nbsp;Watch Demo</NavLink>


                                                <div className="clearfix"></div>

                                            </div>
                                        </div>
                                        {/* <!-- page content --> */}
                                        <div className="right_col" role="main">
                                            <div className="">
                                                <div className="row top_tiles">

                                                    <br />

                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                        <NavLink to="/edit_attend">
                                                            <div className="summery dashboard-summery-one">
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="item-icon bg-light-magenta">
                                                                            <i className="flaticon-checklist text-magenta"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="item item-content">
                                                                            <div className="item-title">Day Attendance Summary</div>
                                                                            <div className="item-number"><span></span><span className="counter" data-num=""></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </NavLink>

                                                    </div>


                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                        <NavLink to="classwise_monthly_attendance_report.php">
                                                            <div className="summery dashboard-summery-one">
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="item-icon bg-light-blue">
                                                                            <i className="flaticon-checklist text-blue"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="item item-content">
                                                                            <div className="item-title"> Institute Attendance Summary</div>
                                                                            <div className="item-number"><span></span><span className="counter" data-num=""></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </NavLink>
                                                    </div>


                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                        <NavLink to="monthly_attendance_report.php">
                                                            <div className="summery dashboard-summery-one">
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="item-icon bg-light-blue">
                                                                            <i className="flaticon-checklist text-blue"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="item item-content">
                                                                            <div className="item-title">Filled Attendance Sheet</div>
                                                                            <div className="item-number"><span></span><span className="counter" data-num=""></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </NavLink>

                                                    </div>

                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                        <NavLink to="/attend_sheet">
                                                            <div className="summery dashboard-summery-one">
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="item-icon bg-light-red">
                                                                            <i className="flaticon-checklist text-red"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="item item-content">
                                                                            <div className="item-title"> Blank Attendance Sheet </div>
                                                                            <div className="item-number"><span></span><span className="counter" data-num=""></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </NavLink>

                                                    </div>




                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">

                                                        <NavLink to="#" data-toggle="modal" data-target="#mostabsent">
                                                            <div className="summery dashboard-summery-one">
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="item-icon bg-light-green">
                                                                            <i className="flaticon-checklist text-green"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="item item-content">
                                                                            <div className="item-title">Most Absentees ()</div>
                                                                            <div className="item-number"><span></span><span className="counter" data-num=""></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </NavLink>


                                                        {/* <!-- Student Result popup start --> */}


                                                        <div id="mostabsent" className="modal fade" role="dialog">
                                                            <div className="modal-dialog">

                                                                {/* <!-- Modal content--> */}
                                                                <div className="modal-content">
                                                                    <div className="modal modal-header">
                                                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                                        <h4 className="title modal-title">  </h4>
                                                                    </div>

                                                                    <div className="modal-body">

                                                                        <form action="absent_students.php" method="get">

                                                                            <input type="hidden" name="dashboard" value="dashboard" />

                                                                            <div className="col_12 col-md-12">

                                                                                <div className="form-group ">

                                                                                    <label className="required">Year</label>
                                                                                    <select name="session" className="form-control" >


                                                                                        <option>Select Year</option>

                                                                                        <option></option>

                                                                                    </select>
                                                                                </div>


                                                                            </div>


                                                                            <div className="col_12 col-md-12">

                                                                                <div className="form-group ">

                                                                                    <label className="required">No Of Records</label>
                                                                                    <select name="records" className="form-control" >

                                                                                        <option value="50">50</option>
                                                                                        <option value="100">100</option>
                                                                                        <option value="150">150</option>
                                                                                        <option value="150">200</option>
                                                                                        <option value="200">500</option>
                                                                                        <option value="200">800</option>
                                                                                        <option value="200">1000</option>
                                                                                        <option value="200">1500</option>



                                                                                    </select>
                                                                                </div>


                                                                            </div>



                                                                            <div className="col_12 col-md-12" id="">

                                                                                <div className="form-group ">

                                                                                    <label className="required"> Month</label>
                                                                                    <select name="month" id="month" className="form-control" required>

                                                                                        <option value="All">All</option>
                                                                                        <option>1</option>
                                                                                        <option>2</option>

                                                                                    </select>

                                                                                </div>
                                                                            </div>

                                                                            <div className="col-md-12">
                                                                                <label className="container1">
                                                                                    <input type="checkbox" name="father_cellno" checked value="1" />
                                                                                    Father Contact No
                                                                                    <span className="checkmark"></span>
                                                                                </label>

                                                                                <label className="container1">
                                                                                    <input type="checkbox" name="mother_cell" checked value="1" />
                                                                                    Mother Contact No
                                                                                    <span className="checkmark"></span>
                                                                                </label>

                                                                                <label className="container1">
                                                                                    <input type="checkbox" name="home_number" checked value="1" />
                                                                                    Home Contact No
                                                                                    <span className="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="modal-footer">

                                                                                <button type="submit" formtarget="_blank" className="btn btn-primary" name="submit" >Submit </button>



                                                                            </div>



                                                                        </form>

                                                                    </div>

                                                                </div>

                                                            </div>
                                                        </div>

                                                        {/* <!-- Student result popup ending --> */}

                                                    </div>


                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                        <NavLink to="/" target="_blank"></NavLink>
                                                        <NavLink to="attendance_report.php" target="_blank">
                                                            <div className="summery dashboard-summery-one">
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="item-icon bg-light-red">
                                                                            <i className="flaticon-checklist text-red"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="item item-content">
                                                                            <div className="item-title">Daily Attendance Report</div>
                                                                            <div className="item-number"><span></span><span className="counter" data-num=""></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </NavLink>

                                                    </div>

                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                        <NavLink to="#" data-toggle="modal" data-target="#studentAttendance">
                                                            <div className="summery dashboard-summery-one">
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="item-icon bg-light-red">
                                                                            <i className="flaticon-checklist text-red"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="item item-content">
                                                                            <div className="item-title">Single Student Attendance</div>
                                                                            <div className="item-number"><span></span><span className="counter" data-num=""></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </NavLink>





                                                        {/* <!-- Student Result popup start --> */}


                                                        <div id="studentAttendance" className="modal fade" role="dialog">
                                                            <div className="modal-dialog">


                                                                <div className="modal-content">
                                                                    <div className="modal modal-header">
                                                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                                        <h4 className="modal modal-title">  </h4>
                                                                    </div>

                                                                    <div className="modal-body">


                                                                        <form action="/" method="get" />

                                                                        <input type="hidden" name="dashboard" value="dashboard" />

                                                                        <div className="col_12 col-md-12">


                                                                            <br /><br />

                                                                            <b> Step 1: </b> &nbsp;&nbsp;  Please Search Student Name In Top Search Bar And open its student profile.
                                                                            <br /><br />
                                                                            <b> Step 2: </b> &nbsp;&nbsp; At Student Profie Page Click on Button "Print Student" Attendance History



                                                                        </div>





                                                                        <div className="modal-footer">





                                                                        </div>





                                                                    </div>

                                                                </div>

                                                            </div>
                                                        </div>



                                                    </div>




                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                        <NavLink to="/datewise_class_attend_rep" target="_blank"></NavLink>
                                                        <NavLink to="/datewise_class_attend_rep">
                                                            <div className="summery dashboard-summery-one">
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="item-icon bg-light-green">
                                                                            <i className="flaticon-checklist text-green"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="item item-content">
                                                                            <div className="item-title">Date Wise Attendance Report</div>
                                                                            <div className="item-number"><span></span><span className="counter" data-num=""></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </NavLink>

                                                    </div>






                                                    <div>
                                                        <ul className="verticle_bars list-inline">
                                                            <li>
                                                                <div className="progress vertical progress_wide bottom">
                                                                    <div className="progress-bar progress-bar-dark" role="progressbar" data-transitiongoal="<?php //echo getTodayPresentStudentPercentage($m); ?>"></div>
                                                                </div>
                                                            </li>



                                                        </ul>
                                                    </div>










                                                </div>



                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* <!-- /page content --> */}


                        </div>
                    </div>
                </div>
            </div>




        </>
    );

};

export default Attendance_Report_List;