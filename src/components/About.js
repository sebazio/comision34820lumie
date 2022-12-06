import { useState, useEffect } from "react"

const About = () => {
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     const button = document.getElementById('button')
        
    //     const handleClick = (e) => {
    //         console.log(e)
    //         setCount(prev => prev + 1)
    //     }

    //     button.addEventListener('click', handleClick)

    //     return () => button.removeEventListener('click', handleClick)
    // }, [])

    const handleClick = (e) => {
        console.log(e)
        setCount(prev => prev + 1)
    }

    return (
        <div>
            <h1>About</h1>
            <h2>{count}</h2>
            {/* <button id='button'>Sumar</button> */}
            <button onClick={handleClick}>Sumar</button>
        </div>
    )
}

export default About