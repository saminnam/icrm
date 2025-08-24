import { configureStore } from "@reduxjs/toolkit";
import customersReducer from "./Reducers/CustomerFormReducer";

const store = configureStore({
  reducer: {
    customersInfo: customersReducer,
  },
});

export default store;
