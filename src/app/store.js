import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user";
import themeReducer from "../features/theme";
import counterReducer from "../features/counter";

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    counter: counterReducer,
  },
});
