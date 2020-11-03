import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  Detail: {},
  Reviews: {},
  Community: [],
  HeaderImages: [],
};

export const GetClassInfo = createAction("GET_CLASS_INFO");
export const GetClassReviews = createAction("GET_CLASS_REVIEWS");
export const GetClassCommunity = createAction("GET_CLASS_COMMUMITY");
export const GetHeaderImages = createAction("GET_HEADER_IMAGES");

const DetailReducer = createReducer(initialState, {
  [GetClassInfo]: (state, action) => {
    state.Detail = action.payload;
  },
  [GetClassReviews]: (state, action) => {
    state.Reviews = action.payload;
  },
  [GetClassCommunity]: (state, action) => {
    state.Community = action.payload;
  },
  [GetHeaderImages]: (state, action) => {
    state.HeaderImages = action.payload;
  },
});

export const actionCreators = {
  GetClassInfo,
  GetClassReviews,
  GetClassCommunity,
  GetHeaderImages,
};

export default DetailReducer;
