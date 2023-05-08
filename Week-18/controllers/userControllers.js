import catchAsync from "../middlewares/catchAsync.js";
import { User } from "../models/User.js";
import ApiError from "../utils/ApiError.js";

const signup = catchAsync(async (req, res, next) => {
  const {name, email, password} = req.body
  let user = await User.findOne({ email });
  if(user){
    throw new ApiError(409,"User already exists");
  }

  user = await User.create({name, email, password});
  res.status(201).json({
    success: true,
    user
  })
});

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  
  const user = await User.findOne({email}).select("+password");
  
  const isMatchPassword =  await user?.matchPassword(password);

  if(!isMatchPassword || !user) {
    throw new ApiError(401, "Incorrect email or password");
  }

  const token = await user.generateToken();
  const access = {
    token,
    expires : new Date(Date.now() + parseInt(process.env.JWT_EXPIRES_SEC) * 1000)
  }

  delete user._doc.password;

  res.status(200).json({
    success: true,
    access,
    user
  });
});

export { signup, login }