//it store the current user
const INITTIAL_STATE = {
  currentUser: null,
};
const userReducer = function (state = INITTIAL_STATE, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
