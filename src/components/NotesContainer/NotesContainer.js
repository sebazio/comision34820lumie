import { useState, useEffect } from 'react'
import NotesList from '../NotesList/NotesList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const NotesContainer = () => {
    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState('Notes')

    const { categoryId } = useParams()

    useEffect(() => {
      setLoading(true)

      const collectionRef = categoryId 
        ? query(collection(db, 'notes'), where('category', '==', categoryId))
        : collection(db, 'notes')

      getDocs(collectionRef)
        .then(response => {
          const notesAdapted = response.docs.map(doc => {
            const data = doc.data()

            return { id: doc.id, ...data}
          })

          setNotes(notesAdapted)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
        })
      
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