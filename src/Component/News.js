import React,{useContext, useState} from "react";
import { NewsApi } from "../NewsApi";
import NewsArticle from "./NewsArticle";

export default function News(props){
    const [search,setSearch]=useState("");
    const {data}=useContext(NewsApi);
    return(
        <div>
            <input type="text" placeholder="search by title of news here ......"className="searchBar" onChange={(event)=>{setSearch(event.target.value)}} />
            <div className="all-news">
                {data ? data
                .filter((val) => {
                    if(search===""){
                        return val;
                    } else if(val.TITLE.toLowerCase().includes(search.toLocaleLowerCase())){
                        return val;
                    }
                })
                .map((val) => {
                    return(
                        <NewsArticle data={val} key={val.ID}/>
                    )
                }):<div>loading....</div>}
                </div>
        </div>
    )
}
