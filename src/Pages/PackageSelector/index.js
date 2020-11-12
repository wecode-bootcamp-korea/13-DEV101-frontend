import React, { useEffect } from "react";
import axios from "axios";
import Styled from "styled-components";
import Banner from "./Components/Banner";
import { useParams } from "react-router-dom";
import PackageCard from "./Components/PackageCard";
import { API } from "../../utils";
import { GetPackageInfo } from "../../store/PaymentReducer";
import { useDispatch, useSelector } from "react-redux";

const PackageSelector = () => {
  const { id: classId } = useParams();
  const dispatch = useDispatch();
  const packageInfo = useSelector((state) => state.PaymentReducer.packageInfo);

  useEffect(() => {
    axios
      .get(`${API}${classId}/packages`, {
        headers: {
          Authorization: localStorage.getItem("TOKEN"),
        },
      })
      .then((res) => {
        dispatch(GetPackageInfo(res.data.package));
      });
  }, []);

  return (
    <Wrap>
      <h2>패키지 선택하기</h2>
      <Banner bgcolor="#f8f8f9" color="#000">
        <div>
          <span>모두 무료배송이에요!</span>
          <p>수강에 필요한 모든 준비물이 포함된 키트를 무료배송으로 간단하게 받아보세요.</p>
        </div>
      </Banner>
      <PackageCard ClassInfo={packageInfo} />
    </Wrap>
  );
};

export default PackageSelector;

const Wrap = Styled.div`
  padding-top: 60px;
  margin: 0 200px;
  h2 {
    font-size: 25px;
    font-weight: 600;
    padding: 25px 0;
  }
`;
