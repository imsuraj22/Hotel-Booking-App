import express from "express"
import {updateUser,deleteUser,getUser,getAllUsers} from "../controllers/user.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router=express.Router();

router.use(verifyToken);

// router.get('/checkauthentication',(req,res,next)=>{
//     res.send("hello you are authenticated")
// })

// router.get('/checkuser/:id',verifyUser,(req,res,next)=>{
//     res.send("hello you are authenticated and you can delete your account now")
// })

// router.get('/checkAdmin/:id',verifyAdmin,(req,res,next)=>{
//     res.send("hello Admin, you are authenticated and you can delete all accounts")
// })
// update
router.put('/:id',verifyUser, updateUser)

// delete
router.delete('/:id', verifyUser,deleteUser)
// get
router.get('/:id',verifyUser, getUser)

// getAll
router.get('/',verifyAdmin, getAllUsers)





export default router