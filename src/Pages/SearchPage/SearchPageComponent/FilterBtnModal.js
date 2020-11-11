import React from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

const categoryList = ["미술", "요리/음료", "데이터/개발", "글쓰기/콘텐츠"];
const sortList = ["최신순", "만족도순", "인기순"];

const FilterBtnModal = ({ getBtnVal, getSortBtnVal, modalVisible, modalEventHandler, btnName }) => {
  return (
    <>
      <ModalOverlay visible={modalVisible} onClick={modalEventHandler} />
      <Modal visible={modalVisible}>
        <div className="content">
          {btnName === "카테고리" ? (
            <>
              <ModalTop titleSize="20">
                <h2>카테고리 설정</h2>
                <IoMdClose size={25} onClick={modalEventHandler} className="closeBtn" />
              </ModalTop>
              <ModalFilterContent>
                {categoryList.map((category) => {
                  return (
                    <ModalFilter key={category}>
                      {category}
                      <input
                        type="radio"
                        name="radio"
                        value={category}
                        className=""
                        onChange={(e) => getBtnVal(e.target.value)}
                      ></input>
                      <span></span>
                    </ModalFilter>
                  );
                })}
                <FilterBottom>
                  <BottomBtn onClick={modalEventHandler}>확인</BottomBtn>
                </FilterBottom>
              </ModalFilterContent>
            </>
          ) : (
            <>
              <ModalTop titleSize="24">
                <h2>필터</h2>
                <IoMdClose size={25} onClick={modalEventHandler} className="closeBtn" />
              </ModalTop>
              <div>
                {sortList.map((sort) => {
                  return (
                    <ModalSort key={sort}>
                      {sort}
                      <input
                        type="radio"
                        name="radio"
                        value={sort}
                        onChange={(e) => getSortBtnVal(e.target.value)}
                      ></input>
                      <span></span>
                    </ModalSort>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default FilterBtnModal;

const ModalOverlay = styled.div`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? "initial" : "none")};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  cursor: pointer;
  transition: opacity 0.2s;
`;

const Modal = styled.div`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? "initial" : "none")};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  overflow: auto;
  transition: opacity 0.2s;

  .content {
    background: white;
    width: 480px;
    height: auto;
    padding: 40px 32px 35px;
    border-radius: 8px;
    color: #1b1c1d;
    font-size: 14px;
  }
`;

const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  font-size: ${(props) => (props.titleSize === "20" ? 20 : 24)}px;

  h2 {
    font-weight: 700;
    letter-spacing: -0.4px;
  }

  .closeBtn {
    cursor: pointer;
  }
`;

const ModalFilterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ModalFilter = styled.label`
  width: 208px;
  position: relative;
  padding-left: 30px;
  padding-top: 1px;
  margin-top: 20px;
  font-size: 14.3px;
  line-height: 20px;
  letter-spacing: -0.15px;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border: 2px solid #1b1c1d;
    border-radius: 2px;
  }

  input:checked ~ span:after {
    display: block;
  }

  span:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ span {
    background-color: #1b1c1d;
  }

  span:after {
    left: 5.7px;
    top: 2px;
    width: 6px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const FilterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const BottomBtn = styled.button`
  width: 412px;
  height: 40px;
  margin-top: 10px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.2px;
  padding: 0px 16px;
  transition: background-color 0.1s ease 0s;
  background-color: rgb(255, 146, 43);
  color: white;
  border-radius: 3px;
  cursor: pointer;

  :hover {
    background-color: ${(props) => (props.bottomColor === "gray" ? "#DDDDE0" : "#F77800")};
    transition: background-color 0.1s ease 0s;
  }
`;

const ModalSort = styled.label`
  display: block;
  position: relative;
  padding-left: 30px;
  padding-top: 1px;
  margin-top: 22px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    margin-right: 8px;
    border: 2px solid rgb(168, 174, 179);
    border-radius: 50%;
  }

  input:checked ~ span {
    background-color: #1b1c1d;
    border: 2px solid #1b1c1d;
  }

  span:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ span:after {
    display: block;
  }

  span:after {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }

  :nth-child(1) {
    margin-top: 32px;
  }

  :nth-child(3) {
    margin-bottom: 10px;
  }
`;
