import React from "react";
import {useRoutes} from "react-router-dom";

import Slider from "./components/slider/Slider";

import ContactPage from "./pages/contactPage/ContactPage";
import HomePage from "./pages/HomePage/HomePage";


const ProjectRoutes = () => {
    let element = useRoutes([
      { path: "/", element: <HomePage /> },
      { path: "/contact", element: <ContactPage /> },
    ]);
    return element 
}

export default ProjectRoutes
