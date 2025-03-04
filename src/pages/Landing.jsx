import landingLogo from '../assets/images/landing_logo.svg'

const Landing = () => {

	return(
	<div className='wy__land'>
		<div className="wy__land--logo">
			<img src={landingLogo} alt="" />
		</div>
		<div className="wy__land--progress"></div>
	</div>
	)
}

export default Landing;