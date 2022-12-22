export const createAdaptedProductFromFirestore = (doc) => {
    const data = doc.data()

    const producAdapted = {
        id: doc.id,
        name: data.name,
        category:data.category,
        price: data.price,
        description: data.description,
        img: data.img
    }

    return producAdapted
}