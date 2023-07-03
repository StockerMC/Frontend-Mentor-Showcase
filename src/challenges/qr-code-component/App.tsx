import { QRCode } from './src/components/QRCode'
import styles from './App.module.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
      document.body.className = styles['qr-code-component'];
  }, []);
  
  return (
    <div className={styles.root}>
      <QRCode />
    </div>
  )
}

export default App
