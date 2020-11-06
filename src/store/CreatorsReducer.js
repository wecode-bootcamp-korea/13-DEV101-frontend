import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  detail: {},
  infomation: {
    brand: 0,
    creatorName: "",
    category: "미술",
    subCategory: "",
    level: "입문자",
  },
  titleAndCover: {
    classTitle: "",
    cover: "",
    coverBase: {},
    thumbnail: "",
    thumbnailBase: {},
  },
  infoImages: [{}, {}, {}],
};

export const getClassInfo = createAction("GET_CLASS_INFO");
export const getInfomation = createAction("GET_INFOMATION");
export const getTitleAndCover = createAction("GET_TITLE_AND_COVER");
export const getInfoImages = createAction("GET_INFO_IMAGES");

const CreatorsReducer = createReducer(initialState, {
  [getClassInfo]: (state, action) => {
    state.detail = action.payload;
  },
  [getInfomation]: (state, action) => {
    let result = action.payload;
    state.infomation = { ...state.infomation, ...result };
  },
  [getTitleAndCover]: (state, action) => {
    let result = action.payload;
    state.titleAndCover = { ...state.titleAndCover, ...result };
  },
  [getInfoImages]: (state, action) => {
    let result = action.payload;
    state.infoImages = { ...state.infoImages, ...result };
  },
});

export const actionCreators = {
  getClassInfo,
  getInfomation,
  getTitleAndCover,
  getInfoImages,
};

export default CreatorsReducer;
