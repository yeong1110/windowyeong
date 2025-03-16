'use client'
import { useState } from "react";
import BottomNav from "../component/BottomNav";
import CursorPet from "../component/CursorPet";
import DraggableItem from "../component/DraggableItem";
import { DraggableItemType } from "../comm/enums";
import AlertPop from "../component/popup/AlertPop";
import WindowPop from "../component/popup/WindowPop";

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

	const handleMouseDown = (e : any) => {
    setIsSelecting({
        top: e.clientY,
        left: e.clientX,
        width: 0,
        height: 0,
    });
	};


	const handleMouseMove = (e : any) => {
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
		setActiveFile({
			pet: <CursorPet />,
		})
	}

	const desktopData = [
		{id:1, dataType: DraggableItemType.exe, dataName: "마우스펫", dataTop: "50%", dataLeft: "80%", clickFunc: activePet},
		{id:2, dataType: DraggableItemType.folioPop, dataName: "데싱디바", dataTop: "50%", dataLeft: "20%", clickFunc: () => {}, depth: [
			{link:"", content: "데싱디바", },
		]},
	]


	const handleDoubleClick = ({dataType, dataName, clickFunc}: any) => () => {
		const handleClosePop = () => {
			setActivePopup(null);
			setIconState({type: null});
		}
		setIconState({type: dataType})
		console.log(iconState.type);
    if (dataType === "exe") {
      setActivePopup(
        <AlertPop title="경고" click={clickFunc} onClickClose={handleClosePop} 
				content={[`${dataName}.exe는 신뢰할 수 없는 프로그램입니다.`, "그래도 여시겠습니까?"]} />
      );
    } if (dataType === "folioPop") {
      setActivePopup(
				<WindowPop datatype={dataType} title={dataName} onClickClose={handleClosePop}>
					<iframe src="https://yeong1110.github.io/i-make/" style={{
						width : "100%",
						height: "100%"
					}}></iframe>
				</WindowPop>
			);
    }
  };
	
	return (
		<div className='wy__wallpaper'>
			<div id="desktop" className="wy__desktop"
				onMouseDown={handleMouseDown} 
				onMouseMove={handleMouseMove} 
				onMouseUp={handleMouseUp}>

				{
					desktopData.map((data) => {
						return(
						<DraggableItem key={data.dataName} data={data} onDoubleClick={handleDoubleClick({
							dataType: data.dataType,
							dataName: data.dataName,
							clickFunc: data.clickFunc,
						})} />
						)
					})
				}
				
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
						}}>
					</div>
        )}
				{activePopup}
			</div>
			<BottomNav dataType={iconState.type}></BottomNav>
			{activefile.pet}
		</div>
	)
}

export default WallPaper;
