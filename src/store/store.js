import { configureStore, combineReducers } from "@reduxjs/toolkit";
import PaymentReducer from "./PaymentReducer";
import DetailReducer from "./DetailReducer";
const rootReducer = combineReducers({
  PaymentReducer,
  DetailReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
