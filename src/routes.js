import {createBrowserRouter} from "react-router-dom";
import React from 'react'
import Home from "./Views/Home"
import Forum from "./Views/Forum";
import Comments from "./Views/Comments";
import Topic from "./Views/Topic";
import Contact from "./Views/Contact";
import InsideBlog from "./Views/InsideBlog";




const Router = createBrowserRouter ([
    {path: '/', element: <Home />},
    {path: '/Forum', element: <Forum />},
    {path: '/Comments', element: <Comments /> },
    {path: '/Topic', element: <Topic />},
    {path: '/InsideBlog', element: <InsideBlog />},
    {path: '/Contact', element: <Contact /> },

   

]);

export default Router;