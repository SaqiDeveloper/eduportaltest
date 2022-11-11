import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/font-awesome/css/font-awesome.min.css";

import Login from "./Login";
// import Home from "./Home";
import Admin_Dashboard from "./Admin_Dashboard";
import Admin from "./Admin";
import Students from "./Students";
import Parents from "./Parents";
import Teachers from "./Teachers";
import Contact from "./Contact";
import AllStudent from "./AllStudent";
import StudentDetails from "./StudentDetails";
import AdminForm from "./AdminForm";
import StudentPromotion from "./StudentPromotion";

import Mark_Attendance from "./Mark_Attendance";
import Edit_Attendance from "./Edit_Attendance";
import Attendance_Report from "./Attendance_Report";
import MarkClasswise_Attendance from "./MarkClasswise_Attendance";
import Attendance_Report_List from "./Attendance_Report_List";
import Attendance_Sheet from "./Attendance_Sheet";
import Datewise_Class_Attend_Report from "./Datewise_Class_Attend_Report";

import First_Demo from "./First_Demo";


import AllTeacher from "./AllTeacher";
import TeacherDetails from "./TeacherDetails";
import AddTeacher from "./AddTeacher";
import TeacherPayment from "./TeacherPayment";

import AllParents from "./AllParents";
import ParentsDetails from "./ParentsDetails";
import AddParents from "./AddParents";

import Library from "./Library";
import AddBook from "./AddBook";

import AllFee from "./AllFee";
import AllExpense from "./AllExpense";
import AddExpense from "./AddExpense";

import AllClasses from "./AllClasses";
import AddClass from "./AddClass";

import AddSubject from "./AddSubject";
import ClassRoutine from "./ClassRoutine";
import Attendance from "./Attendance";
import ExamSchedule from "./ExamSchedule";
import ExamGrades from "./ExamGrades";
import Transport from "./Transport";
import Hostel from "./Hostel";
import Notice from "./Notice";
import Messaging from "./Messaging";

import Account from "./Account";

import PaiChart from "./PaiChart.jsx";

import Error from "./Error";

import { Switch, Route } from "react-router-dom";

const App = () => {

  return (
    
    <>

    
      {/* <Navbar /> */}

      <Switch>

        <Route exact path="/" component={Login} />
        <Route exact path="/admin_dashboard" component={Admin_Dashboard} />
        <Route exact path="/Admin" component={Admin} />
        <Route exact path="/students" component={Students} />
        <Route exact path="/parents" component={Parents} />
        <Route path='/teachers' component={Teachers} />

        <Route path="/first_demo" component={First_Demo} />

        <Route path="/allstudent" component={AllStudent} />
        <Route path="/studentdetails" component={StudentDetails} />
        <Route path="/admitform" component={AdminForm} />
        <Route path="/studentpromotion" component={StudentPromotion} />

        <Route path="/mark_attend" component={Mark_Attendance} />
        <Route path="/edit_attend" component={Edit_Attendance} />
        <Route path="/attend_rep" component={Attendance_Report} /> 
        <Route path="/markclass_attend" component={MarkClasswise_Attendance} /> 
        <Route path="/attend_report_list" component={Attendance_Report_List} /> 
        <Route path="/attend_sheet" component={Attendance_Sheet} /> 
        <Route path="/datewise_class_attend_rep" component={Datewise_Class_Attend_Report} />

        <Route path="/allteacher" component={AllTeacher} />
        <Route path="/teacherdetails" component={TeacherDetails} />
        <Route path="/addteacher" component={AddTeacher} />
        <Route path="/teacherpayment" component={TeacherPayment} />

        <Route path="/allparents" component={AllParents} />
        <Route path="/parentsdetails" component={ParentsDetails} />
        <Route path="/addparents" component={AddParents} />

        <Route path="/all_book" component={Library} />
        <Route path="/add_book" component={AddBook} />

        <Route path="/all_fees" component={AllFee} />
        <Route path="/all_expense" component={AllExpense} />
        <Route path="/add_expense" component={AddExpense} />

        <Route path="/all_classes" component={AllClasses} />
        <Route path="/add_class" component={AddClass} />

        <Route path="/add_subject" component={AddSubject} />
        <Route path="/class_routine" component={ClassRoutine} />
        <Route path="/student_attendence" component={Attendance} />
        <Route path="/exam_schedule" component={ExamSchedule} />
        <Route path="/exam_grade" component={ExamGrades} />
        <Route path="/transport" component={Transport} />
        <Route path="/hostel" component={Hostel} />
        <Route path="/notice" component={Notice} />
        <Route path="/messaging" component={Messaging} />
        
        <Route path="/account" component={Account} />
        <Route path="/pai_chart" component={PaiChart} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />

      </Switch>

    </>

  );
};



export default App;
