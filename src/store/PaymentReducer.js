import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  packageInfo: {},
  orderInfo: {},
};

export const GetPackageInfo = createAction("GET_PACKAGE_INFO");
export const GetOrderInfo = createAction("GET_ORDER_INFO");

const PaymentReducer = createReducer(initialState, {
  [GetPackageInfo]: (state, action) => {
    state.packageInfo = action.payload;
  },
  [GetOrderInfo]: (state, action) => {
    state.orderInfo = action.payload;
  },
});

export const actionCreators = {
  GetPackageInfo,
  GetOrderInfo,
};

export default PaymentReducer;
