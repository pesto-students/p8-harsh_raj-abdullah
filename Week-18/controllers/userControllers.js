import { User } from "../models/User.js";

const signup = async (req, res, next) => {
  try{
    const {name, email, password} = req.body
    let user = await User.findOne({ email });
    if(user){
      return res.status(409).json({
        success: false,
        message: 'User already exists'
      })
    }

    user = await User.create({name, email, password});
    res.status(201).json({
      success: true,
      user
    })
  } catch(err){
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
}

const login = async (req, res, next) => {
  try{
    const { email, password } = req.body;
    
    const user = await User.findOne({email}).select("+password");
    
    const isMatchPassword =  await user?.matchPassword(password);

    if(!isMatchPassword || !user) {
      return res.status(400).json({
        success: false,
        asset: "Invalid Credentials"
      })
    }

    const token = await user.generateToken();

    res.status(200)
      .cookie("token", token, {
        expires: new Date(new Date() + 2 * 24 * 60 * 60 * 1000), // 2 days
        httpOnly: true,
      })
      .json({
        success: true,
        token,
        user
      });
  } catch(err){
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
}

export { signup, login }