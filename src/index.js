import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";


ReactDOM.render(
  <>
  <BrowserRouter>
    <App />

    <Helmet>

    <script src="../src/js/modernizr-3.6.0.min.js" type="text/javascript" />

    <script src="../src/js/jquery-3.3.1.min.js" type="text/javascript" />

    <script src="../src/js/plugins.js" type="text/javascript" />

    <script src="../src/js/popper.min.js" type="text/javascript" />

    <script src="../src/js/bootstrap.min.js" type="text/javascript" />

    <script src="../src/js/jquery.counterup.min.js" type="text/javascript" />

    <script src="../src/js/moment.min.js" type="text/javascript" />

    <script src="../src/js/jquery.waypoints.min.js" type="text/javascript" />

    <script src="../src/js/jquery.scrollUp.min.js" type="text/javascript" />

    <script src="../src/js/fullcalendar.min.js" type="text/javascript" />

    <script src="../src/js/Chart.min.js" type="text/javascript" />

    <script src="../src/js/main.js" type="text/javascript" />

</Helmet>

    </BrowserRouter>
    
  </>,
 document.getElementById("root")
);
