import styles from './App.module.css'
import Title from './components/Title/Title'
import Card from './components/Card/Card'
import Level from './components/Level/Level'
import NavDecks from './components/NavDecks/NavDecks'

export default function App() {

  return (
    <>
      
      <div className={styles.container}>
      <NavDecks />
      <div id="main">
      <Title />
        <Card content='scary'/>
        <Level/>
      </div>

    </div>
    </>
    
  )
}