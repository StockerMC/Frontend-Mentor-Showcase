import styles from './RulesModal.module.css';

export function RulesModal(props: {mode: number}) {
    return <div className={styles.rulesModal}>
        <img src={"rock-paper-scissors/" + (props.mode == 0 ? "image-rules.svg": "image-rules-bonus.svg")} alt="Game rules" />
    </div>
}