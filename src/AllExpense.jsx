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

const AllExpense = () => {

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
                    <h3>Accounts</h3>
                    <ul>
                        <li>
                            <NavLink to="/admin_dashboard">Home</NavLink>
                        </li>
                        <li>All Expense</li>
                    </ul>
                </div>
                {/* <!-- Breadcubs Area End Here --> */}
                {/* <!-- Expanse Table Area Start Here --> */}
                <div className="card height-auto">
                    <div className="card-body">
                        <div className="heading-layout1">
                            <div className="item-title">
                                <h3>All Expenses</h3>
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
                        <form className="mg-b-20">
                            <div className="row gutters-8">
                                <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                                    <input type="text" placeholder="Search by ID ..." className="form-control" />
                                </div>
                                <div className="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                                    <input type="text" placeholder="Search by Name ..." className="form-control" />
                                </div>
                                <div className="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                                    <input type="text" placeholder="Search by Phone" className="form-control" />
                                </div>
                                <div className="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
                                    <button type="submit" className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                                </div>
                            </div>
                        </form>
                        <div className="table-responsive">
                            <table className="table data-table text-nowrap">
                                <thead>
                                    <tr>
                                        <th> 
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input checkAll" />
                                                <label className="form-check-label">ID</label>
                                            </div>
                                        </th>
                                        <th>Name</th>
                                        <th>Expense Type</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Phone</th>
                                        <th>E-mail</th>
                                        <th>Date</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <label className="form-check-label">#0021</label>
                                            </div>
                                        </td>
                                        <td>Mark Willy</td>
                                        <td>Salary</td>
                                        <td>$2,0000.00</td>
                                        <td className="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                        <td>02/02/2019</td>
                                         <td>
                                            <div className="dropdown">
                                                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <label className="form-check-label">#0022</label>
                                            </div>
                                        </td>
                                        <td>Jesseual</td>
                                        <td>Transport</td>
                                        <td>$5,0000.00</td>
                                        <td className="badge badge-pill bg-danger d-block mg-t-8">Due</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                        <td>02/02/2019</td>
                                         <td>
                                            <div className="dropdown">
                                                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <label className="form-check-label">#0023</label>
                                            </div>
                                        </td>
                                        <td>Maria Jones</td>
                                        <td>Utilities</td>
                                        <td>$1,0000.00</td>
                                        <td className="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                        <td>02/02/2019</td>
                                         <td>
                                            <div className="dropdown">
                                                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <label className="form-check-label">#0024</label>
                                            </div>
                                        </td>
                                        <td>Mark Willy</td>
                                        <td>Salary</td>
                                        <td>$2,0000.00</td>
                                        <td className="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                        <td>02/02/2019</td>
                                         <td>
                                            <div className="dropdown">
                                                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <label className="form-check-label">#0025</label>
                                            </div>
                                        </td>
                                        <td>Jesseual</td>
                                        <td>Transport</td>
                                        <td>$5,0000.00</td>
                                        <td className="badge badge-pill bg-danger d-block mg-t-8">Due</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                        <td>02/02/2019</td>
                                         <td>
                                            <div className="dropdown">
                                                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <label className="form-check-label">#0026</label>
                                            </div>
                                        </td>
                                        <td>Maria Jones</td>
                                        <td>Utilities</td>
                                        <td>$1,0000.00</td>
                                        <td className="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                        <td>02/02/2019</td>
                                         <td>
                                            <div className="dropdown">
                                                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <label className="form-check-label">#0027</label>
                                            </div>
                                        </td>
                                        <td>Mark Willy</td>
                                        <td>Salary</td>
                                        <td>$2,0000.00</td>
                                        <td className="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                        <td>02/02/2019</td>
                                         <td>
                                            <div className="dropdown">
                                                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <label className="form-check-label">#0028</label>
                                            </div>
                                        </td>
                                        <td>Jesseual</td>
                                        <td>Transport</td>
                                        <td>$5,0000.00</td>
                                        <td className="badge badge-pill bg-danger d-block mg-t-8">Due</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                        <td>02/02/2019</td>
                                         <td>
                                            <div className="dropdown">
                                                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <label className="form-check-label">#0029</label>
                                            </div>
                                        </td>
                                        <td>Maria Jones</td>
                                        <td>Utilities</td>
                                        <td>$1,0000.00</td>
                                        <td className="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                        <td>02/02/2019</td>
                                         <td>
                                            <div className="dropdown">
                                                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <label className="form-check-label">#0030</label>
                                            </div>
                                        </td>
                                        <td>Mark Willy</td>
                                        <td>Salary</td>
                                        <td>$2,0000.00</td>
                                        <td className="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                        <td>02/02/2019</td>
                                         <td>
                                            <div className="dropdown">
                                                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <label className="form-check-label">#0031</label>
                                            </div>
                                        </td>
                                        <td>Jesseual</td>
                                        <td>Transport</td>
                                        <td>$5,0000.00</td>
                                        <td className="badge badge-pill bg-danger d-block mg-t-8">Due</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                        <td>02/02/2019</td>
                                         <td>
                                            <div className="dropdown">
                                                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <label className="form-check-label">#0032</label>
                                            </div>
                                        </td>
                                        <td>Mark Willy</td>
                                        <td>Salary</td>
                                        <td>$2,0000.00</td>
                                        <td className="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                        <td>02/02/2019</td>
                                         <td>
                                            <div className="dropdown">
                                                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <label className="form-check-label">#0033</label>
                                            </div>
                                        </td>
                                        <td>Jesseual</td>
                                        <td>Transport</td>
                                        <td>$5,0000.00</td>
                                        <td className="badge badge-pill bg-danger d-block mg-t-8">Due</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                        <td>02/02/2019</td>
                                         <td>
                                            <div className="dropdown">
                                                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <label className="form-check-label">#0034</label>
                                            </div>
                                        </td>
                                        <td>Mark Willy</td>
                                        <td>Salary</td>
                                        <td>$2,0000.00</td>
                                        <td className="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                        <td>02/02/2019</td>
                                         <td>
                                            <div className="dropdown">
                                                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <label className="form-check-label">#0035</label>
                                            </div>
                                        </td>
                                        <td>Jesseual</td>
                                        <td>Transport</td>
                                        <td>$5,0000.00</td>
                                        <td className="badge badge-pill bg-danger d-block mg-t-8">Due</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                        <td>02/02/2019</td>
                                         <td>
                                            <div className="dropdown">
                                                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <label className="form-check-label">#0036</label>
                                            </div>
                                        </td>
                                        <td>Mark Willy</td>
                                        <td>Salary</td>
                                        <td>$2,0000.00</td>
                                        <td className="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                        <td>02/02/2019</td>
                                         <td>
                                            <div className="dropdown">
                                                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <label className="form-check-label">#0037</label>
                                            </div>
                                        </td>
                                        <td>Jesseual</td>
                                        <td>Transport</td>
                                        <td>$5,0000.00</td>
                                        <td className="badge badge-pill bg-danger d-block mg-t-8">Due</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                        <td>02/02/2019</td>
                                         <td>
                                            <div className="dropdown">
                                                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <label className="form-check-label">#0038</label>
                                            </div>
                                        </td>
                                        <td>Mark Willy</td>
                                        <td>Salary</td>
                                        <td>$2,0000.00</td>
                                        <td className="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                        <td>02/02/2019</td>
                                         <td>
                                            <div className="dropdown">
                                                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <label className="form-check-label">#0039</label>
                                            </div>
                                        </td>
                                        <td>Jesseual</td>
                                        <td>Transport</td>
                                        <td>$5,0000.00</td>
                                        <td className="badge badge-pill bg-danger d-block mg-t-8">Due</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                        <td>02/02/2019</td>
                                         <td>
                                            <div className="dropdown">
                                                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <label className="form-check-label">#0040</label>
                                            </div>
                                        </td>
                                        <td>Mark Willy</td>
                                        <td>Salary</td>
                                        <td>$2,0000.00</td>
                                        <td className="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                        <td>02/02/2019</td>
                                         <td>
                                            <div className="dropdown">
                                                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <label className="form-check-label">#0041</label>
                                            </div>
                                        </td>
                                        <td>Jesseual</td>
                                        <td>Transport</td>
                                        <td>$5,0000.00</td>
                                        <td className="badge badge-pill bg-danger d-block mg-t-8">Due</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                        <td>02/02/2019</td>
                                         <td>
                                            <div className="dropdown">
                                                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <label className="form-check-label">#0042</label>
                                            </div>
                                        </td>
                                        <td>Mark Willy</td>
                                        <td>Salary</td>
                                        <td>$2,0000.00</td>
                                        <td className="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                        <td>02/02/2019</td>
                                         <td>
                                            <div className="dropdown">
                                                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <label className="form-check-label">#0043</label>
                                            </div>
                                        </td>
                                        <td>Jesseual</td>
                                        <td>Transport</td>
                                        <td>$5,0000.00</td>
                                        <td className="badge badge-pill bg-danger d-block mg-t-8">Due</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                        <td>02/02/2019</td>
                                         <td>
                                            <div className="dropdown">
                                                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <label className="form-check-label">#0044</label>
                                            </div>
                                        </td>
                                        <td>Jesseual</td>
                                        <td>Transport</td>
                                        <td>$5,0000.00</td>
                                        <td className="badge badge-pill bg-danger d-block mg-t-8">Due</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                        <td>02/02/2019</td>
                                         <td>
                                            <div className="dropdown">
                                                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span className="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink className="dropdown-item" to="#"><i className="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* <!-- Expanse Table Area End Here --> */}
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

export default AllExpense;