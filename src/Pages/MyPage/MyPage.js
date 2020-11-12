import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RiCoupon2Line } from "react-icons/ri";
import { AiOutlineHeart, AiFillInfoCircle } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GoPencil } from "react-icons/go";
import MyPageSlider from "./MyPageComponent/MyPageSlider";
import LeftMenuCard from "./MyPageComponent/LeftMenuCard";
import ClassMadeCard from "./MyPageComponent/ClassMadeCard";
import { HHAPI } from "../../config";

const MyPage = () => {
  const [myPageList, setMyPageList] = useState([]);
  const [mockData, setMockData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Data/myPageList.json")
      .then((res) => res.json())
      .then((result) => setMyPageList(result.myPageList));
    fetch(`${HHAPI}/user/me`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("TOKEN"),
      },
    })
      .then((res) => res.json())
      .then((res) => setMockData(res.mypage[0]));
  }, []);

  const [isLiked, setIsLiked] = useState(false);

  return (
    <MyPageContainer>
      <Wrapper>
        <LeftContainer>
          <ProfileCard>
            <div className="profileTop">
              <div className="imagesWrapper">
                <div className="profileImgWrapper">
                  <img src={mockData.my_info?.profile_image} alt="profile" />
                </div>
                <div className="profileIconWrapper">
                  <GoPencil size={10} />
                </div>
              </div>
              <p className="profileName">{mockData.my_info?.user_name}</p>
              <p className="email">{mockData.my_info?.user_email}</p>
              <div className="pointContainer">
                {mockData.my_info?.point} <span>P</span>
                <img src="/Images/pointIcon.png" alt="point" />
              </div>
            </div>
            <div className="profileBottom">
              <div>
                <RiCoupon2Line size={22} />
                <p>
                  쿠폰 <span>{mockData.my_info?.coupon_num}</span>개
                </p>
              </div>
              <div>
                <AiOutlineHeart size={22} />
                <p>
                  찜 <span>{mockData.my_info?.liked_num}</span>개
                </p>
              </div>
              <div>
                <HiOutlineShoppingBag size={22} />
                <p>
                  내 클래스 <span>{mockData.my_info?.order_count}</span>개
                </p>
              </div>
            </div>
          </ProfileCard>
          <AttendanceCard>
            <div className="attendanceTitle">
              <h2>7일간 연속 수강해서 총 10,000P 모아요</h2>
              <AiFillInfoCircle size={14} className="attendanceIcon" />
            </div>
            <p>
              오늘 수강하면 <span>500P</span> 적립! 7일 연속 수강 챌린지를 시작하세요
            </p>
            <div className="attendancePoint">
              {myPageList.pointList &&
                myPageList.pointList.map((point, idx) => {
                  return (
                    <div key={idx}>
                      <div></div>
                      <p>{point}</p>
                    </div>
                  );
                })}
            </div>
          </AttendanceCard>
          <LeftMenuCard menuTitle="멤버십" menuList={myPageList?.membershipList} />
          <LeftMenuCard menuTitle="메뉴" menuList={myPageList?.menuList} />
        </LeftContainer>
        <RightContainer>
          {!mockData.seen_class?.length ? (
            <>
              <ParentTitle>내가 본 클래스</ParentTitle>
              <ClassTxt>아직 내가 본 클래스가 없습니다.</ClassTxt>
            </>
          ) : (
            <MyPageSlider cardDataList={mockData?.seen_class} title="내가 본 클래스" />
          )}
          {!mockData.liked_class?.length ? (
            <>
              <ParentTitle marginTop={64}>내가 찜한 클래스</ParentTitle>
              <ClassTxt>아직 내가 찜한 클래스가 없습니다.</ClassTxt>
            </>
          ) : (
            <MyPageSlider
              cardDataList={mockData?.liked_class}
              title="내가 찜한 클래스"
              likedList={true}
            />
          )}

          <RightContentBottom>
            <Title>
              <h2>내가 개설한 클래스</h2>
            </Title>
            {!mockData.class_made?.length ? (
              <ClassTxt>아직 내가 개설한 클래스가 없습니다.</ClassTxt>
            ) : (
              <ClassMadeCard dataList={mockData.class_made} />
            )}
          </RightContentBottom>
        </RightContainer>
      </Wrapper>
    </MyPageContainer>
  );
};

