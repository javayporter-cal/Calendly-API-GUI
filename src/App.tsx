// import { useState } from 'react'
import './App.css'
import NavHeader from './components/CalHeader'
import InputAndButton from './components/InputToken'
import DataComponent from './components/SBTN';
import MyComponent from './components/SubmitTokenBtn';
import ApiRequestComponent from './components/TestComp';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavHeader title='Calendly API GUI'/>
        <InputAndButton inputType='text' buttonLabel='Submit' inputPlaceholder='ey765keNOEHOgerjdaleE74l23j98' inputLabel='Enter Bearer Token' onButtonClick={() => {console.log('done')}} />
        {/* <MyComponent /> */}
        <DataComponent />
        <ApiRequestComponent />
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
