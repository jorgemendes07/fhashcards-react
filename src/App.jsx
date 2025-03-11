import { useState } from 'react'
import styles from './App.module.css'
import Title from './components/Title/Title'
import Card from './components/Card/Card'
import Level from './components/Level/Level'
import NavDecks from './components/NavDecks/NavDecks'
import DeckDetail from './components/DeckDetail/DeckDetail'

export default function App() {
  const [selectedDeck, setSelectedDeck] = useState(null)
  const [isDeckDetailVisible, setIsDeckDetailVisible] = useState(false)

  const handleDeckSelected = (deckName) => {
    if (selectedDeck === deckName) {
      setIsDeckDetailVisible(false)
      setSelectedDeck(null)
    } else {
      setSelectedDeck(deckName)
      setIsDeckDetailVisible(true)
    }
  }

  return (
    <div className={`${styles.appContainer} ${selectedDeck ? styles.appContainerWithDetails : styles.appContainerWithoutDetails}`}
    >
      <div className={styles.nav}>
        <NavDecks onDeckSelect={handleDeckSelected}/>
      </div>
    
      {isDeckDetailVisible && selectedDeck && (
        <div className={styles.details}>
          <DeckDetail
            deckName={selectedDeck}
          />
      </div>
      )}
      
      <div className={styles.main}>
        <Title />
        <Card content='scary'/>
        <Level />
      </div>
    </div>
  )
}