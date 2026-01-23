import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
let dbConnect = async() =>{
  try{
    let DbURL = process.env.DbURL;
   await mongoose.connect(DbURL);
     console.log("databse connected successfully");

  }
  catch(err){
    console.log("Mongodb connection err ", err.message);
  }
}
export {dbConnect}