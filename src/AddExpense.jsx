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


function AddExpense() {
    return (
        <>
            {/* <!-- Preloader Start Here --> */}
            {/* <!-- <div id="preloader"></div> --> */}
            {/* <!-- Preloader End Here --> */}
            <div id="wrapper" className="wrapper bg-ash">
                <Header />
                {/* <!-- Page Area Start Here --> */}
                <div className="dashboard-page-one">
                    <Sidebar />
                    <div className="dashboard-content-one">
                        {/* <!-- Breadcubs Area Start Here --> */}
                        <div className="breadcrumbs-area">
                            <h3>Accounts</h3>
                            <ul>
                                <li>
                                    <NavLink to="index.html">Home</NavLink>
                                </li>
                                <li>Add New Expense</li>
                            </ul>
                        </div>
                        {/* <!-- Breadcubs Area End Here --> */}
                        {/* <!-- Add Expense Area Start Here --> */}
                        <div className="card height-auto">
                            <div className="card-body">
                                <div className="heading-layout1">
                                    <div className="item-title">
                                        <h3>Add New Expense</h3>
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
                                            <label>Name *</label>
                                            <input type="text" placeholder="" className="form-control" />
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>ID No *</label>
                                            <input type="text" placeholder="" className="form-control" />
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>Expanse Type *</label>
                                            <select className="select2">
                                                <option value="">Please Select</option>
                                                <option value="1">Salary</option>
                                                <option value="2">Transport</option>
                                                <option value="3">Maintanance</option>
                                                <option value="3">Purchase</option>
                                                <option value="3">Utilities</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>Amount *</label>
                                            <input type="text" placeholder="" className="form-control" />
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>Phone</label>
                                            <input type="text" placeholder="" className="form-control" />
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>E-Mail Address</label>
                                            <input type="text" placeholder="" className="form-control" />
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>Status</label>
                                            <select className="select2">
                                                <option value="0">Please Select</option>
                                                <option value="1">Paid</option>
                                                <option value="2">Due</option>
                                                <option value="3">Others</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>Date</label>
                                            <input type="text" placeholder="dd/mm/yy" className="form-control air-datepicker" data-position="bottom right" />
                                        </div>
                                        <div className="col-12 form-group mg-t-8">
                                            <button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                                            <button type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <!-- Add Expense Area End Here --> */}
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

export default AddExpense;