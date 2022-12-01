import './Note.css'
import { Link } from 'react-router-dom'

const Note = ({ note }) => {
    return (
        <div className='Note'>
            <h2 >{note.title}</h2>
            <p>{note.category}</p>
            <p>{note.text.slice(0, 50)}...</p>
            <Link to={`/note/${note.id}`}>Ver detalle de la nota</Link>
        </div>
    )
}

export default Note