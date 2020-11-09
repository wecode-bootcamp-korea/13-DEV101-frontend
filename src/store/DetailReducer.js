import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  detail: {},
  reviews: {},
  community: [],
  headerImages: [],
};

export const getClassInfo = createAction("GET_CLASS_INFO");
export const getClassReviews = createAction("GET_CLASS_REVIEWS");
export const getClassCommunity = createAction("GET_CLASS_COMMUMITY");
export const getHeaderImages = createAction("GET_HEADER_IMAGES");

const DetailReducer = createReducer(initialState, {
  [getClassInfo]: (state, action) => {
    state.detail = action.payload;
  },
  [getClassReviews]: (state, action) => {
    state.reviews = action.payload;
  },
  [getClassCommunity]: (state, action) => {
    state.community = action.payload;
  },
  [getHeaderImages]: (state, action) => {
    state.headerImages = action.payload;
  },
});

export const actionCreators = {
  getClassInfo,
  getClassReviews,
  getClassCommunity,
  getHeaderImages,
};

export default DetailReducer;
