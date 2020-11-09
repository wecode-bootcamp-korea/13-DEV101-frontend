import { configureStore, combineReducers } from "@reduxjs/toolkit";
import DetailReducer from "./DetailReducer";
import PaymentReducer from "./PaymentReducer";

const rootReducer = combineReducers({
  DetailReducer,
  PaymentReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
