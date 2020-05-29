import { API_URL } from "../../config";
import endpoints from "../../Constants/Endpoints";
import { authentication } from "../../Constants/ActionTypes";

export const registerUser = data => dispatch => {
  const { name, email, password } = data;

  fetch(`${API_URL}${endpoints.POST_REGISTER}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      email,
      password
    })
  })
    .then(response => response.json())
    .then(json => {
      if (json.success) {
        localStorage.setItem("userToken", json.token);
        dispatch({ type: authentication.SET_LOGIN_STATUS, data: true });
      }
    });
};

export const isUserAuthenticated = () => dispatch => {
  if (localStorage.getItem("userToken")) dispatch({ type: authentication.SET_LOGIN_STATUS, data: true });
};

export const loginUser = data => dispatch => {
  const { email, password } = data;

  fetch(`${API_URL}${endpoints.POST_LOGIN}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then(response => response.json())
    .then(json => {
      if (json.success) {
        localStorage.setItem("userToken", json.token);
        dispatch({ type: authentication.SET_LOGIN_STATUS, data: true });
      }
    });
};

export const logoutUser = () => dispatch => {
  let token = localStorage.getItem("userToken");
  fetch(`${API_URL}${endpoints.POST_LOGOUT}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token
    }
  })
    .then(response => response.json())
    .then(json => {
      if (json.success) {
        localStorage.removeItem("userToken");
        dispatch({ type: authentication.SET_LOGIN_STATUS, data: false });
      }
    });
};
