import { useState } from "react";
import BottomNav from "../component/BottomNav";
import CursorPet from "../component/CursorPet";
import DragCursorArea from "../component/DragCursorArea";
import DraggableItem from "../component/DraggableItem";
import AlertPop from "../component/popup/AlertPop";

const WallPaper = () => {

	const [isSelecting, setIsSelecting] = useState(false);
	const [selectionBox, setSelectionBox] = useState(null);
	const [selectedItems, setSelectedItems] = useState([]);

	const handleMouseDown = (e) => {
    setIsSelecting({
        top: e.clientY,
        left: e.clientX,
        width: 0,
        height: 0,
    });
	};


	const handleMouseMove = (e) => {
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

	
	return (
		<><div className='wy__wallpaper'>
			<div id="desktop" className="wy__desktop"
				onMouseDown={handleMouseDown} 
				onMouseMove={handleMouseMove} 
				onMouseUp={handleMouseUp}>
				<DraggableItem dataType={"exe"} dataName={"마우스펫"} dataTop={"50%"} dataLeft={"80%"}></DraggableItem>
				<DraggableItem dataType={"folder"} dataName={"project"} dataTop={"50%"} dataLeft={"20%"}></DraggableItem>
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
            />
        )}
			</div>
			<BottomNav></BottomNav><CursorPet></CursorPet><AlertPop></AlertPop>
		</div></>
	)
}

export default WallPaper;
