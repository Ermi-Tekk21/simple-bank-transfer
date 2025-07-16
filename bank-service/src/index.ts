import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./config/data-source";
import bankRoutes from "./routes/bankRoutes";

dotenv.config();
const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());
app.use("/banks", bankRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("📦 DB connected");
    app.listen(port, () => console.log(`🚀 Bank Service running on port ${port}`));
  })
  .catch((error) => console.error("❌ DB connection error:", error));
