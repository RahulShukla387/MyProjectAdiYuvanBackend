import { createRazorPayInstance } from "../config/RazorPay.js";
import crypto, { sign } from "crypto";
const razorpayInstance = createRazorPayInstance();

export const createOrder = async (req, res) => {
  try {
    let { amount } = req.body;

    // Validate amount
    amount = Number(amount);

    if (!amount || isNaN(amount)) {
      return res.status(400).json({
        success: false,
        message: "Invalid donation amount",
      });
    }

    if (amount < 1) {
      return res.status(400).json({
        success: false,
        message: "Minimum donation amount is ₹1",
      });
    }

    if (amount > 500000) {
      return res.status(400).json({
        success: false,
        message: "Maximum donation amount exceeded",
      });
    }

    const options = {
      amount: Math.round(amount * 100), // paise
      currency: "INR",
      receipt: `DONATION_${Date.now()}`,
      notes: {
        purpose: "NGO Donation",
        org: "AdiYuvan NGO",
      },
    };

    const order = await razorpayInstance.orders.create(options);

    return res.status(200).json({
      success: true,
      order,
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Create order failed",
      error: err.message,
    });
  }
};


export const verifyPayment = async(req, res)=>{
    const { order_id, payment_id, signature } = req.body;
    const secret = process.env.RTEST_KEY_SECRET;
   // Create hmac object  
   const hmac = crypto.createHmac("sha256", secret) 
   hmac.update(order_id + "|" + payment_id );
   const generatedSignature = hmac.digest("hex");
    if(generatedSignature === signature ){
        return res.json({
            success: true,
            message: "Payment Verified",
        })
    }
    else {
        return res.json({
            success: false,
            message: "Payment not verified",
        })
    }

} 