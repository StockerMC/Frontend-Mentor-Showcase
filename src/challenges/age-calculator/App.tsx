import { useEffect } from 'react'
import Calculator from './components/Calculator'
import styles from './App.module.css'

function App() {
  useEffect(() => {
    document.body.className = styles['age-calculator'];
    document.documentElement.className = styles['age-calculator'];
    const root = document.getElementById("root");
    if (root != null) root.className = styles['age-calculator'];
  }, []);

  return (
    <div className="App">
      <Calculator />
    </div>
  )
}

export default App
