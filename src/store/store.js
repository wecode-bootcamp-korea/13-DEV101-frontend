import { configureStore, combineReducers } from "@reduxjs/toolkit";
import DetailReducer from "./DetailReducer";

const rootReducer = combineReducers({
  DetailReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
