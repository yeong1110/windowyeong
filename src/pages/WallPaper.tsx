"use client";
import { useState } from "react";
import BottomNav from "../component/BottomNav";
import CursorPet from "../component/CursorPet";
import DraggableItem from "../component/DraggableItem";
import { DraggableItemType } from "../comm/enums";
import AlertPop from "../component/popup/AlertPop";
import WindowPop from "../component/popup/WindowPop";
import Frame from "../component/popup/Frame";
import Introduce from "../component/popup/Introduce";

const WallPaper = () => {
  interface ActiveFile {
    pet: React.ReactNode | null;
  }

  const [isSelecting, setIsSelecting] = useState<any>(false);
  const [selectionBox, setSelectionBox] = useState<any>(null);
  const [activePopup, setActivePopup] = useState<any>(null);
  const [activefile, setActiveFile] = useState<ActiveFile>({
    pet: null,
  });
  const [iconState, setIconState] = useState<any>({
    type: "",
  });

  const handleMouseDown = (e: any) => {
    setIsSelecting({
      top: e.clientY,
      left: e.clientX,
      width: 0,
      height: 0,
    });
  };

  const handleMouseMove = (e: any) => {
    if (!isSelecting) return;

    const newBox = {
      top: Math.min(e.clientY, isSelecting.top),
      left: Math.min(e.clientX, isSelecting.left),
      width: Math.abs(e.clientX - isSelecting.left),
      height: Math.abs(e.clientY - isSelecting.top),
    };
    setSelectionBox(newBox);
  };

  const handleMouseUp = () => {
    setIsSelecting(false);
    setSelectionBox(null);
    // 선택된 아이템 찾기 로직 추가
  };

  const activePet = () => {
    setActivePopup(null);
    setActiveFile({
      pet: <CursorPet />,
    });
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
      clickFunc: () => {},
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
      clickFunc: () => {},
			depth: {
        link: "https://vocabox.kro.kr",
        subject: "보카박스",
        date: "2023~",
        skill: "React, SCSS",
      },
    },
  ];

  const handleDoubleClick =
    ({ dataType, dataName, clickFunc, depth }: any) =>
    () => {
      const handleClosePop = () => {
        setActivePopup(null);
        setIconState({ type: null });
      };
      setIconState({ type: dataType });
      if (dataType === "exe") {
        setActivePopup(
          <AlertPop
            title="경고"
            click={clickFunc}
            onClickClose={handleClosePop}
            content={[
              `${dataName}.exe는 신뢰할 수 없는 프로그램입니다.`,
              "그래도 여시겠습니까?",
            ]}
          />
        );
      }
      if (dataType === "folioPop") {
        setActivePopup(
          <WindowPop
            datatype={dataType}
            title={dataName}
            onClickClose={handleClosePop}
          >
            <Frame src={depth.link}></Frame>
						<Introduce subject={depth.subject} date={depth.date} skill={depth.skill}></Introduce>
          </WindowPop>
        );
      }
    };

  return (
    <div className="wy__wallpaper">
      <div
        id="desktop"
        className="wy__desktop"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {desktopData.map((data) => {
          return (
            <DraggableItem
              key={data.dataName}
              data={data}
              onDoubleClick={handleDoubleClick({
                dataType: data.dataType,
                dataName: data.dataName,
                clickFunc: data.clickFunc,
                depth: data.depth,
              })}
            />
          );
        })}

        {selectionBox && (
          <div
            style={{
              position: "fixed",
              zIndex: 0,
              top: selectionBox.top,
              left: selectionBox.left,
              width: selectionBox.width,
              height: selectionBox.height,
              background: "#d9eaf6",
              border: "1px solid #0d99ff",
            }}
          ></div>
        )}
        {activePopup}
      </div>
      <BottomNav dataType={iconState.type}></BottomNav>
      {activefile.pet}
    </div>
  );
};

export default WallPaper;
