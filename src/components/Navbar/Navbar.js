import './Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <nav style={{ display: 'flex'}}>
            {/* <NavLink to='/' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' }>Lista</NavLink>
            <NavLink to='/detail' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' }>Detalle</NavLink>
             */}
             <NavLink to='/' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' }>Todo</NavLink>
            <NavLink to='/category/categoria1' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' }>Categoria 1</NavLink>
            <NavLink to='/category/categoria2' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' }>Categoria 2</NavLink>
            <NavLink to='/category/categoria3' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' }>Categoria 3</NavLink>
            <NavLink to='/category/categoria4' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' }>Categoria 4</NavLink>
        </nav>
    )
}

export default Navbar