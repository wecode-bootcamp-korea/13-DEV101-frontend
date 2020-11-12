import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FaRegHeart, FaHeart, FaThumbsUp, FaFireAlt } from "react-icons/fa";
import styled from "styled-components";
const timePassed = (time) => {
  const BackDate = time.split(".").slice(0, 1)[0];
  const frontDateNew = new Date(BackDate);
  const now = new Date();
  const between = now - frontDateNew;
  const seconds = (between - (between % 1000)) / 1000;
  if (seconds < 60) {
    return `${seconds}초 `;
  }
  if (seconds < 3600) {
    return `${seconds / 60}분 `;
  }
  if (seconds >= 3600) {
    const day = Math.floor(seconds / 86400);
    const hour = Math.floor((seconds - day * 86400) / 3600);
    const minute = Math.floor((seconds - day * 86400 - hour * 3600) / 60);
    return `${day ? day + "일 " : ""}${hour ? hour + "시간 " : ""}${minute ? minute + "분 " : ""}`;
  }
};
const MyClassCard = ({
  class_image,
  isOpening,
  category,
  mentor,
  description,
  likeCount,
  cheeredRate,
  thumpsup,
  originPrice,
  discount,
  coupon,
  updated_at,
  product_id,
  modalHandler,
  likedList,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [pricePerMonth, setPricePerMonth] = useState(0);
  let history = useHistory();
  const cardHandler = (e) => {
    if (isOpening !== false) {
      return history.push(`/detail/${product_id}`);
    }
    modalHandler(e, product_id);
  };
  useEffect(() => {
    if (likedList) {
      setIsLiked(true);
    }
  }, []);
  useEffect(() => {
    if (originPrice && discount) {
      const discountedPrice = originPrice * discount;
      setPricePerMonth(discountedPrice / 5);
    }
  }, [discount, originPrice]);
  return (
    <ClassCardComponent>
      <LikeBtn onClick={() => setIsLiked(!isLiked)}>
        {isLiked ? <FaHeart fill="#F33340" /> : <FaRegHeart fill="#F8F8F8" />}
      </LikeBtn>
      <div onClick={(e) => cardHandler(e)}>
        <HoverImgBox>
          {coupon && <span style={{ display: coupon === "0" ? "none" : "block" }}>{coupon}</span>}
          <ImgWithProps
            src={
              class_image ||
              "https://images.unsplash.com/photo-1589395595558-18e333cf6341?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            }
            alt="ClassThumbnails"
          />
        </HoverImgBox>
        <TextDiv className="description">
          <Bold>
            {category}, {mentor}
          </Bold>
          <p>{description}</p>
          <Rates>
            {isOpening === false && (
              <span className="red">
                <FaFireAlt /> {Math.floor(cheeredRate * 10)}% 달성
              </span>
            )}
            <span>
              <FaHeart /> {likeCount}
            </span>
            {isOpening !== false && (
              <span>
                <FaThumbsUp /> {Math.floor(thumpsup * 100)}%
              </span>
            )}
          </Rates>
        </TextDiv>
        <TextDiv className="noBorder">
          {isOpening === false ? (
            <Button>응원하기</Button>
          ) : originPrice ? (
            <>
              <p>
                <CentereLinedSpan>{Number(originPrice).toLocaleString()}원</CentereLinedSpan>
                <span className="red">{Math.floor(discount * 100)}%</span>
              </p>
              <p>
                <Bold className="cost">월 {Math.floor(pricePerMonth).toLocaleString()}원</Bold>
                <span>(5개월)</span>
              </p>
            </>
          ) : (
            <span>
              미션 답변 <span className="red"> {timePassed(updated_at)}전</span>
            </span>
          )}
        </TextDiv>
      </div>
    </ClassCardComponent>
  );
};
const ClassCardComponent = styled.div`
  width: 242px;
  cursor: pointer;
  position: relative;
`;
const HoverImgBox = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 5px;
  overflow: hidden;
  span {
    display: inline-block;
    position: absolute;
    left: 10px;
    top: 10px;
    padding: 10px;
    background-color: #f33340;
    border-radius: 4px;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    z-index: 2;
  }
`;
const ImgWithProps = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.35s ease-in-out;
  &:hover {
    transform: scale(1.125);
  }
`;
const TextDiv = styled.div`
  margin-top: auto;
  padding: 5px 0;
  margin-bottom: 5px;
  border-bottom: 1px solid #f2f4f5;
  &.description {
    height: 108px;
  }
  &.noBorder {
    border-bottom: none;
    p {
      margin: 0;
    }
  }
  p {
    margin: 10px 0;
    line-height: 1.25;
    font-size: 14px;
  }
  span {
    padding-right: 5px;
    font-size: 12px;
    &.red {
      color: red;
    }
  }
`;
const Bold = styled.span`
  font-weight: 700;
  &.category {
    font-size: 10px;
  }
  &.cost {
    display: inline-block;
    padding-top: 5px;
    font-size: 14px;
  }
`;
const Button = styled.button`
  display: inline-block;
  width: 100%;
  margin-top: 10px;
  padding: 10px 0;
  border-radius: 5px;
  background-color: rgba(255, 77, 0, 0.1);
  color: #ff4d00;
  cursor: pointer;
  transition: 0.125s ease;
  &:hover {
    background-color: rgba(255, 77, 0, 0.2);
  }
`;
const LikeBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  z-index: 22;
`;
const CentereLinedSpan = styled.span`
  position: relative;
  padding: 0 2px;
  margin-right: 3px;
  ::after {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    height: 1px;
    top: 50%;
    background-color: #333;
  }
`;
const Rates = styled.p`
  color: gray;
`;

export default MyClassCard;
