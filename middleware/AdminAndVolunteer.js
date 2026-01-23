import jwt from "jsonwebtoken"
import dotenv from "dotenv";
import { User } from "../models/User.js";
dotenv.config();
const isAdmin = async(req , res, next)=>{
    try{
         const {token} = req.cookies;
    if(!token){
        return res.status(400).json({success: false, message: "Please login first"});
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET); 
    const user = await User.findById(decode.id);
    if(!user || user.role !== "admin" ){
        return res.json({success: false, message: " You are not authorised"})
    }
  return next();
    }
    catch(err){
       return res.json({success: false, message: `Error in Admin Authentication  ${err.message}`})
    }

}

const isVolunteer = async(req , res, next)=>{
    try{
         const {token} = req.cookies;
    if(!token){
        return res.status(400).json({success: false, message: "Please login first"});
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET); 
    const user = await User.findById(decode.id);
    if(!user || user.role !== "volunteer" ){
        return res.json({success: false, message: " You are not authorised"})
    }
  return next();
    }
    catch(err){
       return res.json({success: false, message: `Error in Admin Authentication  ${err.message}`})
    }

}
 
const isAdminOrVolunteer = async(req, res, next)=>{
    try{
  
         const {token} = req.cookies;
    if(!token){
        return res.json({success: false, message: "Please login first"})
    }

    const decode =  jwt.verify(token , process.env.JWT_SECRET);
    console.log("decode id is ", decode);

     const user = await User.findById(decode.id);
     
     if(!user){
        return res.json({success: false, message: "User not exist, first login then try"})
     }
     if(user.role !== "admin" && user.role !=="volunteer"  ){
        return res.json({success: false, message: "You are not authorized"})
     }
    return next();

    }
    catch(err){
        return res.json({success: false, message: `Login first ${err.message}`})
    }
   

}

export {isAdmin, isVolunteer, isAdminOrVolunteer}