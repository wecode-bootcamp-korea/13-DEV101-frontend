import React, { useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useSelector } from "react-redux";
import Styled from "styled-components";

const HeadModal = ({ handleModal, handleSlick, slickWidth, currentPage }) => {
  const { headerImages } = useSelector((state) => state.DetailReducer);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style = "";
    };
  }, []);

  return (
    <ModalWrap slickWidth={slickWidth}>
      <div className="modalWrap">
        <div className="topList">
          <span>{currentPage < 10 ? "0" + currentPage : currentPage} | 05</span>
          <span onClick={handleModal}>X 닫기</span>
        </div>
        <div className="modal">
          <div>
            {headerImages.map(({ src }) => (
              <div>
                <img src={src} alt="headerImage" />
              </div>
            ))}
          </div>
        </div>
        <div className="leftBtn" onClick={() => handleSlick("left")}>
          <button>
            <AiOutlineLeft size={40} />
          </button>
        </div>
        <div className="rightBtn" onClick={() => handleSlick("right")}>
          <button>
            <AiOutlineRight size={40} />
          </button>
        </div>
      </div>
    </ModalWrap>
  );
};

export default HeadModal;

const ModalWrap = Styled.div`
  ${({ theme }) => theme.flexCenterXY}
  position: fixed;
  z-index: 400;
  ${({ theme }) => theme.wideSize};
  background: rgba(0,0,0,0.5);

  .modalWrap {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0 100px;

  .topList {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 10px;

    span {
      color: white;
    }

    span:first-of-type {
      font-size: 25px;

    }

    span:last-of-type {
      cursor: pointer;
      font-size: 20px;
    }
  }

  .modal {
    overflow: hidden;
    /* flex-wrap: nowrap; */
    width: 850px;
    height: 600px;

    > div {
    display: flex;
    width: inherit;
    flex-flow: row nowrap;    
    transition: transform .5s;
    transform: ${({ slickWidth }) => `translate3d(${slickWidth}px,0px,0px)`};

    div {
      display:flex;
        width: inherit;
        height: inherit;

      img {
        object-fit: cover;
        width: inherit;
        height: inherit;
      }
    }
    }
  }

  .leftBtn, .rightBtn {
    position: absolute;
    ${({ theme }) => theme.flexCenterXY}
    top:0;
    width: 100px;
    height: calc(100% - 30px);
    cursor: pointer;

    button {
      cursor: pointer;
      color: white;
    }
  }

  .leftBtn {
    left: 0;
  }

  .rightBtn {
    right: 0;

  }
  }
`;
