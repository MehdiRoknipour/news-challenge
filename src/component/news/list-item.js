import React from "react";
import { Link } from "react-router-dom";

const NewsListItem = ({ item, changeFavorite }) => (
    <li className="news__list-item">
        <img className="news__list-item-image" src={item.thumbnailUrl} alt={item.title} />
        <p className="news__list-item-title">{item.title}</p>
        <ul className="news__list-action">
            <li className="news__list-action-favorite">
                <a href="#" onClick={changeFavorite}>
                    <i style={{ color: "red" }} className="fa fa-heart-o"></i>
                </a>
            </li>
            <li className="news__list-action-comment">
                <Link to={`/news/${item.id}`}>
                    <i style={{ color: "red" }} className="fa fa-comment-o"></i>
                </Link>
            </li>
        </ul>
    </li>
);

export default NewsListItem;
