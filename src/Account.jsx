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

import user from "../src/img/figure/user.jpg";
import user1 from "../src/img/figure/user1.jpg";
import user2 from "../src/img/figure/user2.jpg";
import user3 from "../src/img/figure/user3.jpg";
import user4 from "../src/img/figure/user4.jpg";
import user5 from "../src/img/figure/user5.jpg";

import Sidebar from '../src/components/Sidebar/Sidebar.jsx';
import Header from '../src/components/Header/Header.jsx';


const Account = () => {
  return (
    <>
            {/* <!-- Preloader Start Here --> */}
            
            {/* <!-- <div id="preloader"></div> --> */}

            {/* <!-- Preloader End Here --> */}

            
    <div id="wrapper" className="wrapper bg-ash">
        <Header/>

        {/* <!-- Page Area Start Here --> */}
        <div className="dashboard-page-one">
        
        <Sidebar/>

            <div className="dashboard-content-one">
                {/* <!-- Breadcubs Area Start Here --> */}
                <div className="breadcrumbs-area">
                    <h3>Account Setting</h3>
                    <ul>
                        <li>
                            <NavLink to="index.html">Home</NavLink>
                        </li>
                        <li>Setting</li>
                    </ul>
                </div>
                {/* <!-- Breadcubs Area End Here --> */}
                {/* <!-- Account Settings Area Start Here --> */}
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="heading-layout1">
                                    <div className="item-title">
                                        <h3>Add New User</h3>
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
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>First Name *</label>
                                            <input type="text" placeholder="" className="form-control" />
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>Last Name *</label>
                                            <input type="text" placeholder="" className="form-control" />
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>User Type *</label>
                                            <select className="select2">
                                                <option value="">Please Select*</option>
                                                <option value="1">Super Admin</option>
                                                <option value="2">Admin</option>
                                                <option value="3">User</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>Gender *</label>
                                            <select className="select2">
                                                <option value="">Please Select Gender *</option>
                                                <option value="1">Male</option>
                                                <option value="2">Female</option>
                                                <option value="3">Others</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>Father's Name</label>
                                            <input type="text" placeholder="" className="form-control" />
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>Mother's Name</label>
                                            <input type="text" placeholder="" className="form-control" />
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>Date Of Birth *</label>
                                            <input type="text" placeholder="dd/mm/yyyy" className="form-control air-datepicker"
                                                data-position='bottom right' />
                                            <i className="fa fa-calendar-alt"></i>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>Religion *</label>
                                            <select className="select2">
                                                <option value="">Please Select *</option>
                                                <option value="1">Islam</option>
                                                <option value="2">Christian</option>
                                                <option value="3">Hindu</option>
                                                <option value="4">Buddhish</option>
                                                <option value="5">Others</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>Joining Data *</label>
                                            <input type="text" placeholder="dd/mm/yyyy" className="form-control air-datepicker"
                                                data-position='bottom right' />
                                            <i className="fa fa-calendar-alt"></i>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>E-Mail</label>
                                            <input type="email" placeholder="" className="form-control" />
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>Subject *</label>
                                            <select className="select2">
                                                <option value="">Please Select*</option>
                                                <option value="1">Mathmetics</option>
                                                <option value="2">English</option>
                                                <option value="3">Chemistry</option>
                                                <option value="3">Biology</option>
                                                <option value="3">Others</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>Class *</label>
                                            <select className="select2">
                                                <option value="">Please Select Class *</option>
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
                                            <label>Section *</label>
                                            <select className="select2">
                                                <option value="">Please Select Section *</option>
                                                <option value="1">Pink</option>
                                                <option value="2">Blue</option>
                                                <option value="3">Bird</option>
                                                <option value="3">Rose</option>
                                                <option value="3">Red</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>ID No *</label>
                                            <input type="text" placeholder="" className="form-control" />
                                        </div>                               
                                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                                            <label>Phone</label>
                                            <input type="text" placeholder="" className="form-control" />
                                        </div>
                                        <div className="col-lg-6 col-12 form-group">
                                            <label>Adress *</label>
                                            <textarea className="textarea form-control" name="message" id="form-message" cols="10"
                                                rows="4"></textarea>
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
                    <div className="col-4-xxxl col-xl-5">
                        <div className="card account-settings-box height-auto">
                            <div className="card-body">
                                <div className="heading-layout1 mg-b-20">
                                    <div className="item-title">
                                        <h3>All User</h3>
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
                                <div className="all-user-box">
                                    <div className="media media-none--xs active">
                                        <div className="item-img">
                                            <img src={user1} className="media-img-auto" alt="user" />
                                        </div>
                                        <div className="media-body space-md">
                                            <h5 className="item-title">Steven Johnson</h5>
                                            <div className="item-subtitle">Super Admin</div>
                                        </div>
                                    </div>
                                    <div className="media media-none--xs">
                                        <div className="item-img">
                                            <img src={user2} className="media-img-auto" alt="user" />
                                        </div>
                                        <div className="media-body space-md">
                                            <h5 className="item-title">Maria Jane</h5>
                                            <div className="item-subtitle">Super Admin</div>
                                        </div>
                                    </div>
                                    <div className="media media-none--xs">
                                        <div className="item-img">
                                            <img src={user3} className="media-img-auto" alt="user" />
                                        </div>
                                        <div className="media-body space-md">
                                            <h5 className="item-title">Andrew Walles</h5>
                                            <div className="item-subtitle">Super Admin</div>
                                        </div>
                                    </div>
                                    <div className="media media-none--xs">
                                        <div className="item-img">
                                            <img src={user4} className="media-img-auto" alt="user" />
                                        </div>
                                        <div className="media-body space-md">
                                            <h5 className="item-title">Walter Emma</h5>
                                            <div className="item-subtitle">Super Admin</div>
                                        </div>
                                    </div>
                                    <div className="media media-none--xs">
                                        <div className="item-img">
                                            <img src={user5} className="media-img-auto" alt="user" /> 
                                        </div>
                                        <div className="media-body space-md">
                                            <h5 className="item-title">Stuart Johnson</h5>
                                            <div className="item-subtitle">Super Admin</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8-xxxl col-xl-7">
                        <div className="card account-settings-box">
                            <div className="card-body">
                                <div className="heading-layout1 mg-b-20">
                                    <div className="item-title">
                                        <h3>User Details</h3>
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
                                <div className="user-details-box">
                                    <div className="item-img">
                                        <img src={user} alt="user" />
                                    </div>
                                    <div className="item-content">
                                        <div className="info-table table-responsive">
                                            <table className="table text-nowrap">
                                                <tbody>
                                                    <tr>
                                                        <td>Name:</td>
                                                        <td className="font-medium text-dark-medium">Steven Johnson</td>
                                                    </tr>
                                                    <tr>
                                                        <td>User Type:</td>
                                                        <td className="font-medium text-dark-medium">Super Admin</td>
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
                                                        <td>Date Of Birth:</td>
                                                        <td className="font-medium text-dark-medium">07.08.2016</td>
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
                    </div>
                </div>
                {/* <!-- Account Settings Area End Here --> */}
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

export default Account;