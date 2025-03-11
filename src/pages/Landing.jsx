import landingLogo from '/images/landing/landing_logo.svg'

const Landing = () => {

	return(
	<div className='wy__land'>
		<div className="wy__land__logo">
			<img src={landingLogo} alt="" />
		</div>
		<div className="wy__land__progress"></div>
	</div>
	)
}

export default Landing;