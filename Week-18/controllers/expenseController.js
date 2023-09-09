import mongoose from "mongoose";
import catchAsync from "../middlewares/catchAsync.js";
import {Expense} from "../models/Expense.js"
import ApiError from "../utils/ApiError.js";
import { ObjectId } from 'mongodb';

const getExpense = catchAsync(async (req, res) => {
  const { y, m } = req.query
  const query  = { userId: req.user?._id }
  if( y || m ){
    query.createdAt = { 
      $gt: new Date(y ?? new Date().getFullYear(), m ? m-1 : 0, 1 ),
      $lte: new Date()
    }
  }

  const assets = await Expense.find(query).sort({ createdAt: -1});
  res.status(200).json({
    success: true,
    assets
  })
});

const postExpense = catchAsync(async (req, res) => {
  const newPostData = {
    name: req.body.name,
    type: req.body.type,
    amount: req.body.amount,
    userId: req?.user?._id  
  }
  const newPost = await Expense.create(newPostData);
  res.status(201).json({
    success: true,
    asset: newPost
  })
});

const updateExpense = catchAsync(async (req, res) => {
  const { id } = req.params;
  if (!req.body) {
    return res.status(400).send({
      message: "No data to update!"
    });
  }

  if(!mongoose.Types.ObjectId.isValid(id)) throw new ApiError(404, "Invalid Expense Id");
  const asset = await Expense.findByIdAndUpdate(id, req.body, { useFindAndModify: false, new: true });
  if(!asset) throw new ApiError(404, "Invalid Expense Id");
  await asset.save()

  res.status(200).json({
    success: true,
    massage: "Expense Updated Successfully",
    asset: asset
  })
});

const deleteExpense = catchAsync(async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) throw new ApiError(404, "Invalid Expense Id");
  const asset = await Expense.findByIdAndDelete(new ObjectId(id));
  if(!asset) throw new ApiError(404, "No Expense Found");

  res.status(200).json({
    success: true,
    massage: "Expense Deleted Successfully"
  })
});

export { getExpense, postExpense, updateExpense, deleteExpense }