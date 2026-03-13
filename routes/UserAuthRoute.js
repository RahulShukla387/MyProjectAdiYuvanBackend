import express from "express";
import { Register, Login, Logout, getUserData, resetPassword, resetPasswordOtp, verifyEmail, sendVerifyOtp, googleLogin } from "../cotrollers/UserAuthRoute.js";
import { userId } from "../middleware/UserAuth.js";
const AuthRouter = express.Router();
AuthRouter.post("/register", Register);
AuthRouter.post("/login", Login );
AuthRouter.get("/logout", Logout);
AuthRouter.get("/sendVerifyOtp", userId, sendVerifyOtp);
AuthRouter.post("/verifyEmail", userId, verifyEmail);
AuthRouter.post("/resetPasswordOtp", resetPasswordOtp);
AuthRouter.post("/resetPassword", resetPassword);
AuthRouter.get("/getUserData", userId, getUserData);
AuthRouter.post("/google/login", googleLogin );

export default AuthRouter;