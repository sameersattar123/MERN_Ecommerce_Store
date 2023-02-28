import axios from "axios";
import * as actionType from "../Constants/CartConstants";
const URL = "http://localhost:5000";

export const addCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/product/${id}`);
    dispatch({ type: actionType.ADD_TO_CART, payload: { ...data, quantity } });
  } catch (error) {
    console.log("Error while calling cart API");
  }
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({ type: actionType.REMOVE_FROM_CART, payload: id });
};
