import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";

const storeSlice = configureStore({
  reducer: {
    userAuth: userSlice,
  },
});
export default storeSlice;
