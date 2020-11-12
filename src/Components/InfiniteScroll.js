import ClassCard from "./ClassCard";
import styled from "styled-components";

const InfiniteScroll = ({ dataList }) => {
  // 상위 컴포넌트에서 작성해주세요.

  // let fetchCount = 0;

  // const fetchData = async () => {
  //   fetchCount++;
  // };

  // const intersection = () => {
  //   const options = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 1,
  //   };
  //   let callback = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         if (entry.intersectionRatio >= 0.75) {
  //           fetchData();
  //         }
  //       }
  //     });
  //   };
  //   let target = document.querySelector(".observer");
  //   let observer = new IntersectionObserver(callback, options);
  //   observer.observe(target);
  // };

  return (
    <InfiniteScrollWrapper>
      <ul>
        {dataList.length !== 0 &&
          dataList.map((slide, index) => {
            return (
              <li className="card" key={index}>
                <ClassCard {...slide} />
              </li>
            );
          })}
      </ul>
    </InfiniteScrollWrapper>
  );
};

const InfiniteScrollWrapper = styled.div`
  margin-top: 24px;
  width: 100%;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      margin-bottom: 34px;
    }
  }
`;

export default InfiniteScroll;
