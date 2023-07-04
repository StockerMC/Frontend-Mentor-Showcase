import styles from './Home.module.css'
import { cards } from '../constants'
import Card from '../components/card'
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        document.body.className = styles['home'];
        document.documentElement.className = styles['home'];
        const root = document.getElementById("root");
        if (root != null) root.className = styles['home'];
    }, []);

    return <>
        <div className={styles.headerContainer}>
            <h1 className={styles.title}>Frontend Mentor Challenges</h1>
        </div>
        <div className={styles.cards}>
        {
        cards.map(card => 
            <Card
            title={card.title}
            description={card.description}
            path={card.path}
            key={card.path}
            />
        )
        }
        </div>
    </>
}
