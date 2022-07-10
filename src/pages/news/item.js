import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../../component/spinner";
import RSS_URL from "../../utils/api.config";
import Comment from "../../model/comment";

const NewsItem = () => {
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(Comment.get(id));
    const [commentText, setCommentText] = useState(item?.comment || "");

    const submit = (e) => {
        e.preventDefault();
        Comment.set(item.id, item.title, item.thumbnailUrl, commentText, () => navigate("/"));
    };

    const handleCommentChange = (e) => setCommentText(e.target.value);

    function fetchItem() {
        setLoading(true);
        fetch(RSS_URL + "/" + id)
            .then((resp) => resp.json())
            .then((resp) => setItem(resp))
            .then(() => setLoading(false));
    }

    useEffect(() => {
        fetchItem(id);
    }, []);

    return (
        <div className="news-item__container">
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <img className="news__item-image" src={item?.thumbnailUrl} alt={item?.title} />
                    <p className="news__item-title">{item?.title}</p>
                    <h4>write your comment</h4>
                    <form action="" onSubmit={submit}>
                        <input type="text" name="comment" value={commentText} onChange={handleCommentChange} />
                        <br />
                        <button type="submit">submit</button>
                    </form>
                </>
            )}
        </div>
    );
};

export default NewsItem;
