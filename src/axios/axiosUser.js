import axios from "axios";
import { BASE_URL} from "../utilidades/constants";
export const CreateUser = async (nombre, email, password) => {

  try {
    const response = await axios.post(`${BASE_URL}auth/register`, {
      nombre,
      email,
      password,
    });     
    console.log(response.data); 
    const user = await LoginUser(email, password);
    return user;
  } catch (error) {
    return alert(error.response.data.errors[0].msg);
  }
};

export const LoginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}auth/login`, {
      email,
      password,
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error);
    return alert(error.response.data.msg);
  }
};

// export const verifyUser = async (email, code) => {
//   try {
//     const response = await axios.patch(`${BASE_URL}auth/verify`, {
//       email,
//       code,
//     });
//     console.log("Usuario verificado");
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return alert(error.response.data.msg);
//   }
// }