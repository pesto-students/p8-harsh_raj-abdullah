import {Asset} from "../models/Asset.js"

const getAsset = async (req, res, next) => {
  try{
    const users = await Asset.find();
    res.status(200).json({
      success: true,
      users
    })
  } catch(err){
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
}

const postAsset = async (req, res, next) => {
  try{
    const newPostData = {
      name: req.body.name,
      type: req.body.type,
      quantity: req.body.quantity,
      amount: req.body.amount,
      userId: req.user._id  
    }
    const newPost = await Asset.create(newPostData);
    res.status(201).json({
      success: true,
      asset: newPost
    })
  } catch(err){
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
}

export { getAsset, postAsset }