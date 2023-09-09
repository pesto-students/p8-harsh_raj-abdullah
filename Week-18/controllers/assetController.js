import mongoose from "mongoose";
import catchAsync from "../middlewares/catchAsync.js";
import {Asset} from "../models/Asset.js"
import ApiError from "../utils/ApiError.js";
import { ObjectId } from 'mongodb';

const getAsset = catchAsync(async (req, res) => {
  const assets = await Asset.find({ userId: req.user?._id });
  res.status(200).json({
    success: true,
    assets
  })
});

const postAsset = catchAsync(async (req, res) => {
  const newPostData = {
    name: req.body.name,
    type: req.body.type,
    quantity: req.body.quantity,
    value: req.body.value,
    userId: req?.user?._id  
  }
  const newPost = await Asset.create(newPostData);
  res.status(201).json({
    success: true,
    asset: newPost
  })
});

const updateAsset = catchAsync(async (req, res) => {
  const { id } = req.params;
  if (!req.body) {
    return res.status(400).send({
      message: "No data to update!"
    });
  }

  if(!mongoose.Types.ObjectId.isValid(id)) throw new ApiError(404, "Invalid Asset Id");
  const asset = await Asset.findByIdAndUpdate(id, req.body, { useFindAndModify: false, new: true });
  if(!asset) throw new ApiError(404, "Invalid Asset Id");
  await asset.save()

  res.status(200).json({
    success: true,
    massage: "Asset Updated Successfully",
    asset: asset
  })
});

const deleteAsset = catchAsync(async (req, res) => {
  const { id } = req.params;

  // if(!mongoose.Types.ObjectId.isValid(id)) throw new ApiError(404, "Invalid Asset Id");
  const asset = await Asset.findByIdAndDelete(new ObjectId(id));
  if(!asset) throw new ApiError(404, "No Asset Found");

  res.status(200).json({
    success: true,
    massage: "Asset Deleted Successfully"
  })
});

export { getAsset, postAsset, updateAsset, deleteAsset }