import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { GetHeaderImages } from "../../../store/DetailReducer";
import { API } from "./Utils";

const TopHeader = ({ handleModal }) => {
  const dispatch = useDispatch();
  const HeaderImages = useSelector((state) => state.DetailReducer.HeaderImages);

  useEffect(() => {
    axios.get(API).then((res) => {
      dispatch(GetHeaderImages(res.data.header_images));
    });
  }, []);

  return (
    <TopHeaderWrap>
      <div>
        <img
          onClick={() => handleModal(1)}
          src={HeaderImages?.[0]?.src}
          alt=""
        />
      </div>
      <div>
        <div>
          <img
            onClick={() => handleModal(2)}
            src={HeaderImages?.[1]?.src}
            alt=""
          />
        </div>
        <div>
          <div>
            <img
              onClick={() => handleModal(3)}
              src={HeaderImages?.[2]?.src}
              alt=""
            />
          </div>
          <div className="moreImage" onClick={() => handleModal(4)}>
            <div>
              <span>
                +{HeaderImages.length - 4} 개의 이미지 <br /> 더보기
              </span>
            </div>
            <img src={HeaderImages?.[3]?.src} alt="" />
          </div>
        </div>
      </div>
    </TopHeaderWrap>
  );
};

export default TopHeader;

const TopHeaderWrap = styled.div`
  display: flex;
  flex: 0 0 auto;
  border: 1px solid pink;
  height: 690px;
  img {
    object-fit: cover;
    cursor: pointer;
  }
  > div:first-of-type {
    width: 64.3%;
  }
  > div:last-of-type {
    width: 34%;
    padding-left: 6px;
    > div:first-of-type {
      height: 55%;
    }
    > div:last-of-type {
      height: 45%;
      padding-top: 6px;
      display: flex;
      div {
        width: 50%;
        img {
          height: 100%;
        }
      }
      .moreImage {
        position: relative;
        opacity: 0.8;
        > div {
          ${({ theme }) => theme.flexCenters}
          position: absolute;
          ${({ theme }) => theme.wideSize}
          cursor: pointer;
          background: rgba(0, 0, 0, 0.8);
          margin-left: 6px;
          color: white;
          width: calc(100% - 6px);
          span {
            font-size: 16px;
            font-weight: bold;
            text-align: center;
            line-height: 20px;
          }
        }
        width: 50%;
        padding-left: 6px;
      }
    }
  }
  img {
    width: 100%;
    height: 100%;
  }

  @media ${(props) => props.theme.tabletS} {
    width: 100%;
    margin: 0 auto;
    div {
      display: none;
    }
    > div:first-of-type {
      display: block;
      width: 100%;
    }
  }
`;
