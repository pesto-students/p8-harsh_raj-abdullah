import express from "express";
import { deleteExpense, getExpense, postExpense, updateExpense } from "../controllers/expenseController.js";

const router = express.Router();

router.get('/', getExpense)
router.post('/create', postExpense)
router.patch('/update/:id', updateExpense)
router.delete('/delete/:id', deleteExpense)


export default router;