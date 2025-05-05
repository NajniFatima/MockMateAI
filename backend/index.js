
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

//  Create uploads folder if it doesn't exist
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

//  Setup multer for handling multipart/form-data (always overwrite)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, "current_answer.webm"); // Fixed filename, always overwrite
    }
});
const upload = multer({ storage: storage });

// Test route
app.get("/", (req, res) => {
    res.send("Backend is working");
});

//  Company selection
app.post("/select-company", (req, res) => {
    const { company } = req.body;
    console.log("Company received:", company);
    if (company) {
        res.status(200).json({ message: "Company received successfully" });
    } else {
        res.status(400).json({ message: "Company not provided" });
    }
});

//  Audio upload route
app.post("/upload-audio", upload.single("audio"), (req, res) => {
    console.log("Audio file received and saved as current_answer.webm");
    res.status(200).json({ message: "Audio uploaded successfully" });
});

// Send question route
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

app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
