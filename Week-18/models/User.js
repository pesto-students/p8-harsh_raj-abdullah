import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt  from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name']
  },
  email:{
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
    validate: validator.isEmail,
  },
  password:{
    type: String,
    required: [true, 'Please enter your password'],
    minLength: [6, 'Password must be at least 6 characters'],
    select: false,
  },
  createdAt:{
    type: Date,
    default: Date.now,
  }
})

UserSchema.pre("save", async function (next) {
  if(this.isModified("password")){
    this.password = await bcrypt.hash(this.password, 10)
  }
  next();
})

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

UserSchema.methods.generateToken = async function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET)
}

export const User = mongoose.model('User', UserSchema);