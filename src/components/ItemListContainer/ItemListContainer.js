import { useState, useEffect } from "react"

const ItemListContainer = () => {
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     console.log('funcion dentro del effect')

    //     return () => console.log('el componente se va a desmontar')
    // }, [])

    useEffect(() => {
        console.log('cambio count')

        return () => console.log('antes de cambiar el count')
    }, [count])

    console.log('render')
    return (
        <div>
            <h1>Productos</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>sumar uno</button>
        </div>
    )
}

export default ItemListContainer