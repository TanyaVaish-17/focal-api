import express, { Application, Request, Response } from 'express';
import cors from 'cors';

export function createApp(): Application {
  const app = express();

  app.use(cors());
  app.use(express.json());

  // Health check - confirms the server is alive independent of any resource routes
  app.get('/health', (_req: Request, res: Response) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  return app;
}