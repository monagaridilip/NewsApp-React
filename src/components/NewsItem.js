import React from 'react'

const NewsItem = (props) =>{
        let {title, description,imageurl,url,date,author,source} = props;
        return (
            <div>
                <div className="card mx-4" >
                     <div className='d-flex justify-content-center position-absolute top-0 end-0'>
                        <span className='badge rounded-pill bg-danger'>{source}</span>
                    </div>
                    <img src={imageurl===null?"https://www.indiablooms.com/life_pic/2016/news-1471859267.jpg":imageurl} className="card-img-top" alt="" height="170px" />
                        <div className="card-body">
                            <h5 className="card-title">{title===null || title===undefined?"No Title":title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-danger">Published at : {new Date(date).toGMTString()}</small></p>
                            <p className="card-text"><small className="text-body-secondary">Author :{author===null?"Unknown":author}</small></p>
                            <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">Read More...</a>
                        </div>
                </div>
            </div>
        )
}

export default NewsItem
