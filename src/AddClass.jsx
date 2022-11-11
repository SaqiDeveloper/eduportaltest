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

const AddClass = () => {   
    
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
                    <h3>Classes</h3>
                    <ul>
                        <li>
                            <NavLink to="index.html">Home</NavLink>
                        </li>
                        <li>Add New Class</li>
                    </ul>
                </div>
                {/* <!-- Breadcubs Area End Here --> */}
                {/* <!-- Add Class Area Start Here --> */}
                <div className="card height-auto">
                    <div className="card-body">
                        <div className="heading-layout1">
                            <div className="item-title">
                                <h3>Add New Class Schedule</h3>
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
                                    <label>Teacher Name *</label>
                                    <input type="text" placeholder="" className="form-control" />
                                </div>
                                <div className="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>ID No</label>
                                    <input type="text" placeholder="" className="form-control" />
                                </div>
                                <div className="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Gender *</label>
                                    <select className="select2">
                                        <option value="">Please Select</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                        <option value="3">Others</option>
                                    </select>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Class</label>
                                    <select className="select2">
                                        <option value="">Please Select</option>
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
                                    <label>Subject *</label>
                                    <select className="select2">
                                        <option value="">Please Select*</option>
                                        <option value="1">English</option>
                                        <option value="2">Mathmethics</option>
                                        <option value="3">Physics</option>
                                        <option value="3">Chemestry</option>
                                        <option value="3">Biology</option>
                                    </select>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Section *</label>
                                    <select className="select2">
                                        <option value="">Please Select *</option>
                                        <option value="1">Pink</option>
                                        <option value="2">Blue</option>
                                        <option value="3">Bird</option>
                                        <option value="3">Rose</option>
                                        <option value="3">Red</option>
                                    </select>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Time *</label>
                                    <input type="text" placeholder="" className="form-control" />
                                </div>
                                <div className="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Date*</label>
                                    <input type="text" placeholder="dd/mm/yyyy" className="form-control air-datepicker" data-position="bottom right" />
                                    <i className="fa fa-calendar-alt"></i>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Phone *</label>
                                    <input type="text" placeholder="" className="form-control" />
                                </div>
                                <div className="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>E-Mail *</label>
                                    <input type="email" placeholder="" className="form-control" />
                                </div>
                                <div className="col-md-6 form-group"></div>
                                <div className="col-12 form-group mg-t-8">
                                    <button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                                    <button type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <!-- Add Class Area End Here --> */}
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

export default AddClass;