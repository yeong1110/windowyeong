'use client'
import React, { useState } from "react";
const DraggableItem: React.FunctionComponent<any> = ({data, onDoubleClick}) => {

	let xOffset = 0;
	let yOffset = 0;

	const [fileDirection, setfileDirection] = useState({
		top: data.dataTop,
		left: data.dataLeft
	})


	const handleDragOver = (e : any) => {
		e.preventDefault(); // 기본 동작 방지 (🚫 커서 방지)
		e.dataTransfer.dropEffect = "move";
	};

	const handleDragStart = (e : any) => {
		// 투명 이미지 설정
		e.dataTransfer.setData("text/plain", "dummy");
		e.dataTransfer.dropEffect = "move"
	};

	const handleDragFileEnd = (e : any) => {
		e.preventDefault();

		const initialX = e.clientX;
		const initialY = e.clientY;
		setfileDirection({
			top: initialY,
			left: initialX,
		})

		handlefileActive(e);
	}

	const handleTouchFile = (e : any) => {
		e.preventDefault();

		const initialX = e.touches[0].clientX - xOffset;
		const initialY = e.touches[0].clientY - yOffset;
		setfileDirection({
			top: initialY,
			left: initialX,
		})
	}

	const handleClickFile = (e : any) => {
		handlefileActive(e);
	}

	const handlefileActive = (e : any) => {
		const element = e.currentTarget.parentNode.childNodes;
		element.forEach((element : any) => {
			element.classList.remove('click');
			if(element.classList.contains('click')){
				e.currentTarget.classList.add('click');
			}
		})
		e.currentTarget.classList.add('click');
	}

	return(
		<div
		className="wy__drag" 
		draggable 
		datatype={data.dataType}
		onMouseDown={(e) => e.stopPropagation()}
		onDragStart={handleDragStart}
		onDragEnd={handleDragFileEnd} 
		onTouchMove={handleTouchFile}
		onDragOver={handleDragOver}
		onClick={handleClickFile}
		onDoubleClick={() => onDoubleClick(data.dataType, data.dataName, data.clickFunc)}
		style={
				{
					top: fileDirection.top,
					left: fileDirection.left
				}
			}>
			<i className="wy__drag__img"></i>
			<p className="wy__drag__name">{data.dataName}</p>
		</div>
	)
}

export default DraggableItem;