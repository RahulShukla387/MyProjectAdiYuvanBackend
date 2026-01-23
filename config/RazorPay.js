import dotenv from "dotenv"
dotenv.config();

import razorPay from 'razorpay';

export const createRazorPayInstance = ()=>{
    return new razorPay({
    key_id: process.env.RTEST_API_KEY,
    key_secret: process.env.RTEST_KEY_SECRET,
})
}