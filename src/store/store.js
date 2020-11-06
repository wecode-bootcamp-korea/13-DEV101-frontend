import { configureStore, combineReducers } from "@reduxjs/toolkit";
import DetailReducer from "./DetailReducer";
import CreatorsReducer from "./CreatorsReducer";

const rootReducer = combineReducers({
  DetailReducer,
  CreatorsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
