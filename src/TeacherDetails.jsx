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

import teacher from "../src/img/figure/teacher.jpg";


import Sidebar from '../src/components/Sidebar/Sidebar.jsx';
import Header from '../src/components/Header/Header.jsx';

const TeacherDetails = () => {
  return (
    <>
        {/* <!-- Preloader Start Here --> */}
    {/* <div id="preloader"></div> */}
    {/* <!-- Preloader End Here --> */}
    <div id="wrapper" className="wrapper bg-ash">
         <Header/>

        {/* <!-- Page Area Start Here --> */}
        <div className="dashboard-page-one">
          <Sidebar/>

            <div className="dashboard-content-one">
                {/* <!-- Breadcubs Area Start Here --> */}
                <div className="breadcrumbs-area">
                    <h3>Teacher</h3>
                    <ul>
                        <li>
                            <NavLink to="/admin_dashboard">Home</NavLink>
                        </li>
                        <li>Teacher Details</li>
                    </ul>
                </div>
                {/* <!-- Breadcubs Area End Here --> */}
                {/* <!-- Student Table Area Start Here --> */}
                <div className="card height-auto">
                    <div className="card-body">
                        <div className="heading-layout1">
                            <div className="item-title">
                                <h3>About Me</h3>
                            </div>
                           <div className="dropdown">
                                <NavLink className="dropdown-toggle" to="#" role="button" 
                                data-toggle="dropdown" aria-expanded="false">...</NavLink>
        
                                <div className="dropdown-menu dropdown-menu-right">
                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-times text-orange-red"></i>Close</NavLink>
                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="single-info-details">
                            <div className="item-img">
                                <img src={teacher} alt="teacher" />
                            </div>
                            <div className="item-content">
                                <div className="header-inline item-header">
                                    <h3 className="text-dark-medium font-medium">Steven Johnson</h3>
                                    <div className="header-elements">
                                        <ul>
                                            <li><NavLink to="#"><i className="fa fa-edit"></i></NavLink></li>
                                            <li><NavLink to="#"><i className="fa fa-print"></i></NavLink></li>
                                            <li><NavLink to="#"><i className="fa fa-download"></i></NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <p>Aliquam erat volutpat. Curabiene natis massa sedde lacu stiquen sodale 
                                word moun taiery.Aliquam erat volutpaturabiene natis massa sedde  sodale 
                                word moun taiery.</p>
                                <div className="info-table table-responsive">
                                    <table className="table text-nowrap">
                                        <tbody>
                                            <tr>
                                                <td>Name:</td>
                                                <td className="font-medium text-dark-medium">Steven Johnson</td>
                                            </tr>
                                            <tr>
                                                <td>Gender:</td>
                                                <td className="font-medium text-dark-medium">Male</td>
                                            </tr>
                                            <tr>
                                                <td>Father Name:</td>
                                                <td className="font-medium text-dark-medium">Steve Jones</td>
                                            </tr>
                                            <tr>
                                                <td>Mother Name:</td>
                                                <td className="font-medium text-dark-medium">Naomi Rose</td>
                                            </tr>
                                            <tr>
                                                <td>Religion:</td>
                                                <td className="font-medium text-dark-medium">Islam</td>
                                            </tr>
                                            <tr>
                                                <td>Joining Date:</td>
                                                <td className="font-medium text-dark-medium">07.08.2016</td>
                                            </tr>
                                            <tr>
                                                <td>E-mail:</td>
                                                <td className="font-medium text-dark-medium">stevenjohnson@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td>Subject:</td>
                                                <td className="font-medium text-dark-medium">English</td>
                                            </tr>
                                            <tr>
                                                <td>Class:</td>
                                                <td className="font-medium text-dark-medium">2</td>
                                            </tr>
                                            <tr>
                                                <td>Section:</td>
                                                <td className="font-medium text-dark-medium">Pink</td>
                                            </tr>
                                            <tr>
                                                <td>ID No:</td>
                                                <td className="font-medium text-dark-medium">10005</td>
                                            </tr>
                                            <tr>
                                                <td>Address:</td>
                                                <td className="font-medium text-dark-medium">House #10, Road #6, Australia</td>
                                            </tr>
                                            <tr>
                                                <td>Phone:</td>
                                                <td className="font-medium text-dark-medium">+ 88 98568888418</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Student Table Area End Here --> */}
                <footer className="footer-wrap-layout1">
                    <div className="copyright">© Copyrights <NavLink to="#">akkhor</NavLink> 2019. All rights reserved. Designed by <NavLink to="#">PsdBosS</NavLink></div>
                </footer>
            </div>
        </div>
        {/* <!-- Page Area End Here --> */}
    </div>
    </>
  );
};

export default TeacherDetails;