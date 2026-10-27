import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'
import { Routes,Route } from 'react-router-dom'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import FormValidations from './FormValidations'

function App() {
  const [count, setCount] = useState(10)
  return (
      <div>
      {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more </p>
        <h2>Welcome to React With Vite</h2>
<NavBar></NavBar>
  <Routes>
      <Route path="/page1" element={<Page1 />} />
           <Route path="/page2" element={<Page2 />} />
                <Route path="/page3" element={<Page3 />} />
    </Routes> */}
     <FormValidations></FormValidations>
        </div>

   
  )
}

export default App
