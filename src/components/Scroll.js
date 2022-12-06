import { useEffect, useState, useRef } from "react"

const Scroll = () => {
    const [background, setBackgorund] = useState('pink')

    const divRef = useRef()

    useEffect(() => {
        const handleScroll = () => {
            console.log(divRef)
            // const div = document.getElementById('scroll-color')
            // const { y } = div.getBoundingClientRect()
            // const backgroundColor = y <= 0 ? 'orange' : 'pink'
            // setBackgorund(backgroundColor)
            const div = divRef.current
            const { y } = div.getBoundingClientRect()
            const backgroundColor = y <= 0 ? 'orange' : 'pink'
            setBackgorund(backgroundColor)
        } 

        window.addEventListener('scroll', handleScroll)

        

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div>
            <div 
                ref={divRef}
                // id='scroll-color' 
                style={{ background, height: '180vh'}}
            >
                <h1>Scrollear para cambiar de color</h1>
            </div>
        </div>
    )
}

export default Scroll