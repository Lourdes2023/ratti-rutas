import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useCheckAuth = (redirect_to) => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      navigate(redirect_to);
    }
  }, [currentUser, navigate, redirect_to]);
};

export default useCheckAuth;
