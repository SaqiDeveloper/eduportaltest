import React from 'react';
import { NavLink } from 'react-router-dom';

// css links
import "../src/css/normalize.css";
import "../src/css/main.css";
import "../src/fonts/flaticon.css";
import "../src/css/bootstrap.min.css";
import "../src/css/animate.min.css";
import "../src/css/style.css";

import Sidebar from '../src/components/Sidebar/Sidebar.jsx';
import Header from '../src/components/Header/Header.jsx';

const Edit_Attendance = () => {
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

                                        </div>

                                        {/* <!-- page content --> */}
                                        <div className="right_col" role="main">
                                            <div className="">

                                                <NavLink to="">Dashboard </NavLink> &nbsp; <i className="fa fa-angle-double-right"></i>  &nbsp;

                                                <NavLink to="">Attendance Reports </NavLink> &nbsp; <i className="fa fa-angle-double-right"></i>  &nbsp;

                                                Day Attendance Summary


                                                <section className="">
                                                    <div className="container">
                                                        <div className="inner_banner_bg">

                                                            <div className="clearfix"></div>
                                                        </div>
                                                    </div>
                                                </section>

                                                <section className="add_sub_agent" id="table_sub_agent">
                                                    <div className="container">
                                                        <div className="box_visa_form">
                                                            <div className="table-responsive">

                                                                <form className="" action="select_edit_attendance.php" enctype="multipart/form-data" method="get">
                                                                    <input type="hidden" name="page" value="<?php echo $_REQUEST['page']; ?>" />
                                                                    <div className="col-md-3 col-xs-9">
                                                                        <div className="form-group ">
                                                                            <label className="required">Attendance Date</label>
                                                                            <input className="form-control" type="date" name="date" id="date" value="<?php echo $date;?>" required />
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-md-2 col-xs-9" >
                                                                        <div className="form-group ">
                                                                            <label className="required">Attendance</label>
                                                                            <select className="form-control" id="attendance" name="attendance">
                                                                                <option value="All"> All </option>
                                                                                <option value="P"> Present </option>
                                                                                <option value="A"> Absent </option>
                                                                                <option value="L"> Leave </option>
                                                                                <option value="LA"> Late </option>
                                                                                <option value="SL"> Short Leave </option>
                                                                            </select>

                                                                        </div>
                                                                    </div>

                                                                    <div className="submit_div col-md-1">
                                                                        <div className="form-group ">

                                                                            <button type="submit" className="btn btn-primary">Search</button>
                                                                        </div>
                                                                    </div>

                                                                    <NavLink to="#" className="report btn btn-info"> Attendance Reports</NavLink>

                                                                    <NavLink to="#" id="subuser" target="_blank" className="view btn btn-success">View Class Wise Attendance </NavLink>

                                                                    <NavLink to="#">Print Report</NavLink>

                                                                </form>





                                                                <div className="col-md-12">



                                                                    <table id="listofstudents" data-page-length='100' className="table table-striped table-bordered datatable">

                                                                        <thead>
                                                                            <tr>
                                                                                <th width="2%">S.No</th>
                                                                                <th width="12%">Student Name</th>
                                                                                <th width="10%"> Father Name </th>
                                                                                <th width="10%"> Cell No </th>
                                                                                <th width="8%">Roll#</th>
                                                                                <th width="10%"> Class </th>
                                                                                <th width="8%"> Date </th>
                                                                                <th width="10%">Attendance</th>
                                                                                <th width="6%">Action</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>




                                                                            <tr>

                                                                                <td> </td>


                                                                                <td>

                                                                                    <NavLink target="_blank" to=""></NavLink>

                                                                                </td>

                                                                                <td></td>
                                                                                <td></td>

                                                                                <td></td>
                                                                                <td></td>
                                                                                <td></td>

                                                                                <td></td>

                                                                                <td>

                                                                                    <NavLink data-toggle="modal" data-target="" to="#" className="btn btn-success">
                                                                                        <i className="fa fa-pencil" aria-hidden="true">&nbsp;&nbsp;Edit</i>
                                                                                    </NavLink>
                                                                                </td>
                                                                            </tr>


                                                                            <div id="EditStdAttendance<?php echo $WorkAssignListVal['student_id'];?>" className="modal fade" role="dialog">
                                                                                <div className="modal-dialog">

                                                                                    {/* <!-- Modal content--> */}
                                                                                    <div className="modal-content">
                                                                                        <div className="modal-header">
                                                                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                                                            <h4 className="modal-title"> Attendance OF</h4>
                                                                                        </div>

                                                                                        <div className="modal-body">

                                                                                            <form className="form-style-7" action="<?php echo DOMAIN.AgentDirectory;?>parent/InsertMe.php" method="post" enctype="multipart/form-data">

                                                                                                <input type="hidden" name="action" value="EditStdAttendance" />
                                                                                                <input type="hidden" id="date" name="date" value="<?php echo $date; ?>" />
                                                                                                <input type="hidden" id="date" name="session" value="<?php echo $sessionID; ?>" />
                                                                                                <input type="hidden" id="date" name="stdId" value="<?php echo $WorkAssignListVal['student_id']; ?>" />
                                                                                                <input type="hidden" name="page" value="<?php echo $_REQUEST['page'] ;?>" />

                                                                                                <div className="col-md-12" >
                                                                                                    <div className="form-group ">
                                                                                                        <label className="required">Attendance</label>
                                                                                                        <select className="form-control" id="attendance" name="attendance">
                                                                                                            <option value="All"> All </option>
                                                                                                            <option value="P"> Present </option>
                                                                                                            <option value="A"> Absent </option>
                                                                                                            <option value="L"> Leave </option>
                                                                                                            <option value="LA"> Late </option>
                                                                                                            <option value="SL"> Short Leave </option>
                                                                                                        </select>

                                                                                                    </div>
                                                                                                </div>




                                                                                                <div className="modal-footer">

                                                                                                    <button type="submit" className="btn btn-primary" name="submit" >Submit </button>


                                                                                                </div>

                                                                                            </form>

                                                                                        </div>

                                                                                    </div>

                                                                                </div>
                                                                            </div>

                                                                            {/* <!-- Student Edit Attendance popup ending --> */}


                                                                        </tbody>

                                                                    </table>


                                                                </div>


                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </section>



                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>

                </div>

            </div>

        </>
    );
};

export default Edit_Attendance;