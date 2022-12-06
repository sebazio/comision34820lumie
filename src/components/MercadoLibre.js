import { useEffect, useState } from 'react'

const MercadoLibre = () => {
    const [products, setProducts] = useState([])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    // useEffect(() => {
    //     fetch('https://api.mercadolibre.com/sites/MLA/search?q=autos')
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(json => setProducts(json.results))
    //         .catch(error => {
    //             console.error(error)
    //         })
    // }, [])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
            .then(response => {
                return response.json()
            })
            .then(json => setProducts(json.results))
            .catch(error => {
                console.error(error)
            }).finally(() => {
                setIsLoading(false)
            })
    }

    if(isLoading) {
        return <h1>Buscando...</h1>
    }

    return (
        <div>
            <h1>Mercado Libre</h1>
            <form onSubmit={handleOnSubmit}>
                <input value={input} onChange={(e) => setInput(e.target.value)}/>
                <button type='submit'>Search</button>
            </form>
            <div>
                {
                    products.map(product => {
                        return (
                            <div key={product.id}>
                                <img src={product.thumbnail} alt={product.title}/>
                                <h2>{product.title}</h2>
                                <h3>$ {product.price}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MercadoLibre