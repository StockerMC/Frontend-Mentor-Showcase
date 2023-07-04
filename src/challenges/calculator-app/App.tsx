import { useEffect } from 'react'
import { Header } from './components/Header'
import { Calculator } from './components/Calculator'
import styles from './App.module.css'

function App() {
  useEffect(() => {
    document.body.className = styles['calculator-app'];
    document.documentElement.className = styles['calculator-app'];
    const root = document.getElementById("root");
    if (root != null) root.className = styles['calculator-app'];
  }, []);
  
  return (
    <div className={styles.App}>
      <Header />
      <Calculator />
    </div>
  )
}

export default App
