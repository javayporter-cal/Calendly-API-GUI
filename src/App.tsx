// import { useState } from 'react'
import './App.css'
import NavHeader from './components/CalHeader'

import ApiRequestComponent from './components/TestComp';
import MyComponent from './components/TestState';

function App() {

  return (
    <>
      <div>
        <NavHeader title='Calendly API GUI'/>
        <ApiRequestComponent />
        {/* <MyComponent data1='javay' data2='porter' /> */}
      </div>
    </>
  )
}

export default App
