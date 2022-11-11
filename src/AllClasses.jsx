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
import student6 from "../src/img/figure/student6.png";
import student7 from "../src/img/figure/student7.png";
import student8 from "../src/img/figure/student8.png";
import student9 from "../src/img/figure/student9.png";
import student10 from "../src/img/figure/student10.png";


import Sidebar from '../src/components/Sidebar/Sidebar.jsx';
import Header from '../src/components/Header/Header.jsx';

const AllClasses = () => {   
    
    return (

        <>
    {/* <div id="preloader"></div> */}
    <div id="wrapper" className="wrapper bg-ash">
         {/* <!-- Header Menu Area Start Here --> */}
     
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
                        <li>All Classes</li>
                    </ul>
                </div>
                {/* <!-- Breadcubs Area End Here --> */}
                {/* <!-- Class Table Area Start Here --> */}
                <div className="card height-auto">
                    <div className="card-body">
                        <div className="heading-layout1">
                            <div className="item-title">
                                <h3>All Class Schedules</h3>
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
                                    <input type="text" placeholder="Search by Class ..." className="form-control" />
                                </div>
                                <div className="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
                                    <button type="submit" className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
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
                                                <label className="form-check-label">ID</label>
                                            </div>
                                        </th>
                                        <th>Photo</th>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Class</th>
                                        <th>Section</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Phone</th>
                                        <th>E-mail</th>
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
                                        <td className="text-center"><img src={student2} alt="student" /></td>
                                        <td>Mark Willy</td>
                                        <td>Male</td>
                                        <td>2</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>10.00 am - 11.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                        <td className="text-center"><img src={student3} alt="student" /></td>
                                        <td>Jessia Rose</td>
                                        <td>Female</td>
                                        <td>1</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>11.00 am - 12.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                        <td className="text-center"><img src={student4} alt="student" /></td>
                                        <td>Mark Willy</td>
                                        <td>Male</td>
                                        <td>2</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>11.00 am - 12.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                        <td className="text-center"><img src={student5} alt="student" /></td>
                                        <td>Jessia Rose</td>
                                        <td>Female</td>
                                        <td>1</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>12.00 am - 01.30 am </td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                        <td className="text-center"><img src={student6} alt="student" /></td>
                                        <td>Mark Willy</td>
                                        <td>Male</td>
                                        <td>2</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>10.00 am - 11.30 am </td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                        <td className="text-center"><img src={student7} alt="student" /></td>
                                        <td>Jessia Rose</td>
                                        <td>Female</td>
                                        <td>1</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>11.00 am - 12.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                        <td className="text-center"><img src={student8} alt="student" /></td>
                                        <td>Mark Willy</td>
                                        <td>Male</td>
                                        <td>2</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>11.00 am - 12.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                        <td className="text-center"><img src={student9} alt="student" /></td>
                                        <td>Jessia Rose</td>
                                        <td>Female</td>
                                        <td>1</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>11.00 am - 12.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                        <td className="text-center"><img src={student10} alt="student" /></td>
                                        <td>Mark Willy</td>
                                        <td>Male</td>
                                        <td>2</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>12.00 am - 12.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                        <td className="text-center"><img src={student6} alt="student" /></td>
                                        <td>Jessia Rose</td>
                                        <td>Female</td>
                                        <td>1</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>10.00 am - 11.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                                <label className="form-check-label">#0021</label>
                                            </div>
                                        </td>
                                        <td className="text-center"><img src={student2} alt="student" /></td>
                                        <td>Mark Willy</td>
                                        <td>Male</td>
                                        <td>2</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>11.00 am - 12.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                        <td className="text-center"><img src={student3} alt="student" /></td>
                                        <td>Jessia Rose</td>
                                        <td>Female</td>
                                        <td>1</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>10.00 am - 12.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                        <td className="text-center"><img src={student4} alt="student" /></td>
                                        <td>Mark Willy</td>
                                        <td>Male</td>
                                        <td>2</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>09.00 am - 10.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                        <td className="text-center"><img src={student5} alt="student" /></td>
                                        <td>Jessia Rose</td>
                                        <td>Female</td>
                                        <td>1</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>11.00 am - 12.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                        <td className="text-center"><img src={student6} alt="student" /></td>
                                        <td>Mark Willy</td>
                                        <td>Male</td>
                                        <td>2</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>11.00 am - 12.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                        <td className="text-center"><img src={student7} alt="student" /></td>
                                        <td>Jessia Rose</td>
                                        <td>Female</td>
                                        <td>1</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>10.00 am - 12.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                        <td className="text-center"><img src={student8} alt="student" /></td>
                                        <td>Mark Willy</td>
                                        <td>Male</td>
                                        <td>2</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>11.00 am - 12.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                        <td className="text-center"><img src={student9} alt="student" /></td>
                                        <td>Jessia Rose</td>
                                        <td>Female</td>
                                        <td>1</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>11.00 am - 12.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                        <td className="text-center"><img src={student10} alt="student" /></td>
                                        <td>Mark Willy</td>
                                        <td>Male</td>
                                        <td>2</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>10.00 am - 12.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                        <td className="text-center"><img src={student6} alt="student" /></td>
                                        <td>Jessia Rose</td>
                                        <td>Female</td>
                                        <td>1</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>10.00 am - 11.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                                <label className="form-check-label">#0021</label>
                                            </div>
                                        </td>
                                        <td className="text-center"><img src={student2} alt="student" /></td>
                                        <td>Mark Willy</td>
                                        <td>Male</td>
                                        <td>2</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>10.00 am - 11.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                        <td className="text-center"><img src={student3} alt="student" /></td>
                                        <td>Jessia Rose</td>
                                        <td>Female</td>
                                        <td>1</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>10.00 am - 11.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                        <td className="text-center"><img src={student4} alt="student" /></td>
                                        <td>Mark Willy</td>
                                        <td>Male</td>
                                        <td>2</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>10.00 am - 11.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                        <td className="text-center"><img src={student5} alt="student" /></td>
                                        <td>Jessia Rose</td>
                                        <td>Female</td>
                                        <td>1</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>10.00 am - 11.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                        <td className="text-center"><img src={student6} alt="student" /></td>
                                        <td>Mark Willy</td>
                                        <td>Male</td>
                                        <td>2</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>10.00 am - 11.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                        <td className="text-center"><img src={student7} alt="student" /></td>
                                        <td>Jessia Rose</td>
                                        <td>Female</td>
                                        <td>1</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>11.00 am - 12.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                        <td className="text-center"><img src={student8} alt="student" /></td>
                                        <td>Mark Willy</td>
                                        <td>Male</td>
                                        <td>2</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>11.00 am - 12.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                        <td className="text-center"><img src={student9} alt="student" /></td>
                                        <td>Jessia Rose</td>
                                        <td>Female</td>
                                        <td>1</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>11.00 am - 12.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                        <td className="text-center"><img src={student10} alt="student" /></td>
                                        <td>Mark Willy</td>
                                        <td>Male</td>
                                        <td>2</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>11.00 am - 12.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                                        <td className="text-center"><img src={student6} alt="student" /></td>
                                        <td>Jessia Rose</td>
                                        <td>Female</td>
                                        <td>1</td>
                                        <td>A</td>
                                        <td>02/05/2001</td>
                                        <td>11.00 am - 12.30 am</td>
                                        <td>+ 123 9988568</td>
                                        <td>kazifahim93@gmail.com</td>
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
                {/* <!-- Class Table Area End Here --> */}
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

export default AllClasses;