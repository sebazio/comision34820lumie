import { useContext } from 'react'
import { BookmarksContext } from '../../context/BookmarksContext'

const Bookmarks = () => {

    const { bookmarks } = useContext(BookmarksContext)

    return (
        <div>
            { bookmarks.map(bookmark => {
                return (
                    <div>
                        <h1>{bookmark.title}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Bookmarks