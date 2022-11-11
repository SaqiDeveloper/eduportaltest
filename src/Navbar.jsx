import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Computech Private</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            
                            
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/login">Login</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/admin_dashboard">Admin Dashboard</NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/students">Students</NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/allstudent">All Students</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/allteacher">All Teachers</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/allparents">Parents</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/all_book">Library</NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/all_fees">Accounts</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/exam_schedule">Exam Schedule</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/contact">Contact Us</NavLink>
                            </li>

       
                        </ul>

                       
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;