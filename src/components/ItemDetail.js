import { useState } from 'react'
import { Link } from 'react-router-dom'
// import ItemCount from '../ItemCount/ItemCount'

const InputCount = ({onConfirm, stock, initial= 1}) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onConfirm, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }

    }

    const decrement = () => {
            setCount(count - 1)

    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}


const ItemDetail = ({ id = '1', name = 'producto', img = '', category = 'celular', description = 'descripcion', price = 2000, stock = 10 }) => {
    const [inputType, setInputType] = useState('button')
    const [quantityToAdd, setQuantityToAdd] = useState(0)


    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito')
        console.log(quantity)
        setQuantityToAdd(quantity)
    }

    const Count = inputType === 'button' ? ButtonCount : InputCount

    return (
        <article className="CardItem">
            <button onClick={() => setInputType(inputType === 'button' ? 'input' : 'button')}>{inputType === 'button' ? 'pasar a input' : 'pasar a button'}</button>
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {
                    quantityToAdd === 0 ? (
                        <Count onConfirm={handleOnAdd} stock={stock} />
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail