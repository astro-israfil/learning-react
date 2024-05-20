import { useState, useEffect } from 'react'
const API_KEY = 'fca_live_uA4cMtEaZInNH89sosZKuWbYdWbiPCJTEoKbYj8K'

function useCurrencyInfo() {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}`)
            .then(res => res.json())
            .then(res => setData(res.data))
    }, [])

    return data
}

export default useCurrencyInfo