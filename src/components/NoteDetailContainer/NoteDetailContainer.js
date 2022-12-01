import { useState, useEffect } from 'react'
import { getNoteById } from '../../asyncMock'
import { useParams } from 'react-router-dom'

const NoteDetailContainer = () => {
    const [note, setNote] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const { noteId } = useParams()

    useEffect(() => {
        getNoteById(noteId)
            .then(response => {
                setNote(response)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [noteId])

    if(isLoading) {
        return <h1>Cargando Nota...</h1>
    }

    return (
        <div>
            <h1>{note.title}</h1>
            <h2>{note.category}</h2>
            <p>{note.text}</p>
        </div>
    )
}

export default NoteDetailContainer