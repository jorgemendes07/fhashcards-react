import { useEffect, useState } from 'react'
import styles from './DeckDetail.module.css'
import ItemDeckConfig from './ItemDeckConfig/ItemDeckConfig'

export default function DeckDetail({ deckName, onBack }) {

    const [cardList, setCardList] = useState([])

    // carrega os dados ao entrar no deck
    useEffect(() => {
        const savedList = localStorage.getItem(`list-${deckName}`)
        setCardList(savedList ? JSON.parse(savedList) : []) 
    }, [deckName]) //sempre recarrega quando troca de deck

    // Salva os dados quando o cardList mudar
    useEffect(() => {
        localStorage.setItem(`list-${deckName}`, JSON.stringify(cardList))
    }, [cardList, deckName])

    const [selectedCardId, setSelectedCardId] = useState(null)

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
            
            <button className={styles.deckButton} onClick={handleCardList}>
                + Add card
            </button>
            <br />

            {cardList.map((item) => (
                <p
                className={styles.deckCardItem}
                key={item.id}
                onClick={() => handleCardClick(item.id)}
                >
                    {item.front}
                </p>
            ))}

            {selectedCardId && (
                <ItemDeckConfig 
                card={cardList.find(item => item.id === selectedCardId)} 
                onClose={() => setSelectedCardId(null)}
                />
            )}
        </div>
    )
}