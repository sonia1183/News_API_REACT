import React from "react";
export default function NewsArticle({data}) {
    let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(data.TIMESTAMP)
    return(
    <div className="news">
        <h1><a href={data.URL}>{data.TITLE}</a></h1>
        <p>{date}</p>
        <button><a href={data.HOSTNAME}>{data.PUBLISHER}</a></button>
    </div>)
}