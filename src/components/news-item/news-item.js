import React from "react";

const NewsItem = ({n, toggleIsLiked}) => (
    <a className="news-link" href="http://www.google.com">
    <div className="news-list-item">
        <img className="news-list-item-image" alt="photo" src={n.image}/>
        <div className="news-list-item-container">
            <span>{n.title}</span>
        </div>
    </div>
    </a>
);

export default NewsItem;