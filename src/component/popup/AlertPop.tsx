const AlertPop = ({title, click, onClickClose, content}) => {

	return(
		<div className="wy__pop__alert">
			<div className="wy__pop__head">
				{/* <i></i> */}
				<p>{title}</p>
				<ul className="wy__pop__head__btn">
					<li><button className="close" onClick={()=> onClickClose(true)}>close</button></li>
					{/* <li><button className="maximize">close</button></li>
					<li><button className="minimize">close</button></li>
					<li><button className="restore">close</button></li> */}
				</ul>
			</div>
			<div className="wy__pop__alert__container">
				<div className="wy__pop__alert__content">
					<i className="alert"></i>
					<div>
						{
							content.map(text => {
								return(
									<p>{text}</p>
								)
							})
						}
					</div>
				</div>
				<div className="wy__pop__btn">
					<button onClick={click}>OK</button>
					<button onClick={()=> onClickClose(true)}>cancle</button>
				</div>
			</div>
		</div>
	)
}

export default AlertPop;