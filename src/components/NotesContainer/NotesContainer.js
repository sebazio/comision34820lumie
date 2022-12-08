import { useState, useEffect } from 'react'
import NotesList from '../NotesList/NotesList'
import { getNotes, getNotesByCategory } from '../../asyncMock'
import { useParams } from 'react-router-dom'

const NotesContainer = () => {
    const [notes, setNotes] = useState([])

    const { categoryId } = useParams()
    console.log(categoryId)

    useEffect(() => {
      if(!categoryId) {
        getNotes()
        .then(response => {
          setNotes(response)
        })
        .catch(error => {
          console.log(error)
        })  
      } else {
        getNotesByCategory(categoryId)
          .then(response => {
            setNotes(response)
          })
          .catch(error => {
            console.log(error)
          })  
      }
      
    }, [categoryId])
     // const arrayTransformado = notes.map(note => <h2>{note.title}</h2>)

    return(
        <div>
           <h1>Notas</h1>
           <NotesList notes={notes} />
        </div>
    )
}

export default NotesContainer