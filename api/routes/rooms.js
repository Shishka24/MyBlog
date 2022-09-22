import express from "express";
import {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getRooms,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//Create
router.post("/:hotelid", verifyAdmin, createRoom);
//Update
router.put("/:id", verifyAdmin, updateRoom);
//Delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//Get
router.get("/:id", getRoom);
//Get All
router.get("/", getRooms);
// router.get("/", (req, res) => {
//   res.send("Hello, this is auth endpoint");
// });
// router.get("/register", (req, res) => {
//   res.send("Hello, this is auth register endpoint");
// });

export default router;
