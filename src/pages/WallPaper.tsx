"use client";
import { useCallback, useEffect, useState } from "react";
import BottomNav from "../component/BottomNav";
import CursorPet from "../component/CursorPet";
import DraggableItem from "../component/DraggableItem";
import { DraggableItemType } from "../comm/enums";
import AlertPop from "../component/popup/AlertPop";
import WindowPop from "../component/popup/WindowPop";
import Frame from "../component/popup/Frame";
import Introduce from "../component/popup/Introduce";
import Visit from "./Visit";

const WallPaper = () => {
  interface ActiveFile {
    pet: React.ReactNode | null;
    mail: React.ReactNode | null;
  }

  const [activePopup, setActivePopup] = useState<any>(null);
  const [savePopupData, setsavePopup] = useState<any>(null);
  const [activefile, setActiveFile] = useState<ActiveFile>({
    pet: null,
    mail: null,
  });
  const [iconState, setIconState] = useState<any>({
    type: "",
  });

  const activePet = () => {
    setActivePopup(null);
    setActiveFile({
      ...activefile,
      pet: <CursorPet />,
    });
  };

  const activeMail = () => {
    setActivePopup(null);
    setActiveFile({
      ...activefile,
      mail: <Visit />,
    });
  };

  const activeMinimize = () => {
    setActivePopup(null);
  };

  const activeRestore = () => {
    // console.log(activePopup)
    activePopup !== null ? setActivePopup(null) : setActivePopup(savePopupData);
  };

  const desktopData = [
    {
      id: 1,
      dataType: DraggableItemType.exe,
      dataName: "마우스펫",
      dataTop: "50%",
      dataLeft: "80%",
      clickFunc: activePet,
    },
    {
      id: 2,
      dataType: DraggableItemType.folioPop,
      dataName: "포트폴리오",
      dataTop: "50%",
      dataLeft: "20%",
      clickFunc: activeMinimize,
      depth: {
        link: "https://yeong1110.github.io/i-make/",
        subject: "포트폴리오",
        date: "2023.10",
        skill: "HTML,SCSS,JS",
      },
    },
    {
      id: 3,
      dataType: DraggableItemType.folioPop,
      dataName: "보카박스",
      dataTop: "20%",
      dataLeft: "20%",
      clickFunc: activeMinimize,
      depth: {
        link: "https://vocabox.kro.kr",
        subject: "보카박스",
        date: "2023~",
        skill: "React, SCSS",
      },
    },
    {
      id: 4,
      dataType: DraggableItemType.mail,
      dataName: "방명록",
      dataTop: "10%",
      dataLeft: "10%",
      clickFunc: activeMail,
      // depth: {
      //   link: "https://vocabox.kro.kr",
      //   subject: "보카박스",
      //   date: "2023~",
      //   skill: "React, SCSS",
      // },
    },
  ];

  const handleDoubleClick = useCallback((data: any) => {
    const handleClosePop = () => {
      setActivePopup(null);
      setIconState({ type: null });
    };

    setIconState({ type: data.dataType });

    if (data.dataType === "exe") {
      setActivePopup(
        <AlertPop
          title="경고"
          click={data.clickFunc}
          onClickClose={handleClosePop}
          content={[
            `${data.dataName}.exe는 신뢰할 수 없는 프로그램입니다.`,
            "그래도 여시겠습니까?",
          ]}
        />
      );
    } else if (data.dataType === "folioPop") {
      const newPopup = (
        <WindowPop
          datatype={data.dataType}
          title={data.dataName}
          onClickClose={handleClosePop}
          minimize={data.clickFunc}
        >
          <Frame src={data.depth.link}></Frame>
          <Introduce
            subject={data.depth.subject}
            date={data.depth.date}
            skill={data.depth.skill}
          ></Introduce>
        </WindowPop>
      );

      setActivePopup(newPopup);
      setsavePopup(newPopup);
    } else if (data.dataType === "mail") {
      const newPopup = (
        <WindowPop
          datatype={data.dataType}
          title={data.dataName}
          onClickClose={handleClosePop}
          minimize={data.clickFunc}
        >
          <Visit />
        </WindowPop>
      );
      setActivePopup(newPopup);
      setsavePopup(newPopup);
    }
  }, []);

  useEffect(() => {
    console.log("changed state");
  }, [activePopup]);

  return (
    <div className="wy__wallpaper">
      <div id="desktop" className="wy__desktop">
        {desktopData.map((data) => {
          return (
            <DraggableItem
              key={data.dataName}
              data={data}
              onDoubleClick={() => handleDoubleClick(data)}
            />
          );
        })}

        {activePopup}
      </div>
      <BottomNav
        dataType={iconState.type}
        func={activeRestore}
        handleClick={handleDoubleClick}
      ></BottomNav>
      {activefile.pet}
      {activefile.mail}
    </div>
  );
};

export default WallPaper;
