const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Stock Decision Assistant Backend');
});

// Example endpoint for stock data
app.get('/api/stocks', (req, res) => {
  const stocks = [
    { code: '000001', name: 'Ping An Bank', price: 15.23, change: '+1.23%' },
    { code: '000002', name: 'Vanke', price: 28.45, change: '-0.56%' },
  ];
  res.json(stocks);
});

// Search endpoint
app.get('/api/search', (req, res) => {
  const query = req.query.q;
  const stocks = [
    { code: '000001', name: 'Ping An Bank', price: 15.23, change: '+1.23%' },
    { code: '000002', name: 'Vanke', price: 28.45, change: '-0.56%' },
  ];
  const results = stocks.filter(stock => stock.code.includes(query) || stock.name.includes(query));
  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});