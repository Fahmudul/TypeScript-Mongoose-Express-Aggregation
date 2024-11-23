import express, { Request, Response, Application } from 'express';
import { StoreRoutes } from './app/module/BookModule/Store-routes';
const app: Application = express();
// json parser
app.use(express.json());
// app.use(cors());
app.use('/api', StoreRoutes);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
export default app;
