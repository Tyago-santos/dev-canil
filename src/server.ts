import express from 'express';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import mustache from 'mustache-express';

import routerMain from './routes/index.js';
import { notFound } from './routes/notFound.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticPath = path.join(__dirname, '..', 'public');

app.use(express.static(staticPath));

app.use(helmet());
app.use(express.json());

app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());

app.use(routerMain);
app.use(notFound);

app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT ?? 3000;

app.listen(Number(PORT), '0.0.0.0', () => {
  console.log('servidor rodando');
});
