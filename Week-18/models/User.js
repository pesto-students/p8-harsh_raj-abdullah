import mongoose from "mongoose";
import validator from "validator";

const schema = new mongoose.Schema({
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
  assets:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Assets"
  }],
  createdAt:{
    type: Date,
    default: Date.now,
  }
})

export const User = mongoose.model('User', schema);