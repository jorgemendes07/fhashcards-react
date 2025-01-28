import { useState } from 'react'
import styles from './DeckDetail.module.css'
import ItemDeckConfig from './ItemDeckConfig/ItemDeckConfig'

export default function DeckDetail({ deckName, onBack }) {

    const [cardList, setCardList] = useState([])

    const handleCardList = () => {
        const newCardItemFront = window.prompt('Front')
        const newCardItemBack = window.prompt('Back')
        if(newCardItemFront && newCardItemBack && newCardItemFront.trim() && newCardItemBack.trim()) {
            const newCard = {
                id: Date.now(),
                front: newCardItemFront,
                back: newCardItemBack
            } 
            setCardList([...cardList, newCard])
        }
    }

    const handleCardClick = (id) => {
        setSelectedCardId(id)
    }

    return(
        <div className={styles.deckDetailContainer}>
            <h2>{deckName}</h2>
            <hr />
            
            <button onClick={handleCardList}>
                + Add card
            </button>
            <br />

            {cardList.map((item) => (
                <p
                key={item.id}
                onClick={() => handleCardClick(item.id)}
                >
                    {item.front}
                </p>
            ))}

            {selectedCardId && (
                <ItemDeckConfig card={cardList.find(item => item.id === selectedCardId)} />
            )}
        </div>
    )
}