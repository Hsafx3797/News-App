import React from 'react'

const NewsItem = (props) => {

        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-4 countainer">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }>

                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <img src={!imageUrl ? "https://img.freepik.com/premium-photo/news-concept-with-newspapers_458909-125.jpg?w=996" : imageUrl} className="card-img-top" style={{ maxHeight: '30vh' }} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }


export default NewsItem
