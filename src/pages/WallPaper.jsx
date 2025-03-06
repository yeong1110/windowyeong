import { useState } from "react";
import BottomNav from "../component/BottomNav";
import CursorPet from "../component/CursorPet";

const WallPaper = () => {

	const [fileDirection, setfileDirection] = useState({
		top: 800,
		left: 1000
	})

	
	return (
		<><div className='wy__wallpaper'>
			<div className="wy__desktop">
				<div className="wy__drag wy__exe__pet" datatype="exe" style={
					{
					top: fileDirection.top,
					left: fileDirection.left
					}
					}>
					<i className="wy__drag__img"></i>
					<p className="wy__drag__name">마우스펫</p>
				</div>
			</div>
			<BottomNav></BottomNav><CursorPet></CursorPet>
		</div></>
	)
}

export default WallPaper;
