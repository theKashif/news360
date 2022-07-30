import React, { Component } from 'react'

export default class Newsitem extends Component {

    render() {
        let { title, description, imgurl, newsurl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card myshadow round" style={{ width: "18rem", border:"none" }}>
                    <h5 className="card-title"><span className="position-absolute top-0 translate-middle badge rounded-pill bg-warning text-dark" style={{ left: '90%', zIndex: '1' }}> {source} </span> </h5>
                    <img style={{ height: "11rem" }} className="card-img-top round" src={!imgurl ? "https://www.commonsensemedia.org/sites/default/files/styles/ratio_16_9_large/public/blog/breaking-news-blog-1138x658-1.jpg" : imgurl} alt="Card cap" />
                    <div className="card-body">
                        <h5 style={{ height: "4rem" }} className="card-title">{title}...</h5>
                        <p style={{ height: "10rem" }} className="card-text">{description}... <br /><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsurl} target="_blank" className="btn btn-sm btn-warning">ReadMore</a>
                    </div>
                </div>
            </div>
        )
    }
}
