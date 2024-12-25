import styles from './Level.module.css'

export default function Level () {
    return (
        <div className={styles.levelContainer}>
            <div className={styles.option}>Hard</div>
            <div className={styles.option}>Medium</div>
            <div className={styles.option}>Easy</div>
        </div>
    )
}