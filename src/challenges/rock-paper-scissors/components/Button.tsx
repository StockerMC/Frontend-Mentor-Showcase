import styles from './Button.module.css';

export function Button(props: {content: string, onClick: () => void, title: string}) {
    return <div className={styles.buttonDiv}>
        <button className={styles.button} onClick={props.onClick} title={props.title}>
            {props.content}
        </button>
    </div>
}