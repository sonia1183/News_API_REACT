import React , {createContext, useEffect, useState} from "react";
import axios from "axios";

export const NewsApi= createContext()

export const NewsProvider=(props)=>{
    const [data,setData]=useState()

    useEffect(()=>{
        axios.get(`https://s3-ap-southeast-1.amazonaws.com/he-public-data/newsf6e2440.json`
        )
        .then(Response=>setData(Response.data))
        .catch(error=>console.log(error));
    },[data]);

    return(
        <NewsApi.Provider value={{data}}>{props.children}</NewsApi.Provider>
    )
}