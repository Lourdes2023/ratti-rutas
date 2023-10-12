import { ButtonStylesCart } from "./ButtonStyled";

const ButtonCart = ({
  children,
  disabled = false,
  onClick = (e) => e.preventDefault(),
}) => {
  return (
    <ButtonStylesCart
      disabled={disabled}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </ButtonStylesCart>
  );
};

export default ButtonCart;
