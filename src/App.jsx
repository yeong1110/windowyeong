import { useEffect, useState } from 'react'
import './App.css'
import './assets/css/style.css'
import Landing from './pages/Landing.jsx'

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
				isLand? <>main</>: ""
			}
    </>
  )
}

export default App
