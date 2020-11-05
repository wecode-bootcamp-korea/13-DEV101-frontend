import React, { useEffect } from "react";
import axios from "axios";
import Styled from "styled-components";
import Banner from "./Components/Banner";
import PackageCard from "./Components/PackageCard";
import {
  GetClassTitle,
  GetDiscount,
  GetTotalAmount,
  GetDiscountAmount,
  GetFivePlanAmount,
} from "../../store/PaymentReducer";
import { useDispatch, useSelector } from "react-redux";

const PackageSelector = () => {
  const dispatch = useDispatch();
  const ClassInfo = useSelector(
    (state) => state.PaymentReducer.currentClassInfo,
  );

  useEffect(() => {
    axios.get("http://localhost:3000/Data/PaymentData.json").then((res) => {
      dispatch(GetClassTitle(res.data.currentClassInfo.classTitle));
      dispatch(GetDiscount(res.data.currentClassInfo.discount));
      dispatch(GetTotalAmount(res.data.currentClassInfo.totalAmount));
      dispatch(GetDiscountAmount(res.data.currentClassInfo.discountAmount));
      dispatch(GetFivePlanAmount(res.data.currentClassInfo.fivePlanAmount));
    });
  }, []);
  return (
    <Wrap>
      <h2>패키지 선택하기</h2>
      <Banner bgcolor="#f8f8f9" color="#000">
        <div>
          <span>모두 무료배송이에요!</span>
          <p>
            수강에 필요한 모든 준비물이 포함된 키트를 무료배송으로 간단하게
            받아보세요.
          </p>
        </div>
      </Banner>
      <PackageCard ClassInfo={ClassInfo} />
    </Wrap>
  );
};

export default PackageSelector;

const Wrap = Styled.div`
  margin: 0 200px;

  h2 {
    font-size: 25px;
    font-weight: 600;
    padding: 25px 0;
  }
`;
