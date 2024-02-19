import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/about', async (req: Request, res: Response) => {
  res.json({ message: 'Welcome to cravedash' });
});

app.listen(8000, () => {
  console.log(`server starting on localhost:8000`);
});
