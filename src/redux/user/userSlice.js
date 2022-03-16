import { createSlice } from "@reduxjs/toolkit";

const initializeUserState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "userAuth",
  initialState: initializeUserState,
  reducers: {
    SET_CURRENT_USER(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export const userAction = userSlice.actions;

export default userSlice.reducer;
