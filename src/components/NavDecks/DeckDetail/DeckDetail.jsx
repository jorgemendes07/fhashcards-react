import { useState } from 'react'
import styles from './DeckDetail.module.css'

export default function DeckDetail({ deckName, onBack }) {

    const [cardList, setCardList] = useState([])

    const handleCardList = () => {
        const newCardItemFront = window.prompt('Front')
        const newCardItemBack = window.prompt('Back')
        if(newCardItemFront && newCardItemBack && newCardItemFront.trim() && newCardItemBack.trim()) {
            setCardList([...cardList, newCardItemFront])
        }
    }

    return(
        <div className={styles.deckDetailContainer}>
            <br />
            <button onClick={onBack} className={styles.backButton}>Back</button>
            <h2>{deckName}</h2>
            <hr />
            
            <button onClick={handleCardList}>
                + Add card
            </button>
            <br />
            <p>Scary</p>
            {cardList.map((item, index) => (
                <p
                key={index}
                >
                    {item}
                </p>
            ))}
        </div>
    )
}