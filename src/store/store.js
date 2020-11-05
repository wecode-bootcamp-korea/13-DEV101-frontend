import { configureStore, combineReducers } from "@reduxjs/toolkit";
import PaymentReducer from "./PaymentReducer";

const rootReducer = combineReducers({
  PaymentReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
