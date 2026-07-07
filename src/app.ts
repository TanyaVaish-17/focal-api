import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import sessionRoutes from './routes/session.routes';

export function createApp(): Application {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get('/health', (_req: Request, res: Response) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  app.use('/api/sessions', sessionRoutes);

  return app;
}