const AlertPop = ({title, click, onClickClose, content}: any) => {

	return(
		<div className="wy__pop__alert">
			<div className="wy__pop__head">
				<p>{title}</p>
				<ul className="wy__pop__head__btn">
					<li><button className="close" onClick={()=> onClickClose(true)}>close</button></li>
				</ul>
			</div>
			<div className="wy__pop__alert__container">
				<div className="wy__pop__alert__content">
					<i className="alert"></i>
					<div>
						{
							content.map((text:string, i:number) => {
								return(
									<p key={i}>{text}</p>
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