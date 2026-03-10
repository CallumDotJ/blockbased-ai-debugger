import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import openaiRoutes from "./routes/openai.js";

dotenv.config();

// debugging
console.log("OpenAI Key:", process.env.OPENAI_API_KEY ? "Loaded" : "Missing");

const app = express();

app.use(cors());

// increase limit for large image formats
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Router Routes -- saved 
app.use("/api/openai", openaiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));