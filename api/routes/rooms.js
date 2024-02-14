import express from "express"
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router=express.Router();

router.post('/:hotelid', verifyAdmin,createRoom);

// update
router.put('/:id',verifyAdmin, updateRoom)

// delete
router.delete('/:id/:hotelid', verifyAdmin,deleteRoom)
// get
router.get('/:id', getRoom)

// getAll
router.get('/', getAllRooms)



export default router