import { useEffect, useState } from 'react'
import './App.css'
// import './assets/css/style.css'
import './assets/scss/style.scss'
import Landing from './pages/Landing.jsx'
import WallPaper from './pages/WallPaper.jsx'

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
			{
				isLand? <Landing></Landing> : ""
			}
			
			{
				!isLand? <WallPaper></WallPaper>: ""
			}
    </>
  )
}

export default App
