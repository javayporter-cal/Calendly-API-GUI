// import { useState } from 'react'
import './App.css'
import SelectActionCard from './components/DescCards';
import ApiRequestComponent from './components/TestComp';
import TopStickHeader from './components/TopHeaderS';

function App() {

  return (
    <>
      
        <TopStickHeader children='Calendly API GUI' />
        <div style={{marginTop: '50px'}}>
        <SelectActionCard />
      </div>
      <div style={{marginTop: '50px'}}>
        <ApiRequestComponent />
      </div>
    </>
  )
}

export default App
