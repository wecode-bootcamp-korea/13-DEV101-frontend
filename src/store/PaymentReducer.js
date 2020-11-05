import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    name: "",
    phoneNumber: "",
  },
  currentClassInfo: {
    classTitle: "",
    discount: 0,
    totalAmount: 0,
    discountAmount: 0,
    fivePlanAmount: 0,
  },
};

export const GetUserInfo = createAction("GET_USER_INFO");
export const GetPhoneNumber = createAction("GET_PHONE_NUMBER");
export const GetClassTitle = createAction("GET_CLASS_TITLE");
export const GetDiscount = createAction("GET_DISCOUNT");
export const GetTotalAmount = createAction("GET_TOTAL_AMOUNT");
export const GetDiscountAmount = createAction("GET_DISCOUNT_AMOUNT");
export const GetFivePlanAmount = createAction("GET_FIVE_PLAN_AMOUNT");

const PaymentReducer = createReducer(initialState, {
  [GetUserInfo]: (state, action) => {
    state.userInfo.name = action.payload;
  },
  [GetPhoneNumber]: (state, action) => {
    state.userInfo.phoneNumber = action.payload;
  },
  [GetClassTitle]: (state, action) => {
    state.currentClassInfo.classTitle = action.payload;
  },
  [GetDiscount]: (state, action) => {
    state.currentClassInfo.discount = action.payload;
  },
  [GetTotalAmount]: (state, action) => {
    state.currentClassInfo.totalAmount = action.payload.toLocaleString();
  },
  [GetDiscountAmount]: (state, action) => {
    state.currentClassInfo.discountAmount = action.payload.toLocaleString();
  },
  [GetFivePlanAmount]: (state, action) => {
    state.currentClassInfo.fivePlanAmount = action.payload.toLocaleString();
  },
});

export const actionCreators = {
  GetUserInfo,
  GetPhoneNumber,
  GetClassTitle,
  GetDiscount,
  GetTotalAmount,
  GetDiscountAmount,
  GetFivePlanAmount,
};

export default PaymentReducer;
