import styles from './QRCode.module.css'

export function QRCode() {
    return <div className={styles.panel}>
        <img src='qr-code-component/qr-code.png' className={styles.QRImage} />
        <h1 className={styles.heading}>Improve your front-end skills by building projects</h1>
        <p className={styles.description}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
}