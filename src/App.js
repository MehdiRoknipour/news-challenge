import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Spinner from "./component/spinner";

import Layout from "./container";
const News = lazy(() => import("./pages/news"));
const NewsItem = lazy(() => import("./pages/news/item"));
const Comments = lazy(() => import("./pages/comments"));
const Favorites = lazy(() => import("./pages/favorites"));

function App() {
    return (
        <Layout>
            <Suspense fallback={<Spinner message="Still Loading…" />}>
                <Routes>
                    <Route path="/" element={<News />} />
                    <Route path="news/:id" element={<NewsItem />} />
                    <Route path="comments" element={<Comments />} />
                    <Route path="favorites" element={<Favorites />} />
                </Routes>
            </Suspense>
        </Layout>
    );
}

export default App;
