//it store the current user
import { userActionTypes } from "./user.tyes";
const INITTIAL_STATE = {
  currentUser: null,
};
const userReducer = function (state = INITTIAL_STATE, action) {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
