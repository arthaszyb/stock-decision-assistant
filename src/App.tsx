import React from 'react';
import StockPrice from './components/StockPrice';

const App: React.FC = () => {
  return (
    <div className="container">
      <h1 className="my-4">Stock Decision Assistant</h1>
      <StockPrice />
    </div>
  );
};

export default App;