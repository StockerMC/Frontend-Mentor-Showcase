import styles from './Header.module.css';

export function Header() {
    return <div className={styles.headerContainer}>
        <h1 className={styles.title}>calc</h1>
        <div className={styles.themeContainer}>
            <span>THEME</span>
            <div className={styles.themeButtonContainer}>
                <div className={styles.themeNumbers}>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>
                {/* <input type='checkbox'>test</input> */}
                <button>test</button>
            </div>
        </div>
    </div>
}
