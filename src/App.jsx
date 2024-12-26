import { useState } from 'react'
import styles from './App.module.css'
import Title from './components/Title/Title'
import Card from './components/Card/Card'
import Level from './components/Level/Level'
import NavDecks from './components/NavDecks/NavDecks'
import DeckDetail from './components/NavDecks/DeckDetail/DeckDetail'

export default function App() {
  const [selectedDeck, setSelectedDeck] = useState(null)

  const handleDeckSelected = (deckName) => {
    setSelectedDeck(deckName)
  }

  const handleBackToMain = () => {
    setSelectedDeck(null)
  }

  return (
    <>
      
      <div className={styles.appContainer}>
        <div className={styles.nav}>
          <NavDecks onDeckSelect={handleDeckSelected}/>
        </div>
      
        <div className={styles.details}>
          {selectedDeck && (
            <DeckDetail
              deckName={selectedDeck}
              onBack={handleBackToMain}
            />
          )}
        </div>

        <div className={styles.main}>
          <Title />
          <Card content='scary'/>
          <Level/>
        </div>
        
      </div>
    </>
    
  )
}