import styles from './App.module.css'
import Title from './components/Title/Title'
import Card from './components/Card/Card'
import Level from './components/Level/Level'
import NavDecks from './components/NavDecks/NavDecks'
import DeckDetail from './components/NavDecks/DeckDetail/DeckDetail'

export default function App() {

  return (
    <>
      
      <div className={styles.appContainer}>
      <NavDecks />
      <DeckDetail />
      <div id="main">
      <Title />
        <Card content='scary'/>
        <Level/>
      </div>

    </div>
    </>
    
  )
}