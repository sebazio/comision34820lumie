import { useState, createContext } from 'react'

export const BookmarksContext = createContext()

export const BookmarksProvider = ({ children }) => {
    const [bookmarks, setBookmarks] = useState([])

    const addBookmark = (noteToAdd) => {
      if(!isInBookmarks(noteToAdd.id)) {
        setBookmarks([...bookmarks, noteToAdd])
      }
    }
  
    const isInBookmarks = (id) => {
      return bookmarks.some(bookmark => bookmark.id === id)
    }
  
    const removeBookmark = (id) => {
      const updatedBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
      setBookmarks(updatedBookmarks)
    }

    return (
        <BookmarksContext.Provider value={{ bookmarks, addBookmark, removeBookmark, isInBookmarks }}>
            {children}
        </BookmarksContext.Provider>
    )
}