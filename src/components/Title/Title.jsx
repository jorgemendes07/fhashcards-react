import './Title.module.css'

export default function Title({ deckName }) {
    return (
        <>
            <h1>{deckName ? `${deckName}` : 'Flash Cards'}</h1>
        </>
    )
}