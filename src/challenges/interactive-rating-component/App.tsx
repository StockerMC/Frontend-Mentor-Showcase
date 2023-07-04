import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { Rating } from './components/Rating'
import styles from './App.module.css'

function App() {
  useEffect(() => {
    document.body.className = styles['interactive-rating-component'];
    document.documentElement.className = styles['interactive-rating-component'];
    const root = document.getElementById("root");
    if (root != null) root.className = styles['interactive-rating-component'];
  }, []);

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Rating />
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
    </div>
  )
}

export default App
