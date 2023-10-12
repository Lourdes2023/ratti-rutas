import React from "react";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import User from "../pages/user/user";
import Service from "../pages/service/Service";
import Products from "../pages/Products/Products";
import Login from "../pages/Login/Login";
import Checkout from "../pages/Checkout/checkout";
import SignUp from "../pages/Registro/SignUp";
import TramitePostFuneral from "../components/UserProfile/Post-funeral/Post-Funeral";
import QueHacerAnteUnaDefuncion from "../components/UserProfile/Recomend-Defunciones/Recomend-Defunciones";
import Seguros from "../components/UserProfile//Seguros/Seguros";
import PresupuestoForm from "../components/UserProfile/Crea-Presupuesto/Presupuesto";
import RouteProtection from "../components/RouteProtection/RouteProtection";
import MisCompras from "../components/UserProfile/Mis-Compras/MisCompras";
import Payment from "../pages/Payment/Payment";
import Micuenta from "../components/UserProfile/MiCuenta/Micuenta";
import Felicitaciones from "../pages/Felicitaciones/Felicitaciones";
const Routes = () => {
  return (
    <>
      <ReactDomRoutes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Services">
          <Route index element={<Services />} />
          <Route path=" /:Service" element={<Service />} />
        </Route>
        <Route path="user/:username" element={<User />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Products />} />
        <Route path="login" element={<Login />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route
          path="/checkout"
          element={
            <RouteProtection redirect_to="/login">
              <Checkout />
            </RouteProtection>
          }
        />
        <Route path="/payment" element={<Payment />} />
        <Route path="/micuenta" element={<Micuenta />} />
        <Route
          path="/QueHacerAnteUnaDefuncion"
          element={<QueHacerAnteUnaDefuncion />}
        />{" "}
        <Route path="/TramitePostFuneral" element={<TramitePostFuneral />} />
        <Route path="/miscompras" element={<MisCompras />} />
        <Route path="/Seguros" element={<Seguros />} />
        <Route path="/PresupuestoForm" element={<PresupuestoForm />} />{" "}
        <Route path="/felicitaciones" element={<Felicitaciones />} />
        <Route path="*" element={<h2>Error</h2>} />
      </ReactDomRoutes>
    </>
  );
};

export default Routes;
