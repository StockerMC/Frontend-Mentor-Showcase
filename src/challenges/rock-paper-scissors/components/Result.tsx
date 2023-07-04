import styles from './Result.module.css';
import { GameObject, ObjectType } from './GameObject';

function ResultObject(props: {type: ObjectType}) {
    return <img
        className={styles.resultObject + ` ${styles[props.type]}`} src={`rock-paper-scissors/icon-${props.type}.svg`}
        draggable='false'
    />
}

export function Result(props: {choice1: ObjectType, choice2: ObjectType, winner: number, reset: () => void}) {
    return <div className={styles.resultContainer}>
        <div className={styles.resultChoiceContainer}>
            <p className={styles.resultPickedMessage}>YOU PICKED</p>
            <ResultObject type={props.choice1} />
        </div>
        <div className={styles.resultOutputContainer}>
            <h1 className={styles.resultOutputText}>YOU {['TIE', 'WIN', 'LOSE'][props.winner]}!</h1>
            <button
                className={styles.resultButton}
                onClick={props.reset}
            >PLAY AGAIN</button>
        </div>
        <div className={styles.resultChoiceContainer}>
            <p className={styles.resultPickedMessage}>THE HOUSE PICKED</p>
            <ResultObject type={props.choice2} />
        </div>
    </div>
}