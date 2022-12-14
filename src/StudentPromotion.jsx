import React from 'react';
import { NavLink } from 'react-router-dom';

// css links
import "../src/css/normalize.css";
import "../src/css/main.css";
import "../src/css/bootstrap.min.css";
import "../src/fonts/flaticon.css";

import "../src/css/animate.min.css";
import "../src/css/style.css";

import Sidebar from '../src/components/Sidebar/Sidebar.jsx';
import Header from '../src/components/Header/Header.jsx';

const StudentPromotion =() => {
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
                    <h3>Students</h3>
                    <ul>
                        <li>
                            <NavLink to="/admin_dashboard">Home</NavLink>
                        </li>
                         <li>Student Promotion</li>
                    </ul>
                </div>
                {/* <!-- Breadcubs Area End Here --> */}
                {/* <!-- Student Promotion Area Start Here --> */}
                <div className="card height-auto">
                    <div className="card-body">
                        <div className="heading-layout1">
                            <div className="item-title">
                                <h3>Search Student Promotion</h3>
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
                        <form className="new-added-form">
                            <div className="row">
                                <div className="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Current Session *</label>
                                    <select className="select2">
                                        <option value="">2017-2018</option>
                                        <option value="1">2018-2019</option>
                                        <option value="2">2015-2016</option>
                                        <option value="3">2014-2015</option>
                                    </select>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Promote Session *</label>
                                    <select className="select2">
                                        <option value="">2017-2018</option>
                                        <option value="1">2018-2019</option>
                                        <option value="2">2015-2016</option>
                                        <option value="3">2014-2015</option>
                                    </select>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Promotion From ClassName *</label>
                                    <select className="select2">
                                        <option value="">Please Select *</option>
                                        <option value="1">Play</option>
                                        <option value="2">Nursery</option>
                                        <option value="3">One</option>
                                        <option value="3">Two</option>
                                        <option value="3">Three</option>
                                        <option value="3">Four</option>
                                        <option value="3">Five</option>
                                    </select>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Promotion To ClassName *</label>
                                    <select className="select2">
                                        <option value="">Please Select *</option>
                                        <option value="1">Play</option>
                                        <option value="2">Nursery</option>
                                        <option value="3">One</option>
                                        <option value="3">Two</option>
                                        <option value="3">Three</option>
                                        <option value="3">Four</option>
                                        <option value="3">Five</option>
                                    </select>
                                </div>
                                <div className="col-12 form-group mg-t-8">
                                    <button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                                    <button type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <!-- Student Promotion Area End Here --> */}
                <footer className="footer-wrap-layout1">
                    <div className="copyright">?? Copyrights <NavLink to="#">akkhor</NavLink> 2019. All rights reserved. Designed by <NavLink to="#">PsdBosS</NavLink></div>
                </footer>
            </div>
        </div>
        {/* <!-- Page Area End Here --> */}
    </div>
    </>
  );
};

export default StudentPromotion;