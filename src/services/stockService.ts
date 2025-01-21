import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api/stocks'; // Replace with the actual API endpoint

export const fetchRealTimeStockData = async (symbol) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/real-time/${symbol}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching real-time stock data:', error);
        throw error;
    }
};

export const fetchHistoricalStockData = async (symbol, period) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/historical/${symbol}`, {
            params: { period },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching historical stock data:', error);
        throw error;
    }
};