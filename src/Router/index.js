import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginUI from '../Components/LoginUI';
import AdminLoginUI from '../Components/AdminLoginUI';
import DashboardUI from '../Components/DashboardUI';
import NotificationsUI from '../Components/NotificationsUI';
import ProfileUI from '../Components/ProfileUI';
import Courses from '../Components/Courses';
import AdminCourses from '../Components/AdminCourses';
import Coursepage1 from '../Components/Coursepage1';
import AdminCoursepage from '../Components/AdminCoursepage';
import Coursepreview from '../Components/Coursepreview';
import AdminCoursepreview from '../Components/adminCoursepreview';
import Coursepage2 from '../Components/Coursepage2';
import AdminCoursepage_1 from '../Components/AdminCoursepage_1';
import Discussion from '../Components/Discussion';
import ClassesandCalender from '../Components/ClassesandCalender';
import AdminDashboardUI from '../Components/AdminDashboardUI';
import AdminProfileUI from '../Components/AdminProfileUI';
import AdminNotificationsUI from '../Components/AdminNotificationsUI';
import AdminDiscussion from '../Components/adminDiscussion';
import AdminClassesandCalender from '../Components/adminClassesandCalender';

const RouterDOM = () => {
    // Redirect function for root URL
    const redirectRoot = () => {
        window.location.href = '/loginui'; // Redirect to '/loginui' path
        return null; // Return null because Route expects a component or element
    };

    return (
        <Router>
            <Route exact path="/" component={redirectRoot} />
            <Route exact path="/loginui" component={LoginUI} />
            <Route exact path="/adminloginui" component={AdminLoginUI} />
            <Route exact path="/dashboardui" component={DashboardUI} />
            <Route exact path="/notificationsui" component={NotificationsUI} />
            <Route exact path="/profileui" component={ProfileUI} />
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/admincourses" component={AdminCourses} />
            <Route exact path="/coursepage1" component={Coursepage1} />
            <Route exact path="/admincoursepage" component={AdminCoursepage} />
            <Route exact path="/coursepreview" component={Coursepreview} />
            <Route exact path="/admincoursepreview" component={AdminCoursepreview} />
            <Route exact path="/coursepage2" component={Coursepage2} />
            <Route exact path="/admincoursepage_1" component={AdminCoursepage_1} />
            <Route exact path="/discussion" component={Discussion} />
            <Route exact path="/classesandcalender" component={ClassesandCalender} />
            <Route exact path="/admindashboardui" component={AdminDashboardUI} />
            <Route exact path="/adminprofileui" component={AdminProfileUI} />
            <Route exact path="/adminnotificationsui" component={AdminNotificationsUI} />
            <Route exact path="/admindiscussion" component={AdminDiscussion} />
            <Route exact path="/adminclassesandcalender" component={AdminClassesandCalender} />
        </Router>
    );
}

export default RouterDOM;
