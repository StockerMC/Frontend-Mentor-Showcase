import styles from './Calculator.module.css';

function Result(props: {result?: number}) {
    return <div className={styles.resultContainer}>
        <span className={styles.resultText}>{props.result?.toLocaleString()}</span>
    </div>
}

function NumberPad() {
    return <div className={styles.numberPadContainer}>
        {
            [7, 8, 9, 'DEL', 4, 5, 6, '+', 1, 2, 3, '-', '.', 0, '/', 'x']
            .map(key => <span className={styles.key}>{key}</span>)
        }
    </div>
}

export function Calculator() {
    return <div className={styles.calculatorContainer}>
        <Result result={399981}/>
        <NumberPad />
    </div>
}