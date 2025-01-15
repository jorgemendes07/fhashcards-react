import styles from './ItemDeckConfig.module.css'

export default function ItemDeckConfig() {
    return (
        <>
            <div className={styles.background}>
                <div className={styles.itemDeckConfigContainer}>
                <p className={styles.itemConfigClose}>X</p>
                    <div className={styles.itemConfigDetails}>
                        
                        <p>Front view</p>
                        <input type="text" placeholder='Scary' />
                        <p>Back view</p>
                        <input type="text" placeholder='Assustador' />
                        <div className={styles.itemDetailsButton}>
                            <button>Save changes</button>
                            <button>Delete item</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}