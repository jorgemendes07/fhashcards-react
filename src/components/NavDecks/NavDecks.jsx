import { useState } from 'react'
import styles from './NavDecks.module.css'

export default function NavDecks() {
    const [decks, setDecks] = useState(['English - Portuguese'])

    const handleAddDeck = () => {
        setDecks([...decks, 'New deck'])
    }

    return (
        <div className={styles.container} >
            <h2>My Decks</h2>
            <hr />
            <button onClick={handleAddDeck}>+ Add new deck</button>
            {decks.map((deck, index) => (
                <p key={index}>{deck}</p>
            ))}

        </div>
    )
}