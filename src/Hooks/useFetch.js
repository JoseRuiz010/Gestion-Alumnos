import React, { useEffect, useState } from 'react'
import axios from 'axios'
export const useFetch = (url, metodo = "get") => {
    axios.defaults.baseURL = "http://localhost:3000/";
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    const [loading, setloading] = useState(false)
    const [data, setdata] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        const axiosData = async () => {
            setloading(true)
            const dataAxios = await axios[metodo](url)
                .then((res) => setdata(res.data))
                .catch(err => console.log(err))
            setloading(false)
        }
        axiosData();
    }, [])


    return ({
        data, loading, error
    })

}


