import './App.css'
import ApiRequestComponent from './components/ApiReqComp';
import TopStickHeader from './components/TopHeaderS';


function App() {

  return (
    <>
      <TopStickHeader children='Calendly API GUI' />
      <div style={{marginTop: '50px'}}>
      </div>
      <div style={{marginTop: '50px'}}>
        <ApiRequestComponent />
      </div>
    </>
  )
}

export default App
