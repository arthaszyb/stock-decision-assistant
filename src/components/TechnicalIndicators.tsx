import React, { useEffect, useState } from 'react';
import { calculateMACD, calculateRSI, calculateKDJ, calculateMA } from '../services/indicatorService';

const TechnicalIndicators = () => {
    const [data, setData] = useState([]);
    const [macd, setMacd] = useState(null);
    const [rsi, setRsi] = useState(null);
    const [kdj, setKdj] = useState(null);
    const [ma, setMa] = useState(null);
    const [period, setPeriod] = useState(14); // Default period for indicators

    useEffect(() => {
        // Fetch stock price data and calculate indicators
        const fetchData = async () => {
            // Assume fetchStockData is a function that retrieves stock price data
            const stockData = await fetchStockData();
            setData(stockData);
            setMacd(calculateMACD(stockData, period));
            setRsi(calculateRSI(stockData, period));
            setKdj(calculateKDJ(stockData, period));
            setMa(calculateMA(stockData, period));
        };

        fetchData();
    }, [period]);

    return (
        <div>
            <h2>Technical Indicators</h2>
            <div>
                <label>
                    Period:
                    <input
                        type="number"
                        value={period}
                        onChange={(e) => setPeriod(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <h3>MACD: {macd}</h3>
                <h3>RSI: {rsi}</h3>
                <h3>KDJ: {kdj}</h3>
                <h3>MA: {ma}</h3>
            </div>
        </div>
    );
};

export default TechnicalIndicators;