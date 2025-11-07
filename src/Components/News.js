import React, { useEffect, useState } from 'react'  //, { Component }
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=>{
  const [articles, setArticles]=useState([])
  const [loading, setLoading]=useState(true)
  const [page, setPage]=useState(1)
  const [totalResults, setTotalResults]=useState(0)
  // document.title=`Pak_News - ${capitalizeFirstLetter(this.props.category)}`;
   
    const capitalizeFirstLetter=(string)=>{
      return string.charAt(0).toUpperCase()+string.slice(1);
    }
       
    // constructor(props){
    //     super(props);
       
    //     this.state={
    //        articles: [],
    //        loading: false,
    //        page:1,
    //        totalResults:0
    //     }
    //     document.title=`Pak_News - ${capitalizeFirstLetter(this.props.category)}`;
    // }
    const updateNews=async()=>{
      props.setProgress(10);
     
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=44bf7459602049c7b15c6f182eabc133&pageNo=${page}&pageSize=${props.pageSize}`
      // setState({loading:true});
      setLoading(true)
      let data= await fetch(url);
      props.setProgress(30);
      let parsedData=await data.json();
      props.setProgress(50);
      console.group(parsedData);
      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
      props.setProgress(100);
      // setState({articles: parsedData.articles , totalResults: parsedData.totalResults , loading:false});
    
    }
    useEffect(() => {
      document.title=`Pak_News - ${capitalizeFirstLetter(props.category)}`;
      updateNews();
    }, [])
    //  async componentDidMount(){
       
    //     this.updateNews();
    // }


     const handlePrevClick= async()=>{
      setPage(page-1)
                                 // setState({page: this.state.page-1});
        updateNews();
    }
    const handleNextClick= async()=>{
                                  // this.setState({page: this.state.page+1});
    setPage(page+1)
      updateNews();
}
 const fetchMoreData = async() => {

//  this.setState({page:this.state.page+1})
 const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=44bf7459602049c7b15c6f182eabc133&pageNo=${page+1}&pageSize=${props.pageSize}`
 setPage(page)
      let data= await fetch(url);
      let parsedData=await data.json();
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
     
};
   
    return (
      // <div className='container my-3'> 
      <>
           
        <h1 className='text-center '  style={{margin: '25px 90px', marginTop:'90px'}}> Pak-News - Top Headlines from {capitalizeFirstLetter(props.category)}</h1>
        {loading && <Spinner/>}
        
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
                               {/* {!this.state.loading && this.state.articles.map((element)=>{ first use */}
        {articles.map((element)=>{
        return <div className="col-md-4 " key={element.url} >
       <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
       </div>
        })}
          </div>
           
        </div>
        </InfiniteScroll>
       {/* <div className="container d-flex justify-content-between">
       <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
       <button disabled={!this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
       </div> */}

     
      </>
    )
  }

News.defaultProps1={
      country:'in',
      pageSize: 8,
      category: 'general'
    }
    News.defaultProps2={
      name: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,
    }
export default News
