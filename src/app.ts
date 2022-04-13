import express from 'express';
import config from 'config';
import connect from './helpers/db_mongo/connect';
import openRoutes from './routes/open/openroutes';
import restrictedRoutes from './routes/restricted/restrictedroutes';

const app = express();
const port = config.get('port');

app.get('/', (req, res) => {
  res.send('Serveur MongoDB');
});

app.listen(port, () => {
  console.log(`[serveur]: Le serveur tourner sur https://localhost:${port}`);
  
  openRoutes(app);
  restrictedRoutes(app);

  connect();
});