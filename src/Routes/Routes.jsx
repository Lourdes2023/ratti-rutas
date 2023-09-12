import React from "react";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import User from "../pages/user/user";
import Service from "../pages/service/service";
const Routes = () => {
  return (
    <>
      <ReactDomRoutes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Services">
          <Route index element={<Services />} />
          <Route path=":Service" element={<Service />} />
        </Route>
        <Route path="user/:username" element={<User />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<h2>Error</h2>} />
      </ReactDomRoutes>
    </>
  );
};

export default Routes;
