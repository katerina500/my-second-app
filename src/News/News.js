import { useEffect } from "react";
import React, {useState} from 'react';

const News = () => {
    const [dataFromApi, setDataFromApi] = useState([])

    useEffect(() => {
        fetch("https://www.theguardian.com/international")
        .then((result) => result.json())
        .then((data) => setDataFromApi(data.splice(1, 15)));
}, [] );

    return(
        <div className='news-page-container'>
            <p className="news-page-container__head-text">News</p>
            {dataFromApi.map((el, index) => {
                return (
                    <div key={index + el.id} className='news-page-container__item-container' >
                        <div>{JSON.stringify(el)}</div>
                        <h3 className='item-container__item-head'>{el.title}</h3>
                        <div className='item-container__item-body'>{el.body}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default News;