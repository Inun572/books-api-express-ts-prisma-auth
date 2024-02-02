// src/index.ts
import express, { Request, Response } from 'express';
import router from './api/routes';

const app = express();
const port = 5000;

app.use(express.json());

app.use(router);

app.get('/', (req: Request, res: Response) => {
  res.send('Halo su!');
});

app.listen(port, () => {
  console.log(
    `Server is running at http://localhost:${port}`
  );
});
