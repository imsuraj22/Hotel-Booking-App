import express from "express"
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotel.js";

const router=express.Router();

router.post('/', createHotel);

// update
router.put('/:id', updateHotel)

// delete
router.delete('/:id', deleteHotel)
// get
router.get('/:id', getHotel)

// getAll
router.get('/', getAllHotel)



export default router