import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './output.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App bg-amber-500 p-2" >Bill Splitter</div>
    </>
  )
}

export default App
