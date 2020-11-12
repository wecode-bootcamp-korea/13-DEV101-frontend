import styled from "styled-components";

const IsPlannedModalContents = ({ contents }) => {
  return (
    <ModalContents>
      <div dangerouslySetInnerHTML={{ __html: contents.innerHTML }}></div>
    </ModalContents>
  );
};

export default IsPlannedModalContents;

const ModalContents = styled.div`
  position: relative;
  padding: 60px 10px 0;
  height: calc(100% - 60px);
  div {
    position: absolute;
    bottom: 0;
    line-height: 1.35;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        font-size: 14px;
        padding: 5px 10px;
        margin-right: 5px;
        margin-bottom: 10px;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
    p {
      font-size: 24px;
      font-weight: 600;
    }
  }
`;
