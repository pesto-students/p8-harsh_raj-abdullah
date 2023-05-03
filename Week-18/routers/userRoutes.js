import express from "express";
import { User } from "../models/user.js";

const router = express.Router();

router.get('/users', async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    users
  })
})

export default router;