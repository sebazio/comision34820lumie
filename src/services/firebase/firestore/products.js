import { collection, getDocs, query, where, orderBy } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import { createAdaptedProductFromFirestore } from '../../../adapters/productsAdapter'


export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const productsRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : query(collection(db, 'products'), orderBy('name', 'desc'))

        getDocs(productsRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    return createAdaptedProductFromFirestore(doc)
                })
                resolve(productsAdapted)
            })
            .catch(error => {
                reject(error)
            })
    })
}

export const getProductById = () => {

}