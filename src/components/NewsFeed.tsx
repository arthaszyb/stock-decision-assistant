import React, { useEffect, useState } from 'react';
import { fetchNews } from '../services/newsService';

const NewsFeed: React.FC = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const getNews = async () => {
            try {
                const newsData = await fetchNews(searchTerm);
                setNews(newsData);
            } catch (err) {
                setError('Failed to fetch news');
            } finally {
                setLoading(false);
            }
        };

        getNews();
    }, [searchTerm]);

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        // Trigger news fetch with the current search term
        fetchNews(searchTerm).then(setNews).catch(() => setError('Failed to fetch news')).finally(() => setLoading(false));
    };

    return (
        <div>
            <h2>Latest Financial News</h2>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search news..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ul>
                {news.map((item, index) => (
                    <li key={index}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            {item.title}
                        </a>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsFeed;