import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around'}}>
            <h1>Ecommerce</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '75%'}}>
                <Link to='/'>Ver todo</Link>
                <Link to='/category/celular'>Celulares</Link>
                <Link to='/category/tablet'>Tablets</Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar