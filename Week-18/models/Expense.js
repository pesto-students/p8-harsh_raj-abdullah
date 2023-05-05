import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt:{ type: Date, default: Date.now, }
});

export const Expense = mongoose.model('Expense', expenseSchema);