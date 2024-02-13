import express from "express"
import {updateUser,deleteUser,getUser,getAllUsers} from "../controllers/user.js"
import { verifyToken, verifyUser } from "../utils/verifyToken.js";
const router=express.Router();

router.use(verifyToken);

router.get('/checkauthentication',(req,res,next)=>{
    res.send("hello you are authenticated")
})

router.get('/checkuser/:id',verifyUser,(req,res,next)=>{
    res.send("hello you are authenticated and you can delete your account now")
})
// update
router.put('/:id', updateUser)

// delete
router.delete('/:id', deleteUser)
// get
router.get('/:id', getUser)

// getAll
router.get('/', getAllUsers)





export default router