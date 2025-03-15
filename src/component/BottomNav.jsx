import Clock from "./Clock";

const BottomNav = ({dataType}) => {
	return(
	<div className="wy__bottom__nav">
	<button className="wy__bottom__nav__start">portFolio</button>
	<div className="wy__bottom__nav__icon">
		<i dataType={dataType}></i>
	</div>
	<Clock></Clock>
</div>
	)
}

export default BottomNav;