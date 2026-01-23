import mongoose from "mongoose";
 
//todo Upload Schema
const uploadSchema = new mongoose.Schema(
   {
  public_id: String,
  url: String,
  secure_url: String,
  original_filename: String,
}, {timestamps: true}) 
const Upload = new mongoose.model("Upload", uploadSchema);
export {  Upload };