import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, removeItem, getTotal } = useContext(CartContext)

    const total = getTotal()

    return (
        <div>
            <h1>Cart</h1>
            {
                cart.map(prod => {
                    return (
                        <div key={prod.id}>
                            <h1>{prod.name}</h1>
                            <h2>$ {prod.price}</h2>
                            <h2>quantity: {prod.quantity}</h2>
                            <h2>Subtotal: {prod.price * prod.quantity}</h2>
                            <button onClick={() => removeItem(prod.id)}>Eliminar producto</button>
                        </div>
                    )
                })
            }

            <h1>Total: ${total}</h1>

            <Link to='/checkout'>Terminar orden</Link>
        </div>

    )
}

export default Cart