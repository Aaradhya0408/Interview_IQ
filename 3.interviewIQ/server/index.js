import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "node:url";
import connectDb from "./config/connectDb.js";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import interviewRouter from "./routes/interview.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 6000;
const clientOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim());
const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const clientDistPath = path.resolve(currentDirectory, "../../client/dist");

app.use(cors({ origin: clientOrigins, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.get("/health", (_req, res) => res.status(200).json({ status: "ok" }));
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/interview", interviewRouter);

// Serve the built Vite application and API from one origin in production.
app.use(express.static(clientDistPath));
app.use((req, res, next) => {
  if (req.method !== "GET" || req.path.startsWith("/api/")) return next();
  res.sendFile(path.join(clientDistPath, "index.html"), (error) => {
    if (error) next(error);
  });
});

const start = async () => {
  await connectDb();
  app.listen(port, () => console.log(`Server running on port ${port}`));
};

start().catch((error) => {
  console.error("Server startup failed:", error);
  process.exit(1);
});
