
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

import { OpenAI } from 'openai';
import { evaluationRoutes } from './routes/evaluationRoutes.js';

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Setup Express
const app = express();
dotenv.config();

// Middleware
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Setup OpenAI
export const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
});

// // Routes
app.use('/api/evaluate', evaluationRoutes);

// Uploads folder
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, "current_answer.webm");
  },
});
const upload = multer({storage });

// API Routes
app.get("/", (req, res) => {
  res.send("Backend is working");
});

app.post("/select-company", (req, res) => {
  const { company } = req.body;
  console.log("Company received:", company);
  if (company) {
    res.status(200).json({ message: "Company received successfully" });
  } else {
    res.status(400).json({ message: "Company not provided" });
  }
});

app.post("/upload-audio", upload.single("audio"), (req, res) => {
  console.log("Audio file received and saved as current_answer.webm");
  res.status(200).json({ message: "Audio uploaded successfully" });
});

app.post("/send-question", (req, res) => {
  const { question } = req.body;
  console.log("Received question:", question);
  fs.writeFile(path.join(__dirname, "current-question.txt"), question, (err) => {
    if (err) {
      console.error("Failed to save question:", err);
      return res.status(500).json({ message: "Failed to save question" });
    }
    res.status(200).json({ message: "Question received and saved" });
  });
});

// Use only ONE port
const PORT = process.env.PORT || 5100;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
