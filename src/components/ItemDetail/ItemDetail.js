// import { useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, name, img, description, price, stock }) => {   
    // const [quantity, setQuantity] = useState(0)

    const { addItem, isInCart } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        addItem({ id, name, price, quantity })
        // setQuantity(quantity)
    }
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>{name}</h1>
            <img src={img} alt={name} style={{ width: '200px'}}/>
            <p>{description}</p>
            <h2>$ {price}</h2>
            {  isInCart(id) 
                    ? <Link to='/cart' className='Option'>Terminar Compra</Link>
                    : stock > 0 
                        ? <ItemCount stock={stock} onAdd={handleOnAdd}/> 
                        : <h1>No hay stock</h1>
            }
        </div>
    )
}

export default ItemDetail