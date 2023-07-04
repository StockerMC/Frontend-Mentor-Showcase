import styles from './GameObject.module.css';

const objects = ['rock', 'paper', 'scissors', 'lizard', 'spock'] as const;
export type ObjectType = typeof objects[number];

export function GameObject(
    props: {type: ObjectType, handleGameObjectClick: (type: ObjectType) => void}
) {
    return <img
        className={styles.object + ` ${styles[props.type]}`} src={`rock-paper-scissors/icon-${props.type}.svg`}
        onClick={() => props.handleGameObjectClick(props.type)}
        draggable='false'
    />
}
