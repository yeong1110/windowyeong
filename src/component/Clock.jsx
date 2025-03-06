import { useState, useEffect } from "react";

const Clock = () => {
		const [date, setDate] = useState(
			{
				time: '',
				minute: '',
				ampm: 'AM',
			}
		)
	
		const clock = () => {
			const nowDate = new Date();
			
			const time = nowDate.getHours();
			const minute = nowDate.getMinutes().toString().padStart(2, '0');
			let displayHours = time;
			
			if (time >= 12) {
				const ampm = 'PM';
					setDate({time, minute, ampm});
					displayHours = time % 12;
					if (displayHours === 0) {
					displayHours = 12;
					}
			} else{
				const ampm = 'AM';
				setDate({time, minute, ampm});
			}
		}
	
		useEffect(() => {
			clock();
			setInterval(clock, 1000);
		},[]);

		return(
			<div className="wy__bottom__nav__time">{date.time}:{date.minute} {date.ampm}</div>
		)
}

export default Clock;