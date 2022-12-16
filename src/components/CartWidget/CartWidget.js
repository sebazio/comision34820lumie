import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)

    const totalQuantity = getQuantity()

    return (
        <Link to='/cart'>
            cart: { totalQuantity }
        </Link>
    )
}

export default CartWidget