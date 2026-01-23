import express from "express";
import { verifyPayment , createOrder } from "../cotrollers/RazorPay.js";
export const razorRouter = express.Router();


razorRouter.post("/createOrder", createOrder);
razorRouter.post("/verify", verifyPayment);