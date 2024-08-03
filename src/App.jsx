import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
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
        Click on the Vite and React logos to learn more
      </p>
      <div>
         <iframe title="My Retail Analysis" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=2a8e4c06-1194-4222-908f-095319462fb6&autoAuth=true&ctid=a07f06a9-6f5b-48f3-ba8d-c708c6434f99" frameborder="0" allowFullScreen="true"></iframe>
      </div>
      
    </>
  )
}

export default App
