import express from "express";
import helmet from "helmet";
const app = express();
//todo => writing dotenv for accessing env
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8080;
import cookieParser from "cookie-parser";
app.use(cookieParser());
//todo connecting frontend and backend
import cors from "cors";
import { UseCors } from "./config/Cors.js";
app.use(cors(UseCors()));
app.use(helmet());

//todo form handling

import path from "path";
app.set("view engine", "ejs");
app.set("views", path.resolve("./views")); 
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//todo importing multer

//todo connecting database
import { dbConnect } from "./config/Database.js";
dbConnect();
 
import { User } from "./models/User.js";
import { Volunteer } from "./models/Volunteer.js";
const deleteModel = async()=> {
//  console.log( "User deleted Successfully", await User.deleteMany({})  ) ;
 console.log( "Volunteer deleted Successfully", await Volunteer.deleteMany({})  ) ;
}
 
//  await User.findOneAndUpdate({email: "knowmetechnical@gmail.com"},
//    { $set:{role: "admin"}}
//  )
//  await User.findOneAndUpdate({email: "rs1256046@gmail.com"},
//    { $set:{role: "user"}}
//  )

// deleteModel()
// import ReportIssue from "./models/ReportIssue.js";
// console.log("volunteer data is ", await ReportIssue.find({}) );
// console.log("User data is ", await User.find({email: "rs1256046@gmail.com"}) );

//todo starting the function
import UploadRoutes from "./routes/UploadRoutes.js"
import AuthRouter from "./routes/UserAuthRoute.js";
import { reportAndVolunteer } from "./routes/ReportAndVolunteer.js";
import { razorRouter } from "./routes/RazorPay.js";

app.use("/api", UploadRoutes );
app.use("/api/auth", AuthRouter);
app.use("/api/admin", reportAndVolunteer );
app.use("/api/payment", razorRouter );
 

app.listen(PORT, ()=>{
    console.log("app is working on port " + PORT);
})
 
