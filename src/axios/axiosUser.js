import axios from "axios";
import { BASE_URL } from "../utilidades/constants";

export const CreateUser = async (nombre, email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}auth/register`, {
      nombre,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return alertalert(error.response.data.msg);
  }
};

export const LoginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return alert(error.response.data.msg);
  }
};
