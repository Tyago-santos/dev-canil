import express from 'express';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import mustache from 'mustache-express';

import routerMain from './routes/index.ts';

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

app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
  console.log('servidor rodando');
});
