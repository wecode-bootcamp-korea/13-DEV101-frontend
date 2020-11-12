import styled from "styled-components";
import creative from "../images/creative.jpg";
import career from "../images/career.jpg";

const MainBanner = ({ category }) => {
  const isCreative = category === "크리에이티브";
  return (
    <MainBannerWrapper
      bgURL={isCreative ? creative : career}
      bgColor={isCreative ? "#000" : "#f8f8f8"}
      color={isCreative ? "#fff" : "#333"}
    >
      <div>
        {isCreative ? (
          <>
            <p>
              준비물까지 챙겨주는
              <br />
              온라인 클래스
            </p>
            <p>
              취미를 시작하는데 필요한 모든 것을 <br />
              준비해드려요.
            </p>
          </>
        ) : (
          <>
            <p>
              일 잘하는 사람은
              <br />
              이유가 있습니다
            </p>
            <p>
              더 똑똑하게 일할 수 있는
              <br />
              온라인 강의와 1:1 코칭!
            </p>
          </>
        )}
      </div>
      <div className="background"></div>
    </MainBannerWrapper>
  );
};

export default MainBanner;

const MainBannerWrapper = styled.div`
  height: 350px;
  margin: 90px 0 60px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  display: flex;
  div {
    width: 35%;
    padding: 40px;
    p {
      margin-bottom: 15px;
      line-height: 1.5;
      font-size: 32px;
      font-weight: 600;
      &:nth-child(2) {
        font-weight: 500;
        font-size: 14px;
      }
    }

    &.background {
      width: 65%;
      background: url(${({ bgURL }) => bgURL}) no-repeat 50% 50% / cover;
    }
  }
`;
