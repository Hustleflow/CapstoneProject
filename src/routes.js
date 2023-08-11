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
import Topic1 from "./Views/Topic1";
import Topic2 from "./Views/Topic2";
import Topic3 from "./Views/Topic3";
import Topic4 from "./Views/Topic4";
import Topic5 from "./Views/Topic5";
import Topic6 from "./Views/Topic6";
import Topic7 from "./Views/Topic7";



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
    {path: '/Topic1', element: <Topic1 />},
    {path: '/Topic2', element: <Topic2 />},
    {path: '/Topic3', element: <Topic3 />},
    {path: '/Topic4', element: <Topic4 />},
    {path: '/Topic5', element: <Topic5 />},
    {path: '/Topic6', element: <Topic6 />},
    {path: '/Topic7', element: <Topic7 />},
   

]);

export default Router;