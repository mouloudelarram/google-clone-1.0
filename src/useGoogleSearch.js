import React, { useState, useEffect} from 'react'
import API_KEY from "./Keys";

const CONTEXT_KEY = "ee64531f097548879";
const useGoogleSearch = (term) => {
    const [data, setDate] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then ( response => response.json())
            .then(result => {
                setDate(result)})
        }
        fetchData();
    }, [term])

    return { data }
};

export default useGoogleSearch
