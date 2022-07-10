import React, { useEffect, useState } from "react";
import RSS_URL from "../../utils/api.config";
import Spinner from "../../component/spinner";
import NewsListItem from "../../component/news/list-item";
import Favorites from "../../model/favorite";

const delay = 30;

function News() {
    const [loading, setLoading] = useState(false);
    const [news, setNews] = useState([]);

    const changeFavorite = (item) => Favorites.set(item.id, item.title, item.thumbnailUrl, () => console.info(item.id));

    function fetchNews() {
        setLoading(true);
        fetch(RSS_URL)
            .then((resp) => resp.json())
            .then((resp) => resp.filter((item) => item.id < 6))
            .then((resp) => setNews(resp))
            .then(() => setLoading(false));
    }

    useEffect(() => {
        fetchNews();
    }, []);

    const [counter, setCounter] = React.useState(0);

    useEffect(() => {
        const timer = counter < 60 && setInterval(() => setCounter(counter + 1), delay * 1000);
        return () => clearInterval(timer);
    }, [counter]);

    return (
        <div className="app__container">
            {loading ? (
                <Spinner />
            ) : (
                <ul className="news__list">
                    {news?.map((item) => (
                        <NewsListItem key={item.id} item={item} changeFavorite={() => changeFavorite(item)} />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default News;
