import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';

import { evaluationRoutes } from './routes/evaluationRoutes.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

export const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
});


app.use('/api/evaluate', evaluationRoutes);

const PORT = process.env.PORT || 5100;

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));