export default MyPage;

const MyPageContainer = styled.section`
  padding-top: 32px;
  margin-top: 68px;
  border-top: 1px solid #d3d3d3;
`;

const Wrapper = styled.div`
  max-width: 1176px;
  display: flex;
  justify-content: flex-start;
  margin: 0 80.5px;
  padding: 32px 0 24px;
  margin: 0 auto;
`;

const LeftContainer = styled.section`
  width: 360px;
  margin-right: 40px;
`;

const ProfileCard = styled.section`
  width: 100%;
  height: 329.8px;
  box-shadow: rgba(41, 42, 43, 0.08) 0px 2px 6px, rgba(41, 42, 43, 0.04) 0px 1px 0px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;

  .profileTop {
    height: 166px;
    margin-top: 40px;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .imagesWrapper {
      position: relative;

      .profileImgWrapper {
        flex-shrink: 0;
        width: 64px;
        height: 64px;
        border-radius: 100%;
        margin-bottom: 10px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .profileIconWrapper {
        width: 20px;
        height: 20px;
        border-radius: 100%;
        margin-bottom: 10px;
        background-color: #f8f8f9;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 10px;
        bottom: -2px;
        right: -3px;
        cursor: pointer;
      }
    }

    .profileName {
      font-size: 16px;
      color: #1b1c1d;
      text-align: center;
      line-height: 24px;
      letter-spacing: -0.3px;
      font-weight: bold;
    }

    .email {
      color: #858a8d;
      font-size: 11px;
      line-height: 16px;
      letter-spacing: normal;
      margin: 2px 0px 0px;
    }

    .pointContainer {
      height: 36px;
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: 500;
      color: #1b1c1d;
      text-align: center;
      border-radius: 20px;
      background-color: rgb(255, 249, 242);
      margin-top: 16px;
      padding: 8px 12px;

      span {
        margin-left: 2px;
      }

      img {
        width: 16px;
        height: 16px;
        margin-left: 6px;
      }
    }
  }

  .profileBottom {
    height: 71.8px;
    margin: 24px 0 28px;
    padding: 0 40px;
    display: flex;

    div {
      width: 93px;
      height: 71px;
      padding: 12px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 11px;
      color: #1b1c1d;
      cursor: pointer;

      p {
        margin-top: 7px;
        line-height: 16px;

        span {
          font-weight: bold;
        }
      }
    }
  }
`;

const AttendanceCard = styled.section`
  height: 149px;
  margin: 24px 0;
  padding: 20px;
  box-shadow: rgba(41, 42, 43, 0.1) 0px 2px 5px, rgba(41, 42, 43, 0.06) 0px 0px 0.5px;

  .attendanceTitle {
    display: flex;
    justify-content: flex-start;

    h2 {
      font-size: 14px;
      color: #1b1c1d;
      letter-spacing: -0.15px;
      font-weight: 500;
      line-height: 20px;
    }

    .attendanceIcon {
      margin: 2.2px 0 0 2px;
    }
  }

  p {
    font-size: 11px;
    color: #858a8d;
    line-height: 16px;
    margin-top: 5px;

    span {
      color: rgb(253, 126, 20);
    }
  }

  .attendancePoint {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;

    div {
      div {
        width: 28px;
        height: 28px;
        border-radius: 100%;
        margin-bottom: 8px;
        background-color: rgb(248, 248, 249);
      }
      p {
        font-size: 9px;
        line-height: 12px;
        text-align: center;
        margin-top: 4px;
        color: rgb(168, 174, 179);
      }
    }
  }
`;

const RightContentBottom = styled.section`
  margin-top: 64px;

  div {
    h2 {
      line-height: 24px;
      margin-bottom: 6px;
    }
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: #1b1c1d;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: -0.45px;
`;

const ClassTxt = styled.p`
  font-size: 14px;
  color: rgb(133, 138, 141);
`;

const RightContainer = styled.section`
  width: 776px;
`;

const ParentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: #1b1c1d;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: -0.45px;
  margin-top: ${(props) => props.marginTop || 0}px;
`;
