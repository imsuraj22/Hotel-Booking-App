import jwt from "jsonwebtoken"; 
import { createError } from "../utils/error.js";

export const verifyToken=(req,res,next)=>{
    const token=req.cookies.access_token
   
    if(!token){
        return next(createError(401,"you are not authenticated!"));
    }
    console.log("hello from jwt");
    jwt.verify(token, process.env.JWT, (err, user) => {
        if(err) { 
            res.status(403).json('Token is not valid');
        } else { 
           req.user = user; 
           next();
        }
      });
}

export const verifyUser=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id===req.param.id || req.user.isAdmin){
            next()
        }else{
            if(err) return next(createError(403,"You are not authorized!"))
        }
    })
}