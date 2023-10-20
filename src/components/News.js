import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) =>{

    const [articles,setArticles] = useState([])
    const [loading,setLoading] = useState(true)
    const [page,setPage] = useState(1)
    const [totalResults,setTotalResults] = useState(0)
    

    const capitalize = (letter) => {
        return letter[0].toUpperCase() + letter.slice(1)
    }

    const update = async () => {
         props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=${ props.apiKey}&page=${page}&pagesize=${ props.pageSize}`;
         props.setProgress(30)
         setLoading(true);
        let response = await fetch(url);
         props.setProgress(50)
        let data = await response.json();
         props.setProgress(75)
         setArticles(data.articles)
         setTotalResults(data.totalResults)
         setLoading(false)
        //  setState({ articles: data.articles, totalResults: data.totalResults, loading: false });
         props.setProgress(100)

    }
    useEffect(()=>{
    document.title = `${ capitalize( props.category)} - NewsApp`
    update();
    // eslint-disable-next-line
    },[])
    
    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=${ props.apiKey}&page=${page+1}&pagesize=${ props.pageSize}`;
        setPage(page + 1 )
        let response = await fetch(url);
        let data = await response.json();
        
        setArticles(articles.concat(data.articles))
        setTotalResults(data.totalResults)
    }

        return (

            <>
                <h2 className='text-center' style={{marginTop:"70px"}}>Top Hedlines form {capitalize(props.category)}</h2>
                { loading && <Spinner />}
                <InfiniteScroll
                    dataLength={ articles.length}
                    next={ fetchMoreData}
                    hasMore={ articles.length !== totalResults}
                    loader={ loading && <Spinner />}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                          <b>Yay! You have seen it all</b>
                        </p>}
                    style={{overflow:'hidden'}}
                >
                <div className="container">
                    <div className="row">
                        { articles.map((element,index) => {
                            return <div className=" col-lg-4 col-md-6 my-3 col-sm-6" key={index}>
                                <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} url={element.url} date={element.publishedAt} author={element.author} source={element.source.name}/>
                            </div>
                        })}
                    </div>
                </div>
                </InfiniteScroll>
            </>

        )
    }

News.propTypes = {
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired
};
News.defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
}

export default News
