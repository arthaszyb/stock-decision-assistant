import React, { useEffect, useState } from 'react';
import { getFinancialRatios } from '../services/financialService';

const FinancialData: React.FC = () => {
    const [financialData, setFinancialData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFinancialData = async () => {
            try {
                const data = await fetchFinancialData();
                setFinancialData(data);
            } catch (err) {
                setError('Failed to fetch financial data');
            } finally {
                setLoading(false);
            }
        };

        fetchFinancialData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Financial Data</h2>
            <h3>Balance Sheet</h3>
            <pre>{JSON.stringify(financialData.balanceSheet, null, 2)}</pre>
            <h3>Income Statement</h3>
            <pre>{JSON.stringify(financialData.incomeStatement, null, 2)}</pre>
            <h3>Cash Flow Statement</h3>
            <pre>{JSON.stringify(financialData.cashFlowStatement, null, 2)}</pre>
            <h3>Key Financial Ratios</h3>
            <pre>{JSON.stringify(financialData.keyRatios, null, 2)}</pre>
        </div>
    );
};

export default FinancialData;