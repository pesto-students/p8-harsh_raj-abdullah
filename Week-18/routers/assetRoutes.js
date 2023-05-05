import express from "express";
import { getAsset, postAsset } from "../controllers/assetController.js";

const router = express.Router();

router.get('/asset', getAsset)
router.post('/asset/create', postAsset)

export default router;