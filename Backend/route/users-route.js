import express from "express";
import { getAllUser, login, signup } from "../controller/users-controller";

const router = express.Router(); //GET, POST, PUT, DELETE

router.get("/", getAllUser);
router.post("/signup", signup);
router.post("/login", login);

export default router;
