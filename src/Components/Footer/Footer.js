import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FaYoutube,
  FaInstagram,
  FaFacebookSquare,
  FaBloggerB,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <div>
          <div>
            <p className="title">클래스 101</p>
            <ul>
              <li>
                <Link to="/">홈</Link>
              </li>
              <li>
                <a href="https://www.notion.so/11-101-bf5978a2a39149ffab481ae7f8c76566">채용</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="title">크리에이터</p>
            <ul>
              <li>
                <Link to="/supportCreators">지원하기</Link>
              </li>
            </ul>
          </div>
          <div>
            <p>고객센터</p>
            <span>오전 10시 ~ 오후 6시 (주말, 공휴일 제외)</span>
            <button>
              <RiKakaoTalkFill /> 문의하기
            </button>
          </div>
        </div>
        <AboutClass101 className="aboutClass101">
          <div>
            <p>Class101 Inc.</p>
            <ul>
              <li>
                <a href="https://class101.net/docs/terms">이용약관</a>
              </li>
              <li>
                <a href="https://class101.net/docs/privacy">개인정보 처리방침</a>
              </li>
              <li>
                <a href="https://class101.net/docs/refund">환불정책</a>
              </li>
              <li>
                <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=4578100277">
                  사업자 정보 확인
                </a>
              </li>
              <li>
                <a href="/">제휴/협력 문의</a>
              </li>
              <li>
                <a href="https://class101.net/events/5f505aff730fe20013afbbc4">
                  단체/기업 교육 문의
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/document/d/1p7wi6Rd3LOmGcThaFIWnxwbEbs5F00KkISLLEQSC7j4/edit">
                  정기구독서비스 이용약관
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p>
              (주)클래스101 | 대표 고지연 | 서울특별시 중구 통일로 10 세브란스빌딩 18층 |
              사업자등록번호 : 457-81-00277 | 통신판매업신고 : 2019-서울중구-0087 | 주식회사
              클래스101은 전자상거래 등에서의 소비자보호에 관한 법률에 따른 통신판매업과
              통신판매중개업을 영위하고 있습니다. 주식회사 클래스101은 통신판매중개자로서 중개하는
              통신판매에 관하여서는 통신판매의 당사자가 아니므로 어떠한 책임도 부담하지 아니합니다.
            </p>
          </div>
        </AboutClass101>
        <Social>
          <li>
            <a target="_blank" href="https://www.youtube.com/channel/UCDJ1ZXSnt37KLaLFPFlBkqw">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/class101_official/">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.facebook.com/Class101Korea/">
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://post.naver.com/class101_official">
              N
            </a>
          </li>
          <li>
            <a target="_blank" href="https://blog.naver.com/class101_official">
              <FaBloggerB />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://class101.net/app?_branch_match_id=851776767392121290">
              <FaGooglePlay />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://class101.net/app?_branch_match_id=851776767392121290">
              <FaApple />
            </a>
          </li>
        </Social>
      </FooterWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  margin-top: 100px;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  font-size: 14px;
  line-height: 1.5;
`;

const FooterWrapper = styled.div`
  position: relative;
  width: 1176px;
  padding-bottom: 50px;
  > div {
    &:nth-child(1) {
      display: grid;
      grid-template-columns: 33% 33% 33%;
      color: #858a8d;
      p {
        display: inline-block;
        font-weight: 600;
        color: #000;
      }
      span {
        margin-left: 5px;
        font-size: 12px;
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        padding: 10px;
        width: 100%;
        border: 1px solid #cdd1d4;
        font-weight: 300;
        svg {
          margin-right: 5px;
        }
      }
    }
  }
`;

const AboutClass101 = styled.div`
  display: grid;
  margin-top: 30px;
  grid-template-columns: 40% 60%;
  font-size: 12px;
  > div {
    &:nth-child(1) {
      p {
        font-size: 12px;
        font-weight: 600;
      }
      ul {
        li {
          display: inline-block;
          position: relative;
          padding: 0 5px;
          &:nth-child(1) {
            padding-left: 0;
          }
          &:nth-child(4) {
            &:after {
              display: none;
            }
          }
          &:nth-child(5) {
            padding-left: 0;
          }
          &:last-of-type {
            padding-right: 0;
            &:after {
              display: none;
            }
          }
          &:after {
            position: absolute;
            content: "";
            width: 1px;
            height: 70%;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            background-color: #000;
          }
        }
      }
    }
    &:nth-child(2) {
      font-size: 12px;
    }
  }
`;

const Social = styled.ul`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  li {
    margin-right: 5px;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      padding: 5px;
      background-color: #d9d9d9;
      border-radius: 100%;
      color: #fff;
      font-weight: 600;
    }
    svg {
      color: #fff;
    }
  }
`;

export default Footer;
