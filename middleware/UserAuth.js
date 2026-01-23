 import jwt from 'jsonwebtoken';
 import dotenv from 'dotenv';
 dotenv.config();
const userId = async(req, res, next)=>{
  const {token} = req.cookies;
  if(!token){
    return res.json({success: false, message: "Unauthorised , login again"});
  }
  try{
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      if(!decode){
        return res.json({success: false, message: "Unauthorised user , login again"});
      }
        req.user = {userId: decode.id};
        console.log("decodeId is ", decode);
        next();
  }
  catch(err){
    return res.json({success: false, message: ` finding user Id err => ${err.message} `});
  }
}


      //todo is user Authenticated i.e logged in , used the  middlewares sendingUserId if it found then authenticated
      const isAuthenticated = async(req, res)=>{
        try{
           return res.json({success: true});
        }
        catch(err){
          return res.json({success: false, message: err.message});
        }
      }

export {userId , isAuthenticated};