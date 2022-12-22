import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore/products'

import { useAsync } from '../../hooks/useAsync'

const ItemListContainer = () => {
    const { categoryId } = useParams()

    const getProductsWithCategory = () => getProducts(categoryId)

    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])


    if(loading) {
        return <h1>Cargando...</h1>
    }

    if(error) {
        return <h1>Hubo un error, recargue la pagina</h1>
    }

    return (
        <div>
            <h1>Listado de productos</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer