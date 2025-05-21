'use client'
import { useEffect, useState } from 'react'

import Landing from './pages/Landing.tsx'
import WallPaper from './pages/WallPaper.tsx'

function App() {
	const [isLand, setIsLand] = useState<any>(true);

	const runLanding = () => {
		setIsLand(false);
	}

	useEffect(()=>{
		setTimeout(runLanding, 1000);
	},[])

  return (
    <>
			{
				isLand? <Landing></Landing> : <WallPaper></WallPaper>
			}
    </>
  )
}

export default App
