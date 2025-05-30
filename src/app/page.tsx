'use client'
 
import dynamic from 'next/dynamic'
import '../assets/scss/reset.scss'
import '../assets/scss/style.scss'
 
const App = dynamic(() => import('../App'), { ssr: false })
 
export default function Page() {
  return <App />
}