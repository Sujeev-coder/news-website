"use client"
import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'

const NewsBoard = ({category}) => {

    const NXT_API_KEY ="6f84564ab4af4be7bcdef4750f5447ee"

const [article, setArticle] = useState([])

useEffect(() => {

    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${NXT_API_KEY}`
    fetch(url).then(response=>response.json()).then(data=> setArticle(data.articles))
},[category])
  return (
    <div className='text-center mt-2'>
      <h2>Latest <span className='badge text-bg-secondary fs-4 bg-danger'>News</span></h2>
      {article.map((news,index)=>{
return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>

      })}
    </div>
  )
}

export default NewsBoard
