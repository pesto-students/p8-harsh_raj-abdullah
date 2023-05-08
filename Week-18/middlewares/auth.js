import catchAsync from "./catchAsync.js";
import ApiError from "../utils/ApiError.js"
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

const isAuthenticated = catchAsync(async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")?.[1];
  if(!token) throw next(new ApiError(401, 'Invalid token'));

  const payload = jwt.verify(token, process.env.JWT_SECRET);
  const currentTime = Math.floor(Date.now() / 1000);
  
  if( payload.exp < currentTime ){
    throw next(new ApiError(401,"'Unauthorized! Access Token was expired!'")); 
  }
  
  req.user  = await User.findOne({ _id: payload._id })
  next();
})

export default isAuthenticated;