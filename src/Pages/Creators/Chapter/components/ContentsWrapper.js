import styled from "styled-components";

const ContentsWrapper = ({ contents }) => {
  return <Wrapper>{contents}</Wrapper>;
};

const Wrapper = styled.div`
  margin-left: 150px;
  padding-top: 32px;
  width: 922px;
  line-height: 1.5;
  h3 {
    font-size: 24px;
    font-weight: 600;
  }
  > p {
    color: rgba(0, 0, 0, 0.4);
    width: 550px;
    font-size: 14px;
    font-weight: 600;
    padding-top: 15px;
  }
`;

export default ContentsWrapper;
