import styles from './App.module.css';
import { Game } from './components/Game';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.body.className = styles['rock-paper-scissors'];
    document.documentElement.className = styles['rock-paper-scissors'];
    const root = document.getElementById("root");
    if (root != null) root.className = styles['rock-paper-scissors'];
  }, []);

  return (
    <div className='App'>
      <Game />
    </div>
  )
}

export default App
