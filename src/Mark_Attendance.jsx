import React from 'react';
import { NavLink } from 'react-router-dom';

import "../src/Mark_Attendance.css";

// css links
import "../src/css/normalize.css";
import "../src/css/main.css";
import "../src/fonts/flaticon.css";
import "../src/css/bootstrap.min.css";
import "../src/css/animate.min.css";
import "../src/css/style.css";

// images

import Sidebar from '../src/components/Sidebar/Sidebar.jsx';
import Header from '../src/components/Header/Header.jsx';


const Mark_Attendance = () => {

    return (
        <>

            <div id="wrapper" className="wrapper bg-ash">

                <Header />

                {/* <!-- Page Area Start Here --> */}
                <div className="dashboard-page-one">

                    <Sidebar />


                    <div className="dashboard-content-one">
                        {/* <!-- Breadcubs Area Start Here --> */}
                        <div className="breadcrumbs-area">
                            <h3>Student Attendence</h3>
                            <ul>
                                <li>
                                    <NavLink to="index.html">Home</NavLink>
                                </li>
                                <li>Mark Attendence</li>
                            </ul>
                        </div>
                        {/* <!-- Breadcubs Area End Here --> */}
                        <div className="row">
                            {/* <!-- Student Attendence Search Area Start Here --> */}
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">

                                        {/* <!-- page content --> */}
                                        <div className="right_col" role="main">
                                            <div className="">
                                                <h3 style={{float: "left"}}>Students Mark Attendance <small>(0 Students Records)</small> </h3>

                                                <div className="add_sub_agent" id="table_sub_agent">

                                                    <div className="container">

                                                        <div className="" style={{marginTop: "10px"}}>


                                                            <form className="" action="mark_attend.php" enctype="multipart/form-data" method="get" />



                                                            <input type="hidden" value="" name="session" />


                                                            <div className="pull-right">



                                                                <NavLink to="" className="btn btn-info" target="_blank">Daily Attendance Report</NavLink>

                                                                <NavLink to="" className="btn btn-success">View / Edit Attendance</NavLink>



                                                            </div>



                                                            <div className="clearfix"></div> </div>
                                                        <div className="panel-body" style={{padding: "0px"}}>

                                                            <div className="col-md-12" id="" style={{display: "flex"}}>

                                                                <div className="col-md-2" style={{padding: "8px"}}>
                                                                    <div className="form-group ">
                                                                        <label className="required">Session</label>
                                                                        <select name="session" className="form-control" >


                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-2" style={{padding: "8px"}}>
                                                                    <div className="form-group ">
                                                                        <label className="required">Class</label>

                                                                        <select name="class_id" className="form-control" onChange="getsec(this.value)"  >
                                                                            <option value="">All</option>
                                                                            <option value="">1</option>
                                                                            <option value="">2</option>


                                                                        </select>
                                                                    </div>
                                                                </div>


                                                                <div className="col-md-2" style={{padding: "8px"}}>
                                                                    <div className="form-group ">
                                                                        <label className="required">Section</label>
                                                                        <select name="section" id="txt_section" className="form-control" required >
                                                                            <option value="">All</option>
                                                                            <option value="">1</option>
                                                                            <option value="">2</option>

                                                                        </select>


                                                                    </div>
                                                                </div>




                                                                <div className="col-md-2" style={{padding: "8px"}}>
                                                                    <div className="form-group ">
                                                                        <label className="required">Date</label>

                                                                        <input className="form-control" type="date" name="date" id="date" value="" required />
                                                                    </div>
                                                                </div>



                                                                <div className="col-md-1" style={{padding: "2px", marginTop: "2.2em"}}>
                                                                    <div className="form-group ">
                                                                        <input type="hidden" name="addaccountAdmin" value="1" />
                                                                        <button type="submit" className="btn btn-primary" style={{marginTtop: "28px"}}>Search</button>
                                                                    </div>
                                                                </div>




                                                            </div>
                                                            <div className="clearfix"></div>
                                                        </div>
                                                    </div>
                                                    {/* </form> */}
                                                    <div className="clearfix"></div>
                                                </div>
                                                <br />


                                                <div className="col-md-12">

                                                    <div style={{display: "block"}} className="alert alert-danger alert-dismissible">
                                                        <NavLink to="#" className="close" data-dismiss="alert" aria-label="close">×</NavLink>
                                                        <strong>Warning !</strong> Please select className and month from advance search to mark attendance !!!
                                                    </div>
                                                </div>

                                                <div className="alert alert-success" id="msg">
                                                    <NavLink to="#" className="close" data-dismiss="alert" aria-label="close">&times;</NavLink>
                                                    <strong>Success!</strong> Attendance Save successfully... Please Search again className and section to mark attendance !!!
                                                </div>


                                                <div className="alert alert-danger" id="msg">
                                                    <NavLink to="#" className="close" data-dismiss="alert" aria-label="close">&times;</NavLink>
                                                    <strong>Warning!</strong> Attendance Already Saved !!!
                                                </div>

                                                <div className="alert alert-danger" style={{fontWeight: "bold", fontSize: "18px"}}>
                                                    <NavLink to="#" className="close" data-dismiss="alert" aria-label="close">&times;</NavLink>
                                                    <strong>Warning!</strong> Attendance Already Saved !!!
                                                </div>

                                                <div>


                                                    {/* <form className="form-style-7" action="<?php echo DOMAIN.AgentDirectory;?>parent/InsertMe.php" method="post" enctype="multipart/form-data">

                                                        {/* <input type="hidden" name="action" value="MarkAttendance">
                                                        <input type="hidden" id="class_id" name="class_id" value="<?php echo $_GET['class_id']; ?>" />
                                                        <input type="hidden" id="section_id" name="section_id" value="<?php echo $_GET['section']; ?>" />
                                                        <input type="hidden" id="session" name="session" value="<?php echo $_GET['session']; ?>" />
                                                        <input type="hidden" id="date" name="date" value="<?php echo $date1; ?>" />

                                                        <input type="submit" name="submit" className="btn btn-success pull-right" value="Save Attendance" style="" />
                                                        <input type="submit" name="holiday" className="btn btn-danger pull-right" value="Mark as holiday" style="margin-right: 15px;" />*/}

                                                        {/* style={{width: "100%", backgroundColor: "white"}} */}
                                                        {/* <table id="listofstudents" data-page-length='100' className="table table-striped table-bordered dataTable no-footer" >

                                                            <thead>
                                                                <tr>
                                                                    <th width="5%">S.No</th>
                                                                    <th width="15%">Student Name</th>
                                                                    <th width="15%">Father Name </th>

                                                                    <th width="8%" style="text-align:center;"> Date </th>
                                                                    <th width="40%">Attendance</th>
                                                                    <th width="10%">Roll#</th>
                                                                    <th width="10%">Adm#</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>

                                                                <tr>

                                                                    <td></td>
                                                                    <td>

                                                                        <input type="hidden" value="" />


                                                                    </td>

                                                                    <td> </td>

                                                                </tr>

                                                                <td style="text-align:center;"></td>

                                                                <td>

                                                                    <div style="float:left;">

                                                                        <label className="btn_style">Present
                                                                            <input type="radio" checked="checked" name="" value="P" />
                                                                            <span className="checkmark"></span>
                                                                        </label>

                                                                    </div>

                                                                    <div style="float:left;margin-left:2%">

                                                                        <label className="btn_style">Absent
                                                                            <input type="radio" name="" value="A" />
                                                                            <span className="checkmark"></span>
                                                                        </label>

                                                                    </div>

                                                                    <div style="float:left;margin-left:2%">

                                                                        <label className="btn_style">Leave
                                                                            <input type="radio" name="" value="L" />
                                                                            <span className="checkmark"></span>
                                                                        </label>

                                                                    </div>

                                                                    <div style="float:left;margin-left:2%">

                                                                        <label className="btn_style">Late
                                                                            <input type="radio" name="" value="LA" />
                                                                            <span className="checkmark"></span>
                                                                        </label>

                                                                    </div>

                                                                    <div style="float:left;margin-left:2%">

                                                                        <label className="btn_style">Short Leave
                                                                            <input type="radio" name="" value="SL" />
                                                                            <span className="checkmark"></span>
                                                                        </label>

                                                                    </div>


                                                                </td>

                                                                <td></td>

                                                                <td></td>

                                                            </tr>


                                                        </tbody>

                                                    </table> */}

                                                {/* </form> */} 

                                            </div>

                                            <br /><br />



                                        </div>

                                        <div className="clearfix"></div>

                                    </div>



                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!-- /page content --> */}


            </div>
        </div>

</>

);

};

export default Mark_Attendance;