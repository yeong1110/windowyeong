const WindowPop = ({type, title, onClickClose, children}: any) => {

	return(
		<div className="wy__pop">
			<div className="wy__pop__head">
				<i datatype={type}></i>
				<p>{title}</p>
				<ul className="wy__pop__head__btn">
					<li><button className="maximize">close</button></li>
					<li><button className="minimize">close</button></li>
					<li><button className="restore">close</button></li>
					<li><button className="close" onClick={()=> onClickClose(true)}>close</button></li>
				</ul>
			</div>
			<div className="wy__pop__container">
				<div className="wy__pop__content">
					{/* component */}
					{children}
				</div>
			</div>
		</div>
	)
}

export default WindowPop;