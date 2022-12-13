import { useState, useEffect } from 'react'
import NotesList from '../NotesList/NotesList'
import { getNotes, getNotesByCategory } from '../../asyncMock'
import { useParams } from 'react-router-dom'

const NotesContainer = () => {
    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState('Notes')

    const { categoryId } = useParams()
    console.log(categoryId)

    useEffect(() => {
      setLoading(true)
      if(!categoryId) {
        getNotes()
        .then(response => {
          setNotes(response)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
        })  
      } else {
        getNotesByCategory(categoryId)
          .then(response => {
            setNotes(response)
          })
          .catch(error => {
            console.log(error)
          })  
          .finally(() => {
            setLoading(false)
          })  
      }
      
    }, [categoryId])

    useEffect(() => {
      setTimeout(() => {
        setTitle('Cambio titulo')
      }, 2000)
    }, [])

     // const arrayTransformado = notes.map(note => <h2>{note.title}</h2>)

     if(loading) {
       return <h1>Loading...</h1>
     }

    return(
        <div>
           <h1>{title}</h1>
           <NotesList notes={notes} />
        </div>
    )
}

export default NotesContainer