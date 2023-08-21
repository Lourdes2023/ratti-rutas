import React from "react";
import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route,
} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Servicios from "../pages/Product/Product";
import User from "../pages/user/user";
const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <ReactDomRoutes>
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Services">
              <Route index element={<Services />} />
              <Route path=":Product" element={<Servicios />} />
            </Route>
            <Route path="user/:username" element={<User />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="*" element={<h2>Error</h2>} />
          </ReactDomRoutes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default Routes;
