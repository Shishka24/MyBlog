import express from "express";
import User from "../models/User.js";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();
// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello User, you are logged in!");
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello User, you are logged in and you can delete your account !");
// });
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello Admin, you are logged in and you can delete all accounts !");
// });
//Update
router.put("/:id", verifyUser, updateUser);
//Delete
router.delete("/:id", verifyUser, deleteUser);
//Get
router.get("/:id", verifyUser, getUser);
//Get All
router.get("/", verifyAdmin, getUsers);

export default router;
