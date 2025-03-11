import { useEffect, useState } from 'react'
import styles from './DeckDetail.module.css'
import ItemDeckConfig from '../ItemDeckConfig/ItemDeckConfig'

export default function DeckDetail({ deckName }) {
  const [cardList, setCardList] = useState(() => {
    // Carrega a lista diretamente do localStorage na inicialização
      if (!deckName) return []
      const savedList = localStorage.getItem(`list-${deckName}`)
      return savedList ? JSON.parse(savedList) : []
    })

    const [selectedCardId, setSelectedCardId] = useState(null)

  // Carrega a lista do localStorage quando o deckName muda
  useEffect(() => {
    if (!deckName) {
      setCardList([]) // Reseta a lista se não houver deck selecionado
      return
    }

    const savedList = localStorage.getItem(`list-${deckName}`)
    if (savedList) {
      setCardList(JSON.parse(savedList))
    } else {
      setCardList([]) // Garante que a lista esteja vazia se não houver dados salvos
    }
  }, [deckName])

  // Salva a lista no localStorage sempre que ela mudar
  useEffect(() => {
    if (!deckName) return
    localStorage.setItem(`list-${deckName}`, JSON.stringify(cardList))
  }, [cardList, deckName])

  const handleCardList = () => {
    const newCardItemFront = window.prompt('Front')
    const newCardItemBack = window.prompt('Back')
    if (newCardItemFront && newCardItemBack && newCardItemFront.trim() && newCardItemBack.trim()) {
      const newCard = {
        id: Date.now(),
        front: newCardItemFront.trim(),
        back: newCardItemBack.trim()
      }
      setCardList([...cardList, newCard])
    }
  }

  const handleCardClick = (id) => {
    setSelectedCardId(id)
  }

  const handleUpdateCard = (updatedCard) => {
    setCardList((prevList) =>
      prevList.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    )
  }

  const handleDeleteCard = (cardId) => {
    setCardList((prevList) => prevList.filter((card) => card.id !== cardId))
  }

  if (!deckName) {
    return <h2>Please select a deck</h2>
  }

  return (
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
          onUpdate={handleUpdateCard}
          onDelete={handleDeleteCard}
        />
      )}
    </div>
  )
}