import { useEffect, useState } from "react"

const Home = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {

        const onResize = () => setCount(prev => prev + 1)

        window.addEventListener('resize', onResize)

        return () => window.removeEventListener('resize', onResize)
    }, [])

    return (
        <div>
            <h1>Home</h1>
            <h2>cambio de tamaño: {count}</h2>
            <button onClick={() => setCount(0)}>reset</button> 
        </div>
    )
}

export default Home