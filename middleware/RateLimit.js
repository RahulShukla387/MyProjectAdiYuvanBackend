import express from "express";
import rateLimit from "express-rate-limit";
const limiter = rateLimit({

    windowMs: 15*60*1000,
    max: 100,
    message: "Too many requests, Please try later",

})
const authLimit = rateLimit({
    windowMs: 15*60*1000,
    max: 45,
    message: "Too many requests, Please try later",
})

export { limiter, authLimit };