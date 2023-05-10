import express from "express";
import { deleteAsset, getAsset, postAsset, updateAsset } from "../controllers/assetController.js";

const router = express.Router();

router.get('/', getAsset)
router.post('/create', postAsset)
router.patch('/update/:id', updateAsset)
router.delete('/delete/:id', deleteAsset)


export default router;