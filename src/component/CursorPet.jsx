import { useEffect, useRef } from "react";

const CursorPet = () => {
	const cursor = useRef([]);;

	let mouseX = window.innerWidth / 2;
	let mouseY = window.innerHeight / 2;
	let posX = mouseX;
	let posY = mouseY;

	let frameIndex = 0;
	let frameTimer = 0;
	const frameInterval = 1000; // ms
	const frameWidth = 160;
	const frameHeight = 160;

	let direction = { x: 1, y: 0, distanceX: 50, distanceY: 50 }; // 기본 방향 (오른쪽)


	const followPet = () => {
		const speed = 0.01; // 스무스 속도 조절
		const distanceX = direction.distanceX;
		const distanceY = direction.distanceY;
		posX += (mouseX - posX + distanceX) * speed;
		posY += (mouseY - posY + distanceY) * speed;
		cursor.current.style.top = `${posY}px`;
		cursor.current.style.left = `${posX}px`;
	
		// 프레임 애니메이션
		frameTimer += 16; // 약 60FPS
		if (frameTimer >= frameInterval) {
			frameTimer = 0;
			frameIndex = (frameIndex + 1) % 2; // 가로 2프레임
		}
	
		const bgPosX = -frameIndex * frameWidth;
		const bgPosY = -direction.y * frameHeight;
	
		cursor.current.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;
	
		requestAnimationFrame(followPet);
	}

	document.addEventListener('mousemove', (e) => {
		mouseX = e.clientX;
		mouseY = e.clientY;
	
		const diffX = mouseX - posX;
		const diffY = mouseY - posY;
		// console.log(`x:${posX} y:${mouseX}`);
	
		if (Math.abs(diffX) > Math.abs(diffY)) {
			direction = { x: 0 , y: diffX > 0 ? 3 : 2 , distanceX: diffX > 0 ? -50: 50, distanceY: 0 }; // 오른쪽 or 왼쪽
		} else if (diffY < 0) {
			direction = { x: 0, y: 1, distanceX: 25, distanceY: 50 }; // 위쪽
		} else {
			direction = { x: 0, y: 0, distanceX: 0, distanceY: -50 }; // 아래쪽
		}
	});

	useEffect(()=>{
		followPet();
	})
	return(
		<div ref={cursor} className="wy__cursor"></div>
	)
}

export default CursorPet;