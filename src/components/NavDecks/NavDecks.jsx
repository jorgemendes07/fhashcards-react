import { useState } from 'react'
import styles from './NavDecks.module.css'

export default function NavDecks({ onDeckSelect }) {
    const [decks, setDecks] = useState(['English - Portuguese'])

    const handleAddDeck = () => {
        const newDeckName = window.prompt('Name of the new deck:')
        if (newDeckName && newDeckName.trim()) {
            setDecks([...decks, newDeckName.trim()])
        }
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
                    onClick={() => onDeckSelect(deck)}
                    className={styles.deckItem}
                    >
                        {deck}
                </p>
            ))}
        </div>
    )
}