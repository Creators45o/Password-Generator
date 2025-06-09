import { useEffect, useState } from "react";



export default  function useCurrencyGen (currency){
    const [data,setData] = useState({})
    useEffect( ()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((val)=>data= val[currency])
        .catch((err)=>`Error in fetching currency ${err}`)
    }, [currency])
    return data ;
}

