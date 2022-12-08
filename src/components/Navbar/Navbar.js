import './Navbar.css'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { BookmarksContext } from '../../context/BookmarksContext'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Navbar = () => {

    const { bookmarks } = useContext(BookmarksContext)
    const { user } = useContext(AuthContext)

    return (
        <nav style={{ display: 'flex'}}>
             <NavLink to='/' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' }>Todo</NavLink>
            <NavLink to='/category/categoria1' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' }>Categoria 1</NavLink>
            <NavLink to='/category/categoria2' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' }>Categoria 2</NavLink>
            <NavLink to='/category/categoria3' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' }>Categoria 3</NavLink>
            <NavLink to='/category/categoria4' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' }>Categoria 4</NavLink>
            { user && 
                <Link to='/bookmarks'>
                    Bookmarks: {bookmarks.length}
                </Link>
            }
            <Link to='/login'>
               Login
            </Link>
        </nav>
    )
}

export default Navbar