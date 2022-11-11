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

import student2 from "../src/img/figure/student2.png";
import student3 from "../src/img/figure/student3.png";
import student4 from "../src/img/figure/student4.png";
import student5 from "../src/img/figure/student5.png";

import Sidebar from '../src/components/Sidebar/Sidebar.jsx';
import Header from '../src/components/Header/Header.jsx';

const TeacherPayment =() => {
  return (
    <>
         {/* <!-- Preloader Start Here --> */}
    {/* <div id="preloader"></div> */}
    {/* <!-- Preloader End Here --> */}
    <div id="wrapper" class="wrapper bg-ash">
         <Header/>
        {/* <!-- Page Area Start Here --> */}
        <div class="dashboard-page-one">
           <Sidebar/>
            <div class="dashboard-content-one">
                {/* <!-- Breadcubs Area Start Here --> */}
                <div class="breadcrumbs-area">
                    <h3>Teachers</h3>
                    <ul>
                        <li>
                            <NavLink to="index.html">Home</NavLink>
                        </li>
                        <li>Teacher Payment</li>
                    </ul>
                </div>
                {/* <!-- Breadcubs Area End Here --> */}
                {/* <!-- Teacher Payment Area Start Here --> */}
                <div class="card height-auto">
                    <div class="card-body">
                        <div class="heading-layout1">
                            <div class="item-title">
                                <h3>All Teachers Payment History</h3>
                            </div>
                           <div class="dropdown">
                                <NavLink class="dropdown-toggle" to="#" role="button" 
                                data-toggle="dropdown" aria-expanded="false">...</NavLink>
        
                                <div class="dropdown-menu dropdown-menu-right">
                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-times text-orange-red"></i>Close</NavLink>
                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                </div>
                            </div>
                        </div>
                        <form class="mg-b-20">
                            <div class="row gutters-8">
                                <div class="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                                    <input type="text" placeholder="Search by ID ..." class="form-control" />
                                </div>
                                <div class="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                                    <input type="text" placeholder="Search by Name ..." class="form-control" />
                                </div>
                                <div class="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                                    <input type="text" placeholder="Search by Phone" class="form-control" />
                                </div>
                                <div class="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
                                    <button type="submit" class="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                                </div>
                            </div>
                        </form>
                        <div class="table-responsive">
                            <table class="table data-table text-nowrap">
                                <thead>
                                    <tr>
                                        <th> 
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input checkAll" />
                                                <label class="form-check-label">Roll</label>
                                            </div>
                                        </th>
                                        <th>Photo</th>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Class</th>
                                        <th>Subject</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Phone</th>
                                        <th>E-mail</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0021</label>
                                            </div>
                                        </td>
                                        <td class="text-center"><img src={student2} alt="student" /></td>
                                        <td>Mark Willy</td>
                                        <td>Male</td>
                                        <td>2</td>
                                        <td>English</td>
                                        <td>$2,0000.00</td>
                                        <td class="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                         <td>
                                            <div class="dropdown">
                                                <NavLink to="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span class="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0022</label>
                                            </div>
                                        </td>
                                        <td class="text-center"><img src={student3} alt="student" /></td>
                                        <td>Jessia Rose</td>
                                        <td>Female</td>
                                        <td>1</td>
                                        <td>Mathematics</td>
                                        <td>$2,0000.00</td>
                                        <td class="badge badge-pill bg-danger d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                         <td>
                                            <div class="dropdown">
                                                <NavLink to="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span class="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0023</label>
                                            </div>
                                        </td>
                                        <td class="text-center"><img src={student4} alt="student" /></td>
                                        <td>Mark Willy</td>
                                        <td>Male</td>
                                        <td>2</td>
                                        <td>Mathematics</td>
                                        <td>$2,0000.00</td>
                                        <td class="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                         <td>
                                            <div class="dropdown">
                                                <NavLink to="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span class="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0024</label>
                                            </div>
                                        </td>
                                        <td class="text-center"><img src={student5} alt="student" /></td>
                                        <td>Jessia Rose</td>
                                        <td>Female</td>
                                        <td>1</td>
                                        <td>Mathematics</td>
                                        <td>$5,0000.00</td>
                                        <td class="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                         <td>
                                            <div class="dropdown">
                                                <NavLink to="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span class="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0021</label>
                                            </div>
                                        </td>
                                        <td class="text-center"><img src={student2} alt="student" /></td>
                                        <td>Mark Willy</td>
                                        <td>Male</td>
                                        <td>2</td>
                                        <td>English</td>
                                        <td>$4,0000.00</td>
                                        <td class="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                         <td>
                                            <div class="dropdown">
                                                <NavLink to="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span class="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0022</label>
                                            </div>
                                        </td>
                                        <td class="text-center"><img src={student3} alt="student" /></td>
                                        <td>Jessia Rose</td>
                                        <td>Female</td>
                                        <td>1</td>
                                        <td>Mathematics</td>
                                        <td>$2,0000.00</td>
                                        <td class="badge badge-pill bg-danger d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                         <td>
                                            <div class="dropdown">
                                                <NavLink to="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span class="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0023</label>
                                            </div>
                                        </td>
                                        <td class="text-center"><img src={student4} alt="student" /></td>
                                        <td>Mark Willy</td>
                                        <td>Male</td>
                                        <td>2</td>
                                        <td>Mathematics</td>
                                        <td>$2,0000.00</td>
                                        <td class="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                         <td>
                                            <div class="dropdown">
                                                <NavLink to="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span class="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0024</label>
                                            </div>
                                        </td>
                                        <td class="text-center"><img src={student5} alt="student" /></td>
                                        <td>Jessia Rose</td>
                                        <td>Female</td>
                                        <td>1</td>
                                        <td>Mathematics</td>
                                        <td>$1,0000.00</td>
                                        <td class="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                         <td>
                                            <div class="dropdown">
                                                <NavLink to="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span class="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0021</label>
                                            </div>
                                        </td>
                                        <td class="text-center"><img src={student2} alt="student" /></td>
                                        <td>Mark Willy</td>
                                        <td>Male</td>
                                        <td>2</td>
                                        <td>English</td>
                                        <td>$3,0000.00</td>
                                        <td class="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                         <td>
                                            <div class="dropdown">
                                                <NavLink to="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span class="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0022</label>
                                            </div>
                                        </td>
                                        <td class="text-center"><img src={student3} alt="student" /></td>
                                        <td>Jessia Rose</td>
                                        <td>Female</td>
                                        <td>1</td>
                                        <td>Mathematics</td>
                                        <td>$2,0000.00</td>
                                        <td class="badge badge-pill bg-danger d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                         <td>
                                            <div class="dropdown">
                                                <NavLink to="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span class="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0023</label>
                                            </div>
                                        </td>
                                        <td class="text-center"><img src={student4} alt="student" /></td>
                                        <td>Mark Willy</td>
                                        <td>Male</td>
                                        <td>2</td>
                                        <td>Mathematics</td>
                                        <td>$2,0000.00</td>
                                        <td class="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                         <td>
                                            <div class="dropdown">
                                                <NavLink to="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span class="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0024</label>
                                            </div>
                                        </td>
                                        <td class="text-center"><img src={student5} alt="student" /></td>
                                        <td>Jessia Rose</td>
                                        <td>Female</td>
                                        <td>1</td>
                                        <td>Mathematics</td>
                                        <td>$8,0000.00</td>
                                        <td class="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                         <td>
                                            <div class="dropdown">
                                                <NavLink to="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span class="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0021</label>
                                            </div>
                                        </td>
                                        <td class="text-center"><img src={student2} alt="student" /></td>
                                        <td>Mark Willy</td>
                                        <td>Male</td>
                                        <td>2</td>
                                        <td>English</td>
                                        <td>$2,0000.00</td>
                                        <td class="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                         <td>
                                            <div class="dropdown">
                                                <NavLink to="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span class="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0022</label>
                                            </div>
                                        </td>
                                        <td class="text-center"><img src={student3} alt="student" /></td>
                                        <td>Jessia Rose</td>
                                        <td>Female</td>
                                        <td>1</td>
                                        <td>Mathematics</td>
                                        <td>$2,0000.00</td>
                                        <td class="badge badge-pill bg-danger d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                         <td>
                                            <div class="dropdown">
                                                <NavLink to="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span class="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0023</label>
                                            </div>
                                        </td>
                                        <td class="text-center"><img src={student4} alt="student" /></td>
                                        <td>Mark Willy</td>
                                        <td>Male</td>
                                        <td>2</td>
                                        <td>Mathematics</td>
                                        <td>$5,000.00</td>
                                        <td class="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                         <td>
                                            <div class="dropdown">
                                                <NavLink to="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span class="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0024</label>
                                            </div>
                                        </td>
                                        <td class="text-center"><img src={student5} alt="student" /></td>
                                        <td>Jessia Rose</td>
                                        <td>Female</td>
                                        <td>1</td>
                                        <td>Mathematics</td>
                                        <td>$2,0000.00</td>
                                        <td class="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                         <td>
                                            <div class="dropdown">
                                                <NavLink to="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span class="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0021</label>
                                            </div>
                                        </td>
                                        <td class="text-center"><img src={student2} alt="student" /></td>
                                        <td>Mark Willy</td>
                                        <td>Male</td>
                                        <td>2</td>
                                        <td>English</td>
                                        <td>$2,0000.00</td>
                                        <td class="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                         <td>
                                            <div class="dropdown">
                                                <NavLink to="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span class="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0022</label>
                                            </div>
                                        </td>
                                        <td class="text-center"><img src={student3} alt="student" /></td>
                                        <td>Jessia Rose</td>
                                        <td>Female</td>
                                        <td>1</td>
                                        <td>Mathematics</td>
                                        <td>$2,000.00</td>
                                        <td class="badge badge-pill bg-danger d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                         <td>
                                            <div class="dropdown">
                                                <NavLink to="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span class="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0023</label>
                                            </div>
                                        </td>
                                        <td class="text-center"><img src={student4} alt="student" /></td>
                                        <td>Mark Willy</td>
                                        <td>Male</td>
                                        <td>2</td>
                                        <td>Mathematics</td>
                                        <td>$2,0000.00</td>
                                        <td class="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                         <td>
                                            <div class="dropdown">
                                                <NavLink to="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span class="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0024</label>
                                            </div>
                                        </td>
                                        <td class="text-center"><img src={student5} alt="student" /></td>
                                        <td>Jessia Rose</td>
                                        <td>Female</td>
                                        <td>1</td>
                                        <td>Mathematics</td>
                                        <td>$2,0000.00</td>
                                        <td class="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                         <td>
                                            <div class="dropdown">
                                                <NavLink to="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span class="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0021</label>
                                            </div>
                                        </td>
                                        <td class="text-center"><img src={student2} alt="student" /></td>
                                        <td>Mark Willy</td>
                                        <td>Male</td>
                                        <td>2</td>
                                        <td>English</td>
                                        <td>$2,0000.00</td>
                                        <td class="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                         <td>
                                            <div class="dropdown">
                                                <NavLink to="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span class="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0022</label>
                                            </div>
                                        </td>
                                        <td class="text-center"><img src={student3} alt="student" /></td>
                                        <td>Jessia Rose</td>
                                        <td>Female</td>
                                        <td>1</td>
                                        <td>Mathematics</td>
                                        <td>$2,0000.00</td>
                                        <td class="badge badge-pill bg-danger d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                         <td>
                                            <div class="dropdown">
                                                <NavLink to="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span class="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0023</label>
                                            </div>
                                        </td>
                                        <td class="text-center"><img src={student4} alt="student" /></td>
                                        <td>Mark Willy</td>
                                        <td>Male</td>
                                        <td>2</td>
                                        <td>Mathematics</td>
                                        <td>$2,0000.00</td>
                                        <td class="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                         <td>
                                            <div class="dropdown">
                                                <NavLink to="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span class="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">#0024</label>
                                            </div>
                                        </td>
                                        <td class="text-center"><img src={student5} alt="student" /></td>
                                        <td>Jessia Rose</td>
                                        <td>Female</td>
                                        <td>1</td>
                                        <td>Mathematics</td>
                                        <td>$2,0000.00</td>
                                        <td class="badge badge-pill bg-success d-block mg-t-8">Paid</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
                                         <td>
                                            <div class="dropdown">
                                                <NavLink to="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span class="flaticon-more-button-of-three-dots"></span>
                                                </NavLink>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-times text-orange-red"></i>Close</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-cogs text-dark-pastel-green"></i>Edit</NavLink>
                                                    <NavLink class="dropdown-item" to="#"><i class="fa fa-redo-alt text-orange-peel"></i>Refresh</NavLink>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* <!-- Teacher Payment Area End Here --> */}
                <footer class="footer-wrap-layout1">
                    <div class="copyright">© Copyrights <NavLink to="#">akkhor</NavLink> 2019. All rights reserved. Designed by <NavLink to="#">PsdBosS</NavLink></div>
                </footer>
            </div>
        </div>
        {/* <!-- Page Area End Here --> */}
    </div>
   
    </>
  );
};

export default TeacherPayment;