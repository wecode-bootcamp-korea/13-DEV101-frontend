import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  detail: {},
  detailAside: [],
  reviews: {},
  community: [],
  headerImages: [],
  notice: [],
  productId: null,
};

export const getProductId = createAction("GET_PRODUCT_ID");
export const getClassInfo = createAction("GET_CLASS_INFO");
export const getDetailAside = createAction("GET_DETAIL_ASIDE");
export const getClassReviews = createAction("GET_CLASS_REVIEWS");
export const getClassCommunity = createAction("GET_CLASS_COMMUMITY");
export const getHeaderImages = createAction("GET_HEADER_IMAGES");
export const getNotice = createAction("GET_NOTICE");

const DetailReducer = createReducer(initialState, {
  [getClassInfo]: (state, action) => {
    state.detail = action.payload;
  },
  [getProductId]: (state, action) => {
    state.productId = action.payload;
  },
  [getClassReviews]: (state, action) => {
    state.reviews = action.payload;
  },
  [getDetailAside]: (state, action) => {
    state.detailAside = action.payload;
  },
  [getClassCommunity]: (state, action) => {
    state.community = action.payload;
  },
  [getHeaderImages]: (state, action) => {
    state.headerImages = action.payload;
  },
  [getNotice]: (state, action) => {
    state.notice = action.payload;
  },
});

export const actionCreators = {
  getClassInfo,
  getClassReviews,
  getClassCommunity,
  getDetailAside,
  getHeaderImages,
  getNotice,
  getProductId,
};

export default DetailReducer;
