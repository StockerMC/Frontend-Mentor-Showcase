import styles from './Header.module.css';

export function Header(props: {objects: string[], score: number}) {
    const objects = props.objects.map(obj => obj.toUpperCase());
    return <div className={styles.container}>
        <div className={styles.objects}>
            {objects.map(obj => <p key={obj} className={styles.object}>{obj}</p>)}
        </div>
        <div className={styles.scoreContainer}>
            <p className={styles.scoreHeading}>SCORE</p>
            <p className={styles.scoreValue}>{props.score}</p>
        </div>
    </div>
}