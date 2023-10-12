import { BtnItemStyled } from "./IncreaseStyles";

const BtnItem = ({
  children,
  disabled = false,
  onClick = (e) => e.preventDefault(),
}) => {
  return (
    <BtnItemStyled
      whileTap={{ scale: 0.95 }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </BtnItemStyled>
  );
};

export default BtnItem;
