import { useState, useEffect } from 'react'

export const useAsync = (asyncFn, dependencies) => {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    if(!Array.isArray(dependencies)) {
        dependencies = []
    }

    useEffect(() => {
        setLoading(true)

        asyncFn()
            .then(data => {
                setData(data)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [...dependencies]) //eslint-disable-line

    return {
        data,
        error,
        loading
    }
}