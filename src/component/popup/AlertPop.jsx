const AlertPop = () => {
	const handleClosePop = (e) => {
		console.log(e.currentTarget.closest('.wy__pop'));
	}

	return(
		<div className="wy__pop">
			<div className="wy__pop__head">
				<i></i>
				<p>경고!</p>
				<ul className="wy__pop__head__btn">
					<li><button className="close" onClick={handleClosePop}>close</button></li>
					{/* <li><button className="maximize">close</button></li>
					<li><button className="minimize">close</button></li>
					<li><button className="restore">close</button></li> */}
				</ul>
			</div>
			<div className="wy__pop__container">
				<div className="wy__pop__content">
					<i className="alert"></i>
					<div>
					<p>테스트세트스테스트테스틋테스트테스트세트세트세트테ㅡ테스테스ㅔㅌ스스텟</p>
					<p>2번째 ?</p>
					</div>
				</div>
				<div className="wy__pop__btn">
					<button>OK</button>
					<button>cancle</button>
				</div>
			</div>
		</div>
	)
}

export default AlertPop;