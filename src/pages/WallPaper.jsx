import { useState } from "react";
import { useEffect } from "react";

const WallPaper = () => {
	const [date, setDate] = useState(
		{
			time: '',
			second: ''
		}
	)

	const clock = () => {
		const nowDate = new Date();

		const time = nowDate.getHours();
		const second = nowDate.getMinutes();
		setDate({time, second});
	}

	useEffect(() => {
		clock();
		setInterval(clock, 1000);
	},[]);

	return (
		<div className='wy__wallpaper'>
			<div></div>
			<div className="wy__bottom__nav">
				<button className="wy__bottom__nav__start">START</button>
				<div className="wy__bottom__nav__time">{date.time}:{date.second}</div>
			</div>
		</div>
	)
}

export default WallPaper;
