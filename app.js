import express from 'express';
import bodyParser from 'body-parser';
import urlRouters from './routers/urlRouters.js';
import db from './db/db.js';

const app = express();
app.use(bodyParser.json());
app.use('/', urlRouters);

app.get('/', (req, res) => {
  res.send('URL Shortener API is running!');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`URL Shortener running at http://localhost:${PORT}`);
});
