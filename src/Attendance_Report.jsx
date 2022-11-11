import React from 'react';
import { NavLink } from 'react-router-dom';

import "../src/Attendance_Report.css";


// images

import Sidebar from '../src/components/Sidebar/Sidebar.jsx';
import Header from '../src/components/Header/Header.jsx';

const Attendance_Report = () => {

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
                                        <div className="heading-layout1">
                                            <div className="item-title">
                                                <h3>View Today's Attendance Report</h3>
                                            </div>
                                            <div className="dropdown">
                                                <NavLink target="_blank" className="btn btn-primary" title="Print Students List" to="#">
                                                    Print Daily Attendance
                                                </NavLink>

                                                <div className="clearfix"></div>

                                            </div>
                                        </div>

                                        <section className="add_sub_agent" id="table_sub_agent" />
                                        <div className="container">
                                            <div className="box_visa_form">
                                                <div className="table-responsive">


                                                    <form className="form_cls" action="attendance_report.php" enctype="multipart/form-data" method="get">



                                                        <div className="col-md-3 col-xs-9">
                                                            <div className="form-group ">
                                                                <label className="required">Attendance Date</label>
                                                                <input className="form-control" type="date" name="date" id="date" value="<?php echo $date;?>" required />

                                                            </div>
                                                        </div>


                                                        <div className="col-md-3">
                                                            <div className="form-group ">
                                                                <button type="submit" className="search_btn btn btn-primary">Search</button>
                                                            </div>

                                                        </div>

                                                    </form>

                                                    <table className="table table-striped table-bordered">
                                                        <thead>
                                                            <tr>

                                                                <td width="10%">S.No</td>
                                                                <td width="40%">Class Name</td>
                                                                <td width="30%"> Attendance Status </td>

                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>

                                                                <td>01</td>

                                                                <td>Prep</td>

                                                                <td>
                                                                    <NavLink className="btn btn-danger" title="Print Students List" to="mark_attend.php?s=<?php echo session_id().session_id().session_id();?>&class_id=<?php echo $cls?>&section=<?php echo $section?>&date=<?php echo $date;?>&session=<?php echo $_SESSION['current_session'];?>">

                                                                        <i className="fa fa-arrow-down"></i> <i className="fa fa-arrow-down"></i> Mark Attendance
                                                                    </NavLink>

                                                                    {/* Note! i make this comment. when you would use the backend code then you can uncomment this line of code again */}

                                                                    {/* <NavLink className="btn btn-success" title="Print Students List" to="#">;
<i className="fa fa-check"></i><i className="fa fa-check"></i> View Attendance
</NavLink> */}

                                                                </td>

                                                            </tr>
                                                            <tr>

                                                                <td>02</td>

                                                                <td>Play Group</td>

                                                                <td>
                                                                    {/* <NavLink className="btn btn-danger" title="Print Students List" to="mark_attend.php?s=<?php echo session_id().session_id().session_id();?>&class_id=<?php echo $cls?>&section=<?php echo $section?>&date=<?php echo $date;?>&session=<?php echo $_SESSION['current_session'];?>">

<i className="fa fa-arrow-down"></i> <i className="fa fa-arrow-down"></i> Mark Attendance
</NavLink> */}


                                                                    <NavLink className="btn btn-success" title="Print Students List" to="#">;
                                                                        <i className="fa fa-check"></i><i className="fa fa-check"></i> View Attendance
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