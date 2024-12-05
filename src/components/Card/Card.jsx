import styles from './Card.module.css'
import { useState } from 'react'

export default function Card({ content }) {
    // cria um estado para armazenar o conteúdo, com valor inicial vindo da props
    const [currentContent, setCurrentContent] = useState(content)

    // função para alternar o conteúdo
    const toggleContent = () => {
        setCurrentContent((prevContent) => 
        prevContent === 'scary' ? 'assustador' : 'scary')
    }

    return (
        <>
            <div className={styles.container} onClick={toggleContent}> 
                <p>{currentContent}</p>
            </div>
        </>
    )
}