import ImgSrc from "@images/user2.png";
import { DraggableItemType } from "../comm/enums";

const Nav: React.FunctionComponent<any> = ({
  handleClick,
  handleMinimize,
  handleClose,
}: any) => {
  const myProjectData = [
    {
      id: 1,
      type: DraggableItemType.folioPop,
      name: "데싱디바",
      clickFunc: handleMinimize,
      depth: {
        link: "https://yeong1110.github.io/windowyeong/mvs/diva.mp4",
        subject: "프로모션 종료",
        date: "2024.03",
        skill: "HTML,SCSS,JS",
      },
    },
    {
      id: 2,
      type: DraggableItemType.folioPop,
      name: "월요편지",
      clickFunc: handleMinimize,
      depth: {
        link: "https://www.mondayletter.com",
        subject: "월요편지",
        date: "2024.02",
        skill: "HTML,tailwind,JS",
      },
    },
    {
      id: 3,
      type: DraggableItemType.folioPop,
      name: "카누",
      clickFunc: handleMinimize,
      depth: {
        link: "https://kanu.co.kr",
        subject: "카누",
        date: "2023.05",
        skill: "HTML,tailwind,JS",
      },
    },
    {
      id: 4,
      type: DraggableItemType.folioPop,
      name: "디디에두보",
      clickFunc: handleMinimize,
      depth: {
        link: "https://didierdubot.co.kr",
        subject: "디디에두보",
        date: "2024.10",
        skill: "HTML,tailwind,JS",
      },
    },
    {
      id: 5,
      type: DraggableItemType.folioPop,
      name: "롯데렌터카",
      clickFunc: handleMinimize,
      depth: {
        link: "https://embed.figma.com/design/UGNlF3lN20ZKLqLc0Yx1ar/%EB%A1%AF%EB%8D%B0-%EB%A0%8C%EB%8D%94%EC%B9%B4?node-id=277-11419&embed-host=share",
        subject: "보안문제로 링크가 존재하지 않음",
        date: "2024.08",
        skill: "HTML,SCSS,tailwind,JS",
      },
    },
    {
      id: 6,
      type: DraggableItemType.folioPop,
      name: "몽디에스",
      clickFunc: handleMinimize,
      depth: {
        link: "https://mongdies.com",
        subject: "몽디에스 MO Support",
        date: "2024.09",
        skill: "popup, 주문/결제",
      },
    },
    {
      id: 7,
      type: DraggableItemType.folioPop,
      name: "빌드",
      clickFunc: handleMinimize,
      depth: {
        link: "https://build112.cafe24.com/skin-skin35",
        subject: "빌드 PC,MO",
        date: "2023.11",
        skill: "마이페이지",
      },
    },
  ];

  return (
    <div className="wy__nav">
      <div className="wy__nav__head">
        <div className="wy__nav__head__name">
          <div className="wy__nav__head__img">
            <img src={ImgSrc.src} alt="내 이미지" />
          </div>
          <p>정영은</p>
        </div>
        <p>WEB PUBLISHER</p>
        <p>1년 1개월</p>
      </div>
      <div className="wy__nav__content">
        <div className="wy__nav__career">
          <>
            <h2 className="wy__nav__career__title">carrer</h2>
            <ul className="wy__nav__career__items">
              <li>codenblock 1년 1개월</li>
            </ul>
          </>
        </div>
        <div className="wy__nav__project">
          <ul className="wy__nav__project__items">
            {myProjectData.map((data) => {
              return (
                <li
                  key={data.name}
                  onClick={() => {
                    handleClick({
                      dataType: data.type,
                      dataName: data.name,
                      clickFunc: data.clickFunc,
                      depth: data.depth,
                    });
                    handleClose();
                  }}
                >
                  <i datatype={data.type}></i>
                  <p>{data.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
