import { useRef, useState } from "react";

const DraggableItem = ({dataType, dataName, dataTop, dataLeft}) => {

	let xOffset = 0;
	let yOffset = 0;

	const draggable = useRef([]);

	const [fileDirection, setfileDirection] = useState({
		top: dataTop,
		left: dataLeft
	})

	const handleDragOver = (e) => {
		e.preventDefault(); // 기본 동작 방지 (🚫 커서 방지)
		e.dataTransfer.dropEffect = "move";
	};

	const handleDragStart = (e) => {
		// 투명 이미지 설정
		e.dataTransfer.setData("text/plain", "dummy");
		// const img = new Image();
		// img.src = "";
		// e.dataTransfer.setDragImage(img, 0, 0);
		e.dataTransfer.dropEffect = "move"
	};

	const handleDragFile = (e) => {
		e.preventDefault();

		const initialX = e.clientX - xOffset;
		const initialY = e.clientY - yOffset;
		setfileDirection({
			top: initialY,
			left: initialX,
		})
	}

	const handleDragFileEnd = (e) => {
		e.preventDefault();

		const initialX = e.clientX;
		const initialY = e.clientY;
		setfileDirection({
			top: initialY,
			left: initialX,
		})

		handlefileActive(e);
	}

	const handleTouchFile = (e) => {
		e.preventDefault();

		const initialX = e.touches[0].clientX - xOffset;
		const initialY = e.touches[0].clientY - yOffset;
		setfileDirection({
			top: initialY,
			left: initialX,
		})
	}

	const handleClickFile = (e) => {
		handlefileActive(e);
	}

	const handlefileActive = (e) => {
		const element = e.currentTarget.parentNode.childNodes;
		element.forEach(element => {
			element.classList.remove('click');
			if(element.classList.contains('click')){
				e.currentTarget.classList.add('click');
			}
		})
		e.currentTarget.classList.add('click');
	}

	return(
		<div 
		ref={draggable}
		className="wy__drag" 
		draggable 
		datatype={dataType} 
		onDragStart={handleDragStart} 
		// onDrag={handleDragFile}
		onDragEnd={handleDragFileEnd} 
		onTouchMove={handleTouchFile}
		onDragOver={handleDragOver}
		onClick={handleClickFile}
		style={
				{
					top: fileDirection.top,
					left: fileDirection.left
				}
			}>
			<i className="wy__drag__img"></i>
			<p className="wy__drag__name">{dataName}</p>
		</div>
	)
}

export default DraggableItem;