import { useState } from "react";

const DragCursorArea = ({top,left,width,height}) => {

		const [dragSize, setDragSize] = useState({
			width: 0,
			height: 0,
			top: 0,
			left: 0,
		})

	return(
		<div 
		style={
			{
				position: "fixed",
				top: dragSize.top,
				left: dragSize.left,
				width: dragSize.width,
				height: dragSize.height,
				background: '#d9eaf6',
				border: '1px solid #0d99ff'
			}
		}></div>
	)
}

export default DragCursorArea;