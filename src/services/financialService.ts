import axios from 'axios';

const API_BASE_URL = 'https://api.example.com/financials'; // Replace with actual API endpoint

export const getBalanceSheet = async (ticker: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/balance-sheet/${ticker}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching balance sheet data');
    }
};

export const getIncomeStatement = async (ticker: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/income-statement/${ticker}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching income statement data');
    }
};

export const getCashFlowStatement = async (ticker: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/cash-flow/${ticker}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching cash flow statement data');
    }
};

export const getFinancialRatios = async (ticker: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/ratios/${ticker}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching financial ratios data');
    }
};