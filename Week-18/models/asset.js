import mongoose from "mongoose";

const assetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  quantity: { type: Number, required: true },
  value: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt:{ type: Date, default: Date.now, }
});

export const Asset = mongoose.model('Asset', assetSchema);