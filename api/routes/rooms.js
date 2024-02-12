import express from "express"
const router=express.Router();

router.get("/",(req,res)=>{
    // console.log('goood');
    res.send("Hello, this is auth endpoint")
})
router.get("/register",(req,res)=>{
    // console.log('goood');
    res.send("Hello, this is register endpoint")
})



export default router