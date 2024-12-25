import { useState } from 'react'
import styles from './NavDecks.module.css'
import DeckDetail from './DeckDetail/DeckDetail'

export default function NavDecks() {
    const [decks, setDecks] = useState(['English - Portuguese'])
    const [newDeckName, setNewDeckName] = useState('')

    const handleAddDeck = () => {
        const newDeckName = window.prompt('Name of the new deck:')
        if (newDeckName && newDeckName.trim()) {
            setDecks([...decks, newDeckName])
        }
    }

    return (
        <div className={styles.navContainer} >
            <h2>My Decks</h2>
            <hr />

            <button 
            onClick={handleAddDeck}
            >
                + Add new deck</button>
            {decks.map((deck, index) => (
                <p key={index}>{deck}</p>
            ))}

        </div>
    )
}