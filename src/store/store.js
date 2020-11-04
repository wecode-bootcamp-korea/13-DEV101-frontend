import { configureStore, combineReducers } from "@reduxjs/toolkit";
import CreatorsReducer from "./CreatorsReducer";

const rootReducer = combineReducers({
  CreatorsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
