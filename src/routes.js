import {createBrowserRouter} from "react-router-dom";
import React from 'react'
import Home from "./Views/Home"
import Forum from "./Views/Forum";
import Comments from "./Views/Comments";
import Topic from "./Views/Topic";
import Contact from "./Views/Contact";
import InsideBlog from "./Views/InsideBlog";
import StaffUpdates from "./Views/StaffUpdates";
import Challenges from "./Views/Challenges";
import Victories from "./Views/Victories";
import Improvements from "./Views/Improvements";
import EmployeeHealth from "./Views/EmployeeHealth";
import ShortLong from "./Views/ShortLong";
import LeadershipRoles from "./Views/LeadershipRoles";


const Router = createBrowserRouter ([
    {path: '/', element: <Home />},
    {path: '/Forum', element: <Forum />},
    {path: '/Comments', element: <Comments /> },
    {path: '/Topic', element: <Topic />},
    {path: '/InsideBlog', element: <InsideBlog />},
    {path: '/Contact', element: <Contact /> },
    {path: '/StaffUpdates', element: <StaffUpdates/>},
    {path: '/Challenges', element: <Challenges/>},
    {path: '/Victories', element: <Victories/>},
    {path: '/Improvements', element: <Improvements/>},
    {path: '/EmployeeHealth', element: <EmployeeHealth />},
    {path: '/ShortLong', element: <ShortLong />},
    {path: '/LeadershipRoles', element: <LeadershipRoles/>},

   

]);

export default Router;