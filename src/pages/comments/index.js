import React from "react";
import NewsListItem from "../../component/news/list-item";
import comment from "../../model/comment";
import favorites from "../../model/favorite";

const Comments = () => {
    const changeFavorite = (item) => favorites.set(item.id, item.title, item.thumbnailUrl, () => console.info(item.id));

    return (
        <ul className="news__list">
            {comment.list?.map((item) => (
                <NewsListItem key={item.id} item={item} changeFavorite={() => changeFavorite(item)} />
            ))}
        </ul>
    );
};

export default Comments;
