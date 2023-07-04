import styles from './Calculator.module.css';

export default function Calculator() {
    return <div className={styles.calculator}>
        <div className={styles.inputs}>
            <div className={styles.input}>
                <span>DAY</span>
                <input type="text" placeholder='DD' required/>
            </div>
            <div className={styles.input}>
                <span>MONTH</span>
                <input type="text" placeholder='MM' required/>
            </div>
            <div className={styles.input}>
                <span>YEAR</span>
                <input type="text" placeholder='YYYY' required/>
            </div>
        </div>
        <div className={styles.bar}>

        </div>
        <div className={styles.results}>
            <div className={styles.result}>
                <span className={styles.resultNum}></span>
                <span className={styles.resultLabel}>years</span>
            </div>
            <div className={styles.result}>
                <span className={styles.resultNum}></span>
                <span className={styles.resultLabel}>months</span>
            </div>
            <div className={styles.result}>
                <span className={styles.resultNum}></span>
                <span className={styles.resultLabel}>days</span>
            </div>
        </div>
    </div>
}
