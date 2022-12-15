import { useState, useEffect, useContext } from 'react'

import { useParams } from 'react-router-dom'
import { BookmarksContext } from '../../context/BookmarksContext'
import { NotificationContext } from '../../context/NotificationContext'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const NoteDetailContainer = () => {
    const [note, setNote] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const { addBookmark, isInBookmarks, removeBookmark } = useContext(BookmarksContext)
    const { setNotification } = useContext(NotificationContext)

    const { noteId } = useParams()

    useEffect(() => {
        const docRef = doc(db, 'notes', noteId)

        getDoc(docRef)
            .then(doc => {
                const data = doc.data()
                const noteAdapted = { id: doc.id, ...data}

                setNote(noteAdapted)
            })
            .catch(error => {
                console.log(error)
            })        
            .finally(() => {
                setIsLoading(false)
            })

    }, [noteId])

    if(isLoading) {
        return <h1>Cargando Nota...</h1>
    }

    const isAdded = isInBookmarks(note.id)

    const handleOnAdd = (note) => {
        addBookmark(note)
        setNotification('success','Se agrego correctamente a favoritos')
    }

    return (
        <div>
            <h1>{note.title}</h1>
            <h2>{note.category}</h2>
            <p>{note.text}</p>
            <button 
                onClick={() => { isAdded ? removeBookmark(note.id) : handleOnAdd(note)}}
                >
                    { isAdded ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            </button>
        </div>
    )
}

export default NoteDetailContainer