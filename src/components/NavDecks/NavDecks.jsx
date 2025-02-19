import { useEffect, useState } from 'react'
import styles from './NavDecks.module.css'

export default function NavDecks({ onDeckSelect }) {
    // Inicializa o estado diretamente do localStorage
    const [decks, setDecks] = useState(() => {
        const savedDecks = localStorage.getItem('decks')
        return savedDecks ? JSON.parse(savedDecks) : []
    })

    // Atualiza o localStorage sempre que houver alteração na lista de decks
    useEffect(() => {
        localStorage.setItem('decks', JSON.stringify(decks))
    }, [decks])


    const handleAddDeck = () => {
        const newDeckName = window.prompt('Name of the new deck:')
        if (newDeckName && newDeckName.trim()) {
            setDecks(prevDecks => [...prevDecks, newDeckName.trim()])
        }
    }

    const handleDeckSelect = (deck) => {
        onDeckSelect(deck)
    } 

    return (
        <div className={styles.navContainer} >
            <h2>My Decks</h2>
            <hr />

            <button 
            onClick={handleAddDeck}>
                + Add new deck
            </button>

            {decks.map((deck, index) => (
                <p 
                    key={index}
                    onClick={() => handleDeckSelect(deck)}
                    className={styles.deckItem}
                    >
                        {deck}
                </p>
            ))}
        </div>
    )
}