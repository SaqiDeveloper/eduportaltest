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

import logo1 from "../src/img/logo1.png";

import Sidebar from '../src/components/Sidebar/Sidebar.jsx';
import Header from '../src/components/Header/Header.jsx';

const Transport = () => {
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
                    <h3>Transport</h3>
                    <ul>
                        <li>
                            <NavLink to="index.html">Home</NavLink>
                        </li>
                        <li>Transport</li>
                    </ul>
                </div>
                {/* <!-- Breadcubs Area End Here --> */}
                <div className="row">
                    {/* <!-- Add Transport Area Start Here --> */}
                    <div className="col-4-xxxl col-12">
                        <div className="card height-auto">
                            <div className="card-body">
                                <div className="heading-layout1">
                                    <div className="item-title">
                                        <h3>Add New Transport</h3>
                                    </div>
                                    <div className="dropdown">
                                        <NavLink className="dropdown-toggle" to="#" role="button" data-toggle="dropdown"
                                            aria-expanded="false">...</NavLink>

                                        <div className="dropdown-menu dropdown-menu-right">
                                            <NavLink className="dropdown-item" to="#"><i
                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                            <NavLink className="dropdown-item" to="#"><i
                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                            <NavLink className="dropdown-item" to="#"><i
                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                        </div>
                                    </div>
                                </div>
                                <form className="new-added-form">
                                    <div className="row">
                                        <div className="col-12-xxxl col-xl-4 col-sm-6 col-12 form-group">
                                            <label>Route Name</label>
                                            <input type="text" placeholder="" className="form-control" />
                                        </div>
                                        <div className="col-12-xxxl col-xl-4 col-sm-6 col-12 form-group">
                                            <label>Vehicle Number</label>
                                            <input type="text" placeholder="" className="form-control" />
                                        </div>
                                        <div className="col-12-xxxl col-xl-4 col-sm-6 col-12 form-group">
                                            <label>Driver Name</label>
                                            <input type="text" placeholder="" className="form-control" />
                                        </div>
                                        <div className="col-12-xxxl col-xl-4 col-sm-6 col-12 form-group">
                                            <label>License Number</label>
                                            <input type="text" placeholder="" className="form-control" />
                                        </div>
                                        <div className="col-12-xxxl col-xl-4 col-sm-6 col-12 form-group">
                                            <label>Phone Number</label>
                                            <input type="text" placeholder="" className="form-control" />
                                        </div>
                                        <div className="col-12 form-group mg-t-8">
                                            <button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                                            <button type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Add Transport Area End Here --> */}
                    {/* <!-- All Transport List Area Start Here --> */}
                    <div className="col-8-xxxl col-12">
                        <div className="card height-auto">
                            <div className="card-body">
                                <div className="heading-layout1">
                                    <div className="item-title">
                                        <h3>All Transport Lists</h3>
                                    </div>
                                    <div className="dropdown">
                                        <NavLink className="dropdown-toggle" to="#" role="button" data-toggle="dropdown"
                                            aria-expanded="false">...</NavLink>

                                        <div className="dropdown-menu dropdown-menu-right">
                                            <NavLink className="dropdown-item" to="#"><i
                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                            <NavLink className="dropdown-item" to="#"><i
                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                            <NavLink className="dropdown-item" to="#"><i
                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                        </div>
                                    </div>
                                </div>
                                <form className="mg-b-20">
                                    <div className="row gutters-8">
                                        <div className="col-lg-4 col-12 form-group">
                                            <input type="text" placeholder="Search by Route ..." className="form-control" />
                                        </div>
                                        <div className="col-lg-3 col-12 form-group">
                                            <input type="text" placeholder="Search by Car Number ..."
                                                className="form-control" />
                                        </div>
                                        <div className="col-lg-3 col-12 form-group">
                                            <input type="text" placeholder="Search by Phone ..." className="form-control" />
                                        </div>
                                        <div className="col-lg-2 col-12 form-group">
                                            <button type="submit"
                                                className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="table-responsive">
                                    <table className="table display data-table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input checkAll" />
                                                        <label className="form-check-label">Route Name</label>
                                                    </div>
                                                </th>
                                                <th>Vehicle No</th>
                                                <th>Driver Name</th>
                                                <th>Driver License</th>
                                                <th>Contact Number</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">Wales Road </label>
                                                    </div>
                                                </td>
                                                <td>MT988800</td>
                                                <td>Johnathan John</td>
                                                <td>DLNC025936</td>
                                                <td>+889562365846</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">Wales Road </label>
                                                    </div>
                                                </td>
                                                <td>MT988800</td>
                                                <td>Johnathan John</td>
                                                <td>DLNC025936</td>
                                                <td>+889562365846</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">Wales Road </label>
                                                    </div>
                                                </td>
                                                <td>MT988800</td>
                                                <td>Johnathan John</td>
                                                <td>DLNC025936</td>
                                                <td>+889562365846</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">Wales Road </label>
                                                    </div>
                                                </td>
                                                <td>MT988800</td>
                                                <td>Johnathan John</td>
                                                <td>DLNC025936</td>
                                                <td>+889562365846</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">Wales Road </label>
                                                    </div>
                                                </td>
                                                <td>MT988800</td>
                                                <td>Johnathan John</td>
                                                <td>DLNC025936</td>
                                                <td>+889562365846</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">Wales Road </label>
                                                    </div>
                                                </td>
                                                <td>MT988800</td>
                                                <td>Johnathan John</td>
                                                <td>DLNC025936</td>
                                                <td>+889562365846</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">Wales Road </label>
                                                    </div>
                                                </td>
                                                <td>MT988800</td>
                                                <td>Johnathan John</td>
                                                <td>DLNC025936</td>
                                                <td>+889562365846</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">Wales Road </label>
                                                    </div>
                                                </td>
                                                <td>MT988800</td>
                                                <td>Johnathan John</td>
                                                <td>DLNC025936</td>
                                                <td>+889562365846</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">Wales Road </label>
                                                    </div>
                                                </td>
                                                <td>MT988800</td>
                                                <td>Johnathan John</td>
                                                <td>DLNC025936</td>
                                                <td>+889562365846</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">Wales Road </label>
                                                    </div>
                                                </td>
                                                <td>MT988800</td>
                                                <td>Johnathan John</td>
                                                <td>DLNC025936</td>
                                                <td>+889562365846</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">Wales Road </label>
                                                    </div>
                                                </td>
                                                <td>MT988800</td>
                                                <td>Johnathan John</td>
                                                <td>DLNC025936</td>
                                                <td>+889562365846</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">Wales Road </label>
                                                    </div>
                                                </td>
                                                <td>MT988800</td>
                                                <td>Johnathan John</td>
                                                <td>DLNC025936</td>
                                                <td>+889562365846</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">Wales Road </label>
                                                    </div>
                                                </td>
                                                <td>MT988800</td>
                                                <td>Johnathan John</td>
                                                <td>DLNC025936</td>
                                                <td>+889562365846</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">Wales Road </label>
                                                    </div>
                                                </td>
                                                <td>MT988800</td>
                                                <td>Johnathan John</td>
                                                <td>DLNC025936</td>
                                                <td>+889562365846</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">Wales Road </label>
                                                    </div>
                                                </td>
                                                <td>MT988800</td>
                                                <td>Johnathan John</td>
                                                <td>DLNC025936</td>
                                                <td>+889562365846</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">Wales Road </label>
                                                    </div>
                                                </td>
                                                <td>MT988800</td>
                                                <td>Johnathan John</td>
                                                <td>DLNC025936</td>
                                                <td>+889562365846</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </NavLink>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                            <NavLink className="dropdown-item" to="#"><i
                                                                    className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- All Transport List Area End Here --> */}
                </div>
                {/* <!-- All Subjects Area End Here --> */}
                <footer className="footer-wrap-layout1">
                    <div className="copyright">© Copyrights <NavLink to="#">akkhor</NavLink> 2019. All rights reserved. Designed by
                        <NavLink to="#">PsdBosS</NavLink></div>
                </footer>
            </div>
        </div>
        {/* <!-- Page Area End Here --> */}
    </div>
    </>
  );
};

export default Transport;