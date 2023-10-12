import * as React from "react";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import { StyledModalBox, StyledModalButton } from "./UserStyles";
import CustomAvatar from "./CustomAvatar";
import { FcExport } from "react-icons/fc";
import { StyledListItem } from "./UserStyles";
import { NavLink } from "react-router-dom";
import { setCurrentUser, toggleMenu } from "../../../redux/user/userSlice";
import { clearCart } from "../../../redux/cart/Slice.Cart";
const UserMenu = () => {
  const { currentUser, hiddenMenu } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleLinkClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <StyledModalButton onClick={() => dispatch(toggleMenu())}>
        <CustomAvatar />
      </StyledModalButton>
      <Modal open={hiddenMenu} onClose={() => dispatch(toggleMenu())}>
        <StyledModalBox>
          <h2>
            Hola! <span>{currentUser.nombre}</span>
          </h2>

          <ul>
            <StyledListItem onClick={handleLinkClick}>
              <FcExport size={18} />
              <NavLink to="/micuenta">Mi cuenta</NavLink>
            </StyledListItem>
            <StyledListItem onClick={handleLinkClick}>
              <NavLink to="/TramitePostFuneral">Trámite Post-Funeral</NavLink>
            </StyledListItem>
            <StyledListItem onClick={handleLinkClick}>
              <NavLink to="/QueHacerAnteUnaDefuncion">
                Qué hacer ante unas defunción
              </NavLink>
            </StyledListItem>
            <StyledListItem onClick={handleLinkClick}>
              <NavLink to="/Seguros">Planificar en vida</NavLink>
            </StyledListItem>
            <StyledListItem onClick={handleLinkClick}>
              <NavLink to="/checkout">Mis compras</NavLink>
            </StyledListItem>
            <StyledListItem onClick={handleLinkClick}>
              <NavLink to="/PresupuestoForm">Crea un presupuesto</NavLink>
            </StyledListItem>
          </ul>
          <StyledModalButton
            onClick={() => {
              dispatch(setCurrentUser(null));
              dispatch(clearCart());
              dispatch(toggleMenu());
            }}
          >
            Cerrar sesión
          </StyledModalButton>
        </StyledModalBox>
      </Modal>
    </>
  );
};

export default UserMenu;
