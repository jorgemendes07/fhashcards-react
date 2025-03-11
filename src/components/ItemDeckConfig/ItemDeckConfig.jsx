import { useState } from 'react'
import styles from './ItemDeckConfig.module.css'

export default function ItemDeckConfig({ card, onClose, onUpdate, onDelete }) {
    const [editedCard, setEditedCard] = useState(card)

    const handleSave = () => {
        onUpdate(editedCard)
        onClose()
    }

    const handleDelete = () => {
        onDelete(card.id)
        onClose()
    }

    const handleInputChange = (e, field) => {
        setEditedCard({
            ...editedCard,
            [field]: e.target.value
        })
    }

    return (
        <div className={styles.background}>
            <div className={styles.itemDeckConfigContainer}>
                <p 
                className={styles.itemConfigClose} onClick={onClose}>X</p>
                <div className={styles.itemConfigDetails}>
                    <p>Front view</p>
                    <input 
                        type="text" 
                        value={editedCard.front} 
                        onChange={(e) => handleInputChange(e, 'front')}
                    />
                    <p>Back view</p>
                    <input 
                        type="text" 
                        value={editedCard.back} 
                        onChange={(e) => handleInputChange(e, 'back')}
                        />
                    <div className={styles.itemDetailsButton}>
                        <button onClick={handleSave}>Save changes</button>
                        <button onClick={handleDelete}>Delete item</button>
                    </div>
                </div>
            </div>
        </div>
    )
}