import React from 'react'    //, { Component } 

const NewsItem=(props)=>{


    let {title, description , imageUrl, newsUrl, author, date, source}=props;
    return (
      <div className='my-3'>
       <div className="card">
        <div style={{display: 'flex', justifyContent:'flex-end', position:'absolute', right:'0'}} >

       <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'88%', zIndex:'1'}}>{source} </span>
       </div>
       <img src={!imageUrl?"https://media.gettyimages.com/id/1290904409/photo/abstract-digital-news-concept.jpg?s=612x612&w=gi&k=20&c=KLjgxFfLQpBQVw9h4lBcJyyfKzHkrpRJOq6wO8mMv0M=":imageUrl} class="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className='card-title'>{title}...  
    
    <span class="visually-hidden">unread messages</span>
 </h5>
       <p className="card-text">{description}...</p>
       <p className='card-text'><small className='text-muted'>By {!author?'unknown':author}  `<br />` on {new Date(date).toLocaleString()}</small></p>
       <a href={newsUrl}target="_blank" rel="noopener noreferrer" className='btn btn-sm btn-dark'>Read More</a>
    </div>
</div>
      </div>
    )
  }


export default NewsItem
