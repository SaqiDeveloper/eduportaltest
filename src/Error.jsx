import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Error.css";

// css links
import "../src/css/normalize.css";
import "../src/css/main.css";
import "../src/fonts/flaticon.css";
import "../src/css/bootstrap.min.css";
import "../src/css/animate.min.css";
import "../src/css/style.css";

const Error = () => {
  return (
    <div className='styling'>
      <h2 className='heading'>Opps! Page Not Found.</h2>
      <NavLink to="/admin_dashboard">  <button> Admin Dashboard  </button> </NavLink>
    </div>
  );
};

export default Error;