import { useHistory } from "react-router-dom";
import styled from "styled-components";

const creativeBtn = ["미술", "요리/음료"];
const careerBtn = ["데이터/개발", "글쓰기/콘텐츠"];

const SubCategory = ({ category }) => {
  const history = useHistory();
  const btnClicked = (e) => {
    const btnVal = e.target.value;
    history.push(`/searchPage?query=${btnVal}`);
  };

  return (
    <SubCategoryContainer>
      {category === "크리에이티브" ? (
        <div>
          {creativeBtn.map((btn) => {
            return (
              <button onClick={btnClicked} value={btn}>
                {btn}
              </button>
            );
          })}
        </div>
      ) : (
        <div>
          {careerBtn.map((btn) => {
            return (
              <button onClick={btnClicked} value={btn}>
                {btn}
              </button>
            );
          })}
        </div>
      )}
    </SubCategoryContainer>
  );
};
export default SubCategory;
const SubCategoryContainer = styled.div`
  width: 100%;
  height: 48px;
  margin-bottom: 48px;
  div {
    button {
      padding: 14px 100px;
      border-radius: 5px;
      margin-right: 24px;
      background-color: rgb(248, 248, 249);
      color: rgb(27, 28, 29);
      text-align: center;
      line-height: 20px;
      letter-spacing: -0.15px;
      font-size: 14px;
      cursor: pointer;
    }
  }
`;
