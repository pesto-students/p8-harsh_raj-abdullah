import catchAsync from "../middlewares/catchAsync.js";
import {Asset} from "../models/Asset.js"
import ApiError from "../utils/ApiError.js";

const getAsset = catchAsync(async (req, res, next) => {
  const users = await Asset.find();
  res.status(200).json({
    success: true,
    users
  })
});

const postAsset = catchAsync(async (req, res, next) => {
  const newPostData = {
    name: req.body.name,
    type: req.body.type,
    quantity: req.body.quantity,
    amount: req.body.amount,
    userId: req?.user?._id  
  }
  next(new ApiError(400, "Not Found"))
  const newPost = await Asset.create(newPostData);
  res.status(201).json({
    success: true,
    asset: newPost
  })
});

export { getAsset, postAsset }