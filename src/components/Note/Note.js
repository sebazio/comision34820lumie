import './Note.css'

const Note = ({ note }) => {
    return (
        <div className='Note'>
            <h2 >{note.title}</h2>
            <p>{note.text}</p>
        </div>
    )
}

export default Note