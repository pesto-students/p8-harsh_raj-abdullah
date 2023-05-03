import express from "express";
import dotenv from "dotenv";
import user from "./routers/userRoutes.js"

dotenv.config({
  path: './config/config.env',
})


const app = express();

app.use("/api/v1", user)

export default app;