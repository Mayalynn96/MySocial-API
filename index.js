// importing express, db and routes
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
// setting PORT and app
const PORT = process.env.PORT || 3001;
const app = express();
// adding app settings
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
// starting server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on http://localhost:${PORT}`);
  });
});
