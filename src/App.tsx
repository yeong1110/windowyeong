'use client'
import { useEffect, useState } from 'react'

// import './assets/scss/style.scss'
// import Landing from '../../src/pages/Landing.jsx'
// import WallPaper from '../../src/pages/WallPaper.jsx'

function App() {
	const [isLand, setIsLand] = useState(true);

	const runLanding = () => {
		setIsLand(false)
	}

	useEffect(()=>{
		window.setTimeout(runLanding, 6000);
	},[])

  return (
		<>
		hello world</>
    // <>
		// 	{
		// 		isLand? <Landing></Landing> : ""
		// 	}
			
		// 	{
		// 		!isLand? <WallPaper></WallPaper>: ""
		// 	}
    // </>
  )
}

export default App
