import axios from 'axios';

const NEWS_API_URL = 'https://newsapi.org/v2/everything'; // Replace with actual news API endpoint
const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key

export const fetchLatestNews = async (query: string) => {
    try {
        const response = await axios.get(NEWS_API_URL, {
            params: {
                q: query,
                apiKey: API_KEY,
                sortBy: 'publishedAt',
                pageSize: 10,
            },
        });
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching news:', error);
        throw error;
    }
};

export const fetchCompanyNews = async (companyName: string) => {
    return await fetchLatestNews(companyName);
};