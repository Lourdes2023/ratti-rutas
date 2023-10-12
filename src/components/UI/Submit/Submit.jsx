import { SubmitButton } from "./SubmitStyles";

function Submit({ children, disabled = false, onClick }) {
  return (
    <SubmitButton
      type="submit"
      disabled={disabled}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      animate={{ y: [0, -10, 0], transition: { duration: 0.3 } }}
    >
      {children}
    </SubmitButton>
  );
}

export default Submit;
