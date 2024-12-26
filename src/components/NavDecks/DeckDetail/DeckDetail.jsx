import styles from './DeckDetail.module.css'

export default function DeckDetail({ deckName, onBack}) {
    return(
        <div className={styles.deckDetailContainer}>
            <button onClick={onBack} className={styles.backButton}>Back</button>
            <h2>{deckName}</h2>
            
            <p>Scary</p>
            <p>Linger</p>
            <p>Shiver</p>
        </div>
    )
}