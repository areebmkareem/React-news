import { authentication as authenticationAction } from "../../Constants/ActionTypes";

const initialState = {
  isUserLoggedIn: false
};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case authenticationAction.SET_LOGIN_STATUS:
      return {
        ...state,
        isUserLoggedIn: action.data
      };
    default:
      return state;
  }
};

export default authentication;
