import React, { useEffect, useState } from 'react';

interface Stock {
  code: string;
  name: string;
  price: number;
  change: string;
}

const StockPrice: React.FC = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:5001/api/stocks')
      .then(response => response.json())
      .then(data => setStocks(data))
      .catch(error => console.error('Error fetching stock data:', error));
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    fetch(`http://localhost:5001/api/search?q=${event.target.value}`)
      .then(response => response.json())
      .then(data => setStocks(data))
      .catch(error => console.error('Error fetching search results:', error));
  };

  return (
    <div className="container mt-4">
      <h2>Stock Prices</h2>
      <input
        type="text"
        placeholder="Search stock code/name"
        className="form-control mb-3"
        value={query}
        onChange={handleSearch}
      />
      <ul className="list-group">
        {stocks.map(stock => (
          <li key={stock.code} className="list-group-item">
            {stock.code} - {stock.name} - {stock.price} - {stock.change}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockPrice;