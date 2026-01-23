import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
name: {
    type: String,
    required: true,
    trim: true,
},
email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    index: true,
},

password:{
type: String,
},
 
contactNo: {
    type: String,
    trim: true,
},
emailVerifyOtp: String,
emailVerifyOtpExpireAt:{
    type:  Number,
    default: 0,
},
isAccountVerified: {
    type: Boolean,
    default: false,
},
forgetPasswordOtp: String,
forgetPasswordOtpExpireAt:{
    type: Number,
    default: 0,
} ,
role: {
    type: String,
    enum: ["user", "admin", "volunteer"],
    default: "user"
},
 authProvider: {
    type: String,
    enum: ["manual", "google"],
    default: "manual",
  },
   googleId: {
    type: String,
    default: null,
  },
  isRequestedForVolunteer:{
    type: Boolean,
    default: false,
  },

}, {timestamps: true})
const User = new mongoose.model("User", UserSchema);
export {User};