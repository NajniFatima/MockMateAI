import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config();

console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

const app = express();
const port = process.env.PORT || 5000;

// ✅ CORS middleware
app.use(cors({
  origin: "http://localhost:3000",  // Your frontend URL
  credentials: true,               // Allow cookies
}));

app.use(express.json());
app.use(cookieParser());

// ✅ MongoDB connection
connectDB();

// ✅ Test route
app.get('/', (req, res) => res.send("API Working"));

// ✅ Routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

// ✅ Start server
app.listen(port, () => console.log(`Server started on PORT: ${port}`));
