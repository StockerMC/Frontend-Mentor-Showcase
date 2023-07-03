import styles from './card.module.css';
import { useNavigate } from "react-router-dom";

export default function Card(props: {title: string, description: string, path: string}) {
    const navigate = useNavigate();

    return <div
        className={styles.cardContainer}
        onClick={() => {
            navigate("/" + props.path);
        }}
        // onClick={() => window.location.href = "challenges/qr-code-component/index.html"}
    >
        <img
            className={styles.cardImage}
            src={`${props.path}.png`}
        />

        <div className={styles.cardContent}>
            <span className={styles.cardTitle}>{props.title}</span>
            <p className={styles.cardDescription}>{props.description}</p>
        </div>
    </div>
}