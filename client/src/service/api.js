import axios from "axios";

const URL = "http://localhost:5000";

export const authSignup = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log(error.meesage);
  }
};

export const authLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log(error.meesage);
    return error.response
  }
};
