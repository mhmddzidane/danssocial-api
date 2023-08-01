import express from "express";
import { getUser, searchUser, updateUser } from "../controllers/user.js";

const router = express.Router();

router.get("/find/:userid", getUser);
router.get("/search/:search", searchUser);
router.put("/", updateUser);

export default router;
