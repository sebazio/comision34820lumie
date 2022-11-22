import { useState } from 'react'

const Counter = ({ initial, stock, onAdd }) => {
    // console.log('render counter')

    const [count, setCount] = useState(initial)

    const increment = () => {
        // for(var i = 0; i < 5; i++) {
        //     console.log('sumo')
        //     setCount(valorPrevio => valorPrevio + 1)
        // }
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const reset = () => {
        setCount(initial)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => increment()}>sumar click</button>
            <button onClick={() => reset()}>reset</button>
            <button onClick={() => onAdd(count)}>agregar al carrito</button>
        </div>
    )
}

export default Counter