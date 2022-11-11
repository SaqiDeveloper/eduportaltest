import React from 'react';
import { NavLink } from 'react-router-dom';
import "../src/Attendance_Sheet.css";

import Sidebar from '../src/components/Sidebar/Sidebar.jsx';
import Header from '../src/components/Header/Header.jsx';

const Attendance_Sheet = () => {

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
                                <li>Blank Attendance Sheets</li>
                            </ul>
                            <NavLink to="/attend_report_list" className="atend_btn btn-info"> Attendance Reports</NavLink>

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
                                                {/* <NavLink to="watch_video.php?videourl=<?php echo $video[0]['video_url'];?>" target="_blank" className="demo btn btn-success"><i className="fa fa-play"></i>&nbsp;&nbsp;Watch Demo</NavLink> */}
                                               

                                                <div className="clearfix"></div>

                                            </div>
                                        </div>
                                        {/* <!-- page content --> */}

                                        {/* <!-- Modal --> */}
                                        <div className="right_col" role="main">
                                            <div className="row">

                                            
                                                <table className="table table-striped table-bordered">
                                                    <thead>
                                                        <tr>

                                                            <th width="10%"> S.No </th>
                                                            <th width="30%"> Class / Section </th>

                                                            <th width="40%">Action </th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        <tr>



                                                            <td></td>

                                                            <td></td>


                                                            <td>

                                                                <NavLink data-toggle="modal" data-target="#Modal<?php echo $WorkAssignListVal['class_id'];?>-<?php echo $WorkAssignListVal['section_id'];?>" to="#" className="btn btn-success">
                                                                    Print Blank Attendance Sheet  </NavLink>




                                                                {/* <!-- Modal --> */}
                                                                <div id="Modal<?php echo $WorkAssignListVal['class_id'];?>-<?php echo $WorkAssignListVal['section_id'];?>" className="modal fade" role="dialog">
                                                                    <div className="modal-dialog">

                                                                        {/* <!-- Modal content--> */}
                                                                        <div className="modal-content">


                                                                            <form target="_blank" action="<?php echo DOMAIN.AgentDirectory;?>parent/InsertMe.php" method="post" enctype="multipart/form-data">

                                                                                {/* <input type="hidden" name="action" value="AttendanceSheetParameter">
          
               <div className="modal-header">
                 <button type="button" className="close" data-dismiss="modal">&times;</button>
                 <h4 className="modal-title"> Choose The Parametters To Display in Print Report </h4>
               </div>
               <div className="modal-body">
               

               <input type="hidden" name="class_id" value="<?php echo $WorkAssignListVal['class_id'];?>" />
               <input type="hidden" name="section" value="<?php echo $WorkAssignListVal['section_id'];?>" />
               <input type="hidden" name="session" value="<?php echo $_SESSION['current_session'];?>" /> */}

                                                                                <div className="col-md-12">

                                                                                    <select name="month" id="month" className="form-control" required>

                                                                                        <option value=""></option>

                                                                                    </select>

                                                                                </div>
                                                                                <br /><br />
                                                                                <div className="col-md-12">

                                                                                    <select name="orderBy" id="orderBy" className="form-control" required>
                                                                                        <option value="SeqMrkAtt">Same Sequence Mark Attndc</option>
                                                                                        <option value="alphabetic">Alphabetic</option>
                                                                                        <option value="AdmNoWise">Adm No Wise</option>
                                                                                    </select>

                                                                                </div>
                                                                                <br /><br /><br />
                                                                                <label className="container1" >
                                                                                    <input type="checkbox" name="father_name" checked value="1" />
                                                                                    Father Name
                                                                                    <span className="checkmark"></span>
                                                                                </label>

                                                                                <label className="container1" >
                                                                                    <input type="checkbox" name="cell_no" checked value="1" />
                                                                                    Cell No
                                                                                    <span className="checkmark"></span>
                                                                                </label>

                                                                                <label className="container1" >
                                                                                    <input type="checkbox" name="roll_no" checked value="1" />
                                                                                    Roll No
                                                                                    <span className="checkmark"></span>
                                                                                </label>

                                                                                <label className="container1" >
                                                                                    <input type="checkbox" name="ref_no" checked value="1" />
                                                                                    Reg No
                                                                                    <span className="checkmark"></span>
                                                                                </label>

                                                                                <label className="container1" >
                                                                                    <input type="checkbox" name="month_absent" checked value="1" />
                                                                                    Monthly Absent
                                                                                    <span className="checkmark"></span>
                                                                                </label>


                                                                                <div className="modal-footer">
                                                                                    <input type="submit" formtarget="_blank" class="btn btn-primary" checked value="Print" />
                                                                                </div>


                                                                            </form>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                {/* <!-- Modal --> */}

                                                            </td>

                                                        </tr>


                                                    </tbody>

                                                </table>

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

export default Attendance_Sheet;