// import { useState } from 'react'
import './App.css'
import NavHeader from './components/CalHeader'

import ApiRequestComponent from './components/TestComp';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavHeader title='Calendly API GUI'/>
        <ApiRequestComponent />
      </div>
    </>
  )
}

export default App
