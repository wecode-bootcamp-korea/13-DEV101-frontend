import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  Detail: {},
};

export const GetClassInfo = createAction("GET_CLASS_INFO");

const CreatorsReducer = createReducer(initialState, {
  [GetClassInfo]: (state, action) => {
    state.Detail = action.payload;
  },
});

export const actionCreators = {
  GetClassInfo,
};

export default CreatorsReducer;
