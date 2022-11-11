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

const Datewise_Class_Attend_Report = () => {
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

export default Datewise_Class_Attend_Report;