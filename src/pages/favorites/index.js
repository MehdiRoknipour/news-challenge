import React from "react";
import NewsListItem from "../../component/news/list-item";
import favorites from "../../model/favorite";

const Favorites = () => {
    const changeFavorite = (item) => favorites.set(item.id, item.title, item.thumbnailUrl, () => console.info(item.id));

    return (
        <ul className="news__list">
            {favorites.list?.map((item) => (
                <NewsListItem key={item.id} item={item} changeFavorite={() => changeFavorite(item)} />
            ))}
        </ul>
    );
};

export default Favorites;
