import express from "express";
import dotenv from "dotenv";
import user from "./routers/userRoutes.js"
import asset from "./routers/assetRoutes.js"



dotenv.config({
  path: './config/config.env',
})

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", user)
app.use("/api/v1", asset)


export default app;