import express from 'express';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import mustache from 'mustache-express';
import session from 'express-session';
import flash from 'connect-flash';

import routerMain from './routes/index.js';
import { notFound } from './routes/notFound.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticPath = path.join(__dirname, '..', 'public');

app.use(express.static(staticPath));

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: 'segredo',
    resave: false,
    saveUninitialized: true,
  })
);

app.use(flash());

app.use(routerMain);
app.use(notFound);

app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, '..', 'src', 'views'));
app.engine('mustache', mustache());

const PORT = process.env.PORT ?? 3000;

app.listen(Number(PORT), '0.0.0.0', () => {
  console.log('servidor rodando');
});
