import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import div from "@mui/material/Box";

export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(0.5)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(1.4)",
      opacity: 0,
    },
  },
}));

export const StyledModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  background: "var(--color-buttonLogin-bg)",
  borderRadius: "10px",
  padding: "20px",
  width: "50%",
  "& h2": {
    fontSize: "1.5rem",
    color: "var(--color-text-contact)",
  },
  " & ul": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "start",
    alignItems: "start",
    gap: "20px",
    width: "90%",
    borderRadius: "10px",
    border: "1px solid white",
    "& li": {
      fontSize: "1.2rem",
      fonwWeight: "bold",
      color: "var(--color-text-dark)",
      textAlign: "start",
      marginBottom: "20px",
    },
  },
}));

export const StyledModalButton = styled(Button)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "90%",
  height: "40px",
  color: "var(--color-button-text)",
  borderRadius: "18px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",

  "&:hover": {
    backgroundColor: "var(  --color-muted-text)",
  },
}));

export const StyledListItem = styled(div)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "90%",
  cursor: "pointer",
  padding: "8px",
  "&:hover": {
    backgroundColor: "#f5f5f5",
    color: "var(--color-text-dark)",
  },
}));
