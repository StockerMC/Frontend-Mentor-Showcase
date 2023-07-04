import { useState } from 'react';
import styles from './Rating.module.css';


export function Rating() {
    const maxRating = 5;
    const [rating, setRating] = useState<number>();
    const [isSubmitted, setIsSubmitted] = useState<boolean>();

    return isSubmitted ? <div className={styles.panel + ` ${styles.center}`}>
        <img src='interactive-rating-component/illustration-thank-you.svg' />
        <p className={styles.ratingSelection}>You selected {rating} out of {maxRating}</p>
        <h1 className={styles.heading}>Thank you!</h1>
        <p className={styles.content}>
            We appreciate you taking the time to give a rating.
            If you need more support, don't hesitate to get in touch!
        </p>
    </div> :
    <div className={styles.panel}>
        <img className={styles.star} src='interactive-rating-component/icon-star.svg' />
        <h1 className={styles.heading}>How did we do?</h1>
        <p className={styles.content}>
            Please let us know how we did with your support request.
            All feedback is appreciated to help us improve our offering!
        </p>
        <div className={styles.numbers}>
            {[...Array(maxRating).keys()].map(x => ++x).map(num =>
                <button
                    className={styles.number}
                    onClick={(e) => {
                        e.currentTarget.classList.add(styles.numberPressed);
                        if (e.currentTarget?.parentElement?.children) {
                            for (const element of e.currentTarget.parentElement.children) {
                                if (element != e.currentTarget) {
                                    element.classList.remove(styles.numberPressed);
                                }
                            }
                        }
                        setRating(num);
                    }}
                    key={num}
                >{num}</button>
            )}
        </div>
        <button
            className={styles.submit}
            onClick={() => rating ? setIsSubmitted(true) : null}
        > SUBMIT</button>
    </div>
}
